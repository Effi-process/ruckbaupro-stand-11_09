import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validierung
    if (!data.email) {
      return NextResponse.json({ 
        success: false, 
        message: 'E-Mail-Adresse ist erforderlich' 
      }, { status: 400 });
    }
    
    // E-Mail senden
    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
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