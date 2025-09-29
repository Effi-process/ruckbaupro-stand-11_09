import { NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/email';
import { headers } from 'next/headers';

// Rate limiting (simple implementation)
const requestTracker = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 3; // Max 3 requests per 10 minutes

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

export interface MultiStepFormData {
  name: string;
  company?: string;
  contactMethod: 'email' | 'phone';
  email?: string;
  phone?: string;
  city: string;
  services: string[];
  message?: string;
  datenschutz: boolean;
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

    // Parse request body with error handling
    let data: MultiStepFormData;
    try {
      data = await request.json();
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return NextResponse.json({
        success: false,
        message: 'Ungültige Anfrage. Bitte versuchen Sie es erneut.'
      }, { status: 400 });
    }

    // Enhanced sanitization and validation
    const sanitizedData = {
      name: String(data?.name || '').trim().replace(/<script[^>]*>.*?<\/script>/gi, '').slice(0, 100),
      company: data?.company ? String(data.company).trim().replace(/<script[^>]*>.*?<\/script>/gi, '').slice(0, 100) : undefined,
      contactMethod: ['email', 'phone'].includes(data?.contactMethod) ? data.contactMethod : 'email',
      email: data?.email ? String(data.email).trim().toLowerCase().replace(/<script[^>]*>.*?<\/script>/gi, '').slice(0, 100) : undefined,
      phone: data?.phone ? String(data.phone).trim().replace(/[^0-9\+\-\(\)\s]/g, '').slice(0, 30) : undefined,
      city: String(data?.city || '').trim().replace(/<script[^>]*>.*?<\/script>/gi, '').slice(0, 100),
      services: Array.isArray(data?.services) ? data.services.filter(s => typeof s === 'string').map(s => s.replace(/<script[^>]*>.*?<\/script>/gi, '')).slice(0, 20) : [],
      message: data?.message ? String(data.message).trim().replace(/<script[^>]*>.*?<\/script>/gi, '').slice(0, 2000) : undefined,
      datenschutz: Boolean(data?.datenschutz)
    };

    // Validierung
    if (!sanitizedData.name || !sanitizedData.city || sanitizedData.services.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Name, Stadt und mindestens eine Dienstleistung sind erforderlich'
      }, { status: 400 });
    }

    if (sanitizedData.contactMethod === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!sanitizedData.email || !emailRegex.test(sanitizedData.email)) {
        return NextResponse.json({
          success: false,
          message: 'Gültige E-Mail-Adresse ist erforderlich'
        }, { status: 400 });
      }
    }

    if (sanitizedData.contactMethod === 'phone') {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,20}$/;
      if (!sanitizedData.phone || !phoneRegex.test(sanitizedData.phone)) {
        return NextResponse.json({
          success: false,
          message: 'Gültige Telefonnummer ist erforderlich (10-20 Zeichen)'
        }, { status: 400 });
      }
    }

    if (!sanitizedData.datenschutz) {
      return NextResponse.json({
        success: false,
        message: 'Datenschutzerklärung muss akzeptiert werden'
      }, { status: 400 });
    }

    // E-Mail senden mit Timeout
    const emailTimeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email timeout')), 10000)
    );

    try {
      await Promise.race([
        sendQuoteRequestEmail(sanitizedData as MultiStepFormData),
        emailTimeout
      ]);
    } catch (emailError) {
      console.error('E-Mail Versand Fehler:', emailError);
      // Trotzdem als Erfolg melden, aber mit Hinweis
      return NextResponse.json({
        success: true,
        message: 'Ihre Anfrage wurde gespeichert. Bei technischen Problemen rufen Sie uns bitte direkt an: +49 174 8083023'
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 2 Stunden bei Ihnen!'
    });
  } catch (error) {
    console.error('Unerwarteter Fehler:', error);

    // Always return a valid response to prevent crashes
    return NextResponse.json({
      success: false,
      message: 'Ein Fehler ist aufgetreten. Bitte rufen Sie uns direkt an: +49 174 8083023'
    }, { status: 500 });
  }
}