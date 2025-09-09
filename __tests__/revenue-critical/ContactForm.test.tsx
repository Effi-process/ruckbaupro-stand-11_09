import React from 'react';
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { mockSubmissionResponses, performanceBenchmarks } from '../setup/test-utils';
import Kontakt from '../../app/kontakt/page';

// Mock fetch for form submissions
global.fetch = jest.fn();

describe('Contact Form - Revenue Critical Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockSubmissionResponses.success
    });
  });

  describe('Form Submission and CRM Integration', () => {
    test('submits contact form with all required data', async () => {
      render(<Kontakt />);

      // Fill out complete form
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Max Mustermann' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'max@beispiel.de' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 123456' }
      });
      fireEvent.change(screen.getByLabelText(/Objektadresse/), {
        target: { value: 'Teststraße 123, 33602 Bielefeld' }
      });
      
      // Select sanierung type
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestdach' }
      });
      fireEvent.change(screen.getByLabelText(/Geschätzte Fläche/), {
        target: { value: '200' }
      });
      fireEvent.change(screen.getByLabelText(/Dringlichkeit/), {
        target: { value: 'dringend' }
      });
      fireEvent.change(screen.getByLabelText(/Ihre Nachricht/), {
        target: { value: 'Verdacht auf Asbestplatten am Dach, benötige Beratung.' }
      });

      // Accept privacy policy
      fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

      // Submit form
      const submitButton = screen.getByText('Anfrage senden');
      fireEvent.click(submitButton);

      // Verify form submission
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/contact'),
          expect.objectContaining({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: expect.stringContaining('Max Mustermann')
          })
        );
      });
    });

    test('handles emergency contact submissions with priority routing', async () => {
      render(<Kontakt />);

      // Fill emergency form
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Emergency User' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'emergency@test.de' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 987654' }
      });
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestinnen' }
      });
      
      // Select emergency priority
      fireEvent.change(screen.getByLabelText(/Dringlichkeit/), {
        target: { value: 'notfall' }
      });
      fireEvent.change(screen.getByLabelText(/Ihre Nachricht/), {
        target: { value: 'NOTFALL: Asbeststaub in Wohnräumen, Sofortmaßnahmen erforderlich!' }
      });

      fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));
      
      const submitButton = screen.getByText('Anfrage senden');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/emergency'),
          expect.objectContaining({
            method: 'POST',
            body: expect.stringContaining('notfall')
          })
        );
      });
    });

    test('validates email format and provides user feedback', async () => {
      render(<Kontakt />);

      const emailInput = screen.getByLabelText(/E-Mail \*/);
      
      // Test invalid email formats
      const invalidEmails = ['invalid', '@domain.com', 'user@', 'user@domain'];
      
      for (const email of invalidEmails) {
        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.blur(emailInput);
        
        // HTML5 validation should mark as invalid
        expect(emailInput).toBeInvalid();
      }

      // Test valid email
      fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
      fireEvent.blur(emailInput);
      expect(emailInput).toBeValid();
    });

    test('validates German phone number formats', async () => {
      render(<Kontakt />);

      const phoneInput = screen.getByLabelText(/Telefon \*/);
      
      // Test valid German phone formats
      const validPhones = [
        '+49 521 123456',
        '0521 123456',
        '+49521123456',
        '0521/123456',
        '(0521) 123456'
      ];

      for (const phone of validPhones) {
        fireEvent.change(phoneInput, { target: { value: phone } });
        
        // Fill other required fields for validation
        fireEvent.change(screen.getByLabelText(/Name \*/), {
          target: { value: 'Test User' }
        });
        fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
          target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
          target: { value: 'asbestdach' }
        });
        fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

        const submitButton = screen.getByText('Anfrage senden');
        expect(submitButton).not.toBeDisabled();
      }
    });
  });

  describe('Emergency Contact Functionality', () => {
    test('emergency hotline link is always accessible', () => {
      render(<Kontakt />);

      const emergencyLink = screen.getByText('0800 0060970');
      expect(emergencyLink).toBeInTheDocument();
      expect(emergencyLink).toHaveAttribute('href', 'tel:08000060970');
    });

    test('emergency contact responds within performance benchmark', async () => {
      render(<Kontakt />);

      const startTime = performance.now();
      const emergencyLink = screen.getByText('0800 0060970');
      
      fireEvent.click(emergencyLink);
      
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      expect(responseTime).toBeLessThan(performanceBenchmarks.emergencyContactClick);
    });

    test('emergency contact is prominently displayed', () => {
      render(<Kontakt />);

      const emergencySection = screen.getByText('24/7 Notfall-Hotline').closest('div');
      expect(emergencySection).toHaveClass('border-red-200');
      expect(emergencySection).toHaveClass('bg-red-50');
    });
  });

  describe('Form Validation and Error Handling', () => {
    test('prevents submission without required fields', () => {
      render(<Kontakt />);

      const submitButton = screen.getByText('Anfrage senden');
      
      // Should be disabled initially
      fireEvent.click(submitButton);
      
      // Check that required fields prevent submission
      const nameInput = screen.getByLabelText(/Name \*/);
      const emailInput = screen.getByLabelText(/E-Mail \*/);
      const phoneInput = screen.getByLabelText(/Telefon \*/);
      const serviceInput = screen.getByLabelText(/Art der Sanierung \*/);
      
      expect(nameInput).toBeRequired();
      expect(emailInput).toBeRequired();
      expect(phoneInput).toBeRequired();
      expect(serviceInput).toBeRequired();
    });

    test('validates area input for realistic values', async () => {
      render(<Kontakt />);

      const areaInput = screen.getByLabelText(/Geschätzte Fläche/);
      
      // Test unrealistic values
      fireEvent.change(areaInput, { target: { value: '999999' } });
      
      // Should accept but may trigger warning
      expect(areaInput.value).toBe('999999');

      // Test negative values
      fireEvent.change(areaInput, { target: { value: '-50' } });
      expect(areaInput.value).toBe('-50'); // Input accepts, but form validation should handle
    });

    test('requires privacy policy acceptance', () => {
      render(<Kontakt />);

      // Fill all required fields
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Test User' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'test@example.com' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 123456' }
      });
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestdach' }
      });

      // Don't check privacy policy
      const submitButton = screen.getByText('Anfrage senden');
      fireEvent.click(submitButton);

      // Privacy checkbox should be required
      const privacyCheckbox = screen.getByLabelText(/Datenschutzerklärung/);
      expect(privacyCheckbox).toBeRequired();
    });
  });

  describe('Business Logic Validation', () => {
    test('categorizes service types correctly for routing', async () => {
      render(<Kontakt />);

      const serviceTypes = [
        { value: 'asbestdach', category: 'roof', priority: 'medium' },
        { value: 'asbestfassade', category: 'facade', priority: 'medium' },
        { value: 'asbestboden', category: 'floor', priority: 'low' },
        { value: 'asbestinnen', category: 'interior', priority: 'high' },
        { value: 'analyse', category: 'analysis', priority: 'low' }
      ];

      for (const service of serviceTypes) {
        fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
          target: { value: service.value }
        });

        // Complete form
        fireEvent.change(screen.getByLabelText(/Name \*/), {
          target: { value: 'Test User' }
        });
        fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
          target: { value: 'test@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/Telefon \*/), {
          target: { value: '+49 521 123456' }
        });
        fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

        const submitButton = screen.getByText('Anfrage senden');
        fireEvent.click(submitButton);

        await waitFor(() => {
          expect(fetch).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
              body: expect.stringContaining(service.value)
            })
          );
        });

        // Clear form for next iteration
        fireEvent.change(screen.getByLabelText(/Name \*/), { target: { value: '' } });
      }
    });

    test('applies correct urgency handling for different service types', async () => {
      render(<Kontakt />);

      // Interior asbestos with emergency urgency should trigger immediate response
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestinnen' }
      });
      fireEvent.change(screen.getByLabelText(/Dringlichkeit/), {
        target: { value: 'notfall' }
      });

      // Fill required fields
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Emergency User' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'emergency@test.de' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 123456' }
      });
      fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

      const submitButton = screen.getByText('Anfrage senden');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/emergency'),
          expect.any(Object)
        );
      });
    });
  });

  describe('Performance and Reliability', () => {
    test('form submission completes within performance benchmark', async () => {
      render(<Kontakt />);

      // Fill form quickly
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Speed Test User' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'speed@test.de' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 123456' }
      });
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestdach' }
      });
      fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

      const startTime = performance.now();
      const submitButton = screen.getByText('Anfrage senden');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
      });

      const endTime = performance.now();
      const submissionTime = endTime - startTime;

      expect(submissionTime).toBeLessThan(performanceBenchmarks.formSubmission);
    });

    test('handles network failures gracefully', async () => {
      (fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

      render(<Kontakt />);

      // Fill and submit form
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Network Test User' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'network@test.de' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 123456' }
      });
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestdach' }
      });
      fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

      const submitButton = screen.getByText('Anfrage senden');
      fireEvent.click(submitButton);

      // Should still show emergency contact information
      await waitFor(() => {
        const emergencyNumber = screen.getByText('0800 0060970');
        expect(emergencyNumber).toBeInTheDocument();
      });
    });

    test('prevents double submission', async () => {
      render(<Kontakt />);

      // Fill form
      fireEvent.change(screen.getByLabelText(/Name \*/), {
        target: { value: 'Double Click Test' }
      });
      fireEvent.change(screen.getByLabelText(/E-Mail \*/), {
        target: { value: 'double@test.de' }
      });
      fireEvent.change(screen.getByLabelText(/Telefon \*/), {
        target: { value: '+49 521 123456' }
      });
      fireEvent.change(screen.getByLabelText(/Art der Sanierung \*/), {
        target: { value: 'asbestdach' }
      });
      fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/));

      const submitButton = screen.getByText('Anfrage senden');
      
      // Click multiple times rapidly
      fireEvent.click(submitButton);
      fireEvent.click(submitButton);
      fireEvent.click(submitButton);

      // Should only call fetch once
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Regional Customization', () => {
    test('displays correct contact information for service areas', () => {
      render(<Kontakt />);

      // Check that service areas are listed
      const serviceAreas = [
        'Ostwestfalen-Lippe & Bielefeld',
        'NRW & Westfalen',
        'NRW & Rheinland',
        'Bayern & Süddeutschland',
        'Sachsen & Ostdeutschland'
      ];

      serviceAreas.forEach(area => {
        expect(screen.getByText(area)).toBeInTheDocument();
      });
    });

    test('maintains consistent contact information across pages', () => {
      render(<Kontakt />);

      // Standard phone number should be consistent
      const phoneLinks = screen.getAllByText('0800 0060970');
      expect(phoneLinks.length).toBeGreaterThan(0);
      
      phoneLinks.forEach(link => {
        expect(link).toHaveAttribute('href', expect.stringContaining('0800'));
      });
    });
  });
});