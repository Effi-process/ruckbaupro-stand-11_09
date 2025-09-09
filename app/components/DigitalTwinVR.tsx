'use client'
import { useState, useEffect } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface BuildingData {
  id: string;
  name: string;
  floors: number;
  rooms: number;
  asbestosLocations: number;
  scanProgress: number;
  lastUpdated: Date;
}

interface TrainingModule {
  id: string;
  name: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'expert';
  completed: boolean;
  score?: number;
  vrRequired: boolean;
}

export default function DigitalTwinVR() {
  const [selectedBuilding, setSelectedBuilding] = useState<string>('building-1');
  const [vrMode, setVrMode] = useState(false);
  const [activeTraining, setActiveTraining] = useState<string | null>(null);
  const [digitalTwinStats, setDigitalTwinStats] = useState({
    accuracy: 99.7,
    dataPoints: 127849562,
    updateFrequency: 60,
    aiPredictions: 342
  });

  const buildings: BuildingData[] = [
    {
      id: 'building-1',
      name: 'Industriehalle München',
      floors: 3,
      rooms: 47,
      asbestosLocations: 12,
      scanProgress: 100,
      lastUpdated: new Date()
    },
    {
      id: 'building-2',
      name: 'Bürokomplex Berlin',
      floors: 8,
      rooms: 156,
      asbestosLocations: 34,
      scanProgress: 87,
      lastUpdated: new Date()
    }
  ];

  const trainingModules: TrainingModule[] = [
    {
      id: 'basic-safety',
      name: 'Grundlagen Arbeitssicherheit',
      duration: '45 Min',
      difficulty: 'beginner',
      completed: true,
      score: 98,
      vrRequired: false
    },
    {
      id: 'asbestos-identification',
      name: 'Asbestidentifikation VR',
      duration: '60 Min',
      difficulty: 'intermediate',
      completed: true,
      score: 92,
      vrRequired: true
    },
    {
      id: 'emergency-procedures',
      name: 'Notfallverfahren Simulation',
      duration: '90 Min',
      difficulty: 'expert',
      completed: false,
      vrRequired: true
    },
    {
      id: 'equipment-handling',
      name: 'Gerätehandhabung VR',
      duration: '120 Min',
      difficulty: 'intermediate',
      completed: false,
      vrRequired: true
    }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDigitalTwinStats(prev => ({
        ...prev,
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 1000),
        aiPredictions: prev.aiPredictions + Math.floor(Math.random() * 3)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentBuilding = buildings.find(b => b.id === selectedBuilding);

  return (
    <div className="space-y-8">
      {/* Digital Twin Section */}
      <div className="bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 rounded-3xl p-8 border border-cyan-500/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Digital Twin & VR Training Platform
            </h3>
            <p className="text-cyan-300/80">
              Photorealistische 1:1 Gebäudereplikation mit Echtzeit-Synchronisation
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="font-medium">Live Sync Active</span>
            </div>
            <button
              onClick={() => setVrMode(!vrMode)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2
                ${vrMode 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'}
              `}
            >
              <Icon name="vr" size={20} />
              {vrMode ? 'VR Active' : 'VR Inactive'}
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4">
            <p className="text-cyan-300/60 text-sm mb-1">Genauigkeit</p>
            <p className="text-2xl font-bold text-white">{digitalTwinStats.accuracy}%</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4">
            <p className="text-cyan-300/60 text-sm mb-1">Datenpunkte</p>
            <p className="text-2xl font-bold text-white">{(digitalTwinStats.dataPoints / 1000000).toFixed(1)}M</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4">
            <p className="text-cyan-300/60 text-sm mb-1">Update Rate</p>
            <p className="text-2xl font-bold text-white">{digitalTwinStats.updateFrequency} Hz</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4">
            <p className="text-cyan-300/60 text-sm mb-1">AI Vorhersagen</p>
            <p className="text-2xl font-bold text-white">{digitalTwinStats.aiPredictions}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">3D Digital Twin Viewer</h4>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden h-[500px]">
              {/* 3D Building Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 transform-gpu" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(45deg)' }}>
                  {/* Building Structure */}
                  <div className="absolute inset-0 border-2 border-cyan-500/50 bg-cyan-500/10" style={{ transform: 'translateZ(100px)' }}></div>
                  <div className="absolute inset-0 border-2 border-cyan-500/50 bg-cyan-500/10" style={{ transform: 'translateZ(-100px)' }}></div>
                  <div className="absolute inset-0 border-2 border-cyan-500/50 bg-cyan-500/10" style={{ transform: 'rotateY(90deg) translateZ(100px)' }}></div>
                  <div className="absolute inset-0 border-2 border-cyan-500/50 bg-cyan-500/10" style={{ transform: 'rotateY(90deg) translateZ(-100px)' }}></div>
                  
                  {/* Asbestos Indicators */}
                  <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{ top: '20%', left: '30%', transform: 'translateZ(101px)' }}></div>
                  <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{ top: '60%', left: '70%', transform: 'translateZ(101px)' }}></div>
                  <div className="absolute w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ top: '40%', left: '50%', transform: 'translateZ(101px)' }}></div>
                </div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-300 text-sm">Gebäudeauswahl</span>
                  <select 
                    value={selectedBuilding}
                    onChange={(e) => setSelectedBuilding(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded px-3 py-1 text-white text-sm"
                  >
                    {buildings.map(building => (
                      <option key={building.id} value={building.id}>{building.name}</option>
                    ))}
                  </select>
                </div>
                {currentBuilding && (
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <p className="text-cyan-300/60">Stockwerke</p>
                      <p className="text-white font-bold">{currentBuilding.floors}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cyan-300/60">Räume</p>
                      <p className="text-white font-bold">{currentBuilding.rooms}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cyan-300/60">Asbestfunde</p>
                      <p className="text-red-400 font-bold">{currentBuilding.asbestosLocations}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cyan-300/60">Scan</p>
                      <p className="text-green-400 font-bold">{currentBuilding.scanProgress}%</p>
                    </div>
                  </div>
                )}
              </div>

              {/* VR Mode Overlay */}
              {vrMode && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Icon name="vr" size={48} className="text-cyan-400" />
                    </div>
                    <h5 className="text-xl font-semibold text-white mb-2">VR-Modus aktiviert</h5>
                    <p className="text-cyan-300/60">Setzen Sie Ihr VR-Headset auf</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Building Analysis */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">KI-Gebäudeanalyse</h4>
            <div className="space-y-4">
              {/* Risk Assessment */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
                <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="alert-triangle" size={20} className="text-yellow-400" />
                  Risikobewertung
                </h5>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-cyan-300/80">Asbestbelastung</span>
                      <span className="text-red-400">Hoch</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-red-500 w-[78%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-cyan-300/80">Strukturelle Integrität</span>
                      <span className="text-green-400">Gut</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-[92%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-cyan-300/80">Zugänglichkeit</span>
                      <span className="text-yellow-400">Mittel</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Predictions */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
                <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon name="brain" size={20} className="text-purple-400" />
                  KI-Vorhersagen
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="check-circle" size={16} className="text-green-400 mt-0.5" />
                    <p className="text-cyan-300/80">
                      Wahrscheinlichkeit weiterer Asbestfunde in Sektor 7: <span className="text-orange-400 font-semibold">87%</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="info" size={16} className="text-blue-400 mt-0.5" />
                    <p className="text-cyan-300/80">
                      Empfohlene Sanierungsdauer: <span className="text-white font-semibold">14-16 Tage</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="alert-circle" size={16} className="text-yellow-400 mt-0.5" />
                    <p className="text-cyan-300/80">
                      Kritische Bereiche: <span className="text-yellow-400 font-semibold">Dachgeschoss, Keller B2</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <PremiumButton className="flex-1">
                  <Icon name="download" size={16} />
                  3D-Modell exportieren
                </PremiumButton>
                <PremiumButton variant="outline" className="flex-1">
                  <Icon name="share" size={16} />
                  Mit Team teilen
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VR Training Section */}
      <div className="bg-gradient-to-br from-purple-950 via-pink-950 to-red-950 rounded-3xl p-8 border border-purple-500/20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              VR Training Academy
            </h3>
            <p className="text-purple-300/80">
              Immersive Schulungen in fotorealistischer Umgebung
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-purple-300/60 text-sm">Trainierte Mitarbeiter</p>
              <p className="text-2xl font-bold text-white">1,247</p>
            </div>
            <div className="text-right">
              <p className="text-purple-300/60 text-sm">Durchschnittliche Bewertung</p>
              <p className="text-2xl font-bold text-green-400">96.3%</p>
            </div>
          </div>
        </div>

        {/* Training Modules Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {trainingModules.map((module) => (
            <div
              key={module.id}
              className={`
                bg-black/40 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all
                ${activeTraining === module.id 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/20'}
              `}
              onClick={() => setActiveTraining(module.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center
                    ${module.completed ? 'bg-green-500/20' : 'bg-purple-500/20'}
                  `}>
                    <Icon 
                      name={module.completed ? 'check' : 'play'} 
                      size={24} 
                      className={module.completed ? 'text-green-400' : 'text-purple-400'}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{module.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-purple-300/60 mt-1">
                      <span className="flex items-center gap-1">
                        <Icon name="clock" size={14} />
                        {module.duration}
                      </span>
                      <span className={`
                        px-2 py-0.5 rounded text-xs font-medium
                        ${module.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' : ''}
                        ${module.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                        ${module.difficulty === 'expert' ? 'bg-red-500/20 text-red-400' : ''}
                      `}>
                        {module.difficulty === 'beginner' ? 'Anfänger' : ''}
                        {module.difficulty === 'intermediate' ? 'Fortgeschritten' : ''}
                        {module.difficulty === 'expert' ? 'Experte' : ''}
                      </span>
                    </div>
                  </div>
                </div>
                {module.vrRequired && (
                  <div className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
                    <Icon name="vr" size={20} />
                  </div>
                )}
              </div>

              {module.completed && module.score && (
                <div className="bg-green-500/10 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm">Abgeschlossen</span>
                    <span className="text-white font-bold">{module.score}%</span>
                  </div>
                </div>
              )}

              <p className="text-purple-300/60 text-sm mb-4">
                {module.id === 'basic-safety' && 'Lernen Sie die grundlegenden Sicherheitsprotokollen für Asbestsanierung.'}
                {module.id === 'asbestos-identification' && 'Identifizieren Sie verschiedene Asbestarten in einer VR-Umgebung.'}
                {module.id === 'emergency-procedures' && 'Trainieren Sie Notfallsituationen in einer sicheren VR-Simulation.'}
                {module.id === 'equipment-handling' && 'Üben Sie den korrekten Umgang mit Spezialausrüstung.'}
              </p>

              <button className={`
                w-full py-2 rounded-lg font-medium transition-all
                ${module.completed 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                  : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'}
              `}>
                {module.completed ? 'Erneut absolvieren' : 'Training starten'}
              </button>
            </div>
          ))}
        </div>

        {/* Training Stats */}
        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
          <h4 className="text-white font-semibold mb-4">Trainingsstatistik</h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">3,847</div>
              <p className="text-purple-300/60 text-sm">Trainingseinheiten absolviert</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">127h</div>
              <p className="text-purple-300/60 text-sm">VR-Trainingszeit</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">0</div>
              <p className="text-purple-300/60 text-sm">Unfälle nach Training</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">42%</div>
              <p className="text-purple-300/60 text-sm">Effizienzsteigerung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}