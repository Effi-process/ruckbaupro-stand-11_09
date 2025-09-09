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
    const data: MultiStepFormData = await request.json();
    
    // Validierung
    if (!data.name || !data.city || !data.services || data.services.length === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Name, Stadt und mindestens eine Dienstleistung sind erforderlich' 
      }, { status: 400 });
    }
    
    if (data.contactMethod === 'email' && !data.email) {
      return NextResponse.json({ 
        success: false, 
        message: 'E-Mail-Adresse ist erforderlich' 
      }, { status: 400 });
    }
    
    if (data.contactMethod === 'phone' && !data.phone) {
      return NextResponse.json({ 
        success: false, 
        message: 'Telefonnummer ist erforderlich' 
      }, { status: 400 });
    }

    if (!data.datenschutz) {
      return NextResponse.json({ 
        success: false, 
        message: 'Datenschutzerklärung muss akzeptiert werden' 
      }, { status: 400 });
    }
    
    // E-Mail senden
    await sendQuoteRequestEmail(data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 2 Stunden bei Ihnen!' 
    });
  } catch (error) {
    console.error('Fehler beim Versand der Angebotsanfrage:', error);
    
    return NextResponse.json({ 
      success: false, 
      message: 'Fehler beim Senden. Bitte rufen Sie uns direkt an: +49 174 8083023' 
    }, { status: 500 });
  }
}