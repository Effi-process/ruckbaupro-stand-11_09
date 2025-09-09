import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Revenue-critical API for instant quote processing
export async function POST(request: NextRequest) {
  try {
    const startTime = Date.now();
    
    // Parse request data
    const data = await request.json();
    
    // Validate required fields for conversion optimization
    const requiredFields = ['projectType', 'area', 'material', 'urgency', 'contactInfo'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: 'Missing required fields', 
          fields: missingFields,
          processingTime: Date.now() - startTime 
        },
        { status: 400 }
      );
    }
    
    // Validate contact info
    const { name, email, phone } = data.contactInfo;
    if (!name || !email || !phone) {
      return NextResponse.json(
        { 
          error: 'Incomplete contact information',
          processingTime: Date.now() - startTime 
        },
        { status: 400 }
      );
    }
    
    // Enhanced data processing for revenue optimization
    const enrichedData = {
      ...data,
      timestamp: new Date().toISOString(),
      source: data.source || 'website',
      userAgent: headers().get('user-agent'),
      ip: headers().get('x-forwarded-for') || headers().get('x-real-ip'),
      urgencyLevel: calculateUrgencyLevel(data.urgency),
      estimatedValue: data.calculatedPrice,
      leadScore: calculateLeadScore(data),
      responseTime: Date.now() - startTime
    };
    
    // Immediate response for user experience
    const response = {
      success: true,
      quoteId: generateQuoteId(),
      estimatedResponse: '15 minutes',
      nextSteps: [
        'Ihr Angebot wird innerhalb von 15 Minuten per E-Mail versendet',
        'Ein Experte wird Sie heute noch kontaktieren',
        'Bei Notfällen rufen Sie sofort an: 0800 0060970'
      ],
      processingTime: Date.now() - startTime,
      trackingId: `AQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    // Async processing (fire and forget)
    processQuoteAsync(enrichedData).catch(error => {
      console.error('Async quote processing failed:', error);
    });
    
    // Set performance headers
    const responseHeaders = new Headers();
    responseHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    responseHeaders.set('X-Processing-Time', `${Date.now() - startTime}ms`);
    responseHeaders.set('X-Quote-Priority', enrichedData.urgencyLevel);
    
    return NextResponse.json(response, { 
      status: 200,
      headers: responseHeaders 
    });
    
  } catch (error) {
    console.error('Quote request error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        fallback: 'Bitte rufen Sie uns direkt an: 0800 0060970',
        processingTime: Date.now() - (request as any).startTime || 0
      },
      { status: 500 }
    );
  }
}

// Calculate urgency level for prioritization
function calculateUrgencyLevel(urgency: string): 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' {
  switch (urgency) {
    case 'emergency':
      return 'CRITICAL';
    case 'express':
      return 'HIGH';
    case 'fast':
      return 'MEDIUM';
    default:
      return 'LOW';
  }
}

// Lead scoring for revenue optimization
function calculateLeadScore(data: any): number {
  let score = 0;
  
  // Price-based scoring
  if (data.calculatedPrice > 10000) score += 30;
  else if (data.calculatedPrice > 5000) score += 20;
  else if (data.calculatedPrice > 2000) score += 10;
  
  // Urgency scoring
  if (data.urgency === 'emergency') score += 25;
  else if (data.urgency === 'express') score += 15;
  else if (data.urgency === 'fast') score += 10;
  
  // Project type scoring
  if (data.projectType === 'complete') score += 20;
  else if (data.projectType === 'facade') score += 15;
  else if (data.projectType === 'roof') score += 10;
  
  // Additional services scoring
  score += data.additionalServices.length * 5;
  
  // Company information bonus
  if (data.contactInfo.company) score += 10;
  
  return Math.min(score, 100);
}

// Generate unique quote ID
function generateQuoteId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `AQ-${timestamp}-${random}`.toUpperCase();
}

// Async quote processing for backend integration
async function processQuoteAsync(data: any): Promise<void> {
  try {
    // 1. Save to database
    await saveQuoteToDatabase(data);
    
    // 2. Send immediate email confirmation
    await sendEmailConfirmation(data);
    
    // 3. Notify sales team based on urgency
    await notifySalesTeam(data);
    
    // 4. Schedule follow-up if not urgent
    if (data.urgencyLevel !== 'CRITICAL') {
      await scheduleFollowUp(data);
    }
    
    // 5. Update analytics
    await updateAnalytics(data);
    
  } catch (error) {
    console.error('Async processing error:', error);
    
    // Fallback: Send to external service
    await sendToExternalCRM(data).catch(() => {
      // Ultimate fallback: Email admin
      console.error('All processing methods failed for quote:', data.quoteId);
    });
  }
}

// Database operations
async function saveQuoteToDatabase(data: any): Promise<void> {
  // Implementation would depend on your database choice
  console.log('Saving quote to database:', data.quoteId);
}

// Email confirmation
async function sendEmailConfirmation(data: any): Promise<void> {
  console.log('Sending email confirmation to:', data.contactInfo.email);
  
  // Email template with quote details
  const emailContent = {
    to: data.contactInfo.email,
    subject: `Ihr Asbestsanierungs-Angebot (${data.quoteId})`,
    template: 'quote-confirmation',
    data: {
      name: data.contactInfo.name,
      quoteId: data.quoteId,
      estimatedPrice: data.calculatedPrice,
      projectType: data.projectType,
      urgency: data.urgency,
      nextSteps: [
        'Detaillierte Kostenaufstellung folgt in 15 Minuten',
        'Persönliche Beratung wird heute vereinbart',
        'Bei Notfällen: 0800 0060970'
      ]
    }
  };
  
  // Send email via service (SendGrid, Postmark, etc.)
  // await emailService.send(emailContent);
}

// Sales team notification
async function notifySalesTeam(data: any): Promise<void> {
  const urgencyMap: Record<string, string> = {
    'CRITICAL': '🚨 NOTFALL',
    'HIGH': '⚡ EILIG', 
    'MEDIUM': '📞 NORMAL',
    'LOW': '📝 STANDARD'
  };
  const urgencyText = urgencyMap[data.urgencyLevel] || '📝 STANDARD';
  
  console.log(`Notifying sales team: ${urgencyText} - ${data.quoteId}`);
  
  // Slack/Teams notification
  const notification = {
    text: `Neue Anfrage: ${urgencyText}`,
    attachments: [{
      color: data.urgencyLevel === 'CRITICAL' ? 'danger' : 'good',
      fields: [
        { title: 'Quote ID', value: data.quoteId, short: true },
        { title: 'Wert', value: `${data.calculatedPrice}€`, short: true },
        { title: 'Projekt', value: data.projectType, short: true },
        { title: 'Kunde', value: data.contactInfo.name, short: true },
        { title: 'Lead Score', value: `${data.leadScore}/100`, short: true },
        { title: 'Telefon', value: data.contactInfo.phone, short: true }
      ]
    }]
  };
  
  // Send to Slack/Teams
  // await notificationService.send(notification);
}

// Follow-up scheduling
async function scheduleFollowUp(data: any): Promise<void> {
  const delayMap: Record<string, number> = {
    'LOW': 24 * 60 * 60 * 1000,    // 24 hours
    'MEDIUM': 4 * 60 * 60 * 1000,  // 4 hours
    'HIGH': 1 * 60 * 60 * 1000,    // 1 hour
    'CRITICAL': 0                   // Immediate
  };
  const followUpDelay = delayMap[data.urgencyLevel] || delayMap['LOW'];
  
  console.log(`Scheduling follow-up in ${followUpDelay / 1000 / 60} minutes`);
  
  // Schedule in calendar system
  // await calendarService.schedule({
  //   date: new Date(Date.now() + followUpDelay),
  //   type: 'follow-up-call',
  //   customer: data.contactInfo,
  //   quoteId: data.quoteId
  // });
}

// Analytics update
async function updateAnalytics(data: any): Promise<void> {
  console.log('Updating analytics for quote:', data.quoteId);
  
  // Track conversion metrics
  const analyticsData = {
    event: 'quote_generated',
    value: data.calculatedPrice,
    urgency: data.urgencyLevel,
    leadScore: data.leadScore,
    source: data.source,
    timestamp: data.timestamp
  };
  
  // Send to analytics service
  // await analyticsService.track(analyticsData);
}

// External CRM fallback
async function sendToExternalCRM(data: any): Promise<void> {
  console.log('Sending to external CRM as fallback');
  
  // Integration with external CRM
  // await crmService.createLead(data);
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'quote-request-api',
    version: '2.1.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
}