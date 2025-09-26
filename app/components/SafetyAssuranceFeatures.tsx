'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface SafetyAssuranceFeaturesProps {
  variant?: 'full' | 'compact' | 'minimal';
  showLiveMonitoring?: boolean;
  interactiveMode?: boolean;
}

interface SafetyProtocol {
  id: string;
  name: string;
  description: string;
  category: 'preparation' | 'execution' | 'cleanup' | 'verification';
  steps: SafetyStep[];
  equipment: string[];
  certifications: string[];
  complianceStandards: string[];
  visualizations: string[];
  duration: string;
  riskLevel: 'low' | 'medium' | 'high';
  mandatory: boolean;
}

interface SafetyStep {
  order: number;
  title: string;
  description: string;
  duration: string;
  criticalSafety: boolean;
  equipment: string[];
  checkpoints: string[];
  visualization?: string;
  liveStatus?: 'pending' | 'in-progress' | 'completed' | 'verified';
}

interface EquipmentItem {
  id: string;
  name: string;
  category: 'measurement' | 'protection' | 'removal' | 'disposal' | 'monitoring';
  manufacturer: string;
  model: string;
  certifications: string[];
  specifications: Record<string, string>;
  images: string[];
  videoUrl?: string;
  lastMaintenance: Date;
  nextMaintenance: Date;
  status: 'operational' | 'maintenance' | 'calibration' | 'reserved';
  serialNumber: string;
  calibrationCertificate?: string;
  operatingHours: number;
  isSpecialized: boolean;
  safetyRating: number;
}

interface TrainingCertificate {
  id: string;
  employeeName: string;
  employeeId: string;
  certificationType: string;
  issuer: string;
  issuedDate: Date;
  expiryDate: Date;
  competencies: string[];
  refresherRequired: boolean;
  level: 'basic' | 'advanced' | 'expert' | 'specialist';
  documentUrl?: string;
  verificationCode: string;
}

interface ComplianceDocument {
  id: string;
  title: string;
  type: 'regulation' | 'standard' | 'guideline' | 'certificate' | 'permit';
  issuer: string;
  documentNumber: string;
  issuedDate: Date;
  validUntil?: Date;
  description: string;
  applicableProjects: string[];
  documentUrl?: string;
  lastReviewed: Date;
  isActive: boolean;
  criticalCompliance: boolean;
}

interface LiveSafetyMetrics {
  currentProjects: {
    id: string;
    location: string;
    safetyScore: number;
    protocolsActive: number;
    equipmentDeployed: number;
    teamSize: number;
    lastUpdate: Date;
  }[];
  globalMetrics: {
    safetyIncidents: number;
    consecutiveSafeDays: number;
    equipmentUptime: number;
    complianceScore: number;
    trainingUpToDate: number;
  };
  alerts: {
    id: string;
    type: 'warning' | 'critical' | 'info';
    message: string;
    timestamp: Date;
    resolved: boolean;
  }[];
}

