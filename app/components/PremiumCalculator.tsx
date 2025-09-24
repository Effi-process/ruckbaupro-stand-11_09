'use client'
import { useState, useEffect, useCallback, useMemo } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';
import Link from 'next/link';

interface CalculatorStep {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export default function PremiumCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: '',
    area: 0,
    material: '',
    urgency: '',
    additionalServices: [] as string[],
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  });
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [showUrgency, setShowUrgency] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [recentCalculations, setRecentCalculations] = useState(0);
  const [liveViewers, setLiveViewers] = useState(0);
  const [instantPriceVisible, setInstantPriceVisible] = useState(false);
  const [financingOptions, setFinancingOptions] = useState(false);

  const steps: CalculatorStep[] = [
    { id: 'project', title: 'Projektart', subtitle: 'Was möchten Sie sanieren?', icon: 'building' },
    { id: 'details', title: 'Details', subtitle: 'Größe und Material', icon: 'ruler' },
    { id: 'urgency', title: 'Zeitrahmen', subtitle: 'Wie dringend ist es?', icon: 'clock' },
    { id: 'services', title: 'Zusatzleistungen', subtitle: 'Weitere Services?', icon: 'plus' },
    { id: 'contact', title: 'Kontakt', subtitle: 'Für Ihr Angebot', icon: 'mail' }
  ];

  const projectTypes = useMemo(() => [
    { id: 'roof', name: 'Dachsanierung', icon: 'shield', basePrice: 35 },
    { id: 'facade', name: 'Fassadensanierung', icon: 'layers', basePrice: 40 },
    { id: 'floor', name: 'Bodensanierung', icon: 'box', basePrice: 25 },
    { id: 'pipe', name: 'Rohrisolierung', icon: 'settings', basePrice: 45 },
    { id: 'complete', name: 'Komplettsanierung', icon: 'shield-check', basePrice: 55 }
  ], []);

  const materials = useMemo(() => [
    { id: 'eternit', name: 'Eternitplatten', factor: 1.0 },
    { id: 'spray', name: 'Spritzasbest', factor: 2.5 },
    { id: 'vinyl', name: 'Vinyl-Asbest', factor: 0.8 },
    { id: 'cement', name: 'Asbestzement', factor: 1.2 },
    { id: 'mixed', name: 'Verschiedene', factor: 1.5 }
  ], []);

  const urgencyOptions = useMemo(() => [
    { id: 'normal', name: 'Normal (4-6 Wochen)', factor: 1.0 },
    { id: 'fast', name: 'Schnell (2-3 Wochen)', factor: 1.15 },
    { id: 'express', name: 'Express (1 Woche)', factor: 1.35 },
    { id: 'emergency', name: 'Notfall (48h)', factor: 1.75 }
  ], []);

  const additionalServices = useMemo(() => [
    { id: 'disposal', name: 'Entsorgung inkl.', price: 180 },
    { id: 'analysis', name: 'Vorab-Analyse', price: 450 },
    { id: 'monitoring', name: 'Luftüberwachung', price: 350 },
    { id: 'documentation', name: 'Erweiterte Doku', price: 250 },
    { id: 'replacement', name: 'Ersatzmaterial', price: 0 }
  ], []);

  const calculatePrice = useCallback(() => {
    if (!formData.projectType || !formData.area || !formData.material || !formData.urgency) return;

    const project = projectTypes.find(p => p.id === formData.projectType);
    const material = materials.find(m => m.id === formData.material);
    const urgency = urgencyOptions.find(u => u.id === formData.urgency);

    if (!project || !material || !urgency) return;

    let price = project.basePrice * formData.area * material.factor * urgency.factor;

    formData.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        if (service.id === 'replacement') {
          price += formData.area * 25; // Ersatzmaterial pro m²
        } else {
          price += service.price;
        }
      }
    });

    setCalculatedPrice(Math.round(price));
    setDiscountPrice(Math.round(price * 0.85)); // 15% discount
  }, [formData.projectType, formData.area, formData.material, formData.urgency, formData.additionalServices, projectTypes, materials, urgencyOptions, additionalServices]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  useEffect(() => {
    // Show urgency after 10 seconds
    const timer = setTimeout(() => {
      setShowUrgency(true);
    }, 10000);

    // Simulate recent calculations and live viewers
    const calcInterval = setInterval(() => {
      setRecentCalculations(prev => prev + Math.floor(Math.random() * 2) + 1);
      setLiveViewers(Math.floor(Math.random() * 8) + 3); // 3-10 viewers
    }, 5000);

    // Show instant price after area input
    if (formData.area > 0 && formData.projectType) {
      setInstantPriceVisible(true);
    }

    // Countdown timer for discount
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const timeDiff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${hours}h ${minutes}m`);
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(calcInterval);
      clearInterval(countdownInterval);
    };
  }, [formData.area, formData.projectType]);

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

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Project Type
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6">Wählen Sie Ihre Projektart</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormData({ ...formData, projectType: type.id })}
                  className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-300
                    ${formData.projectType === type.id
                      ? 'border-cerulean/60 bg-white/25 scale-105 shadow-2xl backdrop-blur-2xl backdrop-saturate-200'
                      : 'border-white/30 bg-white/15 hover:border-cerulean/40 hover:shadow-xl hover:bg-white/20 backdrop-blur-xl backdrop-saturate-150'}
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md
                      ${formData.projectType === type.id
                        ? 'bg-gradient-to-br from-cerulean/80 to-indigo-dye/80 shadow-lg'
                        : 'bg-white/20 border border-white/30'}
                    `}>
                      <Icon name={type.icon} size={32} color={formData.projectType === type.id ? 'white' : '#6B7280'} />
                    </div>
                    <h4 className="font-semibold text-lg text-oxford-blue">{type.name}</h4>
                    <p className="text-sm text-indigo-dye/80 mt-1 font-medium">ab {type.basePrice}€/m²</p>
                  </div>
                  {formData.projectType === type.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center shadow-lg">
                        <Icon name="check" size={16} color="white" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 1: // Details
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">Projektdetails angeben</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Fläche in m² (geschätzt)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.area || ''}
                  onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-white/30 bg-white/15 backdrop-blur-md rounded-xl focus:border-cerulean focus:outline-none transition-colors"
                  placeholder="z.B. 150"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  m²
                </div>
              </div>
              {formData.area > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  Das entspricht etwa {Math.round(formData.area / 20)} Garagen
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Material-Typ
              </label>
              <div className="space-y-3">
                {materials.map((material) => (
                  <label
                    key={material.id}
                    className={`
                      flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all backdrop-blur-md
                      ${formData.material === material.id
                        ? 'border-cerulean/60 bg-white/25 shadow-lg'
                        : 'border-white/30 bg-white/15 hover:border-cerulean/40 hover:bg-white/20'}
                    `}
                  >
                    <input
                      type="radio"
                      name="material"
                      value={material.id}
                      checked={formData.material === material.id}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{material.name}</p>
                      <p className="text-sm text-gray-500">
                        Faktor: {material.factor}x
                      </p>
                    </div>
                    {formData.material === material.id && (
                      <div className="w-6 h-6 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center">
                        <Icon name="check" size={16} color="white" />
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Urgency
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">Wie dringend ist Ihr Projekt?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {urgencyOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFormData({ ...formData, urgency: option.id })}
                  className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-300 backdrop-blur-md
                    ${formData.urgency === option.id
                      ? 'border-cerulean/60 bg-white/25 scale-105 shadow-2xl backdrop-blur-xl'
                      : 'border-white/30 bg-white/15 hover:border-cerulean/40 hover:shadow-xl hover:bg-white/20'}
                  `}
                >
                  <h4 className="font-semibold text-lg mb-2">{option.name}</h4>
                  <p className="text-sm text-gray-500">
                    {option.factor > 1 ? `+${Math.round((option.factor - 1) * 100)}% Zuschlag` : 'Standardpreis'}
                  </p>
                  {option.id === 'emergency' && (
                    <div className="mt-3 inline-flex items-center text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                      <Icon name="warning" size={12} />
                      <span className="ml-1">24/7 Service</span>
                    </div>
                  )}
                  {formData.urgency === option.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center shadow-lg">
                        <Icon name="check" size={16} color="white" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 3: // Additional Services
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">Zusätzliche Leistungen</h3>
            <div className="space-y-3">
              {additionalServices.map((service) => (
                <label
                  key={service.id}
                  className={`
                    flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all backdrop-blur-md
                    ${formData.additionalServices.includes(service.id)
                      ? 'border-cerulean/60 bg-white/25 shadow-lg'
                      : 'border-white/30 bg-white/15 hover:border-cerulean/40 hover:bg-white/20'}
                  `}
                >
                  <input
                    type="checkbox"
                    value={service.id}
                    checked={formData.additionalServices.includes(service.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          additionalServices: [...formData.additionalServices, service.id]
                        });
                      } else {
                        setFormData({
                          ...formData,
                          additionalServices: formData.additionalServices.filter(s => s !== service.id)
                        });
                      }
                    }}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-sm text-gray-500">
                      {service.price > 0 ? `+${service.price}€` : 'Preis nach Aufwand'}
                    </p>
                  </div>
                  <div className={`
                    w-6 h-6 rounded border-2 flex items-center justify-center transition-all backdrop-blur-md
                    ${formData.additionalServices.includes(service.id)
                      ? 'bg-gradient-to-br from-cerulean to-indigo-dye border-cerulean/60'
                      : 'border-white/40 bg-white/10'}
                  `}>
                    {formData.additionalServices.includes(service.id) && (
                      <Icon name="check" size={16} color="white" />
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        );

      case 4: // Contact
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">Kontaktdaten für Ihr Angebot</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactInfo: { ...formData.contactInfo, name: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-white/30 bg-white/15 backdrop-blur-md rounded-xl focus:border-cerulean focus:outline-none transition-colors"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Firma (optional)
                </label>
                <input
                  type="text"
                  value={formData.contactInfo.company}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactInfo: { ...formData.contactInfo, company: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-white/30 bg-white/15 backdrop-blur-md rounded-xl focus:border-cerulean focus:outline-none transition-colors"
                  placeholder="Mustermann GmbH"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactInfo: { ...formData.contactInfo, email: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-white/30 bg-white/15 backdrop-blur-md rounded-xl focus:border-cerulean focus:outline-none transition-colors"
                  placeholder="max@beispiel.de"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactInfo: { ...formData.contactInfo, phone: e.target.value }
                  })}
                  className="w-full px-4 py-3 border-2 border-white/30 bg-white/15 backdrop-blur-md rounded-xl focus:border-cerulean focus:outline-none transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <p className="text-sm text-indigo-dye">
                <Icon name="info" size={16} className="inline mr-2" />
                Ihre Daten werden vertraulich behandelt und nur für die Angebotserstellung verwendet.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showResult) {
    return (
      <div className="text-center py-12">
        {/* Urgency Banner */}
        {showUrgency && (
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-2xl mb-8 animate-pulse">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="warning" size={20} />
              <span className="font-bold">LIMITIERTES ANGEBOT!</span>
            </div>
            <p className="text-sm">
              15% RABATT nur noch {timeLeft} gültig • {Math.floor(Math.random() * 5) + 3} andere Kunden schauen sich dieses Angebot an
            </p>
          </div>
        )}
        
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <Icon name="check" size={48} color="white" />
          </div>
          <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
            Ihre Premium-Kostenschätzung
          </h2>
          
          {/* Price Display with Discount */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="text-2xl font-bold text-gray-400 line-through">
                {calculatedPrice.toLocaleString('de-DE')}€
              </div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -15%
              </div>
            </div>
            <div className="text-6xl font-bold text-red-600 mb-2">
              {discountPrice.toLocaleString('de-DE')}€
            </div>
            <p className="text-gray-600">
              Sie sparen: {(calculatedPrice - discountPrice).toLocaleString('de-DE')}€
            </p>
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-800">
                  <Icon name="users" size={16} className="inline mr-2" />
                  {recentCalculations + 247} Berechnungen heute • ⭐⭐⭐⭐⭐ 4.9/5 Kundenbewertung
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></span>
                  {liveViewers} schauen gerade dieses Angebot an
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">-15%</div>
                <div className="text-xs text-blue-600">Heute sparen</div>
              </div>
            </div>
          </div>

          {/* Financing Banner */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-green-800">💳 FINANZIERUNG VERFÜGBAR</p>
                <p className="text-xs text-green-600">Ab {Math.round(discountPrice/60)}€/Monat • 0% Zinsen für 12 Monate</p>
              </div>
              <button 
                onClick={() => setFinancingOptions(!financingOptions)}
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Details
              </button>
            </div>
            {financingOptions && (
              <div className="mt-3 pt-3 border-t border-green-200">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center bg-off-white rounded p-2">
                    <div className="font-bold text-green-700">{Math.round(discountPrice/12)}€</div>
                    <div className="text-green-600">12 Monate</div>
                  </div>
                  <div className="text-center bg-off-white rounded p-2">
                    <div className="font-bold text-green-700">{Math.round(discountPrice/24)}€</div>
                    <div className="text-green-600">24 Monate</div>
                  </div>
                  <div className="text-center bg-off-white rounded p-2">
                    <div className="font-bold text-green-700">{Math.round(discountPrice/36)}€</div>
                    <div className="text-green-600">36 Monate</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="font-semibold text-lg mb-4">Zusammenfassung:</h3>
          <div className="space-y-2 text-left">
            <p><strong>Projektart:</strong> {projectTypes.find(p => p.id === formData.projectType)?.name}</p>
            <p><strong>Fläche:</strong> {formData.area} m²</p>
            <p><strong>Material:</strong> {materials.find(m => m.id === formData.material)?.name}</p>
            <p><strong>Zeitrahmen:</strong> {urgencyOptions.find(u => u.id === formData.urgency)?.name}</p>
            {formData.additionalServices.length > 0 && (
              <p><strong>Zusatzleistungen:</strong> {formData.additionalServices.length} ausgewählt</p>
            )}
          </div>
        </div>

        {/* Enhanced Multiple CTA Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-bl">NOTFALL</div>
            <Icon name="phone" size={32} className="mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-2">24/7 HOTLINE</h3>
            <p className="text-sm mb-4 opacity-90">Sofortige Hilfe bei Asbestfund</p>
            <a href="tel:+491748083023" className="bg-off-white text-red-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block">
              NOTFALL: +49 174 8083023
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-bl">BELIEBT</div>
            <Icon name="calendar" size={32} className="mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-2">TERMIN BUCHEN</h3>
            <p className="text-sm mb-4 opacity-90">Kostenlose Vor-Ort-Beratung</p>
            <Link href="/termin?price={discountPrice}" className="bg-off-white text-green-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block">
              Termin vereinbaren
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-6 rounded-2xl text-center">
            <Icon name="mail" size={32} className="mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-2">ANGEBOT ERHALTEN</h3>
            <p className="text-sm mb-4 opacity-90">Detailliertes Angebot per E-Mail</p>
            <Link href="/kontakt?price={discountPrice}" className="bg-off-white text-[#0066CC] px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block">
              Angebot anfordern
            </Link>
          </div>
        </div>

        {/* WhatsApp Quick Contact */}
        <div className="bg-green-50 rounded-xl p-4 mb-8 border border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="message-circle" size={20} color="white" />
              </div>
              <div>
                <p className="font-bold text-green-800">WhatsApp Sofort-Beratung</p>
                <p className="text-sm text-green-600">Senden Sie uns Fotos vom Schaden für eine Blitz-Einschätzung</p>
              </div>
            </div>
            <a 
              href="https://wa.me/4917612345678?text=Hallo, ich habe gerade eine Kostenschätzung von {discountPrice}€ erhalten und möchte mehr erfahren."
              className="bg-green-500 text-white px-4 py-2 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              Chat starten
            </a>
          </div>
        </div>
        
        {/* Guarantee Badges */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <Icon name="shield-check" size={24} className="mx-auto mb-2 text-green-500" />
            <p className="text-xs text-gray-600">100% Festpreis-Garantie</p>
          </div>
          <div className="text-center">
            <Icon name="clock" size={24} className="mx-auto mb-2 text-blue-500" />
            <p className="text-xs text-gray-600">24h Angebot-Garantie</p>
          </div>
          <div className="text-center">
            <Icon name="star" size={24} className="mx-auto mb-2 text-yellow-500" />
            <p className="text-xs text-gray-600">5★ Service-Garantie</p>
          </div>
        </div>
        
        <PremiumButton
          onClick={() => {
            setShowResult(false);
            setCurrentStep(0);
          }}
          variant="outline"
          size="large"
        >
          Neue Berechnung starten
        </PremiumButton>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div className={`
                relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md
                ${index <= currentStep
                  ? 'bg-gradient-to-br from-cerulean/80 to-indigo-dye/80 text-white shadow-lg border border-white/30'
                  : 'bg-white/20 text-indigo-dye border border-white/30'}
              `}>
                <Icon name={step.icon} size={20} />
                {index < currentStep && (
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  flex-1 h-1 mx-3 transition-all duration-500
                  ${index < currentStep ? 'bg-[#0066CC]' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-[#2C4F5E] line-clamp-1 overflow-hidden">{steps[currentStep].title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 overflow-hidden">{steps[currentStep].subtitle}</p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white/15 backdrop-blur-xl backdrop-saturate-150 rounded-3xl shadow-xl p-8 mb-8 border border-white/30">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`
            px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-md
            ${currentStep === 0
              ? 'bg-white/10 text-gray-400 cursor-not-allowed border border-white/20'
              : 'bg-white/20 text-oxford-blue hover:bg-white/30 border border-white/30'}
          `}
        >
          Zurück
        </button>

        <div className="flex items-center gap-2">
          {calculatedPrice > 0 && currentStep > 1 && (
            <div className="text-right mr-4">
              <p className="text-sm text-gray-500">Geschätzte Kosten:</p>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-400 line-through">
                  {calculatedPrice.toLocaleString('de-DE')}€
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {Math.round(calculatedPrice * 0.85).toLocaleString('de-DE')}€
                </p>
                <p className="text-xs text-green-600">15% Sofort-Rabatt</p>
              </div>
            </div>
          )}
          
          <PremiumButton
            onClick={handleNext}
            disabled={
              (currentStep === 0 && !formData.projectType) ||
              (currentStep === 1 && (!formData.area || !formData.material)) ||
              (currentStep === 2 && !formData.urgency) ||
              (currentStep === 4 && (!formData.contactInfo.name || !formData.contactInfo.email || !formData.contactInfo.phone))
            }
          >
            {currentStep === steps.length - 1 ? 'Angebot erhalten' : 'Weiter'}
          </PremiumButton>
        </div>
      </div>
    </div>
  );
}