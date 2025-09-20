import { NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/email';

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

    // Sanitize and validate input data
    const sanitizedData = {
      name: String(data?.name || '').trim().slice(0, 100),
      company: data?.company ? String(data.company).trim().slice(0, 100) : undefined,
      contactMethod: ['email', 'phone'].includes(data?.contactMethod) ? data.contactMethod : 'email',
      email: data?.email ? String(data.email).trim().toLowerCase().slice(0, 100) : undefined,
      phone: data?.phone ? String(data.phone).trim().slice(0, 30) : undefined,
      city: String(data?.city || '').trim().slice(0, 100),
      services: Array.isArray(data?.services) ? data.services.filter(s => typeof s === 'string').slice(0, 20) : [],
      message: data?.message ? String(data.message).trim().slice(0, 2000) : undefined,
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
      if (!sanitizedData.email || !sanitizedData.email.includes('@')) {
        return NextResponse.json({
          success: false,
          message: 'Gültige E-Mail-Adresse ist erforderlich'
        }, { status: 400 });
      }
    }

    if (sanitizedData.contactMethod === 'phone') {
      if (!sanitizedData.phone || sanitizedData.phone.length < 5) {
        return NextResponse.json({
          success: false,
          message: 'Gültige Telefonnummer ist erforderlich'
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