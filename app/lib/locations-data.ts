// Comprehensive database of RückbauPRO presence in Bielefeld

export interface Location {
  id: string;
  region: string;
  city: string;
  district: string;
  address: string;
  zip: string;
  phone: string;
  emergency?: string;
  services: string[];
  coverage: string[];
  featured?: boolean;
  rating: number;
  reviews: number;
  response: string;
  certifications?: string[];
  specialties?: string[];
}

export const locations: Location[] = [
  {
    id: 'bielefeld',
    region: 'nordrhein-westfalen',
    city: 'Bielefeld',
    district: 'Innenstadt',
    address: 'Hauptstraße 12',
    zip: '33602',
    phone: '+49 174 8083023',
    emergency: '+49 174 8083023',
    services: ['Asbestsanierung', 'KMF-Sanierung', 'PCB-Sanierung', 'Schadstoffanalyse', 'Entkernung', 'Abbrucharbeiten'],
    coverage: ['Bielefeld', 'Senne', 'Heepen', 'Stieghorst', 'Brackwede', 'Gadderbaum', 'Sennestadt', 'Jöllenbeck', 'Dornberg'],
    featured: true,
    rating: 4.9,
    reviews: 127,
    response: '< 1 Std',
    certifications: ['TRGS 519', 'ISO 9001'],
    specialties: ['Denkmalschutz', 'Industrieanlagen', 'Wohngebäude']
  }
];

export const getCityLocations = (cityId: string): Location[] => {
  return locations.filter(loc => loc.id === cityId);
};

export const getFeaturedLocations = (): Location[] => {
  return locations.filter(loc => loc.featured);
};
