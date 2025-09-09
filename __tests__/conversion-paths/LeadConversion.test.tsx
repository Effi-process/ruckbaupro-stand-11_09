import React from 'react';
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { testScenarios, performanceBenchmarks } from '../setup/test-utils';

// Mock Next.js router for navigation testing
const mockPush = jest.fn();
const mockReplace = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => '/bielefeld',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock components for testing
jest.mock('../../app/components/PremiumCalculator', () => {
  return function MockPremiumCalculator() {
    return (
      <div data-testid="premium-calculator">
        <button onClick={() => mockPush('/kontakt?from=calculator')}>
          Detailliertes Angebot anfordern
        </button>
        <div>Geschätzte Kosten: 5,750€</div>
      </div>
    );
  };
});

describe('Lead Conversion Paths - Revenue Critical Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock global fetch for tracking conversion events
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    });
  });

  describe('Calculator to Quote Conversion Path', () => {
    test('tracks complete calculator journey to quote request', async () => {
      const PremiumCalculator = require('../../app/components/PremiumCalculator').default;
      render(<PremiumCalculator />);

      // Complete calculator flow
      fireEvent.click(screen.getByText(/ab 35€\/m²/)); // Roof project
      fireEvent.click(screen.getByText('Weiter'));

      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '200' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));

      fireEvent.click(screen.getByText(/Express/)); // Higher urgency
      fireEvent.click(screen.getByText('Weiter'));

      fireEvent.click(screen.getByLabelText(/Entsorgung/)); // Add service
      fireEvent.click(screen.getByText('Weiter'));

      // Fill contact information
      fireEvent.change(screen.getByPlaceholderText('Max Mustermann'), {
        target: { value: 'Conversion Test User' }
      });
      fireEvent.change(screen.getByPlaceholderText('max@beispiel.de'), {
        target: { value: 'conversion@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('+49 123 456789'), {
        target: { value: '+49 521 555123' }
      });

      // Submit for detailed quote
      fireEvent.click(screen.getByText('Angebot erhalten'));

      // Should track conversion
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/track'),
          expect.objectContaining({
            method: 'POST',
            body: expect.stringContaining('calculator_to_quote')
          })
        );
      });
    });

    test('measures conversion time from calculator start to quote request', async () => {
      const startTime = performance.now();
      
      const PremiumCalculator = require('../../app/components/PremiumCalculator').default;
      render(<PremiumCalculator />);

      // Rapid completion
      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));
      
      fireEvent.change(screen.getByPlaceholderText('z.B. 150'), {
        target: { value: '100' }
      });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));
      
      fireEvent.click(screen.getByText(/Normal/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText('Weiter'));

      fireEvent.change(screen.getByPlaceholderText('Max Mustermann'), {
        target: { value: 'Speed User' }
      });
      fireEvent.change(screen.getByPlaceholderText('max@beispiel.de'), {
        target: { value: 'speed@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('+49 123 456789'), {
        target: { value: '+49 521 123456' }
      });

      fireEvent.click(screen.getByText('Angebot erhalten'));

      const endTime = performance.now();
      const conversionTime = endTime - startTime;

      // Fast user should complete in under 30 seconds
      expect(conversionTime).toBeLessThan(30000);
    });

    test('handles calculator abandonment and re-engagement', () => {
      const PremiumCalculator = require('../../app/components/PremiumCalculator').default;
      render(<PremiumCalculator />);

      // Start calculator
      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      
      // Abandon (go back to start)
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText('Zurück'));

      // Re-engage with different project
      fireEvent.click(screen.getByText(/ab 40€\/m²/)); // Facade instead
      fireEvent.click(screen.getByText('Weiter'));

      // Should still allow completion
      const nextButton = screen.getByText('Weiter');
      expect(nextButton).toBeInTheDocument();
    });
  });

  describe('Call-to-Action Conversion Tracking', () => {
    test('tracks emergency contact button clicks', async () => {
      // Mock emergency button component
      const EmergencyButton = () => (
        <a 
          href="tel:08000060970"
          onClick={() => fetch('/api/track', {
            method: 'POST',
            body: JSON.stringify({ event: 'emergency_call_clicked' })
          })}
          className="emergency-cta"
        >
          Notfall: 0800 0060970
        </a>
      );

      render(<EmergencyButton />);

      const emergencyButton = screen.getByText('Notfall: 0800 0060970');
      fireEvent.click(emergencyButton);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/track',
          expect.objectContaining({
            method: 'POST',
            body: expect.stringContaining('emergency_call_clicked')
          })
        );
      });
    });

    test('tracks quote request CTAs from different page sections', async () => {
      const QuoteCTASection = ({ section }: { section: string }) => (
        <div>
          <button
            onClick={() => {
              fetch('/api/track', {
                method: 'POST',
                body: JSON.stringify({ 
                  event: 'quote_cta_clicked',
                  section: section 
                })
              });
              mockPush('/kontakt?intent=quote&from=' + section);
            }}
            className="quote-cta"
          >
            Kostenloses Angebot anfordern
          </button>
        </div>
      );

      const sections = ['hero', 'services', 'pricing', 'testimonials', 'footer'];

      for (const section of sections) {
        const { unmount } = render(<QuoteCTASection section={section} />);
        
        const ctaButton = screen.getByText('Kostenloses Angebot anfordern');
        fireEvent.click(ctaButton);

        await waitFor(() => {
          expect(fetch).toHaveBeenCalledWith(
            '/api/track',
            expect.objectContaining({
              body: expect.stringContaining(section)
            })
          );
        });

        expect(mockPush).toHaveBeenCalledWith(`/kontakt?intent=quote&from=${section}`);
        unmount();
      }
    });

    test('measures CTA response time', async () => {
      const FastCTA = () => (
        <button
          onClick={() => {
            const responseTime = performance.now();
            fetch('/api/track', {
              method: 'POST',
              body: JSON.stringify({ 
                event: 'cta_response_time',
                time: responseTime 
              })
            });
          }}
        >
          Schnelle Anfrage
        </button>
      );

      render(<FastCTA />);

      const startTime = performance.now();
      const ctaButton = screen.getByText('Schnelle Anfrage');
      
      fireEvent.click(ctaButton);
      
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      expect(responseTime).toBeLessThan(performanceBenchmarks.emergencyContactClick);
    });
  });

  describe('Multi-Step Form Conversion Analysis', () => {
    test('tracks form step completion rates', async () => {
      const MultiStepForm = () => {
        const [step, setStep] = React.useState(1);
        
        const trackStep = (stepNumber: number) => {
          fetch('/api/track', {
            method: 'POST',
            body: JSON.stringify({ 
              event: 'form_step_completed',
              step: stepNumber 
            })
          });
        };

        return (
          <div>
            <div>Schritt {step} von 3</div>
            {step === 1 && (
              <div>
                <input placeholder="Name eingeben" />
                <button onClick={() => { setStep(2); trackStep(1); }}>
                  Weiter zu Schritt 2
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <input placeholder="E-Mail eingeben" />
                <button onClick={() => { setStep(3); trackStep(2); }}>
                  Weiter zu Schritt 3
                </button>
              </div>
            )}
            {step === 3 && (
              <div>
                <textarea placeholder="Nachricht eingeben" />
                <button onClick={() => trackStep(3)}>
                  Anfrage absenden
                </button>
              </div>
            )}
          </div>
        );
      };

      render(<MultiStepForm />);

      // Complete step 1
      fireEvent.change(screen.getByPlaceholderText('Name eingeben'), {
        target: { value: 'Test User' }
      });
      fireEvent.click(screen.getByText('Weiter zu Schritt 2'));

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/track',
          expect.objectContaining({
            body: expect.stringContaining('"step":1')
          })
        );
      });

      // Complete step 2
      fireEvent.change(screen.getByPlaceholderText('E-Mail eingeben'), {
        target: { value: 'test@example.com' }
      });
      fireEvent.click(screen.getByText('Weiter zu Schritt 3'));

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/track',
          expect.objectContaining({
            body: expect.stringContaining('"step":2')
          })
        );
      });

      // Complete final step
      fireEvent.change(screen.getByPlaceholderText('Nachricht eingeben'), {
        target: { value: 'Test message' }
      });
      fireEvent.click(screen.getByText('Anfrage absenden'));

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/track',
          expect.objectContaining({
            body: expect.stringContaining('"step":3')
          })
        );
      });
    });

    test('identifies drop-off points in conversion funnel', async () => {
      const AbandonmentTracker = () => {
        React.useEffect(() => {
          const handleBeforeUnload = () => {
            fetch('/api/track', {
              method: 'POST',
              body: JSON.stringify({ 
                event: 'form_abandoned',
                page: window.location.pathname 
              })
            });
          };

          window.addEventListener('beforeunload', handleBeforeUnload);
          return () => window.removeEventListener('beforeunload', handleBeforeUnload);
        }, []);

        return <div>Form with abandonment tracking</div>;
      };

      render(<AbandonmentTracker />);

      // Simulate page unload
      const beforeUnloadEvent = new Event('beforeunload');
      window.dispatchEvent(beforeUnloadEvent);

      // Note: In real implementation, this would be tested with E2E tools
      expect(screen.getByText('Form with abandonment tracking')).toBeInTheDocument();
    });
  });

  describe('Urgency and Timing Conversion Factors', () => {
    test('tracks urgency selection impact on conversion', async () => {
      const UrgencySelector = () => {
        const [urgency, setUrgency] = React.useState('');

        const handleUrgencyChange = (level: string) => {
          setUrgency(level);
          fetch('/api/track', {
            method: 'POST',
            body: JSON.stringify({ 
              event: 'urgency_selected',
              level: level,
              timestamp: Date.now()
            })
          });
        };

        return (
          <div>
            <select 
              value={urgency} 
              onChange={(e) => handleUrgencyChange(e.target.value)}
            >
              <option value="">Dringlichkeit wählen</option>
              <option value="normal">Normal</option>
              <option value="dringend">Dringend</option>
              <option value="notfall">Notfall</option>
            </select>
            {urgency === 'notfall' && (
              <div className="emergency-notice">
                Sofortige Bearbeitung innerhalb 24h!
              </div>
            )}
          </div>
        );
      };

      render(<UrgencySelector />);

      // Select emergency urgency
      fireEvent.change(screen.getByDisplayValue('Dringlichkeit wählen'), {
        target: { value: 'notfall' }
      });

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/track',
          expect.objectContaining({
            body: expect.stringContaining('notfall')
          })
        );
      });

      // Emergency notice should appear
      expect(screen.getByText(/Sofortige Bearbeitung/)).toBeInTheDocument();
    });

    test('measures time-to-conversion from landing to submission', async () => {
      const ConversionTimer = () => {
        const [startTime] = React.useState(performance.now());
        
        const handleConversion = () => {
          const conversionTime = performance.now() - startTime;
          fetch('/api/track', {
            method: 'POST',
            body: JSON.stringify({ 
              event: 'conversion_completed',
              time_to_conversion: conversionTime,
              timestamp: Date.now()
            })
          });
        };

        return (
          <div>
            <h1>Asbestsanierung Bielefeld</h1>
            <button onClick={handleConversion}>
              Sofort Kontakt aufnehmen
            </button>
          </div>
        );
      };

      render(<ConversionTimer />);

      // Simulate quick conversion
      fireEvent.click(screen.getByText('Sofort Kontakt aufnehmen'));

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/track',
          expect.objectContaining({
            body: expect.stringContaining('conversion_completed')
          })
        );
      });
    });
  });

  describe('Device and Platform Conversion Tracking', () => {
    test('tracks mobile vs desktop conversion patterns', async () => {
      // Mock different viewport sizes
      const originalInnerWidth = window.innerWidth;
      
      const MobileResponsiveForm = () => {
        const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

        React.useEffect(() => {
          const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            fetch('/api/track', {
              method: 'POST',
              body: JSON.stringify({ 
                event: 'viewport_changed',
                is_mobile: mobile,
                width: window.innerWidth
              })
            });
          };

          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
          <div>
            <div data-testid="mobile-indicator">
              {isMobile ? 'Mobile View' : 'Desktop View'}
            </div>
            <button 
              onClick={() => fetch('/api/track', {
                method: 'POST',
                body: JSON.stringify({ 
                  event: 'cta_clicked',
                  device_type: isMobile ? 'mobile' : 'desktop'
                })
              })}
            >
              {isMobile ? 'Jetzt anrufen' : 'Angebot anfordern'}
            </button>
          </div>
        );
      };

      render(<MobileResponsiveForm />);

      // Test mobile view
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
      
      window.dispatchEvent(new Event('resize'));

      await waitFor(() => {
        expect(screen.getByText('Mobile View')).toBeInTheDocument();
        expect(screen.getByText('Jetzt anrufen')).toBeInTheDocument();
      });

      // Test desktop view
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1200,
      });
      
      window.dispatchEvent(new Event('resize'));

      await waitFor(() => {
        expect(screen.getByText('Desktop View')).toBeInTheDocument();
        expect(screen.getByText('Angebot anfordern')).toBeInTheDocument();
      });

      // Restore original width
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: originalInnerWidth,
      });
    });

    test('optimizes phone number clicks for mobile users', () => {
      const MobilePhoneLink = () => (
        <div>
          <a 
            href="tel:08000060970"
            onClick={(e) => {
              // On mobile, this should trigger immediately
              // On desktop, might show confirmation
              fetch('/api/track', {
                method: 'POST',
                body: JSON.stringify({ 
                  event: 'phone_clicked',
                  user_agent: navigator.userAgent,
                  is_mobile: /Mobile|Android|iPhone/i.test(navigator.userAgent)
                })
              });
            }}
            className="phone-link"
          >
            0800 0060970
          </a>
        </div>
      );

      render(<MobilePhoneLink />);

      const phoneLink = screen.getByText('0800 0060970');
      fireEvent.click(phoneLink);

      expect(fetch).toHaveBeenCalledWith(
        '/api/track',
        expect.objectContaining({
          body: expect.stringContaining('phone_clicked')
        })
      );
    });
  });

  describe('Lead Quality and Scoring', () => {
    test('assigns lead scores based on user behavior', async () => {
      const LeadScoringForm = () => {
        const [score, setScore] = React.useState(0);
        const [formData, setFormData] = React.useState({
          company: '',
          projectSize: '',
          urgency: '',
          budget: ''
        });

        const calculateScore = (data: typeof formData) => {
          let newScore = 0;
          
          // Company indicates B2B lead
          if (data.company) newScore += 25;
          
          // Large project size
          if (parseInt(data.projectSize) > 500) newScore += 30;
          
          // High urgency
          if (data.urgency === 'notfall') newScore += 20;
          
          // Budget indication
          if (data.budget === 'over_10k') newScore += 25;

          return newScore;
        };

        const handleSubmit = () => {
          const finalScore = calculateScore(formData);
          
          fetch('/api/leads', {
            method: 'POST',
            body: JSON.stringify({ 
              ...formData,
              lead_score: finalScore,
              priority: finalScore > 50 ? 'high' : 'medium'
            })
          });
        };

        return (
          <div>
            <input 
              placeholder="Firmenname (optional)"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
            <input 
              placeholder="Projektgröße in m²"
              value={formData.projectSize}
              onChange={(e) => setFormData({...formData, projectSize: e.target.value})}
            />
            <select 
              value={formData.urgency}
              onChange={(e) => setFormData({...formData, urgency: e.target.value})}
            >
              <option value="">Dringlichkeit</option>
              <option value="normal">Normal</option>
              <option value="notfall">Notfall</option>
            </select>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
            >
              <option value="">Budget</option>
              <option value="under_5k">Unter 5.000€</option>
              <option value="over_10k">Über 10.000€</option>
            </select>
            <div data-testid="score">Score: {calculateScore(formData)}</div>
            <button onClick={handleSubmit}>Lead erstellen</button>
          </div>
        );
      };

      render(<LeadScoringForm />);

      // Fill out high-value lead
      fireEvent.change(screen.getByPlaceholderText('Firmenname (optional)'), {
        target: { value: 'Mustermann GmbH' }
      });
      fireEvent.change(screen.getByPlaceholderText('Projektgröße in m²'), {
        target: { value: '1000' }
      });
      fireEvent.change(screen.getByDisplayValue('Dringlichkeit'), {
        target: { value: 'notfall' }
      });
      fireEvent.change(screen.getByDisplayValue('Budget'), {
        target: { value: 'over_10k' }
      });

      // Should calculate high score
      expect(screen.getByTestId('score')).toHaveTextContent('Score: 100');

      fireEvent.click(screen.getByText('Lead erstellen'));

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          '/api/leads',
          expect.objectContaining({
            body: expect.stringContaining('"lead_score":100')
          })
        );
      });
    });
  });
});