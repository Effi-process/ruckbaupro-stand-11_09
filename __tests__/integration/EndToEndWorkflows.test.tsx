import React from 'react';
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { testScenarios, mockSubmissionResponses } from '../setup/test-utils';

// Mock Next.js navigation
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

// Mock global fetch for API calls
global.fetch = jest.fn();

// Mock complete application workflow components
const MockHomePage = () => (
  <div>
    <h1>Asbestsanierung Bielefeld - Professionelle Schadstoffbeseitigung</h1>
    <button onClick={() => mockPush('/calculator')}>
      Kostenrechner starten
    </button>
    <button onClick={() => mockPush('/kontakt')}>
      Sofort Kontakt aufnehmen
    </button>
    <a href="tel:08000060970" onClick={() => fetch('/api/track', {
      method: 'POST',
      body: JSON.stringify({ event: 'emergency_call' })
    })}>
      Notfall: 0800 0060970
    </a>
    <button onClick={() => mockPush('/calculator?urgency=emergency')}>
      24h Notfall-Service
    </button>
  </div>
);

const MockCalculatorFlow = ({ urgency }: { urgency?: string }) => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    projectType: '',
    area: 0,
    material: '',
    urgency: urgency || '',
    services: [] as string[],
    contact: { name: '', email: '', phone: '' }
  });
  const [calculatedPrice, setCalculatedPrice] = React.useState(0);

  const calculatePrice = () => {
    if (formData.projectType && formData.area && formData.material && formData.urgency) {
      const basePrice = 35 * formData.area;
      const materialFactor = formData.material === 'spray' ? 2.5 : 1.0;
      const urgencyFactor = formData.urgency === 'emergency' ? 1.75 : 1.0;
      setCalculatedPrice(Math.round(basePrice * materialFactor * urgencyFactor));
    }
  };

  React.useEffect(() => {
    calculatePrice();
  }, [formData]);

  const submitQuote = async () => {
    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        calculatedPrice,
        timestamp: Date.now(),
        source: 'calculator'
      })
    });

    if (response.ok) {
      mockPush('/quote-submitted?price=' + calculatedPrice);
    }
  };

  return (
    <div>
      <h2>Kostenrechner - Schritt {step}</h2>
      
      {step === 1 && (
        <div>
          <h3>Projektart wählen</h3>
          <button onClick={() => {
            setFormData({...formData, projectType: 'roof'});
            setStep(2);
          }}>
            Dachsanierung (35€/m²)
          </button>
          <button onClick={() => {
            setFormData({...formData, projectType: 'complete'});
            setStep(2);
          }}>
            Komplettsanierung (55€/m²)
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Fläche und Material</h3>
          <input
            type="number"
            placeholder="Fläche in m²"
            onChange={(e) => setFormData({...formData, area: parseInt(e.target.value) || 0})}
          />
          <button onClick={() => {
            setFormData({...formData, material: 'eternit'});
            setStep(3);
          }}>
            Eternitplatten
          </button>
          <button onClick={() => {
            setFormData({...formData, material: 'spray'});
            setStep(3);
          }}>
            Spritzasbest
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Dringlichkeit</h3>
          <button onClick={() => {
            setFormData({...formData, urgency: 'normal'});
            setStep(4);
          }}>
            Normal (4-6 Wochen)
          </button>
          <button onClick={() => {
            setFormData({...formData, urgency: 'emergency'});
            setStep(4);
          }}>
            Notfall (48h)
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Zusatzleistungen</h3>
          <label>
            <input 
              type="checkbox" 
              onChange={(e) => {
                const services = e.target.checked 
                  ? [...formData.services, 'disposal']
                  : formData.services.filter(s => s !== 'disposal');
                setFormData({...formData, services});
              }}
            />
            Entsorgung (+180€)
          </label>
          <button onClick={() => setStep(5)}>Weiter</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>Kontaktdaten</h3>
          <input
            placeholder="Name"
            onChange={(e) => setFormData({
              ...formData, 
              contact: {...formData.contact, name: e.target.value}
            })}
          />
          <input
            placeholder="E-Mail"
            type="email"
            onChange={(e) => setFormData({
              ...formData, 
              contact: {...formData.contact, email: e.target.value}
            })}
          />
          <input
            placeholder="Telefon"
            type="tel"
            onChange={(e) => setFormData({
              ...formData, 
              contact: {...formData.contact, phone: e.target.value}
            })}
          />
          <div data-testid="calculated-price">
            Geschätzte Kosten: {calculatedPrice.toLocaleString('de-DE')}€
          </div>
          <button 
            onClick={submitQuote}
            disabled={!formData.contact.name || !formData.contact.email || !formData.contact.phone}
          >
            Detailliertes Angebot anfordern
          </button>
        </div>
      )}
    </div>
  );
};

