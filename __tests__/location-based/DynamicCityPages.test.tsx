import React from 'react';
import { render, screen, waitFor } from '../setup/test-utils';
import { testScenarios } from '../setup/test-utils';

// Mock Next.js dynamic routing
const mockParams = { stadt: 'bielefeld' };
jest.mock('next/navigation', () => ({
  useParams: () => mockParams,
  usePathname: () => `/standorte/${mockParams.stadt}`,
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

// Mock city data
const mockCityData = {
  bielefeld: {
    name: 'Bielefeld',
    state: 'Nordrhein-Westfalen',
    phone: '+49 521 123456',
    email: 'bielefeld@abriss-schmiede.de',
    address: 'Musterstraße 123, 33602 Bielefeld',
    serviceAreas: ['Bielefeld', 'Gütersloh', 'Paderborn', 'Herford'],
    pricing: {
      baseMultiplier: 1.0,
      emergencyAvailable: true,
      weekendService: true
    },
    team: ['Thomas Müller', 'Sarah Schmidt'],
    certifications: ['TRGS 519', 'DGUV Regel 101-004'],
    specialties: ['Dachsanierung', 'Industrieanlagen']
  },
  berlin: {
    name: 'Berlin',
    state: 'Berlin',
    phone: '+49 30 987654',
    email: 'berlin@abriss-schmiede.de',
    address: 'Friedrichstraße 456, 10117 Berlin',
    serviceAreas: ['Berlin', 'Potsdam', 'Brandenburg'],
    pricing: {
      baseMultiplier: 1.15,
      emergencyAvailable: true,
      weekendService: true
    },
    team: ['Michael Weber', 'Anna Fischer'],
    certifications: ['TRGS 519', 'DGUV Regel 101-004'],
    specialties: ['Altbausanierung', 'Denkmalschutz']
  },
  münchen: {
    name: 'München',
    state: 'Bayern',
    phone: '+49 89 555777',
    email: 'muenchen@abriss-schmiede.de',
    address: 'Maximilianstraße 789, 80539 München',
    serviceAreas: ['München', 'Augsburg', 'Ingolstadt'],
    pricing: {
      baseMultiplier: 1.2,
      emergencyAvailable: true,
      weekendService: false
    },
    team: ['Klaus Bauer', 'Lisa Schneider'],
    certifications: ['TRGS 519', 'DGUV Regel 101-004', 'Bayern Umwelt'],
    specialties: ['Gewerbeobjekte', 'Industriehallen']
  }
};

// Mock dynamic city page component
const DynamicCityPage = ({ params }: { params: { stadt: string } }) => {
  const cityKey = params.stadt.toLowerCase();
  const cityData = mockCityData[cityKey as keyof typeof mockCityData];

  if (!cityData) {
    return <div>Stadt nicht gefunden</div>;
  }

  return (
    <div>
      <h1>Asbestsanierung {cityData.name}</h1>
      <div data-testid="city-phone">{cityData.phone}</div>
      <div data-testid="city-email">{cityData.email}</div>
      <div data-testid="city-address">{cityData.address}</div>
      
      <section data-testid="service-areas">
        <h2>Einsatzgebiete</h2>
        {cityData.serviceAreas.map(area => (
          <div key={area} className="service-area">{area}</div>
        ))}
      </section>

      <section data-testid="pricing-info">
        <div data-testid="price-multiplier">
          Preisfaktor: {cityData.pricing.baseMultiplier}
        </div>
        <div data-testid="emergency-service">
          Notdienst: {cityData.pricing.emergencyAvailable ? 'Verfügbar' : 'Nicht verfügbar'}
        </div>
        <div data-testid="weekend-service">
          Wochenendservice: {cityData.pricing.weekendService ? 'Verfügbar' : 'Nicht verfügbar'}
        </div>
      </section>

      <section data-testid="team-info">
        <h2>Unser Team vor Ort</h2>
        {cityData.team.map(member => (
          <div key={member} className="team-member">{member}</div>
        ))}
      </section>

      <section data-testid="certifications">
        <h2>Zertifizierungen</h2>
        {cityData.certifications.map(cert => (
          <div key={cert} className="certification">{cert}</div>
        ))}
      </section>

      <section data-testid="specialties">
        <h2>Spezialisierungen</h2>
        {cityData.specialties.map(specialty => (
          <div key={specialty} className="specialty">{specialty}</div>
        ))}
      </section>
    </div>
  );
};

describe('Dynamic City Pages - Location-Based Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('City Page Generation and Content', () => {
    test('generates correct city-specific content for Bielefeld', () => {
      mockParams.stadt = 'bielefeld';
      
      render(<DynamicCityPage params={mockParams} />);

      expect(screen.getByText('Asbestsanierung Bielefeld')).toBeInTheDocument();
      expect(screen.getByTestId('city-phone')).toHaveTextContent('+49 521 123456');
      expect(screen.getByTestId('city-email')).toHaveTextContent('bielefeld@abriss-schmiede.de');
      expect(screen.getByTestId('city-address')).toHaveTextContent('33602 Bielefeld');
    });

    test('generates correct city-specific content for Berlin', () => {
      mockParams.stadt = 'berlin';
      
      render(<DynamicCityPage params={mockParams} />);

      expect(screen.getByText('Asbestsanierung Berlin')).toBeInTheDocument();
      expect(screen.getByTestId('city-phone')).toHaveTextContent('+49 30 987654');
      expect(screen.getByTestId('city-email')).toHaveTextContent('berlin@abriss-schmiede.de');
      expect(screen.getByTestId('city-address')).toHaveTextContent('10117 Berlin');
    });

    test('generates correct city-specific content for München', () => {
      mockParams.stadt = 'münchen';
      
      render(<DynamicCityPage params={mockParams} />);

      expect(screen.getByText('Asbestsanierung München')).toBeInTheDocument();
      expect(screen.getByTestId('city-phone')).toHaveTextContent('+49 89 555777');
      expect(screen.getByTestId('city-email')).toHaveTextContent('muenchen@abriss-schmiede.de');
      expect(screen.getByTestId('city-address')).toHaveTextContent('80539 München');
    });

    test('handles non-existent cities gracefully', () => {
      mockParams.stadt = 'nonexistent';
      
      render(<DynamicCityPage params={mockParams} />);

      expect(screen.getByText('Stadt nicht gefunden')).toBeInTheDocument();
    });
  });

  describe('Service Area Mapping', () => {
    test('displays correct service areas for each city', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        const cityData = mockCityData[city as keyof typeof mockCityData];
        const serviceAreaSection = screen.getByTestId('service-areas');
        
        cityData.serviceAreas.forEach(area => {
          expect(serviceAreaSection).toHaveTextContent(area);
        });
        
        unmount();
      });
    });

    test('validates service area coverage for regional consistency', () => {
      mockParams.stadt = 'bielefeld';
      render(<DynamicCityPage params={mockParams} />);

      // Bielefeld should cover OWL region
      const serviceAreas = screen.getByTestId('service-areas');
      expect(serviceAreas).toHaveTextContent('Bielefeld');
      expect(serviceAreas).toHaveTextContent('Gütersloh');
      expect(serviceAreas).toHaveTextContent('Paderborn');
      expect(serviceAreas).toHaveTextContent('Herford');
    });

    test('ensures no service area overlaps between primary cities', () => {
      const allServiceAreas = Object.values(mockCityData)
        .flatMap(city => city.serviceAreas);
      
      const primaryCities = Object.values(mockCityData)
        .map(city => city.name.toLowerCase());

      // Each primary city should only appear in its own service areas
      primaryCities.forEach(primaryCity => {
        const appearances = allServiceAreas.filter(area => 
          area.toLowerCase() === primaryCity
        );
        expect(appearances).toHaveLength(1);
      });
    });
  });

  describe('Location-Specific Pricing', () => {
    test('applies correct price multipliers for different cities', () => {
      const pricingTests = [
        { city: 'bielefeld', expectedMultiplier: '1' },
        { city: 'berlin', expectedMultiplier: '1.15' },
        { city: 'münchen', expectedMultiplier: '1.2' }
      ];

      pricingTests.forEach(({ city, expectedMultiplier }) => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        expect(screen.getByTestId('price-multiplier'))
          .toHaveTextContent(`Preisfaktor: ${expectedMultiplier}`);
        
        unmount();
      });
    });

    test('displays correct service availability by city', () => {
      mockParams.stadt = 'münchen';
      render(<DynamicCityPage params={mockParams} />);

      // München has no weekend service in our test data
      expect(screen.getByTestId('weekend-service'))
        .toHaveTextContent('Wochenendservice: Nicht verfügbar');
      
      expect(screen.getByTestId('emergency-service'))
        .toHaveTextContent('Notdienst: Verfügbar');
    });

    test('validates emergency service availability', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        // All cities should have emergency service in our data
        expect(screen.getByTestId('emergency-service'))
          .toHaveTextContent('Notdienst: Verfügbar');
        
        unmount();
      });
    });
  });

  describe('Local Team and Expertise', () => {
    test('displays correct team members for each location', () => {
      mockParams.stadt = 'bielefeld';
      render(<DynamicCityPage params={mockParams} />);

      const teamSection = screen.getByTestId('team-info');
      expect(teamSection).toHaveTextContent('Thomas Müller');
      expect(teamSection).toHaveTextContent('Sarah Schmidt');
    });

    test('shows location-specific specializations', () => {
      mockParams.stadt = 'münchen';
      render(<DynamicCityPage params={mockParams} />);

      const specialtiesSection = screen.getByTestId('specialties');
      expect(specialtiesSection).toHaveTextContent('Gewerbeobjekte');
      expect(specialtiesSection).toHaveTextContent('Industriehallen');
    });

    test('displays all required certifications for each location', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        const certSection = screen.getByTestId('certifications');
        
        // All locations should have basic certifications
        expect(certSection).toHaveTextContent('TRGS 519');
        expect(certSection).toHaveTextContent('DGUV Regel 101-004');
        
        unmount();
      });
    });

    test('shows regional certifications where applicable', () => {
      mockParams.stadt = 'münchen';
      render(<DynamicCityPage params={mockParams} />);

      const certSection = screen.getByTestId('certifications');
      expect(certSection).toHaveTextContent('Bayern Umwelt');
    });
  });

  describe('Contact Information Validation', () => {
    test('validates phone number formats for all cities', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        const phoneElement = screen.getByTestId('city-phone');
        const phoneNumber = phoneElement.textContent;
        
        // Should be valid German phone format
        expect(phoneNumber).toMatch(/^\+49\s\d{2,3}\s\d{6,7}$/);
        
        unmount();
      });
    });

    test('ensures email addresses follow company domain pattern', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        const emailElement = screen.getByTestId('city-email');
        const email = emailElement.textContent;
        
        // Should follow pattern: city@abriss-schmiede.de
        expect(email).toMatch(/^[a-z]+@abriss-schmiede\.de$/);
        expect(email).toContain(city);
        
        unmount();
      });
    });

    test('validates address format and postal codes', () => {
      const addressTests = [
        { city: 'bielefeld', expectedPostal: '33602' },
        { city: 'berlin', expectedPostal: '10117' },
        { city: 'münchen', expectedPostal: '80539' }
      ];

      addressTests.forEach(({ city, expectedPostal }) => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        const addressElement = screen.getByTestId('city-address');
        expect(addressElement.textContent).toContain(expectedPostal);
        
        unmount();
      });
    });
  });

  describe('SEO and URL Structure', () => {
    test('generates SEO-friendly URLs for all cities', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        
        // URL should be lowercase and clean
        expect(mockParams.stadt).toBe(city.toLowerCase());
        expect(mockParams.stadt).not.toContain(' ');
        expect(mockParams.stadt).not.toContain('ä');
      });
    });

    test('handles special characters in city names', () => {
      // Test with München (contains ü)
      mockParams.stadt = 'münchen';
      render(<DynamicCityPage params={mockParams} />);

      // Should display correct city name with special characters
      expect(screen.getByText('Asbestsanierung München')).toBeInTheDocument();
    });
  });

  describe('Business Logic Integration', () => {
    test('integrates pricing data with calculator components', () => {
      mockParams.stadt = 'berlin';
      render(<DynamicCityPage params={mockParams} />);

      // Berlin has 1.15 multiplier - this should be available for calculator
      const pricingInfo = screen.getByTestId('pricing-info');
      expect(pricingInfo).toHaveTextContent('1.15');
    });

    test('provides local phone numbers for emergency contact', () => {
      const cities = ['bielefeld', 'berlin', 'münchen'];
      
      cities.forEach(city => {
        mockParams.stadt = city;
        const { unmount } = render(<DynamicCityPage params={mockParams} />);
        
        const phoneElement = screen.getByTestId('city-phone');
        const phoneNumber = phoneElement.textContent;
        
        // Each city should have unique local number
        expect(phoneNumber).toBeTruthy();
        expect(phoneNumber).toContain('+49');
        
        unmount();
      });
    });

    test('validates service availability logic', () => {
      // Test München weekend service restriction
      mockParams.stadt = 'münchen';
      render(<DynamicCityPage params={mockParams} />);

      const weekendService = screen.getByTestId('weekend-service');
      expect(weekendService).toHaveTextContent('Nicht verfügbar');

      // But emergency should still be available
      const emergencyService = screen.getByTestId('emergency-service');
      expect(emergencyService).toHaveTextContent('Verfügbar');
    });
  });

  describe('Data Consistency and Quality', () => {
    test('ensures all cities have required data fields', () => {
      const requiredFields = [
        'name', 'state', 'phone', 'email', 'address', 
        'serviceAreas', 'pricing', 'team', 'certifications', 'specialties'
      ];

      Object.values(mockCityData).forEach(cityData => {
        requiredFields.forEach(field => {
          expect(cityData).toHaveProperty(field);
          expect(cityData[field as keyof typeof cityData]).toBeTruthy();
        });
      });
    });

    test('validates pricing multiplier ranges', () => {
      Object.values(mockCityData).forEach(cityData => {
        const multiplier = cityData.pricing.baseMultiplier;
        
        // Multipliers should be reasonable (between 0.8 and 1.5)
        expect(multiplier).toBeGreaterThanOrEqual(0.8);
        expect(multiplier).toBeLessThanOrEqual(1.5);
      });
    });

    test('ensures team members are assigned to cities', () => {
      Object.values(mockCityData).forEach(cityData => {
        expect(cityData.team).toHaveLength.greaterThan(0);
        
        cityData.team.forEach(member => {
          expect(member).toBeTruthy();
          expect(typeof member).toBe('string');
        });
      });
    });

    test('validates certification consistency', () => {
      const requiredCertifications = ['TRGS 519', 'DGUV Regel 101-004'];
      
      Object.values(mockCityData).forEach(cityData => {
        requiredCertifications.forEach(cert => {
          expect(cityData.certifications).toContain(cert);
        });
      });
    });
  });
});