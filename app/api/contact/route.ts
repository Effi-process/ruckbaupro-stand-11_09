import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { headers } from 'next/headers';

// Input validation and sanitization helpers
function sanitizeString(input: string | undefined): string {
  if (!input || typeof input !== 'string') return '';
  return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, '').substring(0, 1000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,20}$/;
  return phoneRegex.test(phone);
}

// Rate limiting (simple implementation)
const requestTracker = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const tracker = requestTracker.get(ip);

  if (!tracker || now > tracker.resetTime) {
    requestTracker.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (tracker.count >= maxRequests) {
    return false;
  }

  tracker.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // CSRF Protection - Check Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({
        success: false,
        message: 'Invalid content type'
      }, { status: 400 });
    }

    // Rate limiting
    const headersList = headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json({
        success: false,
        message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.'
      }, { status: 429 });
    }

    const data = await request.json();

    // Input sanitization
    const name = sanitizeString(data.name);
    const email = sanitizeString(data.email);
    const phone = sanitizeString(data.phone);
    const message = sanitizeString(data.message);

    // Validation
    if (!email) {
      return NextResponse.json({
        success: false,
        message: 'E-Mail-Adresse ist erforderlich'
      }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({
        success: false,
        message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
      }, { status: 400 });
    }

    if (!validatePhone(phone)) {
      return NextResponse.json({
        success: false,
        message: 'Bitte geben Sie eine gültige Telefonnummer ein'
      }, { status: 400 });
    }

    if (!name || name.length < 2) {
      return NextResponse.json({
        success: false,
        message: 'Name ist erforderlich'
      }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({
        success: false,
        message: 'Bitte geben Sie eine aussagekräftige Nachricht ein (min. 10 Zeichen)'
      }, { status: 400 });
    }
    
    // E-Mail senden with sanitized data
    await sendContactEmail({
      name,
      email,
      phone,
      message
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Anfrage erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden!' 
    });
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    
    // Detaillierte Fehlerbehandlung für verschiedene Fehlertypen
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        console.error('Authentifizierungsfehler - Bitte SMTP-Zugangsdaten prüfen');
      } else if (error.message.includes('ECONNECTION')) {
        console.error('Verbindungsfehler - Bitte SMTP-Server und Port prüfen');
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Fehler beim Senden. Bitte rufen Sie uns direkt an: +49 174 8083023' 
    }, { status: 500 });
  }
}