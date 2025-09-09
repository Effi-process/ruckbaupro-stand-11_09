import React from 'react';
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { testScenarios } from '../setup/test-utils';

// Business pricing rules and algorithms
const pricingRules = {
  basePrices: {
    roof: 35,
    facade: 40,
    floor: 25,
    pipe: 45,
    complete: 55
  },
  materialFactors: {
    eternit: 1.0,
    spray: 2.5,
    vinyl: 0.8,
    cement: 1.2,
    mixed: 1.5
  },
  urgencyMultipliers: {
    normal: 1.0,
    fast: 1.15,
    express: 1.35,
    emergency: 1.75
  },
  additionalServices: {
    disposal: 180,
    analysis: 450,
    monitoring: 350,
    documentation: 250,
    replacement: 25 // per m²
  },
  discountRules: {
    volumeDiscount: {
      threshold: 500, // m²
      discount: 0.05 // 5%
    },
    loyalCustomer: {
      discount: 0.1 // 10%
    },
    commercialProject: {
      discount: 0.15 // 15%
    }
  },
  regionalMultipliers: {
    bielefeld: 1.0,
    berlin: 1.15,
    münchen: 1.2,
    hamburg: 1.1,
    köln: 1.05
  },
  seasonalAdjustments: {
    winter: 1.1, // Higher due to difficult conditions
    summer: 0.95, // Lower due to easier access
    spring: 1.0,
    autumn: 1.0
  }
};

// Advanced pricing calculator
class PricingCalculator {
  calculateBasePrice(projectType: string, area: number, material: string, urgency: string): number {
    const basePrice = pricingRules.basePrices[projectType as keyof typeof pricingRules.basePrices];
    const materialFactor = pricingRules.materialFactors[material as keyof typeof pricingRules.materialFactors];
    const urgencyMultiplier = pricingRules.urgencyMultipliers[urgency as keyof typeof pricingRules.urgencyMultipliers];
    
    return basePrice * area * materialFactor * urgencyMultiplier;
  }

  applyVolumeDiscount(price: number, area: number): number {
    if (area >= pricingRules.discountRules.volumeDiscount.threshold) {
      return price * (1 - pricingRules.discountRules.volumeDiscount.discount);
    }
    return price;
  }

  applyCustomerDiscount(price: number, customerType: string): number {
    switch (customerType) {
      case 'loyal':
        return price * (1 - pricingRules.discountRules.loyalCustomer.discount);
      case 'commercial':
        return price * (1 - pricingRules.discountRules.commercialProject.discount);
      default:
        return price;
    }
  }

  applyRegionalMultiplier(price: number, region: string): number {
    const multiplier = pricingRules.regionalMultipliers[region as keyof typeof pricingRules.regionalMultipliers] || 1.0;
    return price * multiplier;
  }

  applySeasonalAdjustment(price: number, season: string): number {
    const adjustment = pricingRules.seasonalAdjustments[season as keyof typeof pricingRules.seasonalAdjustments] || 1.0;
    return price * adjustment;
  }

  calculateAdditionalServices(services: string[], area: number): number {
    let total = 0;
    
    services.forEach(service => {
      if (service === 'replacement') {
        total += pricingRules.additionalServices.replacement * area;
      } else {
        total += pricingRules.additionalServices[service as keyof typeof pricingRules.additionalServices] || 0;
      }
    });
    
    return total;
  }

  calculateFinalPrice(params: {
    projectType: string;
    area: number;
    material: string;
    urgency: string;
    services: string[];
    customerType?: string;
    region?: string;
    season?: string;
  }): number {
    let price = this.calculateBasePrice(params.projectType, params.area, params.material, params.urgency);
    
    // Add additional services
    price += this.calculateAdditionalServices(params.services, params.area);
    
    // Apply discounts
    price = this.applyVolumeDiscount(price, params.area);
    if (params.customerType) {
      price = this.applyCustomerDiscount(price, params.customerType);
    }
    
    // Apply regional and seasonal adjustments
    if (params.region) {
      price = this.applyRegionalMultiplier(price, params.region);
    }
    if (params.season) {
      price = this.applySeasonalAdjustment(price, params.season);
    }
    
    return Math.round(price);
  }
}

