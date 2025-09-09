import nodemailer from 'nodemailer';

// Erstelle den E-Mail-Transporter mit Strato-Einstellungen
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.strato.de',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true', // true für 465, false für andere
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // Wichtig für manche Strato-Server
    rejectUnauthorized: false
  }
});

export interface ContactFormData {
  name?: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface QuoteRequestData {
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

export async function sendContactEmail(data: ContactFormData) {
  // E-Mail-HTML erstellen
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0066CC; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f4f4f4; padding: 20px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0066CC; }
          .value { margin-left: 10px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #0066CC; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Neue Kontaktanfrage - RückbauPRO</h1>
          </div>
          <div class="content">
            <h2>Kontaktdaten:</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.name || 'Nicht angegeben'}</span>
            </div>
            <div class="field">
              <span class="label">E-Mail:</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="field">
              <span class="label">Telefon:</span>
              <span class="value">${data.phone || 'Nicht angegeben'}</span>
            </div>
            <div class="field">
              <span class="label">Nachricht:</span>
              <div class="value" style="margin-top: 10px; padding: 10px; background: white; border-left: 3px solid #0066CC;">
                ${data.message || 'Keine Nachricht hinterlassen'}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>Diese Anfrage wurde über das Kontaktformular auf rueckbaupro.de gesendet.</p>
            <p>Zeitstempel: ${new Date().toLocaleString('de-DE')}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Plain-Text-Version
  const textContent = `
Neue Kontaktanfrage - RückbauPRO

KONTAKTDATEN:
--------------
Name: ${data.name || 'Nicht angegeben'}
E-Mail: ${data.email}
Telefon: ${data.phone || 'Nicht angegeben'}

NACHRICHT:
----------
${data.message || 'Keine Nachricht hinterlassen'}

--
Diese Anfrage wurde über das Kontaktformular auf rueckbaupro.de gesendet.
Zeitstempel: ${new Date().toLocaleString('de-DE')}
  `;

  // E-Mail-Optionen
  const mailOptions = {
    from: `"RückbauPRO Website" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_TO || 'info@rueckbaupro.de',
    replyTo: data.email,
    subject: `Neue Anfrage von ${data.name || 'Website-Besucher'} - ${data.phone || 'Telefon nicht angegeben'}`,
    text: textContent,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-Mail erfolgreich gesendet:', info.messageId);
    
    // Optional: Bestätigungs-E-Mail an den Kunden
    if (data.email) {
      const confirmationMail = {
        from: `"RückbauPRO" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: 'Ihre Anfrage bei RückbauPRO - Wir haben sie erhalten!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0066CC; color: white; padding: 20px; text-align: center;">
              <h1>Vielen Dank für Ihre Anfrage!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Guten Tag ${data.name || ''},</p>
              <p>wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
              <p><strong>Bei dringenden Fällen erreichen Sie uns sofort unter:</strong></p>
              <p style="font-size: 24px; color: #0066CC; text-align: center;">
                <strong>+49 174 8083023</strong>
              </p>
              <hr style="margin: 30px 0; border: 1px solid #eee;">
              <p>Mit freundlichen Grüßen<br>
              Ihr RückbauPRO Team</p>
            </div>
          </div>
        `
      };
      
      await transporter.sendMail(confirmationMail);
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    throw error;
  }
}

export async function sendQuoteRequestEmail(data: QuoteRequestData) {
  const serviceLabels: Record<string, string> = {
    rueckbau: 'Rückbau',
    abbruch: 'Abbruch',
    entkernung: 'Entkernung',
    entsorgung: 'Entsorgung',
    asbestsanierung: 'Asbest-Sanierung',
    franchise: 'Franchise-Anfrage'
  };

  const selectedServices = data.services.map(service => serviceLabels[service] || service).join(', ');
  const primaryContact = data.contactMethod === 'email' ? data.email : data.phone;

  // E-Mail-HTML erstellen
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0066CC; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f4f4f4; padding: 20px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0066CC; }
          .value { margin-left: 10px; }
          .services { background: white; padding: 15px; border-left: 4px solid #0066CC; margin: 15px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #0066CC; text-align: center; color: #666; }
          .urgent { background-color: #ff6b35; color: white; padding: 10px; text-align: center; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏗️ Neue Angebotsanfrage - RückbauPRO</h1>
          </div>
          <div class="urgent">
            NEUE ANFRAGE - SCHNELLE BEARBEITUNG ERFORDERLICH
          </div>
          <div class="content">
            <h2>Kontaktdaten:</h2>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.name}</span>
            </div>
            ${data.company ? `
            <div class="field">
              <span class="label">Unternehmen:</span>
              <span class="value">${data.company}</span>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">Stadt/Standort:</span>
              <span class="value">${data.city}</span>
            </div>
            <div class="field">
              <span class="label">Bevorzugte Kontaktaufnahme:</span>
              <span class="value">${data.contactMethod === 'email' ? 'E-Mail' : 'Telefon'}</span>
            </div>
            ${data.email ? `
            <div class="field">
              <span class="label">E-Mail:</span>
              <span class="value">${data.email}</span>
            </div>
            ` : ''}
            ${data.phone ? `
            <div class="field">
              <span class="label">Telefon:</span>
              <span class="value">${data.phone}</span>
            </div>
            ` : ''}

            <h2>Gewünschte Dienstleistungen:</h2>
            <div class="services">
              <strong>${selectedServices}</strong>
            </div>

            ${data.message ? `
            <h2>Zusätzliche Informationen:</h2>
            <div class="field">
              <div class="value" style="margin-top: 10px; padding: 10px; background: white; border-left: 3px solid #0066CC;">
                ${data.message}
              </div>
            </div>
            ` : ''}

            <div style="background: #e8f4ff; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #0066CC;">🎯 Empfohlene nächste Schritte:</h3>
              <ul style="margin-bottom: 0;">
                <li>Rückruf innerhalb von 2 Stunden</li>
                <li>Vor-Ort-Termin zur Begutachtung vereinbaren</li>
                <li>Individuelles Angebot erstellen</li>
              </ul>
            </div>
          </div>
          <div class="footer">
            <p>Diese Anfrage wurde über das Kontaktformular auf rueckbaupro.de gesendet.</p>
            <p>Zeitstempel: ${new Date().toLocaleString('de-DE')}</p>
            <p><strong>Datenschutz bestätigt:</strong> ${data.datenschutz ? '✅ Ja' : '❌ Nein'}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Plain-Text-Version
  const textContent = `
🏗️ NEUE ANGEBOTSANFRAGE - RückbauPRO
=====================================

KONTAKTDATEN:
-------------
Name: ${data.name}
${data.company ? `Unternehmen: ${data.company}` : ''}
Stadt/Standort: ${data.city}
Kontaktmethode: ${data.contactMethod === 'email' ? 'E-Mail' : 'Telefon'}
${data.email ? `E-Mail: ${data.email}` : ''}
${data.phone ? `Telefon: ${data.phone}` : ''}

GEWÜNSCHTE DIENSTLEISTUNGEN:
----------------------------
${selectedServices}

${data.message ? `
ZUSÄTZLICHE INFORMATIONEN:
--------------------------
${data.message}
` : ''}

🎯 EMPFOHLENE NÄCHSTE SCHRITTE:
-------------------------------
• Rückruf innerhalb von 2 Stunden
• Vor-Ort-Termin zur Begutachtung vereinbaren  
• Individuelles Angebot erstellen

--
Diese Anfrage wurde über das Kontaktformular auf rueckbaupro.de gesendet.
Zeitstempel: ${new Date().toLocaleString('de-DE')}
Datenschutz bestätigt: ${data.datenschutz ? 'Ja' : 'Nein'}
  `;

  // E-Mail-Optionen
  const mailOptions = {
    from: `"RückbauPRO Anfragen" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_TO || 'info@rueckbaupro.de',
    replyTo: data.email || undefined,
    subject: `🏗️ NEUE ANFRAGE: ${data.name} - ${data.city} (${selectedServices})`,
    text: textContent,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Angebots-E-Mail erfolgreich gesendet:', info.messageId);
    
    // Bestätigungs-E-Mail an Kunden (nur bei E-Mail-Kontakt)
    if (data.contactMethod === 'email' && data.email) {
      const confirmationMail = {
        from: `"RückbauPRO" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: 'Ihre Anfrage bei RückbauPRO - Bestätigung erhalten!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0066CC; color: white; padding: 20px; text-align: center;">
              <h1>✅ Anfrage erfolgreich übermittelt!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Guten Tag ${data.name},</p>
              <p>vielen Dank für Ihre Anfrage bezüglich <strong>${selectedServices}</strong> in ${data.city}.</p>
              <p><strong>🚀 Wie es jetzt weitergeht:</strong></p>
              <ul style="background: #f0f8ff; padding: 15px; border-left: 4px solid #0066CC;">
                <li>✅ Ihre Anfrage ist bei uns eingegangen</li>
                <li>📞 Wir melden uns innerhalb von 2 Stunden bei Ihnen</li>
                <li>📋 Kostenlose Vor-Ort-Begutachtung wird vereinbart</li>
                <li>💰 Individuelles Angebot wird erstellt</li>
              </ul>
              <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; border-radius: 5px;">
                <p style="margin: 0;"><strong>🆘 Bei Notfällen erreichen Sie uns sofort unter:</strong></p>
                <p style="font-size: 24px; color: #0066CC; text-align: center; margin: 10px 0;">
                  <strong>+49 174 8083023</strong>
                </p>
              </div>
              <hr style="margin: 30px 0; border: 1px solid #eee;">
              <p>Mit freundlichen Grüßen<br>
              Ihr RückbauPRO Team</p>
            </div>
          </div>
        `
      };
      
      await transporter.sendMail(confirmationMail);
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Fehler beim Versand der Angebotsanfrage:', error);
    throw error;
  }
}