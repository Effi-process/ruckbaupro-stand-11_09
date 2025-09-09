import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Test utilities for consistent component testing
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, options);

// Mock emergency contact for testing
export const mockEmergencyContact = {
  phone: '08000060970',
  email: 'notfall@abriss-schmiede.de',
  available: true
};

// Mock CRM endpoints for testing
export const mockCRMEndpoints = {
  submitLead: '/api/crm/leads',
  submitQuote: '/api/crm/quotes',
  submitEmergency: '/api/crm/emergency',
  checkAvailability: '/api/availability'
};

// Test data for Asbest scenarios
export const testScenarios = {
  materials: ['eternit', 'spray', 'vinyl', 'cement', 'mixed'],
  projectTypes: ['roof', 'facade', 'floor', 'pipe', 'complete'],
  urgency: ['normal', 'fast', 'express', 'emergency'],
  locations: ['Bielefeld', 'Berlin', 'München', 'Köln', 'Hamburg'],
  areas: [10, 50, 100, 250, 500, 1000],
  priorities: ['low', 'medium', 'high', 'emergency']
};

// Mock form submission responses
export const mockSubmissionResponses = {
  success: {
    success: true,
    leadId: 'L12345',
    quoteId: 'Q67890',
    estimatedResponse: '24h',
    assignedAgent: 'Thomas Müller'
  },
  error: {
    success: false,
    error: 'CRM_CONNECTION_FAILED',
    message: 'Technischer Fehler - bitte telefonisch kontaktieren'
  },
  validation: {
    success: false,
    error: 'VALIDATION_ERROR',
    fields: ['email', 'phone']
  }
};

// Performance benchmarks
export const performanceBenchmarks = {
  loadTime: 3000, // 3 seconds max
  calculatorResponse: 500, // 500ms max
  formSubmission: 2000, // 2 seconds max
  emergencyContactClick: 100 // 100ms max
};

export * from '@testing-library/react';
export { customRender as render };