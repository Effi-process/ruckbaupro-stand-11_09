import React from 'react';
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { testScenarios, performanceBenchmarks } from '../setup/test-utils';
import PremiumCalculator from '../../app/components/PremiumCalculator';

describe('PremiumCalculator - Revenue Critical Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Pricing Accuracy Tests', () => {
    test('calculates accurate base prices for all project types', async () => {
      const { container } = render(<PremiumCalculator />);
      
      // Test all project types
      const projectTypes = [
        { id: 'roof', expectedBasePrice: 35 },
        { id: 'facade', expectedBasePrice: 40 },
        { id: 'floor', expectedBasePrice: 25 },
        { id: 'pipe', expectedBasePrice: 45 },
        { id: 'complete', expectedBasePrice: 55 }
      ];

      for (const project of projectTypes) {
        // Reset calculator
        const newCalculationBtn = screen.queryByText('Neue Berechnung');
        if (newCalculationBtn) {
          fireEvent.click(newCalculationBtn);
        }

        // Select project type
        const projectButton = screen.getByText(new RegExp(`ab ${project.expectedBasePrice}€/m²`));
        fireEvent.click(projectButton);

        // Go to next step
        const nextButton = screen.getByText('Weiter');
        fireEvent.click(nextButton);

        // Enter area
        const areaInput = screen.getByPlaceholderText('z.B. 150');
        fireEvent.change(areaInput, { target: { value: '100' } });

        // Select material (eternit - factor 1.0)
        const eternitMaterial = screen.getByLabelText(/Eternitplatten/);
        fireEvent.click(eternitMaterial);

        // Go to urgency step
        fireEvent.click(screen.getByText('Weiter'));

        // Select normal urgency (factor 1.0)
        const normalUrgency = screen.getByText(/Normal \(4-6 Wochen\)/);
        fireEvent.click(normalUrgency);

        // Check if price calculation appears
        await waitFor(() => {
          const priceDisplay = screen.getByText(/Geschätzte Kosten/);
          expect(priceDisplay).toBeInTheDocument();
        });

        // Calculate expected price: basePrice * area * materialFactor * urgencyFactor
        const expectedPrice = project.expectedBasePrice * 100 * 1.0 * 1.0;
        const priceElement = screen.getByText(new RegExp(`${expectedPrice.toLocaleString('de-DE')}€`));
        expect(priceElement).toBeInTheDocument();
      }
    });

    test('applies correct material factors to pricing', async () => {
      render(<PremiumCalculator />);

      // Select roof project
      const roofProject = screen.getByText(/ab 35€\/m²/);
      fireEvent.click(roofProject);
      fireEvent.click(screen.getByText('Weiter'));

      // Enter standard area
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '100' } });

      // Test each material factor
      const materials = [
        { name: 'Eternitplatten', factor: 1.0 },
        { name: 'Spritzasbest', factor: 2.5 },
        { name: 'Vinyl-Asbest', factor: 0.8 },
        { name: 'Asbestzement', factor: 1.2 },
        { name: 'Verschiedene', factor: 1.5 }
      ];

      for (const material of materials) {
        const materialRadio = screen.getByLabelText(new RegExp(material.name));
        fireEvent.click(materialRadio);

        // Go to urgency
        fireEvent.click(screen.getByText('Weiter'));

        // Select normal urgency
        const normalUrgency = screen.getByText(/Normal \(4-6 Wochen\)/);
        fireEvent.click(normalUrgency);

        // Check calculated price
        const expectedPrice = 35 * 100 * material.factor * 1.0;
        
        await waitFor(() => {
          const priceText = screen.getByText(new RegExp(`${Math.round(expectedPrice).toLocaleString('de-DE')}€`));
          expect(priceText).toBeInTheDocument();
        });

        // Go back to material selection for next test
        fireEvent.click(screen.getByText('Zurück'));
        fireEvent.click(screen.getByText('Zurück'));
      }
    });

    test('applies correct urgency multipliers', async () => {
      render(<PremiumCalculator />);

      // Setup standard calculation
      fireEvent.click(screen.getByText(/ab 35€\/m²/)); // Roof
      fireEvent.click(screen.getByText('Weiter'));
      
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '100' } });
      
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));

      // Test each urgency factor
      const urgencyOptions = [
        { name: 'Normal (4-6 Wochen)', factor: 1.0 },
        { name: 'Schnell (2-3 Wochen)', factor: 1.15 },
        { name: 'Express (1 Woche)', factor: 1.35 },
        { name: 'Notfall (48h)', factor: 1.75 }
      ];

      for (const urgency of urgencyOptions) {
        const urgencyButton = screen.getByText(urgency.name);
        fireEvent.click(urgencyButton);

        const expectedPrice = 35 * 100 * 1.0 * urgency.factor;
        
        await waitFor(() => {
          const priceText = screen.getByText(new RegExp(`${Math.round(expectedPrice).toLocaleString('de-DE')}€`));
          expect(priceText).toBeInTheDocument();
        });
      }
    });

    test('calculates additional services correctly', async () => {
      render(<PremiumCalculator />);

      // Complete basic steps
      fireEvent.click(screen.getByText(/ab 35€\/m²/)); // Roof
      fireEvent.click(screen.getByText('Weiter'));
      
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '100' } });
      
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));
      
      fireEvent.click(screen.getByText(/Normal \(4-6 Wochen\)/));
      fireEvent.click(screen.getByText('Weiter'));

      // Test additional services
      const services = [
        { name: 'Entsorgung inkl.', price: 180 },
        { name: 'Vorab-Analyse', price: 450 },
        { name: 'Luftüberwachung', price: 350 },
        { name: 'Erweiterte Doku', price: 250 }
      ];

      let basePrice = 35 * 100 * 1.0 * 1.0; // 3500€

      for (const service of services) {
        const serviceCheckbox = screen.getByLabelText(new RegExp(service.name));
        fireEvent.click(serviceCheckbox);
        
        basePrice += service.price;
        
        await waitFor(() => {
          const priceText = screen.getByText(new RegExp(`${basePrice.toLocaleString('de-DE')}€`));
          expect(priceText).toBeInTheDocument();
        });
      }

      // Test replacement material (calculated per m²)
      const replacementService = screen.getByLabelText(/Ersatzmaterial/);
      fireEvent.click(replacementService);
      
      const expectedFinalPrice = basePrice + (100 * 25); // 100m² * 25€
      
      await waitFor(() => {
        const priceText = screen.getByText(new RegExp(`${expectedFinalPrice.toLocaleString('de-DE')}€`));
        expect(priceText).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases and Boundary Tests', () => {
    test('handles minimum area values correctly', async () => {
      render(<PremiumCalculator />);

      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));

      const areaInput = screen.getByPlaceholderText('z.B. 150');
      
      // Test minimum area
      fireEvent.change(areaInput, { target: { value: '1' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText(/Normal/));

      await waitFor(() => {
        const priceText = screen.getByText(/35€/);
        expect(priceText).toBeInTheDocument();
      });
    });

    test('handles maximum area values correctly', async () => {
      render(<PremiumCalculator />);

      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));

      const areaInput = screen.getByPlaceholderText('z.B. 150');
      
      // Test large area
      fireEvent.change(areaInput, { target: { value: '10000' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText(/Normal/));

      await waitFor(() => {
        const expectedPrice = 35 * 10000;
        const priceText = screen.getByText(new RegExp(`${expectedPrice.toLocaleString('de-DE')}€`));
        expect(priceText).toBeInTheDocument();
      });
    });

    test('prevents calculation with invalid inputs', () => {
      render(<PremiumCalculator />);

      // Try to proceed without selecting project type
      const nextButton = screen.getByText('Weiter');
      expect(nextButton).toBeDisabled();
    });

    test('validates area input correctly', async () => {
      render(<PremiumCalculator />);

      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));

      const areaInput = screen.getByPlaceholderText('z.B. 150');
      
      // Test negative area
      fireEvent.change(areaInput, { target: { value: '-50' } });
      
      // Calculator should not proceed with negative values
      const nextButton = screen.getByText('Weiter');
      expect(nextButton).toBeDisabled();
    });
  });

  describe('Performance Tests', () => {
    test('calculator responds within performance benchmark', async () => {
      const startTime = performance.now();
      
      render(<PremiumCalculator />);
      
      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));
      
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '100' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      
      expect(responseTime).toBeLessThan(performanceBenchmarks.calculatorResponse);
    });

    test('handles rapid user input without errors', async () => {
      render(<PremiumCalculator />);

      // Rapid clicking simulation
      for (let i = 0; i < 10; i++) {
        const roofButton = screen.getByText(/ab 35€\/m²/);
        const facadeButton = screen.getByText(/ab 40€\/m²/);
        
        fireEvent.click(roofButton);
        fireEvent.click(facadeButton);
      }

      // Should still be functional
      const nextButton = screen.getByText('Weiter');
      expect(nextButton).not.toBeDisabled();
    });
  });

  describe('Real-World Scenarios', () => {
    test('completes full calculation for typical roof project', async () => {
      render(<PremiumCalculator />);

      // Select roof project
      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));

      // Enter typical house area
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '200' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));

      // Select express urgency
      fireEvent.click(screen.getByText(/Express/));
      fireEvent.click(screen.getByText('Weiter'));

      // Add disposal service
      fireEvent.click(screen.getByLabelText(/Entsorgung/));
      fireEvent.click(screen.getByText('Weiter'));

      // Fill contact information
      fireEvent.change(screen.getByPlaceholderText('Max Mustermann'), {
        target: { value: 'Hans Müller' }
      });
      fireEvent.change(screen.getByPlaceholderText('max@beispiel.de'), {
        target: { value: 'hans@test.de' }
      });
      fireEvent.change(screen.getByPlaceholderText('+49 123 456789'), {
        target: { value: '+49 521 123456' }
      });

      // Submit for quote
      fireEvent.click(screen.getByText('Angebot erhalten'));

      // Verify final calculation
      await waitFor(() => {
        const expectedPrice = (35 * 200 * 1.0 * 1.35) + 180; // Base + disposal
        const finalPrice = Math.round(expectedPrice);
        const priceElement = screen.getByText(new RegExp(`${finalPrice.toLocaleString('de-DE')}€`));
        expect(priceElement).toBeInTheDocument();
      });
    });

    test('calculates emergency spritzasbest project correctly', async () => {
      render(<PremiumCalculator />);

      // Emergency industrial project
      fireEvent.click(screen.getByText(/ab 55€\/m²/)); // Complete
      fireEvent.click(screen.getByText('Weiter'));

      // Large industrial area
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '500' } });
      fireEvent.click(screen.getByLabelText(/Spritzasbest/)); // Factor 2.5
      fireEvent.click(screen.getByText('Weiter'));

      // Emergency urgency
      fireEvent.click(screen.getByText(/Notfall/)); // Factor 1.75
      fireEvent.click(screen.getByText('Weiter'));

      // All additional services
      fireEvent.click(screen.getByLabelText(/Entsorgung/));
      fireEvent.click(screen.getByLabelText(/Vorab-Analyse/));
      fireEvent.click(screen.getByLabelText(/Luftüberwachung/));
      fireEvent.click(screen.getByLabelText(/Erweiterte Doku/));

      // Calculate expected emergency project cost
      const basePrice = 55 * 500 * 2.5 * 1.75; // 120,625€
      const additionalServices = 180 + 450 + 350 + 250; // 1,230€
      const expectedTotal = Math.round(basePrice + additionalServices);

      await waitFor(() => {
        const priceElement = screen.getByText(new RegExp(`${expectedTotal.toLocaleString('de-DE')}€`));
        expect(priceElement).toBeInTheDocument();
      });
    });
  });

  describe('Data Validation', () => {
    test('validates contact information format', async () => {
      render(<PremiumCalculator />);

      // Complete to contact step
      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));
      
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '100' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText(/Normal/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText('Weiter'));

      // Test invalid email
      const emailInput = screen.getByPlaceholderText('max@beispiel.de');
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

      const submitButton = screen.getByText('Angebot erhalten');
      fireEvent.click(submitButton);

      // HTML5 validation should prevent submission
      expect(emailInput).toBeInvalid();
    });

    test('requires all mandatory fields', async () => {
      render(<PremiumCalculator />);

      // Navigate to contact step
      fireEvent.click(screen.getByText(/ab 35€\/m²/));
      fireEvent.click(screen.getByText('Weiter'));
      
      const areaInput = screen.getByPlaceholderText('z.B. 150');
      fireEvent.change(areaInput, { target: { value: '100' } });
      fireEvent.click(screen.getByLabelText(/Eternitplatten/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText(/Normal/));
      fireEvent.click(screen.getByText('Weiter'));
      fireEvent.click(screen.getByText('Weiter'));

      // Submit button should be disabled without required fields
      const submitButton = screen.getByText('Angebot erhalten');
      expect(submitButton).toBeDisabled();

      // Fill only name
      fireEvent.change(screen.getByPlaceholderText('Max Mustermann'), {
        target: { value: 'Test User' }
      });
      expect(submitButton).toBeDisabled();

      // Fill email
      fireEvent.change(screen.getByPlaceholderText('max@beispiel.de'), {
        target: { value: 'test@example.com' }
      });
      expect(submitButton).toBeDisabled();

      // Fill phone - now should be enabled
      fireEvent.change(screen.getByPlaceholderText('+49 123 456789'), {
        target: { value: '+49 521 123456' }
      });
      expect(submitButton).not.toBeDisabled();
    });
  });
});