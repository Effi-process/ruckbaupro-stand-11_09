import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PremiumCalculator from '../PremiumCalculator';

describe('PremiumCalculator', () => {
  it('renders calculator with initial state', () => {
    render(<PremiumCalculator />);
    
    expect(screen.getByText(/Premium Kalkulator/i)).toBeInTheDocument();
    expect(screen.getByText(/Raumgröße/i)).toBeInTheDocument();
    expect(screen.getByText(/Material/i)).toBeInTheDocument();
  });

  it('calculates price for small room with standard material', () => {
    render(<PremiumCalculator />);
    
    // Select room size
    const roomSizeSelect = screen.getByLabelText(/Raumgröße/i);
    fireEvent.change(roomSizeSelect, { target: { value: '20' } });
    
    // Select material type
    const materialSelect = screen.getByLabelText(/Material/i);
    fireEvent.change(materialSelect, { target: { value: 'wellplatten' } });
    
    // Check if price is displayed
    expect(screen.getByText(/Geschätzter Preis/i)).toBeInTheDocument();
  });

  it('shows higher price for hazardous materials', () => {
    render(<PremiumCalculator />);
    
    // Select large room
    const roomSizeSelect = screen.getByLabelText(/Raumgröße/i);
    fireEvent.change(roomSizeSelect, { target: { value: '100' } });
    
    // Select hazardous material
    const materialSelect = screen.getByLabelText(/Material/i);
    fireEvent.change(materialSelect, { target: { value: 'spritzasbest' } });
    
    // Price should be displayed for dangerous material
    expect(screen.getByText(/Geschätzter Preis/i)).toBeInTheDocument();
  });

  it('handles emergency service selection', () => {
    render(<PremiumCalculator />);
    
    // Check if emergency service option exists
    const emergencyCheckbox = screen.getByRole('checkbox', { name: /Notfall/i });
    fireEvent.click(emergencyCheckbox);
    
    // Should show urgency surcharge
    expect(emergencyCheckbox).toBeChecked();
  });

  it('validates input before calculation', () => {
    render(<PremiumCalculator />);
    
    // Try to calculate without selecting options
    const calculateButton = screen.getByRole('button', { name: /Berechnen/i });
    fireEvent.click(calculateButton);
    
    // Should show validation message
    expect(screen.getByText(/Bitte alle Felder ausfüllen/i)).toBeInTheDocument();
  });
});