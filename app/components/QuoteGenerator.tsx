'use client'
import { useState } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface QuoteItem {
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
}

interface Quote {
  id: string;
  date: string;
  validUntil: string;
  client: {
    name: string;
    company: string;
    address: string;
    email: string;
    phone: string;
  };
  project: {
    title: string;
    address: string;
    type: string;
    area: number;
    startDate: string;
    duration: string;
  };
  items: QuoteItem[];
  subtotal: number;
  tax: number;
  total: number;
  notes: string;
  terms: string[];
  status: 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';
}

export default function QuoteGenerator() {
  const [activeTab, setActiveTab] = useState<'create' | 'templates' | 'history'>('create');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  
  // Form state
  const [clientData, setClientData] = useState({
    name: '',
    company: '',
    address: '',
    email: '',
    phone: ''
  });
  
  const [projectData, setProjectData] = useState({
    title: '',
    address: '',
    type: 'asbestos_roof',
    area: 0,
    startDate: '',
    duration: '1-2 Wochen'
  });
  
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    {
      description: 'Einrichtung und Absicherung der Baustelle',
      quantity: 1,
      unit: 'pauschal',
      unitPrice: 1500,
      total: 1500
    }
  ]);

  // Templates
  const templates = [
    {
      id: 'roof_small',
      name: 'Asbestdach Klein (bis 200m²)',
      description: 'Standardvorlage für kleine Dachsanierungen',
      basePrice: 7000
    },
    {
      id: 'roof_medium',
      name: 'Asbestdach Mittel (200-500m²)',
      description: 'Standardvorlage für mittlere Dachsanierungen',
      basePrice: 15000
    },
    {
      id: 'facade',
      name: 'Asbestfassade',
      description: 'Vorlage für Fassadensanierungen',
      basePrice: 12000
    },
    {
      id: 'analysis',
      name: 'Schadstoffanalyse',
      description: 'Materialproben und Laboranalyse',
      basePrice: 1200
    }
  ];

  // Recent quotes
  const recentQuotes: Quote[] = [
    {
      id: 'Q2024-001',
      date: '2024-01-15',
      validUntil: '2024-02-15',
      client: {
        name: 'Thomas Müller',
        company: 'Müller Immobilien GmbH',
        address: 'Hauptstr. 10, 80333 München',
        email: 'mueller@immobilien.de',
        phone: '+49 89 123456'
      },
      project: {
        title: 'Asbestdachsanierung Wohnhaus',
        address: 'Bergstr. 15, 80333 München',
        type: 'Asbestdach',
        area: 250,
        startDate: '2024-02-01',
        duration: '2 Wochen'
      },
      items: [
        {
          description: 'Einrichtung und Absicherung der Baustelle',
          quantity: 1,
          unit: 'pauschal',
          unitPrice: 1500,
          total: 1500
        },
        {
          description: 'Asbestdachplatten demontieren und entsorgen',
          quantity: 250,
          unit: 'm²',
          unitPrice: 35,
          total: 8750
        }
      ],
      subtotal: 10250,
      tax: 1947.50,
      total: 12197.50,
      notes: 'Gerüst wird vom Auftraggeber gestellt',
      terms: ['Zahlungsziel: 14 Tage', 'Anzahlung: 30% bei Auftragserteilung'],
      status: 'sent'
    }
  ];

  const addQuoteItem = () => {
    setQuoteItems([...quoteItems, {
      description: '',
      quantity: 1,
      unit: 'Stück',
      unitPrice: 0,
      total: 0
    }]);
  };

  const updateQuoteItem = (index: number, field: keyof QuoteItem, value: any) => {
    const updated = [...quoteItems];
    updated[index] = { ...updated[index], [field]: value };
    
    // Recalculate total
    if (field === 'quantity' || field === 'unitPrice') {
      updated[index].total = updated[index].quantity * updated[index].unitPrice;
    }
    
    setQuoteItems(updated);
  };

  const removeQuoteItem = (index: number) => {
    setQuoteItems(quoteItems.filter((_, i) => i !== index));
  };

  const calculateTotals = () => {
    const subtotal = quoteItems.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.19;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const loadTemplate = (templateId: string) => {
    switch (templateId) {
      case 'roof_small':
        setQuoteItems([
          {
            description: 'Einrichtung und Absicherung der Baustelle',
            quantity: 1,
            unit: 'pauschal',
            unitPrice: 1500,
            total: 1500
          },
          {
            description: 'Asbestdachplatten demontieren und entsorgen',
            quantity: projectData.area || 150,
            unit: 'm²',
            unitPrice: 35,
            total: (projectData.area || 150) * 35
          },
          {
            description: 'Entsorgung asbesthaltiger Abfälle inkl. Begleitscheine',
            quantity: Math.ceil((projectData.area || 150) / 50),
            unit: 'Container',
            unitPrice: 850,
            total: Math.ceil((projectData.area || 150) / 50) * 850
          },
          {
            description: 'Endreinigung und Freimessung',
            quantity: 1,
            unit: 'pauschal',
            unitPrice: 800,
            total: 800
          }
        ]);
        break;
      // Add more template cases...
    }
  };

  const { subtotal, tax, total } = calculateTotals();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Angebotserstellung</h2>
            <p className="text-gray-600">Erstellen Sie professionelle Angebote in wenigen Minuten</p>
          </div>
          
          <div className="flex gap-2">
            {(['create', 'templates', 'history'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab === 'create' ? 'Erstellen' :
                 tab === 'templates' ? 'Vorlagen' : 'Verlauf'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'create' && (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client Information */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kundeninformationen</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={clientData.name}
                    onChange={(e) => setClientData({...clientData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Firma</label>
                  <input
                    type="text"
                    value={clientData.company}
                    onChange={(e) => setClientData({...clientData, company: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                  <input
                    type="text"
                    value={clientData.address}
                    onChange={(e) => setClientData({...clientData, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input
                    type="email"
                    value={clientData.email}
                    onChange={(e) => setClientData({...clientData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={clientData.phone}
                    onChange={(e) => setClientData({...clientData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Projektinformationen</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Projekttitel</label>
                  <input
                    type="text"
                    value={projectData.title}
                    onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Objektadresse</label>
                  <input
                    type="text"
                    value={projectData.address}
                    onChange={(e) => setProjectData({...projectData, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sanierungstyp</label>
                  <select
                    value={projectData.type}
                    onChange={(e) => setProjectData({...projectData, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  >
                    <option value="asbestos_roof">Asbestdach</option>
                    <option value="asbestos_facade">Asbestfassade</option>
                    <option value="asbestos_floor">Asbestboden</option>
                    <option value="kmf">KMF-Sanierung</option>
                    <option value="pcb">PCB-Sanierung</option>
                    <option value="analysis">Schadstoffanalyse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fläche (m²)</label>
                  <input
                    type="number"
                    value={projectData.area}
                    onChange={(e) => setProjectData({...projectData, area: Number(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Quote Items */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Leistungspositionen</h3>
                <button
                  onClick={addQuoteItem}
                  className="text-[#0066CC] hover:text-[#0052A3] font-medium text-sm flex items-center gap-1"
                >
                  <Icon name="plus" size={16} />
                  Position hinzufügen
                </button>
              </div>
              
              <div className="space-y-4">
                {quoteItems.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="grid md:grid-cols-12 gap-3">
                      <div className="md:col-span-5">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Beschreibung</label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateQuoteItem(index, 'description', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Menge</label>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuoteItem(index, 'quantity', Number(e.target.value))}
                          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Einheit</label>
                        <select
                          value={item.unit}
                          onChange={(e) => updateQuoteItem(index, 'unit', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                        >
                          <option value="m²">m²</option>
                          <option value="m³">m³</option>
                          <option value="Stück">Stück</option>
                          <option value="pauschal">pauschal</option>
                          <option value="Stunde">Stunde</option>
                          <option value="Container">Container</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Einzelpreis (€)</label>
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateQuoteItem(index, 'unitPrice', Number(e.target.value))}
                          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-1 flex items-end">
                        <button
                          onClick={() => removeQuoteItem(index)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          <Icon name="trash" size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-sm text-gray-600">Gesamt: </span>
                      <span className="text-sm font-semibold">€{item.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Templates */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vorlagen</h3>
              <div className="space-y-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => loadTemplate(template.id)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <p className="font-medium text-sm">{template.name}</p>
                    <p className="text-xs text-gray-600">{template.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zusammenfassung</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Zwischensumme</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MwSt. (19%)</span>
                  <span className="font-medium">€{tax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Gesamtbetrag</span>
                    <span className="text-lg font-bold text-[#0066CC]">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <PremiumButton className="w-full">
                  <Icon name="eye" size={16} />
                  Vorschau
                </PremiumButton>
                <PremiumButton variant="outline" className="w-full">
                  <Icon name="save" size={16} />
                  Als Entwurf speichern
                </PremiumButton>
                <PremiumButton variant="outline" className="w-full">
                  <Icon name="mail" size={16} />
                  Angebot versenden
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Angebotsnr.</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Kunde</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Projekt</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Datum</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Betrag</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentQuotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">{quote.id}</td>
                  <td className="px-6 py-4 text-sm">{quote.client.name}</td>
                  <td className="px-6 py-4 text-sm">{quote.project.title}</td>
                  <td className="px-6 py-4 text-sm">{new Date(quote.date).toLocaleDateString('de-DE')}</td>
                  <td className="px-6 py-4 text-sm font-medium">€{quote.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      quote.status === 'sent' ? 'bg-blue-100 text-blue-700' :
                      quote.status === 'accepted' ? 'bg-green-100 text-green-700' :
                      quote.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      quote.status === 'expired' ? 'bg-gray-100 text-gray-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {quote.status === 'sent' ? 'Versendet' :
                       quote.status === 'accepted' ? 'Angenommen' :
                       quote.status === 'rejected' ? 'Abgelehnt' :
                       quote.status === 'expired' ? 'Abgelaufen' : 'Entwurf'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#0066CC] hover:text-[#0052A3] font-medium text-sm">
                      Öffnen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}