describe('Pricing Algorithms - Business Logic Tests', () => {
  let calculator: PricingCalculator;

  beforeEach(() => {
    calculator = new PricingCalculator();
  });

  describe('Base Price Calculations', () => {
    test('calculates accurate base prices for all project types', () => {
      const testCases = [
        { type: 'roof', area: 100, material: 'eternit', urgency: 'normal', expected: 3500 },
        { type: 'facade', area: 200, material: 'eternit', urgency: 'normal', expected: 8000 },
        { type: 'floor', area: 150, material: 'eternit', urgency: 'normal', expected: 3750 },
        { type: 'pipe', area: 50, material: 'eternit', urgency: 'normal', expected: 2250 },
        { type: 'complete', area: 300, material: 'eternit', urgency: 'normal', expected: 16500 }
      ];

      testCases.forEach(({ type, area, material, urgency, expected }) => {
        const result = calculator.calculateBasePrice(type, area, material, urgency);
        expect(result).toBe(expected);
      });
    });

    test('applies material factors correctly across different scenarios', () => {
      const baseScenario = { type: 'roof', area: 100, urgency: 'normal' };
      
      const materialTests = [
        { material: 'eternit', factor: 1.0, expected: 3500 },
        { material: 'spray', factor: 2.5, expected: 8750 },
        { material: 'vinyl', factor: 0.8, expected: 2800 },
        { material: 'cement', factor: 1.2, expected: 4200 },
        { material: 'mixed', factor: 1.5, expected: 5250 }
      ];

      materialTests.forEach(({ material, expected }) => {
        const result = calculator.calculateBasePrice(baseScenario.type, baseScenario.area, material, baseScenario.urgency);
        expect(result).toBe(expected);
      });
    });

    test('applies urgency multipliers accurately', () => {
      const baseScenario = { type: 'roof', area: 100, material: 'eternit' };
      
      const urgencyTests = [
        { urgency: 'normal', multiplier: 1.0, expected: 3500 },
        { urgency: 'fast', multiplier: 1.15, expected: 4025 },
        { urgency: 'express', multiplier: 1.35, expected: 4725 },
        { urgency: 'emergency', multiplier: 1.75, expected: 6125 }
      ];

      urgencyTests.forEach(({ urgency, expected }) => {
        const result = calculator.calculateBasePrice(baseScenario.type, baseScenario.area, baseScenario.material, urgency);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Discount Logic', () => {
    test('applies volume discounts correctly', () => {
      const smallProject = 3500; // 100m² roof project
      const largeProject = 17500; // 500m² roof project
      const hugeProject = 35000; // 1000m² roof project

      // Small project - no discount
      expect(calculator.applyVolumeDiscount(smallProject, 100)).toBe(smallProject);
      
      // Large project - 5% discount
      expect(calculator.applyVolumeDiscount(largeProject, 500)).toBe(16625);
      
      // Huge project - 5% discount
      expect(calculator.applyVolumeDiscount(hugeProject, 1000)).toBe(33250);
    });

    test('applies customer type discounts correctly', () => {
      const basePrice = 10000;

      // Regular customer - no discount
      expect(calculator.applyCustomerDiscount(basePrice, 'regular')).toBe(basePrice);
      
      // Loyal customer - 10% discount
      expect(calculator.applyCustomerDiscount(basePrice, 'loyal')).toBe(9000);
      
      // Commercial customer - 15% discount
      expect(calculator.applyCustomerDiscount(basePrice, 'commercial')).toBe(8500);
    });

    test('prevents stacking discounts incorrectly', () => {
      const basePrice = 20000;
      const area = 600; // Qualifies for volume discount
      
      // Apply volume discount first
      let price = calculator.applyVolumeDiscount(basePrice, area);
      expect(price).toBe(19000); // 5% off
      
      // Then apply customer discount to already discounted price
      price = calculator.applyCustomerDiscount(price, 'commercial');
      expect(price).toBe(16150); // 15% off the discounted price
      
      // Total discount should be less than 20% (not 5% + 15% = 20%)
      const totalDiscount = (basePrice - price) / basePrice;
      expect(totalDiscount).toBeCloseTo(0.1925, 3); // ~19.25%
    });
  });

  describe('Regional Pricing Variations', () => {
    test('applies regional multipliers accurately', () => {
      const basePrice = 10000;

      const regionalTests = [
        { region: 'bielefeld', multiplier: 1.0, expected: 10000 },
        { region: 'berlin', multiplier: 1.15, expected: 11500 },
        { region: 'münchen', multiplier: 1.2, expected: 12000 },
        { region: 'hamburg', multiplier: 1.1, expected: 11000 },
        { region: 'köln', multiplier: 1.05, expected: 10500 }
      ];

      regionalTests.forEach(({ region, expected }) => {
        const result = calculator.applyRegionalMultiplier(basePrice, region);
        expect(result).toBe(expected);
      });
    });

    test('handles unknown regions gracefully', () => {
      const basePrice = 10000;
      const result = calculator.applyRegionalMultiplier(basePrice, 'unknown_city');
      expect(result).toBe(basePrice); // Should default to 1.0 multiplier
    });
  });

  describe('Seasonal Pricing Adjustments', () => {
    test('applies seasonal adjustments correctly', () => {
      const basePrice = 10000;

      const seasonalTests = [
        { season: 'winter', adjustment: 1.1, expected: 11000 },
        { season: 'summer', adjustment: 0.95, expected: 9500 },
        { season: 'spring', adjustment: 1.0, expected: 10000 },
        { season: 'autumn', adjustment: 1.0, expected: 10000 }
      ];

      seasonalTests.forEach(({ season, expected }) => {
        const result = calculator.applySeasonalAdjustment(basePrice, season);
        expect(result).toBe(expected);
      });
    });
  });

  describe('Additional Services Pricing', () => {
    test('calculates fixed additional services correctly', () => {
      const services = ['disposal', 'analysis', 'monitoring', 'documentation'];
      const area = 100;
      
      const result = calculator.calculateAdditionalServices(services, area);
      const expected = 180 + 450 + 350 + 250; // 1230
      
      expect(result).toBe(expected);
    });

    test('calculates area-based services correctly', () => {
      const services = ['replacement'];
      const area = 200;
      
      const result = calculator.calculateAdditionalServices(services, area);
      const expected = 200 * 25; // 5000
      
      expect(result).toBe(expected);
    });

    test('combines fixed and area-based services', () => {
      const services = ['disposal', 'replacement', 'monitoring'];
      const area = 150;
      
      const result = calculator.calculateAdditionalServices(services, area);
      const expected = 180 + (150 * 25) + 350; // 4280
      
      expect(result).toBe(expected);
    });
  });

  describe('Complex Pricing Scenarios', () => {
    test('calculates accurate price for emergency commercial spritzasbest project', () => {
      const params = {
        projectType: 'complete',
        area: 800,
        material: 'spray',
        urgency: 'emergency',
        services: ['disposal', 'analysis', 'monitoring', 'documentation'],
        customerType: 'commercial',
        region: 'münchen',
        season: 'winter'
      };

      const result = calculator.calculateFinalPrice(params);
      
      // Manual calculation:
      // Base: 55 * 800 * 2.5 * 1.75 = 192,500
      // Services: 180 + 450 + 350 + 250 = 1,230
      // Subtotal: 193,730
      // Volume discount (5%): 184,043.5
      // Commercial discount (15%): 156,437
      // Regional (München 1.2): 187,724
      // Seasonal (Winter 1.1): 206,497 (rounded)
      
      expect(result).toBeCloseTo(206497, -2); // Within 100€
    });

    test('calculates accurate price for small residential vinyl floor project', () => {
      const params = {
        projectType: 'floor',
        area: 50,
        material: 'vinyl',
        urgency: 'normal',
        services: ['disposal'],
        customerType: 'regular',
        region: 'bielefeld',
        season: 'summer'
      };

      const result = calculator.calculateFinalPrice(params);
      
      // Manual calculation:
      // Base: 25 * 50 * 0.8 * 1.0 = 1,000
      // Services: 180
      // Subtotal: 1,180
      // No volume discount (under 500m²)
      // No customer discount (regular)
      // Regional (Bielefeld 1.0): 1,180
      // Seasonal (Summer 0.95): 1,121
      
      expect(result).toBe(1121);
    });

    test('validates pricing edge cases and boundary conditions', () => {
      // Zero area
      const zeroAreaParams = {
        projectType: 'roof',
        area: 0,
        material: 'eternit',
        urgency: 'normal',
        services: []
      };
      
      const zeroResult = calculator.calculateFinalPrice(zeroAreaParams);
      expect(zeroResult).toBe(0);

      // Maximum reasonable area
      const largeAreaParams = {
        projectType: 'complete',
        area: 10000,
        material: 'mixed',
        urgency: 'emergency',
        services: ['disposal', 'analysis', 'monitoring', 'documentation', 'replacement'],
        customerType: 'commercial',
        region: 'münchen'
      };
      
      const largeResult = calculator.calculateFinalPrice(largeAreaParams);
      expect(largeResult).toBeGreaterThan(1000000); // Should be substantial
      expect(largeResult).toBeLessThan(5000000); // But reasonable
    });
  });

  describe('Pricing Validation and Business Rules', () => {
    test('ensures minimum viable pricing', () => {
      // Even smallest projects should meet minimum thresholds
      const minimalProject = {
        projectType: 'floor',
        area: 1,
        material: 'vinyl',
        urgency: 'normal',
        services: [],
        season: 'summer'
      };

      const result = calculator.calculateFinalPrice(minimalProject);
      expect(result).toBeGreaterThan(20); // Minimum viable price
    });

    test('validates emergency pricing premiums', () => {
      const normalProject = {
        projectType: 'roof',
        area: 100,
        material: 'eternit',
        urgency: 'normal',
        services: []
      };

      const emergencyProject = {
        ...normalProject,
        urgency: 'emergency'
      };

      const normalPrice = calculator.calculateFinalPrice(normalProject);
      const emergencyPrice = calculator.calculateFinalPrice(emergencyProject);

      expect(emergencyPrice).toBeGreaterThan(normalPrice * 1.5); // At least 50% premium
    });

    test('ensures commercial discounts are properly applied', () => {
      const residentialProject = {
        projectType: 'complete',
        area: 600,
        material: 'spray',
        urgency: 'fast',
        services: ['disposal', 'monitoring'],
        customerType: 'regular'
      };

      const commercialProject = {
        ...residentialProject,
        customerType: 'commercial'
      };

      const residentialPrice = calculator.calculateFinalPrice(residentialProject);
      const commercialPrice = calculator.calculateFinalPrice(commercialProject);

      // Commercial should be significantly cheaper due to volume and type discounts
      expect(commercialPrice).toBeLessThan(residentialPrice * 0.85);
    });

    test('validates that regional pricing reflects market conditions', () => {
      const baseProject = {
        projectType: 'facade',
        area: 200,
        material: 'cement',
        urgency: 'fast',
        services: ['analysis']
      };

      const regions = ['bielefeld', 'berlin', 'münchen'];
      const prices = regions.map(region => 
        calculator.calculateFinalPrice({ ...baseProject, region })
      );

      // München should be most expensive, Berlin middle, Bielefeld cheapest
      expect(prices[2]).toBeGreaterThan(prices[1]); // München > Berlin
      expect(prices[1]).toBeGreaterThan(prices[0]); // Berlin > Bielefeld
    });
  });

  describe('Revenue Optimization', () => {
    test('calculates optimal pricing for different customer segments', () => {
      const baseProject = {
        projectType: 'complete',
        area: 400,
        material: 'mixed',
        urgency: 'express',
        services: ['disposal', 'monitoring', 'documentation']
      };

      const segments = [
        { type: 'regular', expectedRange: [15000, 25000] },
        { type: 'loyal', expectedRange: [13500, 22500] },
        { type: 'commercial', expectedRange: [12750, 21250] }
      ];

      segments.forEach(({ type, expectedRange }) => {
        const price = calculator.calculateFinalPrice({ ...baseProject, customerType: type });
        expect(price).toBeGreaterThanOrEqual(expectedRange[0]);
        expect(price).toBeLessThanOrEqual(expectedRange[1]);
      });
    });

    test('ensures pricing competitiveness while maintaining margins', () => {
      // Standard competitive project
      const competitiveProject = {
        projectType: 'roof',
        area: 150,
        material: 'eternit',
        urgency: 'fast',
        services: ['disposal']
      };

      const price = calculator.calculateFinalPrice(competitiveProject);
      
      // Should be competitive (reasonable for market) but profitable
      expect(price).toBeGreaterThan(4000); // Minimum for profitability
      expect(price).toBeLessThan(8000); // Maximum for competitiveness
    });
  });
});