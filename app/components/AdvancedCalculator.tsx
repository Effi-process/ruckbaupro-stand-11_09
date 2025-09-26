'use client'
import { useState, useEffect, useCallback, useMemo } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  basePrice: number;
  category: 'asbestsanierung' | 'kmf-sanierung' | 'schimmelsanierung' | 'betonarbeiten' | 'entkernung' | 'beratung';
}

interface CalculatorData {
  selectedServices: string[];
  // Gemeinsame Felder
  area: number;
  buildingType: string;
  buildingAge: string;
  urgency: string;
  location: string;
  accessibility: string;
  
  // Asbestsanierung spezifisch
  asbestMaterial: string;
  contaminationLevel: string;
  roomType: string;
  disposalDistance: number;
  
  // KMF-Sanierung spezifisch
  kmfType: string;
  kmfThickness: string;
  
  // Schimmelsanierung spezifisch
  moldArea: string;
  moldType: string;
  moistureCause: string;
  
  // Betonarbeiten spezifisch
  concreteWork: string;
  concreteThickness: string;
  reinforcement: string;
  
  // Entkernung spezifisch
  demolitionScope: string;
  materialRemoval: string[];
  
  // Beratung spezifisch
  consultationType: string;
  projectComplexity: string;
  
  // Zusatzleistungen
  additionalServices: string[];
  
  // Kontakt
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
    address: string;
  };
}

