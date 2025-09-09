'use client'
import { useState, useEffect } from 'react';
import Icon from './Icon';

interface SensorData {
  id: string;
  type: 'air_quality' | 'fiber_count' | 'humidity' | 'temperature' | 'pressure' | 'movement';
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  location: string;
  lastUpdate: Date;
}

export default function IoTDashboard() {
  const [sensors, setSensors] = useState<SensorData[]>([
    {
      id: 'AQ-001',
      type: 'air_quality',
      value: 0.02,
      unit: 'Fasern/cm³',
      status: 'normal',
      location: 'Hauptarbeitsbereich',
      lastUpdate: new Date()
    },
    {
      id: 'FC-001',
      type: 'fiber_count',
      value: 0.001,
      unit: 'Fasern/cm³',
      status: 'normal',
      location: 'Schwarzbereich',
      lastUpdate: new Date()
    },
    {
      id: 'HU-001',
      type: 'humidity',
      value: 45,
      unit: '%',
      status: 'normal',
      location: 'Schleuse',
      lastUpdate: new Date()
    },
    {
      id: 'TP-001',
      type: 'temperature',
      value: 22,
      unit: '°C',
      status: 'normal',
      location: 'Lagerbereich',
      lastUpdate: new Date()
    },
    {
      id: 'PR-001',
      type: 'pressure',
      value: -25,
      unit: 'Pa',
      status: 'normal',
      location: 'Unterdruckbereich',
      lastUpdate: new Date()
    },
    {
      id: 'MV-001',
      type: 'movement',
      value: 3,
      unit: 'Personen',
      status: 'normal',
      location: 'Gesamtgelände',
      lastUpdate: new Date()
    }
  ]);

  const [alerts, setAlerts] = useState<any[]>([]);
  const [selectedSensor, setSelectedSensor] = useState<string | null>(null);

  // Simulate real-time sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prevSensors => 
        prevSensors.map(sensor => {
          const variation = (Math.random() - 0.5) * 0.1;
          let newValue = sensor.value;

          switch (sensor.type) {
            case 'air_quality':
              newValue = Math.max(0, sensor.value + variation * 0.01);
              break;
            case 'fiber_count':
              newValue = Math.max(0, sensor.value + variation * 0.001);
              break;
            case 'humidity':
              newValue = Math.max(0, Math.min(100, sensor.value + variation * 5));
              break;
            case 'temperature':
              newValue = sensor.value + variation * 2;
              break;
            case 'pressure':
              newValue = sensor.value + variation * 5;
              break;
            case 'movement':
              newValue = Math.max(0, Math.round(sensor.value + variation * 2));
              break;
          }

          // Determine status based on value
          let status: 'normal' | 'warning' | 'critical' = 'normal';
          if (sensor.type === 'air_quality' && newValue > 0.04) status = 'warning';
          if (sensor.type === 'air_quality' && newValue > 0.1) status = 'critical';
          if (sensor.type === 'fiber_count' && newValue > 0.01) status = 'warning';
          if (sensor.type === 'fiber_count' && newValue > 0.1) status = 'critical';
          if (sensor.type === 'pressure' && newValue > -20) status = 'warning';

          // Generate alert if status changed to critical
          if (status === 'critical' && sensor.status !== 'critical') {
            setAlerts(prev => [{
              id: Date.now(),
              sensor: sensor.id,
              message: `Kritischer Wert bei ${sensor.location}!`,
              timestamp: new Date()
            }, ...prev]);
          }

          return {
            ...sensor,
            value: newValue,
            status,
            lastUpdate: new Date()
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getSensorIcon = (type: string) => {
    switch (type) {
      case 'air_quality': return 'wind';
      case 'fiber_count': return 'activity';
      case 'humidity': return 'droplet';
      case 'temperature': return 'thermometer';
      case 'pressure': return 'gauge';
      case 'movement': return 'users';
      default: return 'cpu';
    }
  };

  const getSensorName = (type: string) => {
    switch (type) {
      case 'air_quality': return 'Luftqualität';
      case 'fiber_count': return 'Faserzählung';
      case 'humidity': return 'Luftfeuchtigkeit';
      case 'temperature': return 'Temperatur';
      case 'pressure': return 'Unterdruck';
      case 'movement': return 'Bewegung';
      default: return 'Sensor';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              IoT Sensor Network
            </h3>
            <p className="text-cyan-300/80">
              Echtzeit-Überwachung aller Umgebungsparameter mit 127 vernetzten Sensoren
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium">Alle Systeme online</span>
            </div>
            <button className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-lg transition-colors">
              <Icon name="settings" size={20} />
            </button>
          </div>
        </div>

        {/* 3D Visualization Placeholder */}
        <div className="bg-black/50 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative z-10 text-center py-12">
            <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Icon name="cube" size={48} className="text-cyan-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">3D Gebäude-Visualisierung</h4>
            <p className="text-cyan-300/60">Live-Ansicht aller Sensoren im digitalen Zwilling</p>
          </div>
        </div>

        {/* Sensor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sensors.map((sensor) => (
            <div
              key={sensor.id}
              className={`
                bg-black/30 rounded-xl p-6 border-2 transition-all cursor-pointer
                ${getStatusColor(sensor.status)}
                ${selectedSensor === sensor.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
              `}
              onClick={() => setSelectedSensor(sensor.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name={getSensorIcon(sensor.type)} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{getSensorName(sensor.type)}</h4>
                    <p className="text-sm opacity-60">{sensor.location}</p>
                  </div>
                </div>
                <span className={`
                  text-xs font-medium px-2 py-1 rounded-full
                  ${sensor.status === 'normal' ? 'bg-green-500/20 text-green-400' : ''}
                  ${sensor.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                  ${sensor.status === 'critical' ? 'bg-red-500/20 text-red-400 animate-pulse' : ''}
                `}>
                  {sensor.status === 'normal' ? 'Normal' : sensor.status === 'warning' ? 'Warnung' : 'Kritisch'}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-white">
                  {sensor.value.toFixed(sensor.type === 'fiber_count' || sensor.type === 'air_quality' ? 3 : 1)}
                  <span className="text-lg font-normal opacity-60 ml-1">{sensor.unit}</span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-16 bg-white/5 rounded-lg p-2">
                <svg className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    points={`0,40 20,35 40,38 60,30 80,32 100,${40 - sensor.value * 10} 120,${40 - sensor.value * 12}`}
                  />
                </svg>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs opacity-60">
                <span>ID: {sensor.id}</span>
                <span>Aktualisiert: {sensor.lastUpdate.toLocaleTimeString('de-DE')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Analysis Panel */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <Icon name="brain" size={28} className="text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">KI-Analyse & Vorhersage</h3>
            <p className="text-purple-300/80">Mustererkennung basierend auf 50.000+ Datenpunkten</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">Vorhersage nächste 24h</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-purple-300">Fasernbelastung</span>
                <span className="text-green-400">↓ -15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-300">Arbeitseffizienz</span>
                <span className="text-green-400">↑ +8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-300">Wetterrisiko</span>
                <span className="text-yellow-400">Mittel</span>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">Anomalie-Erkennung</h4>
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-green-400 mb-2">0</div>
              <p className="text-purple-300/60">Anomalien erkannt</p>
              <p className="text-xs text-purple-300/40 mt-2">Letzte Prüfung: vor 2 Min</p>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">Optimierungsvorschläge</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="lightbulb" size={16} className="text-yellow-400 mt-0.5" />
                <span className="text-purple-300">Unterdruck um 5 Pa erhöhen für optimale Faserbindung</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="lightbulb" size={16} className="text-yellow-400 mt-0.5" />
                <span className="text-purple-300">Arbeitsbereich 2 kann 30 Min früher freigegeben werden</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alert System */}
      {alerts.length > 0 && (
        <div className="fixed bottom-4 right-4 space-y-2 z-50">
          {alerts.slice(0, 3).map((alert) => (
            <div
              key={alert.id}
              className="bg-red-900/90 backdrop-blur-xl border border-red-500 text-white p-4 rounded-lg shadow-2xl animate-slide-in-right"
            >
              <div className="flex items-center gap-3">
                <Icon name="alert-triangle" size={24} className="text-red-400" />
                <div>
                  <p className="font-semibold">{alert.message}</p>
                  <p className="text-sm text-red-300">{alert.timestamp.toLocaleTimeString('de-DE')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}