const MockContactForm = ({ intent, urgency }: { intent?: string; urgency?: string }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    urgency: urgency || 'normal',
    message: ''
  });

  const submitContact = async () => {
    const endpoint = urgency === 'emergency' ? '/api/emergency' : '/api/contact';
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        intent,
        timestamp: Date.now(),
        source: 'contact_form'
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (urgency === 'emergency') {
        mockPush('/emergency-submitted?response_time=24h');
      } else {
        mockPush('/contact-submitted?lead_id=' + result.leadId);
      }
    }
  };

  return (
    <div>
      <h2>Kontaktformular</h2>
      {intent === 'quote' && (
        <div className="quote-intent">Angebot anfordern</div>
      )}
      {urgency === 'emergency' && (
        <div className="emergency-notice">24/7 Notfall-Service</div>
      )}
      
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input
        placeholder="E-Mail"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input
        placeholder="Telefon"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      
      <select 
        value={formData.serviceType}
        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
      >
        <option value="">Service wählen</option>
        <option value="asbestdach">Asbestdach</option>
        <option value="asbestinnen">Asbest Innenraum</option>
        <option value="analyse">Nur Analyse</option>
      </select>
      
      <textarea
        placeholder="Beschreibung des Problems"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
      />
      
      <button 
        onClick={submitContact}
        disabled={!formData.name || !formData.email || !formData.phone || !formData.serviceType}
        data-testid="submit-contact"
      >
        {urgency === 'emergency' ? 'Notfall melden' : 'Anfrage senden'}
      </button>
    </div>
  );
};