export default function SafetyAssuranceFeatures({ 
  variant = 'full', 
  showLiveMonitoring = true,
  interactiveMode = true 
}: SafetyAssuranceFeaturesProps) {
  const [activeProtocol, setActiveProtocol] = useState<SafetyProtocol | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [activeView, setActiveView] = useState('protocols');
  const [liveMetrics, setLiveMetrics] = useState<LiveSafetyMetrics | null>(null);
  const [protocolProgress, setProtocolProgress] = useState<Record<string, number>>({});

  // Mock-Daten für Safety Protocols
  const safetyProtocols: SafetyProtocol[] = [
    {
      id: 'prot-001',
      name: 'TRGS 519 Asbestsanierung',
      description: 'Vollständiges Sanierungsprotokoll nach TRGS 519 für alle Asbestarbeiten',
      category: 'execution',
      steps: [
        {
          order: 1,
          title: 'Arbeitsbereich absperren',
          description: 'Komplett abgeschlossene Schleuse mit Unterdruckhaltung einrichten',
          duration: '2 Stunden',
          criticalSafety: true,
          equipment: ['Schleusensystem', 'Unterdruckgerät', 'Luftreiniger'],
          checkpoints: ['Unterdruck messbar', 'Schleuse dicht', 'Notstromversorgung'],
          liveStatus: 'completed'
        },
        {
          order: 2,
          title: 'Persönliche Schutzausrüstung anlegen',
          description: 'Vollschutzanzug, Atemschutz und Handschuhe nach Vorschrift',
          duration: '30 Minuten',
          criticalSafety: true,
          equipment: ['Vollschutzanzug', 'Atemschutzmaske P3', 'Schutzbrille'],
          checkpoints: ['Dichtigkeitsprüfung', 'Filterwechsel', 'Kommunikation'],
          liveStatus: 'in-progress'
        },
        {
          order: 3,
          title: 'Asbestmaterial entfernen',
          description: 'Kontrollierte Entfernung mit Befeuchtung und Staubminimierung',
          duration: '4-8 Stunden',
          criticalSafety: true,
          equipment: ['Sprühgeräte', 'Spezialwerkzeug', 'Big-Bags'],
          checkpoints: ['Befeuchtung kontinuierlich', 'Staubmessung', 'Zwischenlagerung'],
          liveStatus: 'pending'
        }
      ],
      equipment: ['Vollschutzausrüstung', 'Unterdruckgerät', 'Luftreiniger', 'Messgeräte'],
      certifications: ['TRGS 519', 'ASI-Arbeiten', 'Sachkunde §5 ChemG'],
      complianceStandards: ['TRGS 519', 'GefStoffV', 'BioStoffV', 'DGUV Vorschrift 1'],
      visualizations: ['/images/protocols/trgs519-viz.jpg'],
      duration: '6-10 Stunden',
      riskLevel: 'high',
      mandatory: true
    },
    {
      id: 'prot-002',
      name: 'VDI 6202 Raumluftmessung',
      description: 'Kontrollmessungen der Raumluft vor, während und nach der Sanierung',
      category: 'verification',
      steps: [
        {
          order: 1,
          title: 'Nullmessung durchführen',
          description: 'Bestimmung der Ausgangsbelastung vor Arbeitsbeginn',
          duration: '1 Stunde',
          criticalSafety: false,
          equipment: ['Luftprobenehmer', 'Mikroskop', 'Laborausrüstung'],
          checkpoints: ['Probenanzahl korrekt', 'Messdauer eingehalten', 'Dokumentation'],
          liveStatus: 'completed'
        }
      ],
      equipment: ['Luftprobenehmer', 'REM-Mikroskop', 'Laborausrüstung'],
      certifications: ['VDI 6202', 'Sachverständiger'],
      complianceStandards: ['VDI 6202', 'VDI 3492'],
      visualizations: ['/images/protocols/vdi6202-viz.jpg'],
      duration: '2-4 Stunden',
      riskLevel: 'low',
      mandatory: true
    }
  ];

  // Mock-Daten für Equipment
  const equipment: EquipmentItem[] = [
    {
      id: 'eq-001',
      name: 'Kärcher AF 100 Luftreiniger',
      category: 'monitoring',
      manufacturer: 'Kärcher',
      model: 'AF 100',
      certifications: ['H14 HEPA-Filter', 'TÜV geprüft'],
      specifications: {
        'Luftleistung': '1.500 m³/h',
        'Filtration': 'H14 HEPA + Aktivkohle',
        'Geräuschpegel': '< 65 dB(A)',
        'Energieverbrauch': '1,2 kW'
      },
      images: ['/images/equipment/kaercher-af100.jpg'],
      videoUrl: '/videos/equipment/af100-demo.mp4',
      lastMaintenance: new Date('2024-06-15'),
      nextMaintenance: new Date('2024-09-15'),
      status: 'operational',
      serialNumber: 'KA-AF100-2024-001',
      calibrationCertificate: '/documents/af100-calibration.pdf',
      operatingHours: 1247,
      isSpecialized: true,
      safetyRating: 98
    },
    {
      id: 'eq-002',
      name: 'Dräger X-plore 8000 Vollmaske',
      category: 'protection',
      manufacturer: 'Dräger',
      model: 'X-plore 8000',
      certifications: ['EN 136 Klasse 1', 'CE-Kennzeichnung'],
      specifications: {
        'Schutzklasse': 'P3 R',
        'Material': 'Silikonkautschuk',
        'Sichtfeld': '190°',
        'Gewicht': '650g'
      },
      images: ['/images/equipment/draeger-xplore.jpg'],
      lastMaintenance: new Date('2024-07-01'),
      nextMaintenance: new Date('2024-10-01'),
      status: 'operational',
      serialNumber: 'DR-XP8000-2024-012',
      operatingHours: 856,
      isSpecialized: true,
      safetyRating: 100
    }
  ];

  // Mock-Daten für Training Certificates
  const trainingCertificates: TrainingCertificate[] = [
    {
      id: 'cert-001',
      employeeName: 'Michael Schneider',
      employeeId: 'EMP-001',
      certificationType: 'TRGS 519 Sachkundenachweis',
      issuer: 'TÜV Rheinland',
      issuedDate: new Date('2023-03-15'),
      expiryDate: new Date('2026-03-15'),
      competencies: ['ASI-Arbeiten', 'Arbeitsschutz', 'Messtechnik', 'Qualitätskontrolle'],
      refresherRequired: false,
      level: 'expert',
      documentUrl: '/documents/trgs519-schneider.pdf',
      verificationCode: 'TUV-TRGS-2023-001247'
    },
    {
      id: 'cert-002',
      employeeName: 'Anna Weber',
      employeeId: 'EMP-002',
      certificationType: 'Sachverständige VDI 6202',
      issuer: 'VDI',
      issuedDate: new Date('2022-09-20'),
      expiryDate: new Date('2025-09-20'),
      competencies: ['Raumluftmessung', 'Probenahme', 'Bewertung', 'Gutachtenerstellung'],
      refresherRequired: true,
      level: 'specialist',
      documentUrl: '/documents/vdi6202-weber.pdf',
      verificationCode: 'VDI-6202-2022-000892'
    }
  ];

  // Mock-Daten für Compliance Documents
  const complianceDocuments: ComplianceDocument[] = [
    {
      id: 'comp-001',
      title: 'Betriebserlaubnis Asbestsanierung',
      type: 'permit',
      issuer: 'Bezirksregierung Detmold',
      documentNumber: 'BRD-AS-2024-001',
      issuedDate: new Date('2024-01-15'),
      validUntil: new Date('2027-01-15'),
      description: 'Erlaubnis für gewerbliche Asbestsanierung nach §19 ChemG',
      applicableProjects: ['Alle Asbestarbeiten', 'Sanierung', 'Entsorgung'],
      documentUrl: '/documents/betriebserlaubnis.pdf',
      lastReviewed: new Date('2024-07-01'),
      isActive: true,
      criticalCompliance: true
    }
  ];

  // Live-Metriken simulieren
  useEffect(() => {
    if (showLiveMonitoring) {
      const interval = setInterval(() => {
        setLiveMetrics({
          currentProjects: [
            {
              id: 'proj-001',
              location: 'Bielefeld Zentrum',
              safetyScore: Math.max(95, Math.random() * 100),
              protocolsActive: 3,
              equipmentDeployed: 8,
              teamSize: 4,
              lastUpdate: new Date()
            }
          ],
          globalMetrics: {
            safetyIncidents: 0,
            consecutiveSafeDays: 847,
            equipmentUptime: Math.max(95, Math.random() * 100),
            complianceScore: 100,
            trainingUpToDate: 100
          },
          alerts: []
        });
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [showLiveMonitoring]);

  const ProcessVisualization = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Prozess-Visualisierung</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {['preparation', 'execution', 'cleanup', 'verification'].map((category, index) => (
          <div key={category} className="text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
              index <= 1 ? 'bg-green-500 text-white' : 
              index === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              <Icon 
                name={
                  category === 'preparation' ? 'settings' :
                  category === 'execution' ? 'hard-hat' :
                  category === 'cleanup' ? 'trash-2' : 'check-circle'
                } 
                size={24} 
              />
            </div>
            <div className="text-sm font-medium capitalize">{category}</div>
            <div className="text-xs text-gray-500">
              {category === 'preparation' && 'Vorbereitung'}
              {category === 'execution' && 'Durchführung'}
              {category === 'cleanup' && 'Reinigung'}
              {category === 'verification' && 'Prüfung'}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Aktueller Prozessschritt</h4>
        <div className="space-y-4">
          {safetyProtocols[0].steps.map((step) => (
            <div key={step.order} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step.liveStatus === 'completed' ? 'bg-green-500 text-white' :
                step.liveStatus === 'in-progress' ? 'bg-blue-500 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {step.liveStatus === 'completed' ? <Icon name="check" size={16} /> : step.order}
              </div>
              
              <div className="flex-1">
                <div className="font-medium text-gray-900">{step.title}</div>
                <div className="text-sm text-gray-600">{step.description}</div>
                {step.criticalSafety && (
                  <div className="flex items-center gap-1 mt-1">
                    <Icon name="alert-triangle" size={14} className="text-red-500" />
                    <span className="text-xs text-red-600 font-medium">Kritischer Sicherheitsschritt</span>
                  </div>
                )}
              </div>
              
              <div className="text-right">
                <div className="text-sm font-medium text-gray-700">{step.duration}</div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  step.liveStatus === 'completed' ? 'bg-green-100 text-green-700' :
                  step.liveStatus === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {step.liveStatus === 'completed' ? 'Abgeschlossen' :
                   step.liveStatus === 'in-progress' ? 'In Bearbeitung' :
                   'Ausstehend'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SafetyProtocolDisplay = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Sicherheitsprotokolle</h3>
        {showLiveMonitoring && (
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live überwacht</span>
          </div>
        )}
      </div>

      <div className="grid gap-6">
        {safetyProtocols.map((protocol) => (
          <div key={protocol.id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{protocol.name}</h4>
                  {protocol.mandatory && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                      Verpflichtend
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    protocol.riskLevel === 'high' ? 'bg-red-100 text-red-700' :
                    protocol.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {protocol.riskLevel === 'high' ? 'Hohes Risiko' :
                     protocol.riskLevel === 'medium' ? 'Mittleres Risiko' :
                     'Niedriges Risiko'}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{protocol.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Dauer</div>
                    <div className="text-gray-600">{protocol.duration}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Schritte</div>
                    <div className="text-gray-600">{protocol.steps.length} Arbeitsschritte</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Ausrüstung</div>
                    <div className="text-gray-600">{protocol.equipment.length} Geräte erforderlich</div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setActiveProtocol(activeProtocol?.id === protocol.id ? null : protocol)}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {activeProtocol?.id === protocol.id ? 'Schließen' : 'Details'}
              </button>
            </div>

            {activeProtocol?.id === protocol.id && (
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Arbeitsschritte</h5>
                    <div className="space-y-3">
                      {protocol.steps.map((step) => (
                        <div key={step.order} className="flex gap-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                            {step.order}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{step.title}</div>
                            <div className="text-sm text-gray-600">{step.description}</div>
                            <div className="text-xs text-gray-500 mt-1">⏱️ {step.duration}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Compliance Standards</h5>
                    <div className="space-y-2">
                      {protocol.complianceStandards.map((standard, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="shield-check" size={16} className="text-green-600" />
                          <span className="text-sm text-gray-700">{standard}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h5 className="font-semibold text-gray-900 mb-3 mt-6">Erforderliche Zertifikate</h5>
                    <div className="space-y-2">
                      {protocol.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="award" size={16} className="text-blue-600" />
                          <span className="text-sm text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const EquipmentShowcase = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Spezialausrüstung</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
              <Image
                src={item.images[0] || '/images/equipment-placeholder.jpg'}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                item.status === 'operational' ? 'bg-green-500' :
                item.status === 'maintenance' ? 'bg-yellow-500' :
                item.status === 'calibration' ? 'bg-blue-500' :
                'bg-red-500'
              }`}></div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.manufacturer} {item.model}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                  item.status === 'operational' ? 'bg-green-100 text-green-700' :
                  item.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {item.status === 'operational' ? 'Einsatzbereit' :
                   item.status === 'maintenance' ? 'Wartung' :
                   item.status === 'calibration' ? 'Kalibrierung' :
                   'Reserviert'}
                </span>
                
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">
                    {item.safetyRating}%
                  </div>
                  <div className="text-xs text-gray-500">Sicherheits-Score</div>
                </div>
              </div>
              
              <div className="text-sm space-y-1">
                {Object.entries(item.specifications).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedEquipment(item)}
                className="w-full px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                Details ansehen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TrainingCertificateGallery = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Team-Qualifikationen</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {trainingCertificates.map((cert) => (
          <div key={cert.id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{cert.employeeName}</h4>
                <p className="text-sm text-gray-600">{cert.certificationType}</p>
              </div>
              
              <div className="text-right">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  cert.level === 'expert' ? 'bg-purple-100 text-purple-700' :
                  cert.level === 'specialist' ? 'bg-blue-100 text-blue-700' :
                  cert.level === 'advanced' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {cert.level === 'expert' ? 'Experte' :
                   cert.level === 'specialist' ? 'Spezialist' :
                   cert.level === 'advanced' ? 'Fortgeschritten' :
                   'Grundlagen'}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Aussteller:</span>
                  <div className="font-medium text-gray-900">{cert.issuer}</div>
                </div>
                <div>
                  <span className="text-gray-600">Gültig bis:</span>
                  <div className="font-medium text-gray-900">
                    {cert.expiryDate.toLocaleDateString('de-DE')}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-2">Kompetenzen:</div>
                <div className="flex flex-wrap gap-1">
                  {cert.competencies.map((competency, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {competency}
                    </span>
                  ))}
                </div>
              </div>
              
              {cert.refresherRequired && (
                <div className="flex items-center gap-2 text-orange-600">
                  <Icon name="clock" size={16} />
                  <span className="text-sm">Auffrischung erforderlich</span>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-xs text-gray-500">
                  Verifizierung: {cert.verificationCode}
                </span>
                {cert.documentUrl && (
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Zertifikat ansehen
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ComplianceDocumentation = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance-Dokumentation</h3>
      
      <div className="space-y-4">
        {complianceDocuments.map((doc) => (
          <div key={doc.id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-bold text-gray-900">{doc.title}</h4>
                  {doc.criticalCompliance && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                      Kritisch
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    doc.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {doc.isActive ? 'Aktiv' : 'Inaktiv'}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{doc.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Aussteller:</span>
                    <div className="font-medium text-gray-900">{doc.issuer}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Dokument-Nr.:</span>
                    <div className="font-medium text-gray-900">{doc.documentNumber}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Gültig bis:</span>
                    <div className="font-medium text-gray-900">
                      {doc.validUntil ? doc.validUntil.toLocaleDateString('de-DE') : 'Unbegrenzt'}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-2">Anwendbare Projekte:</div>
                  <div className="flex flex-wrap gap-1">
                    {doc.applicableProjects.map((project, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {doc.documentUrl && (
                <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Dokument
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const LiveMonitoringDashboard = () => (
    showLiveMonitoring && liveMetrics && (
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">Live Sicherheits-Monitoring</h3>
          <p className="text-green-100">Echtzeitüberwachung aller Sicherheitsparameter</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="shield-check" size={28} color="white" />
            </div>
            <div className="text-2xl font-bold">{liveMetrics.globalMetrics.safetyIncidents}</div>
            <div className="text-green-100 text-sm">Sicherheitsvorfälle 2024</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="calendar" size={28} color="white" />
            </div>
            <div className="text-2xl font-bold">{liveMetrics.globalMetrics.consecutiveSafeDays}</div>
            <div className="text-green-100 text-sm">Sichere Arbeitstage</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="settings" size={28} color="white" />
            </div>
            <div className="text-2xl font-bold">{Math.round(liveMetrics.globalMetrics.equipmentUptime)}%</div>
            <div className="text-green-100 text-sm">Anlagen-Verfügbarkeit</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="check-circle" size={28} color="white" />
            </div>
            <div className="text-2xl font-bold">{liveMetrics.globalMetrics.complianceScore}%</div>
            <div className="text-green-100 text-sm">Compliance-Score</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="users" size={28} color="white" />
            </div>
            <div className="text-2xl font-bold">{liveMetrics.globalMetrics.trainingUpToDate}%</div>
            <div className="text-green-100 text-sm">Schulungen aktuell</div>
          </div>
        </div>
      </div>
    )
  );

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="flex items-center gap-2">
          <Icon name="shield-check" size={20} className="text-green-600" />
          <span className="text-sm font-medium">TRGS 519 zertifiziert</span>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <Icon name="award" size={20} className="text-blue-600" />
          <span className="text-sm font-medium">TÜV geprüft</span>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="text-sm font-medium text-gray-700">847 sichere Tage</div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="space-y-6">
        <LiveMonitoringDashboard />
        <SafetyProtocolDisplay />
      </div>
    );
  }

  // Full variant
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Sicherheit hat höchste Priorität
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Umfassende Sicherheitssysteme, lückenlose Dokumentation und kontinuierliche Überwachung für Ihren Schutz
        </p>
      </div>

      <LiveMonitoringDashboard />

      <div className="flex justify-center">
        <div className="bg-white rounded-full p-1 shadow-lg">
          {['protocols', 'visualization', 'equipment', 'training', 'compliance'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveView(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeView === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'protocols' && 'Protokolle'}
              {tab === 'visualization' && 'Prozesse'}
              {tab === 'equipment' && 'Ausrüstung'}
              {tab === 'training' && 'Schulungen'}
              {tab === 'compliance' && 'Compliance'}
            </button>
          ))}
        </div>
      </div>

      {activeView === 'protocols' && <SafetyProtocolDisplay />}
      {activeView === 'visualization' && <ProcessVisualization />}
      {activeView === 'equipment' && <EquipmentShowcase />}
      {activeView === 'training' && <TrainingCertificateGallery />}
      {activeView === 'compliance' && <ComplianceDocumentation />}

      {/* Equipment Details Modal */}
      {selectedEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{selectedEquipment.name}</h3>
                <button
                  onClick={() => setSelectedEquipment(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <Icon name="x" size={16} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src={selectedEquipment.images[0] || '/images/equipment-placeholder.jpg'}
                      alt={selectedEquipment.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {selectedEquipment.videoUrl && (
                    <video
                      src={selectedEquipment.videoUrl}
                      controls
                      className="w-full rounded-xl"
                      poster={selectedEquipment.images[0]}
                    />
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technische Daten</h4>
                    <div className="space-y-2">
                      {Object.entries(selectedEquipment.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Zertifizierungen</h4>
                    <div className="space-y-2">
                      {selectedEquipment.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="shield-check" size={16} className="text-green-600" />
                          <span className="text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Wartungsstatus</h4>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Letzte Wartung:</span>
                        <span className="font-medium">{selectedEquipment.lastMaintenance.toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nächste Wartung:</span>
                        <span className="font-medium">{selectedEquipment.nextMaintenance.toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Betriebsstunden:</span>
                        <span className="font-medium">{selectedEquipment.operatingHours.toLocaleString()} h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sicherheits-Score:</span>
                        <span className="font-bold text-green-600">{selectedEquipment.safetyRating}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}