export default function AdvancedCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    selectedServices: [],
    area: 0,
    buildingType: '',
    buildingAge: '',
    urgency: '',
    location: '',
    accessibility: '',
    asbestMaterial: '',
    contaminationLevel: '',
    roomType: '',
    disposalDistance: 0,
    kmfType: '',
    kmfThickness: '',
    moldArea: '',
    moldType: '',
    moistureCause: '',
    concreteWork: '',
    concreteThickness: '',
    reinforcement: '',
    demolitionScope: '',
    materialRemoval: [],
    consultationType: '',
    projectComplexity: '',
    additionalServices: [],
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: '',
      address: ''
    }
  });

  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [priceBreakdown, setPriceBreakdown] = useState<any>({});
  const [showResult, setShowResult] = useState(false);

  const services: Service[] = useMemo(() => [
    {
      id: 'asbestsanierung',
      name: 'Asbestsanierung',
      description: 'Sichere Entfernung von asbesthaltigen Materialien',
      icon: 'shield',
      basePrice: 65,
      category: 'asbestsanierung'
    },
    {
      id: 'kmf-sanierung',
      name: 'KMF-Sanierung',
      description: 'Entfernung künstlicher Mineralfasern',
      icon: 'warning',
      basePrice: 35,
      category: 'kmf-sanierung'
    },
    {
      id: 'schimmelsanierung',
      name: 'Schimmelsanierung',
      description: 'Professionelle Schimmelentfernung',
      icon: 'alert',
      basePrice: 45,
      category: 'schimmelsanierung'
    },
    {
      id: 'betonarbeiten',
      name: 'Betonarbeiten',
      description: 'Betonschneiden, -bohren und -bearbeitung',
      icon: 'cube',
      basePrice: 85,
      category: 'betonarbeiten'
    },
    {
      id: 'entkernung',
      name: 'Entkernung',
      description: 'Rückbau und Entkernung von Gebäuden',
      icon: 'home',
      basePrice: 15,
      category: 'entkernung'
    },
    {
      id: 'beratung',
      name: 'Beratung & Planung',
      description: 'Projektplanung und Beratung (Pauschalpreis)',
      icon: 'users',
      basePrice: 120,
      category: 'beratung'
    }
  ], []);

  const buildingTypes = useMemo(() => [
    { id: 'residential', name: 'Wohngebäude', factor: 1.0 },
    { id: 'commercial', name: 'Büro/Gewerbe', factor: 1.1 },
    { id: 'industrial', name: 'Industriegebäude', factor: 1.25 },
    { id: 'public', name: 'Öffentliches Gebäude', factor: 1.15 },
    { id: 'hospital', name: 'Krankenhaus/Pflege', factor: 1.4 }
  ], []);

  const buildingAges = useMemo(() => [
    { id: 'before1950', name: 'Vor 1950', factor: 1.3 },
    { id: '1950-1970', name: '1950 - 1970', factor: 1.4 },
    { id: '1970-1990', name: '1970 - 1990', factor: 1.2 },
    { id: '1990-2010', name: '1990 - 2010', factor: 1.05 },
    { id: 'after2010', name: 'Nach 2010', factor: 1.0 }
  ], []);

  const urgencyOptions = useMemo(() => [
    { id: 'normal', name: 'Standard (4-6 Wochen)', factor: 1.0 },
    { id: 'fast', name: 'Priorität (2-3 Wochen)', factor: 1.15 },
    { id: 'express', name: 'Express (1 Woche)', factor: 1.35 },
    { id: 'emergency', name: 'Notfall (48-72h)', factor: 1.75 }
  ], []);

  const accessibilityOptions = useMemo(() => [
    { id: 'easy', name: 'Einfach zugänglich', factor: 0.95 },
    { id: 'normal', name: 'Normal zugänglich', factor: 1.0 },
    { id: 'difficult', name: 'Schwer zugänglich', factor: 1.2 },
    { id: 'very-difficult', name: 'Sehr schwer zugänglich', factor: 1.45 }
  ], []);

  // Service-spezifische Optionen
  const asbestMaterials = useMemo(() => [
    { id: 'eternit', name: 'Eternitplatten (schwach gebunden)', factor: 1.0 },
    { id: 'spray', name: 'Spritzasbest (stark gebunden)', factor: 2.2 },
    { id: 'floor-tiles', name: 'Bodenbelag (Vinyl-Asbest)', factor: 1.1 },
    { id: 'cement-pipes', name: 'Asbestzement-Rohre', factor: 1.3 },
    { id: 'insulation', name: 'Isolierung/Dämmung', factor: 1.8 },
    { id: 'mixed', name: 'Verschiedene Materialien', factor: 1.5 }
  ], []);

  const contaminationLevels = useMemo(() => [
    { id: 'low', name: 'Gering (< 100 Fasern/m³)', factor: 1.0 },
    { id: 'medium', name: 'Mittel (100-1000 Fasern/m³)', factor: 1.25 },
    { id: 'high', name: 'Hoch (> 1000 Fasern/m³)', factor: 1.55 },
    { id: 'critical', name: 'Kritisch (> 10.000 Fasern/m³)', factor: 1.9 }
  ], []);

  const roomTypes = useMemo(() => [
    { id: 'office', name: 'Büroräume', factor: 1.0 },
    { id: 'basement', name: 'Keller/Technikräume', factor: 1.1 },
    { id: 'residential', name: 'Wohnräume', factor: 1.05 },
    { id: 'bathroom', name: 'Feuchträume', factor: 1.15 },
    { id: 'industrial', name: 'Produktionshallen', factor: 1.25 }
  ], []);

  const kmfTypes = useMemo(() => [
    { id: 'glass-wool', name: 'Glaswolle', factor: 1.0 },
    { id: 'rock-wool', name: 'Steinwolle', factor: 1.05 },
    { id: 'ceramic-fiber', name: 'Keramikfaser', factor: 1.4 },
    { id: 'mixed-kmf', name: 'Verschiedene KMF', factor: 1.2 }
  ], []);

  const moldTypes = useMemo(() => [
    { id: 'surface', name: 'Oberflächenschimmel', factor: 1.0 },
    { id: 'wall-penetrating', name: 'Wanddurchdringend', factor: 1.3 },
    { id: 'structural', name: 'Konstruktionsschäden', factor: 1.6 },
    { id: 'black-mold', name: 'Schwarzschimmel', factor: 1.4 }
  ], []);

  const concreteWorks = useMemo(() => [
    { id: 'cutting', name: 'Betonschneiden', factor: 1.0 },
    { id: 'drilling', name: 'Kernbohrungen', factor: 1.15 },
    { id: 'demolition', name: 'Teilabbruch', factor: 1.3 },
    { id: 'surface-treatment', name: 'Oberflächenbearbeitung', factor: 0.85 }
  ], []);

  const additionalServicesOptions = useMemo(() => [
    { id: 'disposal', name: 'Fachgerechte Entsorgung', price: 8 }, // pro m²
    { id: 'analysis', name: 'Schadstoffanalyse', price: 450 },
    { id: 'monitoring', name: 'Luftüberwachung', price: 320 },
    { id: 'documentation', name: 'Erweiterte Dokumentation', price: 180 },
    { id: 'cleaning', name: 'Endreinigung', price: 12 }, // pro m²
    { id: 'measurement', name: 'Freimessung', price: 380 },
    { id: 'coordination', name: 'Behördenkoordination', price: 350 },
    { id: 'emergency', name: '24/7 Notdienst', price: 500 }
  ], []);

  const calculateDetailedPrice = useCallback(() => {
    if (calculatorData.selectedServices.length === 0 || !calculatorData.area) return;

    let totalPrice = 0;
    let breakdown: any = {
      services: {},
      factors: {},
      additionalServices: {},
      total: 0
    };

    // Basis-Services berechnen
    calculatorData.selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (!service) return;

      let servicePrice = service.basePrice * calculatorData.area;
      
      // Service-spezifische Faktoren anwenden
      if (serviceId === 'asbestsanierung') {
        const material = asbestMaterials.find(m => m.id === calculatorData.asbestMaterial);
        const contamination = contaminationLevels.find(c => c.id === calculatorData.contaminationLevel);
        const room = roomTypes.find(r => r.id === calculatorData.roomType);
        
        if (material) servicePrice *= material.factor;
        if (contamination) servicePrice *= contamination.factor;
        if (room) servicePrice *= room.factor;
        
        // Entsorgungsdistanz berücksichtigen
        if (calculatorData.disposalDistance > 50) {
          servicePrice += (calculatorData.disposalDistance - 50) * 2 * calculatorData.area;
        }
      }
      
      if (serviceId === 'kmf-sanierung') {
        const kmf = kmfTypes.find(k => k.id === calculatorData.kmfType);
        if (kmf) servicePrice *= kmf.factor;
      }
      
      if (serviceId === 'schimmelsanierung') {
        const mold = moldTypes.find(m => m.id === calculatorData.moldType);
        if (mold) servicePrice *= mold.factor;
      }
      
      if (serviceId === 'betonarbeiten') {
        const work = concreteWorks.find(w => w.id === calculatorData.concreteWork);
        if (work) servicePrice *= work.factor;
      }

      breakdown.services[serviceId] = {
        name: service.name,
        basePrice: service.basePrice * calculatorData.area,
        finalPrice: servicePrice
      };
      
      totalPrice += servicePrice;
    });

    // Allgemeine Faktoren anwenden
    const buildingType = buildingTypes.find(b => b.id === calculatorData.buildingType);
    const buildingAge = buildingAges.find(a => a.id === calculatorData.buildingAge);
    const urgency = urgencyOptions.find(u => u.id === calculatorData.urgency);
    const accessibility = accessibilityOptions.find(a => a.id === calculatorData.accessibility);

    if (buildingType) {
      breakdown.factors.buildingType = buildingType.factor;
      totalPrice *= buildingType.factor;
    }
    if (buildingAge) {
      breakdown.factors.buildingAge = buildingAge.factor;
      totalPrice *= buildingAge.factor;
    }
    if (urgency) {
      breakdown.factors.urgency = urgency.factor;
      totalPrice *= urgency.factor;
    }
    if (accessibility) {
      breakdown.factors.accessibility = accessibility.factor;
      totalPrice *= accessibility.factor;
    }

    // Zusatzleistungen hinzufügen
    calculatorData.additionalServices.forEach(serviceId => {
      const additional = additionalServicesOptions.find(a => a.id === serviceId);
      if (additional) {
        let additionalPrice = additional.price;
        
        // Flächenabhängige Services
        if (serviceId === 'disposal' || serviceId === 'cleaning') {
          additionalPrice = additional.price * calculatorData.area;
        }
        
        breakdown.additionalServices[serviceId] = {
          name: additional.name,
          price: additionalPrice,
          perM2: serviceId === 'disposal' || serviceId === 'cleaning'
        };
        totalPrice += additionalPrice;
      }
    });

    breakdown.total = Math.round(totalPrice);
    setCalculatedPrice(Math.round(totalPrice));
    setPriceBreakdown(breakdown);
  }, [calculatorData, services, asbestMaterials, contaminationLevels, roomTypes, kmfTypes, moldTypes, concreteWorks, buildingTypes, buildingAges, urgencyOptions, accessibilityOptions, additionalServicesOptions]);

  useEffect(() => {
    calculateDetailedPrice();
  }, [calculateDetailedPrice]);

  const getSteps = () => {
    const baseSteps = [
      { id: 'services', title: 'Service Auswahl', subtitle: 'Welche Leistungen benötigen Sie?', icon: 'list' },
      { id: 'basic', title: 'Grunddaten', subtitle: 'Gebäude und Projektinfos', icon: 'building' },
    ];

    // Service-spezifische Schritte hinzufügen
    if (calculatorData.selectedServices.includes('asbestsanierung')) {
      baseSteps.push({ id: 'asbestos', title: 'Asbest Details', subtitle: 'Materialart und Kontamination', icon: 'shield' });
    }
    if (calculatorData.selectedServices.includes('kmf-sanierung')) {
      baseSteps.push({ id: 'kmf', title: 'KMF Details', subtitle: 'Faserart und Dicke', icon: 'warning' });
    }
    if (calculatorData.selectedServices.includes('schimmelsanierung')) {
      baseSteps.push({ id: 'mold', title: 'Schimmel Details', subtitle: 'Art und Ausbreitung', icon: 'alert' });
    }
    if (calculatorData.selectedServices.includes('betonarbeiten')) {
      baseSteps.push({ id: 'concrete', title: 'Beton Details', subtitle: 'Arbeitsart und Material', icon: 'cube' });
    }
    if (calculatorData.selectedServices.includes('entkernung')) {
      baseSteps.push({ id: 'demolition', title: 'Entkernung Details', subtitle: 'Umfang und Materialien', icon: 'home' });
    }
    if (calculatorData.selectedServices.includes('beratung')) {
      baseSteps.push({ id: 'consulting', title: 'Beratung Details', subtitle: 'Art und Komplexität', icon: 'users' });
    }

    baseSteps.push(
      { id: 'additional', title: 'Zusatzleistungen', subtitle: 'Weitere Services', icon: 'plus' },
      { id: 'contact', title: 'Kontaktdaten', subtitle: 'Für Ihr Angebot', icon: 'mail' }
    );

    return baseSteps;
  };

  const steps = getSteps();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (updates: Partial<CalculatorData>) => {
    setCalculatorData(prev => ({ ...prev, ...updates }));
  };

  const renderStep = () => {
    const step = steps[currentStep];
    
    switch (step.id) {
      case 'services':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-oxford-blue mb-4">Welche Services benötigen Sie?</h2>
              <p className="text-gray-600 text-lg">Wählen Sie eine oder mehrere Leistungen aus. Der Rechner passt sich automatisch an Ihre Auswahl an.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    const isSelected = calculatorData.selectedServices.includes(service.id);
                    if (isSelected) {
                      updateData({
                        selectedServices: calculatorData.selectedServices.filter(s => s !== service.id)
                      });
                    } else {
                      updateData({
                        selectedServices: [...calculatorData.selectedServices, service.id]
                      });
                    }
                  }}
                  className={`
                    relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 min-h-[200px]
                    ${calculatorData.selectedServices.includes(service.id)
                      ? 'border-cerulean bg-gradient-to-br from-cerulean/10 to-indigo-dye/10 shadow-lg transform scale-105'
                      : 'border-gray-200 bg-white hover:border-cerulean/50 hover:shadow-md hover:scale-102'}
                  `}
                >
                  <div className="flex flex-col h-full">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center mb-4 
                      ${calculatorData.selectedServices.includes(service.id)
                        ? 'bg-gradient-to-br from-cerulean to-indigo-dye'
                        : 'bg-gray-100'}
                    `}>
                      <Icon 
                        name={service.icon} 
                        size={32} 
                        color={calculatorData.selectedServices.includes(service.id) ? 'white' : '#6B7280'} 
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-oxford-blue mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                    <p className="text-cerulean font-semibold">ab {service.basePrice}€/m²</p>
                    
                    {calculatorData.selectedServices.includes(service.id) && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center">
                          <Icon name="check" size={16} color="white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {calculatorData.selectedServices.length > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Ausgewählte Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {calculatorData.selectedServices.map(serviceId => {
                    const service = services.find(s => s.id === serviceId);
                    return service ? (
                      <span key={serviceId} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {service.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        );

      case 'basic':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Grunddaten Ihres Projekts</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Geschätzte Fläche in m²
                </label>
                <input
                  type="number"
                  value={calculatorData.area || ''}
                  onChange={(e) => updateData({ area: Number(e.target.value) })}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none text-base sm:text-lg min-h-[44px]"
                  placeholder="z.B. 150"
                />
                {calculatorData.area > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Das entspricht etwa {Math.round(calculatorData.area / 20)} durchschnittlichen Räumen
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Gebäudetyp
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {buildingTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => updateData({ buildingType: type.id })}
                      className={`
                        relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center
                        ${calculatorData.buildingType === type.id
                          ? 'border-cerulean bg-cerulean/10 shadow-md'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="font-semibold text-sm">{type.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {type.factor === 1.0 ? 'Standard' : `${type.factor}x Faktor`}
                      </div>
                      {calculatorData.buildingType === type.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                          <Icon name="check" size={10} color="white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Baujahr
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {buildingAges.map((age) => (
                    <div
                      key={age.id}
                      onClick={() => updateData({ buildingAge: age.id })}
                      className={`
                        relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center
                        ${calculatorData.buildingAge === age.id
                          ? 'border-cerulean bg-cerulean/10 shadow-md'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="font-semibold text-sm">{age.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {age.factor === 1.0 ? 'Standard' : `${age.factor}x Faktor`}
                      </div>
                      {calculatorData.buildingAge === age.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                          <Icon name="check" size={10} color="white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Zeitrahmen
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {urgencyOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => updateData({ urgency: option.id })}
                      className={`
                        relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center
                        ${calculatorData.urgency === option.id
                          ? 'border-cerulean bg-cerulean/10 shadow-md'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                        ${option.id === 'emergency' ? 'ring-2 ring-red-200' : ''}
                      `}
                    >
                      <div className="font-semibold text-sm">{option.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {option.factor === 1.0 ? 'Standard' : `${option.factor}x Faktor`}
                      </div>
                      {option.id === 'emergency' && (
                        <div className="text-xs text-red-600 font-semibold mt-1">🚨 24/7</div>
                      )}
                      {calculatorData.urgency === option.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                          <Icon name="check" size={10} color="white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Standort (PLZ oder Stadt)
                </label>
                <input
                  type="text"
                  value={calculatorData.location}
                  onChange={(e) => updateData({ location: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. 10115 Berlin"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Zugänglichkeit
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {accessibilityOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => updateData({ accessibility: option.id })}
                      className={`
                        relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center
                        ${calculatorData.accessibility === option.id
                          ? 'border-cerulean bg-cerulean/10 shadow-md'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="font-semibold text-sm">{option.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {option.factor === 1.0 ? 'Standard' : `${option.factor}x Faktor`}
                      </div>
                      {calculatorData.accessibility === option.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                          <Icon name="check" size={10} color="white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'asbestos':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Asbest-spezifische Details</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Art des Asbestmaterials
              </label>
              <div className="space-y-3">
                {asbestMaterials.map((material) => (
                  <label
                    key={material.id}
                    className={`
                      flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
                      ${calculatorData.asbestMaterial === material.id
                        ? 'border-cerulean bg-cerulean/5'
                        : 'border-gray-200 hover:border-cerulean/50'}
                    `}
                  >
                    <input
                      type="radio"
                      name="asbestMaterial"
                      value={material.id}
                      checked={calculatorData.asbestMaterial === material.id}
                      onChange={(e) => updateData({ asbestMaterial: e.target.value })}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{material.name}</p>
                      <p className="text-sm text-gray-500">Kostenfaktor: {material.factor}x</p>
                    </div>
                    {calculatorData.asbestMaterial === material.id && (
                      <Icon name="check" size={20} className="text-cerulean" />
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Kontaminationsgrad
                </label>
                <div className="space-y-3">
                  {contaminationLevels.map((level) => (
                    <div
                      key={level.id}
                      onClick={() => updateData({ contaminationLevel: level.id })}
                      className={`
                        relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                        ${calculatorData.contaminationLevel === level.id
                          ? 'border-cerulean bg-cerulean/10 shadow-md'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                        ${level.id === 'critical' ? 'ring-2 ring-red-200' : ''}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-sm">{level.name}</div>
                          <div className="text-xs text-gray-500">
                            {level.factor === 1.0 ? 'Standard' : `${level.factor}x Faktor`}
                          </div>
                        </div>
                        {calculatorData.contaminationLevel === level.id && (
                          <div className="w-5 h-5 bg-cerulean rounded-full flex items-center justify-center">
                            <Icon name="check" size={12} color="white" />
                          </div>
                        )}
                      </div>
                      {level.id === 'critical' && (
                        <div className="text-xs text-red-600 font-semibold mt-2">⚠️ Höchste Sicherheitsstufe</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Raumtyp
                </label>
                <div className="space-y-3">
                  {roomTypes.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => updateData({ roomType: room.id })}
                      className={`
                        relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${calculatorData.roomType === room.id
                          ? 'border-cerulean bg-cerulean/10 shadow-sm'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-sm">{room.name}</div>
                          <div className="text-xs text-gray-500">
                            {room.factor === 1.0 ? 'Standard' : `${room.factor}x Faktor`}
                          </div>
                        </div>
                        {calculatorData.roomType === room.id && (
                          <div className="w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                            <Icon name="check" size={10} color="white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Entfernung zur nächsten Entsorgungsanlage (km)
                </label>
                <input
                  type="number"
                  value={calculatorData.disposalDistance || ''}
                  onChange={(e) => updateData({ disposalDistance: Number(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. 25"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Transportkosten werden ab 50km zusätzlich berechnet
                </p>
              </div>
            </div>
          </div>
        );

      case 'additional':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Zusätzliche Leistungen</h3>
            <p className="text-gray-600 mb-6">Wählen Sie weitere Services, die Sie benötigen:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {additionalServicesOptions.map((service) => (
                <label
                  key={service.id}
                  className={`
                    flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${calculatorData.additionalServices.includes(service.id)
                      ? 'border-cerulean bg-cerulean/5'
                      : 'border-gray-200 hover:border-cerulean/50'}
                  `}
                >
                  <input
                    type="checkbox"
                    value={service.id}
                    checked={calculatorData.additionalServices.includes(service.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateData({
                          additionalServices: [...calculatorData.additionalServices, service.id]
                        });
                      } else {
                        updateData({
                          additionalServices: calculatorData.additionalServices.filter(s => s !== service.id)
                        });
                      }
                    }}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-sm text-gray-500">
                      {service.id === 'disposal' || service.id === 'cleaning' 
                        ? `+${service.price}€/m²` 
                        : `+${service.price}€`
                      }
                    </p>
                  </div>
                  <div className={`
                    w-6 h-6 rounded border-2 flex items-center justify-center transition-all
                    ${calculatorData.additionalServices.includes(service.id)
                      ? 'bg-cerulean border-cerulean'
                      : 'border-gray-300'}
                  `}>
                    {calculatorData.additionalServices.includes(service.id) && (
                      <Icon name="check" size={16} color="white" />
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        );

      case 'kmf':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">KMF-spezifische Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Art der Mineralfasern
                </label>
                <div className="space-y-3">
                  {kmfTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => updateData({ kmfType: type.id })}
                      className={`
                        relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${calculatorData.kmfType === type.id
                          ? 'border-cerulean bg-cerulean/10 shadow-sm'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-sm">{type.name}</div>
                          <div className="text-xs text-gray-500">
                            {type.factor === 1.0 ? 'Standard' : `${type.factor}x Faktor`}
                          </div>
                        </div>
                        {calculatorData.kmfType === type.id && (
                          <div className="w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                            <Icon name="check" size={10} color="white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Materialdicke
                </label>
                <input
                  type="text"
                  value={calculatorData.kmfThickness}
                  onChange={(e) => updateData({ kmfThickness: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. 10-20cm"
                />
              </div>
            </div>
          </div>
        );

      case 'mold':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Schimmel-spezifische Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Befallsgrad
                </label>
                <input
                  type="text"
                  value={calculatorData.moldArea}
                  onChange={(e) => updateData({ moldArea: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. punktuell, großflächig"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Art des Schimmelbefalls
                </label>
                <div className="space-y-3">
                  {moldTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => updateData({ moldType: type.id })}
                      className={`
                        relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${calculatorData.moldType === type.id
                          ? 'border-cerulean bg-cerulean/10 shadow-sm'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                        ${type.id === 'black-mold' ? 'ring-2 ring-yellow-200' : ''}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-sm">{type.name}</div>
                          <div className="text-xs text-gray-500">
                            {type.factor === 1.0 ? 'Standard' : `${type.factor}x Faktor`}
                          </div>
                        </div>
                        {calculatorData.moldType === type.id && (
                          <div className="w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                            <Icon name="check" size={10} color="white" />
                          </div>
                        )}
                      </div>
                      {type.id === 'black-mold' && (
                        <div className="text-xs text-yellow-600 font-semibold mt-2">⚠️ Besonders gefährlich</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Ursache der Feuchtigkeit
                </label>
                <input
                  type="text"
                  value={calculatorData.moistureCause}
                  onChange={(e) => updateData({ moistureCause: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. Rohrbruch, undichte Fenster, Kondensation"
                />
              </div>
            </div>
          </div>
        );

      case 'concrete':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Beton-spezifische Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Art der Betonarbeiten
                </label>
                <div className="space-y-3">
                  {concreteWorks.map((work) => (
                    <div
                      key={work.id}
                      onClick={() => updateData({ concreteWork: work.id })}
                      className={`
                        relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${calculatorData.concreteWork === work.id
                          ? 'border-cerulean bg-cerulean/10 shadow-sm'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-sm">{work.name}</div>
                          <div className="text-xs text-gray-500">
                            {work.factor === 1.0 ? 'Standard' : `${work.factor}x Faktor`}
                          </div>
                        </div>
                        {calculatorData.concreteWork === work.id && (
                          <div className="w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                            <Icon name="check" size={10} color="white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Betondicke
                </label>
                <input
                  type="text"
                  value={calculatorData.concreteThickness}
                  onChange={(e) => updateData({ concreteThickness: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. 20cm, 30-40cm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Bewehrung
                </label>
                <input
                  type="text"
                  value={calculatorData.reinforcement}
                  onChange={(e) => updateData({ reinforcement: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. Stahlbeton, Spannbeton, unbewehrt"
                />
              </div>
            </div>
          </div>
        );

      case 'demolition':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Entkernung-spezifische Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Entkernungsumfang
                </label>
                <input
                  type="text"
                  value={calculatorData.demolitionScope}
                  onChange={(e) => updateData({ demolitionScope: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. Vollentkernung, Teilentkernung, nur Innenwände"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Zu entfernende Materialien
                </label>
                <div className="space-y-2">
                  {['Innenwände', 'Bodenbeläge', 'Decken', 'Sanitär', 'Elektrik', 'Heizung'].map(material => (
                    <label key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        value={material}
                        checked={calculatorData.materialRemoval.includes(material)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateData({
                              materialRemoval: [...calculatorData.materialRemoval, material]
                            });
                          } else {
                            updateData({
                              materialRemoval: calculatorData.materialRemoval.filter(m => m !== material)
                            });
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'consulting':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Beratung-spezifische Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Art der Beratung
                </label>
                <input
                  type="text"
                  value={calculatorData.consultationType}
                  onChange={(e) => updateData({ consultationType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="z.B. Schadstoffanalyse, Sanierungsplanung, Behördengänge"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Projekt-Komplexität
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'simple', name: 'Einfach', factor: 1.0, description: 'Standard-Projekt' },
                    { id: 'medium', name: 'Mittel', factor: 1.2, description: 'Mehrere Gewerke' },
                    { id: 'complex', name: 'Komplex', factor: 1.5, description: 'Behördengänge' },
                    { id: 'very-complex', name: 'Sehr komplex', factor: 1.8, description: 'Denkmalschutz' }
                  ].map((complexity) => (
                    <div
                      key={complexity.id}
                      onClick={() => updateData({ projectComplexity: complexity.id })}
                      className={`
                        relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 text-center
                        ${calculatorData.projectComplexity === complexity.id
                          ? 'border-cerulean bg-cerulean/10 shadow-sm'
                          : 'border-gray-200 hover:border-cerulean/50 hover:bg-gray-50'}
                      `}
                    >
                      <div className="font-semibold text-sm">{complexity.name}</div>
                      <div className="text-xs text-gray-500">{complexity.description}</div>
                      {calculatorData.projectComplexity === complexity.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-cerulean rounded-full flex items-center justify-center">
                          <Icon name="check" size={10} color="white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Kontaktdaten für Ihr detailliertes Angebot</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vor- und Nachname *
                </label>
                <input
                  type="text"
                  value={calculatorData.contactInfo.name}
                  onChange={(e) => updateData({
                    contactInfo: { ...calculatorData.contactInfo, name: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Unternehmen (optional)
                </label>
                <input
                  type="text"
                  value={calculatorData.contactInfo.company}
                  onChange={(e) => updateData({
                    contactInfo: { ...calculatorData.contactInfo, company: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="Mustermann GmbH"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  value={calculatorData.contactInfo.email}
                  onChange={(e) => updateData({
                    contactInfo: { ...calculatorData.contactInfo, email: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="max@beispiel.de"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  value={calculatorData.contactInfo.phone}
                  onChange={(e) => updateData({
                    contactInfo: { ...calculatorData.contactInfo, phone: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="+49 123 456789"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse (optional)
                </label>
                <input
                  type="text"
                  value={calculatorData.contactInfo.address}
                  onChange={(e) => updateData({
                    contactInfo: { ...calculatorData.contactInfo, address: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-cerulean focus:outline-none"
                  placeholder="Musterstraße 123, 10115 Berlin"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-sm text-blue-800">
                <Icon name="info" size={16} className="inline mr-2" />
                Ihre Daten werden vertraulich behandelt und ausschließlich für die Angebotserstellung verwendet.
                Sie erhalten binnen 24 Stunden ein detailliertes, kostenloses Angebot.
              </p>
            </div>
          </div>
        );

      default:
        return <div>Step not implemented</div>;
    }
  };

  if (showResult) {
    return (
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="check" size={48} color="white" />
          </div>
          <h2 className="text-4xl font-bold text-oxford-blue mb-4">
            Ihre detaillierte Kostenschätzung
          </h2>
          <p className="text-xl text-gray-600">
            Basierend auf Ihren spezifischen Anforderungen
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Haupt-Preisanzeige */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-cerulean to-indigo-dye text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Geschätzte Gesamtkosten</h3>
              <div className="text-5xl font-bold mb-4">
                {calculatedPrice.toLocaleString('de-DE')}€
              </div>
              <p className="text-cerulean-100">
                zzgl. 19% MwSt. • Fläche: {calculatorData.area}m² • Services: {calculatorData.selectedServices.length}
              </p>
            </div>

            {/* Kostenaufschlüsselung */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold mb-6">Detaillierte Kostenaufschlüsselung</h4>
              
              {Object.entries(priceBreakdown.services || {}).map(([serviceId, details]: [string, any]) => (
                <div key={serviceId} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <p className="font-semibold">{details.name}</p>
                    <p className="text-sm text-gray-500">{calculatorData.area}m² × Basisfaktoren</p>
                  </div>
                  <p className="font-bold text-lg">{Math.round(details.finalPrice).toLocaleString('de-DE')}€</p>
                </div>
              ))}

              {Object.entries(priceBreakdown.additionalServices || {}).map(([serviceId, details]: [string, any]) => (
                <div key={serviceId} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <p className="font-semibold">{details.name}</p>
                  <p className="font-bold">{details.price.toLocaleString('de-DE')}€</p>
                </div>
              ))}

              <div className="flex justify-between items-center py-4 border-t-2 border-cerulean">
                <p className="text-xl font-bold">Gesamtsumme</p>
                <p className="text-2xl font-bold text-cerulean">{calculatedPrice.toLocaleString('de-DE')}€</p>
              </div>
            </div>
          </div>

          {/* Aktionen und Infos */}
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">💰 Finanzierung verfügbar</h4>
              <p className="text-sm text-green-700 mb-3">
                Ab {Math.round(calculatedPrice/60)}€/Monat
              </p>
              <div className="space-y-2 text-xs text-green-600">
                <div className="flex justify-between">
                  <span>12 Monate:</span>
                  <span className="font-bold">{Math.round(calculatedPrice/12)}€/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>24 Monate:</span>
                  <span className="font-bold">{Math.round(calculatedPrice/24)}€/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>36 Monate:</span>
                  <span className="font-bold">{Math.round(calculatedPrice/36)}€/Monat</span>
                </div>
              </div>
            </div>

            {/* Call-to-Actions */}
            <div className="space-y-4">
              <Link 
                href={`/kontakt?services=${calculatorData.selectedServices.join(',')}&price=${calculatedPrice}`}
                className="w-full bg-gradient-to-r from-cerulean to-indigo-dye text-white py-4 px-6 rounded-xl font-bold text-center block hover:shadow-lg transition-all"
              >
                Kostenloses Angebot anfordern
              </Link>
              
              <a 
                href="tel:+491748083023"
                className="w-full bg-red-500 text-white py-4 px-6 rounded-xl font-bold text-center block hover:shadow-lg transition-all"
              >
                📞 Sofort anrufen: +49 174 8083023
              </a>
              
              <Link 
                href="/termin"
                className="w-full border-2 border-cerulean text-cerulean py-4 px-6 rounded-xl font-bold text-center block hover:bg-cerulean hover:text-white transition-all"
              >
                Vor-Ort-Termin vereinbaren
              </Link>
            </div>

            {/* Garantien */}
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <Icon name="shield-check" size={24} className="mx-auto mb-1 text-green-500" />
                <p className="text-xs text-gray-600">Festpreis-Garantie</p>
              </div>
              <div>
                <Icon name="clock" size={24} className="mx-auto mb-1 text-blue-500" />
                <p className="text-xs text-gray-600">24h Angebot</p>
              </div>
              <div>
                <Icon name="star" size={24} className="mx-auto mb-1 text-yellow-500" />
                <p className="text-xs text-gray-600">5★ Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projekt-Zusammenfassung */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h4 className="text-xl font-bold mb-4">Projekt-Zusammenfassung</h4>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-600">Services</p>
              <p>{calculatorData.selectedServices.map(id => services.find(s => s.id === id)?.name).join(', ')}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Fläche</p>
              <p>{calculatorData.area} m²</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Gebäudetyp</p>
              <p>{buildingTypes.find(b => b.id === calculatorData.buildingType)?.name || 'Nicht angegeben'}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Zeitrahmen</p>
              <p>{urgencyOptions.find(u => u.id === calculatorData.urgency)?.name || 'Nicht angegeben'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div className={`
                relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2
                ${index <= currentStep
                  ? 'bg-gradient-to-br from-cerulean to-indigo-dye text-white border-cerulean shadow-lg'
                  : 'bg-gray-100 text-gray-400 border-gray-300'}
              `}>
                <Icon name={step.icon} size={24} />
                {index < currentStep && (
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  flex-1 h-2 mx-4 rounded-full transition-all duration-500
                  ${index < currentStep ? 'bg-gradient-to-r from-cerulean to-indigo-dye' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-oxford-blue">{steps[currentStep].title}</h3>
          <p className="text-gray-600 text-lg">{steps[currentStep].subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">Schritt {currentStep + 1} von {steps.length}</p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-200 min-h-[500px]">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`
            px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2
            ${currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
        >
          <Icon name="arrow" size={16} className="rotate-180" />
          Zurück
        </button>

        <div className="flex items-center gap-6">
          {calculatedPrice > 0 && currentStep > 1 && (
            <div className="text-right">
              <p className="text-sm text-gray-500">Aktuelle Schätzung:</p>
              <p className="text-2xl font-bold text-cerulean">
                {calculatedPrice.toLocaleString('de-DE')}€
              </p>
              <p className="text-xs text-gray-500">zzgl. MwSt.</p>
            </div>
          )}
          
          <PremiumButton
            onClick={handleNext}
            disabled={
              (currentStep === 0 && calculatorData.selectedServices.length === 0) ||
              (currentStep === 1 && (!calculatorData.area || !calculatorData.buildingType || !calculatorData.urgency)) ||
              (steps[currentStep].id === 'contact' && (!calculatorData.contactInfo.name || !calculatorData.contactInfo.email || !calculatorData.contactInfo.phone))
            }
            size="large"
          >
            {currentStep === steps.length - 1 ? 'Angebot berechnen' : 'Weiter'}
            <Icon name="arrow" size={16} className="ml-2" />
          </PremiumButton>
        </div>
      </div>
    </div>
  );
}