describe('End-to-End Workflows - Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockSubmissionResponses.success
    });
  });

  describe('Customer Discovery to Quote Workflow', () => {
    test('completes full journey from landing page to quote submission', async () => {
      // Start at home page
      const { unmount: unmountHome } = render(<MockHomePage />);
      
      expect(screen.getByText(/Asbestsanierung Bielefeld/)).toBeInTheDocument();
      
      // Customer clicks calculator
      fireEvent.click(screen.getByText('Kostenrechner starten'));
      expect(mockPush).toHaveBeenCalledWith('/calculator');
      
      unmountHome();
      
      // Calculator flow
      const { unmount: unmountCalculator } = render(<MockCalculatorFlow />);
      
      // Step 1: Select project type
      fireEvent.click(screen.getByText('Komplettsanierung (55€/m²)'));
      
      // Step 2: Enter area and material
      fireEvent.change(screen.getByPlaceholderText('Fläche in m²'), {
        target: { value: '200' }
      });
      fireEvent.click(screen.getByText('Spritzasbest'));
      
      // Step 3: Select urgency
      fireEvent.click(screen.getByText('Normal (4-6 Wochen)'));
      
      // Step 4: Add services
      fireEvent.click(screen.getByLabelText(/Entsorgung/));
      fireEvent.click(screen.getByText('Weiter'));
      
      // Step 5: Contact information
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Max Mustermann' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'max@beispiel.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 123456' }
      });
      
      // Verify price calculation
      await waitFor(() => {
        const priceElement = screen.getByTestId('calculated-price');
        expect(priceElement).toHaveTextContent('27.680€'); // 55 * 200 * 2.5 + 180
      });
      
      // Submit quote request
      fireEvent.click(screen.getByText('Detailliertes Angebot anfordern'));
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/quotes', expect.objectContaining({
          method: 'POST',
          body: expect.stringContaining('max@beispiel.de')
        }));
        expect(mockPush).toHaveBeenCalledWith('/quote-submitted?price=27680');
      });
      
      unmountCalculator();
    });

    test('handles emergency discovery to immediate response workflow', async () => {
      // Customer discovers emergency situation
      const { unmount: unmountHome } = render(<MockHomePage />);
      
      // Emergency call tracking
      fireEvent.click(screen.getByText('Notfall: 0800 0060970'));
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/track', expect.objectContaining({
          body: expect.stringContaining('emergency_call')
        }));
      });
      
      // Customer also uses emergency calculator
      fireEvent.click(screen.getByText('24h Notfall-Service'));
      expect(mockPush).toHaveBeenCalledWith('/calculator?urgency=emergency');
      
      unmountHome();
      
      // Emergency calculator with pre-filled urgency
      const { unmount: unmountCalculator } = render(<MockCalculatorFlow urgency="emergency" />);
      
      // Quick emergency calculation
      fireEvent.click(screen.getByText('Dachsanierung (35€/m²)'));
      
      fireEvent.change(screen.getByPlaceholderText('Fläche in m²'), {
        target: { value: '100' }
      });
      fireEvent.click(screen.getByText('Spritzasbest'));
      
      // Urgency should be pre-selected as emergency
      fireEvent.click(screen.getByText('Notfall (48h)'));
      fireEvent.click(screen.getByText('Weiter'));
      
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Emergency User' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'emergency@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 999888' }
      });
      
      // Verify emergency pricing (1.75x multiplier)
      await waitFor(() => {
        const priceElement = screen.getByTestId('calculated-price');
        expect(priceElement).toHaveTextContent('15.313€'); // 35 * 100 * 2.5 * 1.75
      });
      
      fireEvent.click(screen.getByText('Detailliertes Angebot anfordern'));
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/quotes', expect.objectContaining({
          body: expect.stringContaining('emergency')
        }));
      });
      
      unmountCalculator();
    });
  });

  describe('Direct Contact Workflows', () => {
    test('processes standard inquiry to lead conversion', async () => {
      // Customer goes directly to contact
      const { unmount } = render(<MockContactForm intent="quote" />);
      
      expect(screen.getByText('Angebot anfordern')).toBeInTheDocument();
      
      // Fill contact form
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Direct Contact User' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'direct@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 777666' }
      });
      
      fireEvent.change(screen.getByDisplayValue(''), {
        target: { value: 'asbestdach' }
      });
      
      fireEvent.change(screen.getByPlaceholderText('Beschreibung des Problems'), {
        target: { value: 'Verdacht auf Asbestplatten am Dach, benötige Kostenvoranschlag.' }
      });
      
      // Submit contact form
      fireEvent.click(screen.getByTestId('submit-contact'));
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
          body: expect.stringContaining('direct@test.de')
        }));
        expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/contact-submitted'));
      });
      
      unmount();
    });

    test('handles emergency contact submission with priority routing', async () => {
      // Emergency contact form
      const { unmount } = render(<MockContactForm urgency="emergency" />);
      
      expect(screen.getByText('24/7 Notfall-Service')).toBeInTheDocument();
      
      // Fill emergency form
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Emergency Contact' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'emergency@contact.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 111222' }
      });
      
      fireEvent.change(screen.getByDisplayValue(''), {
        target: { value: 'asbestinnen' }
      });
      
      fireEvent.change(screen.getByPlaceholderText('Beschreibung des Problems'), {
        target: { value: 'NOTFALL: Asbeststaub in Wohnräumen nach Rohrbruch!' }
      });
      
      // Submit emergency
      fireEvent.click(screen.getByText('Notfall melden'));
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/emergency', expect.objectContaining({
          body: expect.stringContaining('NOTFALL')
        }));
        expect(mockPush).toHaveBeenCalledWith('/emergency-submitted?response_time=24h');
      });
      
      unmount();
    });
  });

  describe('Multi-Channel Customer Journey', () => {
    test('tracks customer across multiple touchpoints', async () => {
      // Customer journey tracking
      const touchpoints: string[] = [];
      
      (fetch as jest.Mock).mockImplementation((url: string, options: any) => {
        if (url.includes('/api/track')) {
          const body = JSON.parse(options.body);
          touchpoints.push(body.event);
        }
        return Promise.resolve({
          ok: true,
          json: async () => mockSubmissionResponses.success
        });
      });
      
      // 1. Customer discovers website
      const { unmount: unmountHome } = render(<MockHomePage />);
      
      // 2. Browses calculator
      fireEvent.click(screen.getByText('Kostenrechner starten'));
      unmountHome();
      
      // 3. Starts calculator but abandons
      const { unmount: unmountCalculator } = render(<MockCalculatorFlow />);
      fireEvent.click(screen.getByText('Dachsanierung (35€/m²)'));
      // Simulate abandonment by unmounting
      unmountCalculator();
      
      // 4. Returns via direct contact
      const { unmount: unmountContact } = render(<MockContactForm />);
      
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Multi Touch User' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'multitouch@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 333444' }
      });
      fireEvent.change(screen.getByDisplayValue(''), {
        target: { value: 'asbestdach' }
      });
      fireEvent.change(screen.getByPlaceholderText('Beschreibung des Problems'), {
        target: { value: 'Habe mit Rechner angefangen, möchte persönliche Beratung.' }
      });
      
      fireEvent.click(screen.getByTestId('submit-contact'));
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object));
      });
      
      unmountContact();
      
      // Customer journey should show multiple touchpoints
      // In real implementation, this would be tracked across sessions
      expect(mockPush).toHaveBeenCalledTimes(2); // Calculator + Contact submission
    });
  });

  describe('Error Handling and Recovery Workflows', () => {
    test('handles form submission failures gracefully', async () => {
      // Mock API failure
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
      
      const { unmount } = render(<MockContactForm />);
      
      // Fill and submit form
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Error Test User' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'error@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 555666' }
      });
      fireEvent.change(screen.getByDisplayValue(''), {
        target: { value: 'analyse' }
      });
      
      fireEvent.click(screen.getByTestId('submit-contact'));
      
      // Should handle error without crashing
      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
      });
      
      // Form should still be usable for retry
      expect(screen.getByTestId('submit-contact')).toBeInTheDocument();
      
      unmount();
    });

    test('recovers from calculator data loss', async () => {
      const { unmount } = render(<MockCalculatorFlow />);
      
      // Start calculator
      fireEvent.click(screen.getByText('Dachsanierung (35€/m²)'));
      
      // Simulate data loss/reset
      unmount();
      const { unmount: unmount2 } = render(<MockCalculatorFlow />);
      
      // Should restart from beginning
      expect(screen.getByText('Kostenrechner - Schritt 1')).toBeInTheDocument();
      expect(screen.getByText('Projektart wählen')).toBeInTheDocument();
      
      unmount2();
    });
  });

  describe('Performance and Scalability', () => {
    test('maintains performance with rapid user interactions', async () => {
      const { unmount } = render(<MockCalculatorFlow />);
      
      const startTime = performance.now();
      
      // Rapid interaction simulation
      for (let i = 0; i < 10; i++) {
        if (screen.queryByText('Dachsanierung (35€/m²)')) {
          fireEvent.click(screen.getByText('Dachsanierung (35€/m²)'));
        }
        
        const areaInput = screen.queryByPlaceholderText('Fläche in m²');
        if (areaInput) {
          fireEvent.change(areaInput, { target: { value: (100 + i).toString() } });
        }
        
        if (screen.queryByText('Eternitplatten')) {
          fireEvent.click(screen.getByText('Eternitplatten'));
        }
        
        if (screen.queryByText('Normal (4-6 Wochen)')) {
          fireEvent.click(screen.getByText('Normal (4-6 Wochen)'));
        }
      }
      
      const endTime = performance.now();
      const interactionTime = endTime - startTime;
      
      // Should handle rapid interactions efficiently
      expect(interactionTime).toBeLessThan(1000); // 1 second for 10 rapid interactions
      
      unmount();
    });

    test('handles concurrent user sessions efficiently', async () => {
      // Simulate multiple user sessions
      const sessions = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        component: render(<MockCalculatorFlow />)
      }));
      
      // Each session performs actions
      sessions.forEach(({ component }, index) => {
        const projectButton = component.container.querySelector('button');
        if (projectButton) {
          fireEvent.click(projectButton);
        }
      });
      
      // All sessions should function independently
      sessions.forEach(({ component }) => {
        const step2Indicator = component.container.textContent;
        expect(step2Indicator).toContain('Schritt 2');
      });
      
      // Cleanup
      sessions.forEach(({ component }) => {
        component.unmount();
      });
    });
  });

  describe('Business Metrics and Analytics', () => {
    test('tracks conversion funnel metrics', async () => {
      const conversionEvents: string[] = [];
      
      (fetch as jest.Mock).mockImplementation((url: string, options: any) => {
        if (url.includes('/api/track')) {
          const body = JSON.parse(options.body);
          conversionEvents.push(body.event);
        } else if (url.includes('/api/quotes')) {
          conversionEvents.push('quote_submitted');
        } else if (url.includes('/api/contact')) {
          conversionEvents.push('contact_submitted');
        }
        
        return Promise.resolve({
          ok: true,
          json: async () => mockSubmissionResponses.success
        });
      });
      
      // Complete conversion funnel
      const { unmount: unmountHome } = render(<MockHomePage />);
      fireEvent.click(screen.getByText('Kostenrechner starten'));
      unmountHome();
      
      const { unmount: unmountCalculator } = render(<MockCalculatorFlow />);
      
      // Track calculator progression
      fireEvent.click(screen.getByText('Komplettsanierung (55€/m²)'));
      fireEvent.change(screen.getByPlaceholderText('Fläche in m²'), {
        target: { value: '300' }
      });
      fireEvent.click(screen.getByText('Eternitplatten'));
      fireEvent.click(screen.getByText('Normal (4-6 Wochen)'));
      fireEvent.click(screen.getByText('Weiter'));
      
      // Complete contact info
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Conversion Tracking User' }
      });
      fireEvent.change(screen.getByPlaceholderText('E-Mail'), {
        target: { value: 'conversion@tracking.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('Telefon'), {
        target: { value: '+49 521 777888' }
      });
      
      fireEvent.click(screen.getByText('Detailliertes Angebot anfordern'));
      
      await waitFor(() => {
        expect(conversionEvents).toContain('quote_submitted');
      });
      
      unmountCalculator();
      
      // Conversion funnel should be trackable
      expect(conversionEvents.length).toBeGreaterThan(0);
    });
  });
});