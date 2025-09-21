const nodemailer = require('nodemailer').default || require('nodemailer');

async function testSMTP() {
  console.log('Testing SMTP connection...');

  const transporter = nodemailer.createTransporter({
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    auth: {
      user: 'info@rueckbaupro.de',
      pass: 'WirfolgenJesusnach!'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Test connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    // Send test email
    const info = await transporter.sendMail({
      from: '"Test" <info@rueckbaupro.de>',
      to: 'info@rueckbaupro.de',
      subject: 'Test Email from RückbauPRO',
      text: 'Dies ist eine Test-E-Mail. Zeitstempel: ' + new Date().toISOString(),
      html: '<b>Dies ist eine Test-E-Mail.</b><br>Zeitstempel: ' + new Date().toISOString()
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);
    console.error('Full error:', error);
  }
}

testSMTP();