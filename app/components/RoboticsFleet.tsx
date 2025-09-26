'use client'
import { useState, useEffect } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface Robot {
  id: string;
  name: string;
  type: 'demolition' | 'cleaning' | 'inspection' | 'transport';
  status: 'active' | 'standby' | 'maintenance' | 'charging';
  battery: number;
  location: string;
  tasksCompleted: number;
  efficiency: number;
  currentTask?: string;
}

export default function RoboticsFleet() {
  const [robots, setRobots] = useState<Robot[]>([
    {
      id: 'ROBO-001',
      name: 'Atlas Pro',
      type: 'demolition',
      status: 'active',
      battery: 87,
      location: 'Sektor A - Dachbereich',
      tasksCompleted: 1247,
      efficiency: 98.3,
      currentTask: 'Asbestplattenentfernung'
    },
    {
      id: 'ROBO-002',
      name: 'CleanBot Ultra',
      type: 'cleaning',
      status: 'active',
      battery: 92,
      location: 'Sektor B - Keller',
      tasksCompleted: 3892,
      efficiency: 99.1,
      currentTask: 'Feinstaubabsaugung'
    },
    {
      id: 'ROBO-003',
      name: 'InspectorX',
      type: 'inspection',
      status: 'standby',
      battery: 100,
      location: 'Docking Station',
      tasksCompleted: 2156,
      efficiency: 97.8
    },
    {
      id: 'ROBO-004',
      name: 'CargoMaster',
      type: 'transport',
      status: 'active',
      battery: 68,
      location: 'Laderampe',
      tasksCompleted: 892,
      efficiency: 95.4,
      currentTask: 'Materialtransport zu Container 7'
    }
  ]);

  const [selectedRobot, setSelectedRobot] = useState<string | null>('ROBO-001');
  const [fleetEfficiency, setFleetEfficiency] = useState(97.9);
  const [totalOperationHours, setTotalOperationHours] = useState(12847);

  // Simulate robot operations
  useEffect(() => {
    const interval = setInterval(() => {
      setRobots(prevRobots =>
        prevRobots.map(robot => {
          let newRobot = { ...robot };

          // Update battery
          if (robot.status === 'active') {
            newRobot.battery = Math.max(0, robot.battery - Math.random() * 2);
            if (newRobot.battery < 20) {
              newRobot.status = 'charging';
              newRobot.currentTask = undefined;
            }
          } else if (robot.status === 'charging') {
            newRobot.battery = Math.min(100, robot.battery + 5);
            if (newRobot.battery >= 100) {
              newRobot.status = 'standby';
            }
          }

          // Update efficiency
          newRobot.efficiency = Math.min(100, newRobot.efficiency + (Math.random() - 0.5) * 0.5);

          return newRobot;
        })
      );

      setFleetEfficiency(prev => Math.min(100, prev + (Math.random() - 0.5) * 0.2));
      setTotalOperationHours(prev => prev + 0.01);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'standby': return 'text-blue-400 bg-blue-400/10';
      case 'maintenance': return 'text-yellow-400 bg-yellow-400/10';
      case 'charging': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'demolition': return 'tool';
      case 'cleaning': return 'wind';
      case 'inspection': return 'eye';
      case 'transport': return 'truck';
      default: return 'cpu';
    }
  };

  const selectedRobotData = robots.find(r => r.id === selectedRobot);

  return (
    <div className="bg-gradient-to-br from-orange-950 via-red-950 to-pink-950 rounded-3xl p-8 border border-orange-500/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Autonomous Robotics Fleet
            </h3>
            <p className="text-orange-300/80">
              Boston Dynamics Integration • 24/7 Autonome Operationen • Zero-Touch Safety
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-orange-300/60 text-sm">Flotteneffizienz</p>
              <p className="text-3xl font-bold text-white">{fleetEfficiency.toFixed(1)}%</p>
            </div>
            <div className="text-center">
              <p className="text-orange-300/60 text-sm">Betriebsstunden</p>
              <p className="text-3xl font-bold text-white">{totalOperationHours.toFixed(0)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Robot Fleet List */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Roboterflotte Status</h4>
            {robots.map((robot) => (
              <div
                key={robot.id}
                onClick={() => setSelectedRobot(robot.id)}
                className={`
                  bg-black/40 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all
                  ${selectedRobot === robot.id 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/20' 
                    : 'border-white/10 hover:border-white/20'}
                `}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                      <Icon name={getTypeIcon(robot.type)} size={24} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{robot.name}</p>
                      <p className="text-sm text-orange-300/60">{robot.id}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(robot.status)}`}>
                    {robot.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-300/60">Batterie</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            robot.battery > 50 ? 'bg-green-500' : 
                            robot.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${robot.battery}%` }}
                        />
                      </div>
                      <span className="text-white text-xs">{robot.battery}%</span>
                    </div>
                  </div>
                  
                  {robot.currentTask && (
                    <div className="bg-orange-500/10 rounded-lg p-2 text-xs text-orange-300">
                      <Icon name="activity" size={12} className="inline mr-1" />
                      {robot.currentTask}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Robot Control & Visualization */}
          <div className="lg:col-span-2">
            {selectedRobotData && (
              <div className="space-y-6">
                {/* 3D Robot Visualization */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-6">
                    {selectedRobotData.name} - Live Control
                  </h4>
                  
                  {/* Robot Model Placeholder */}
                  <div className="relative h-[300px] bg-gradient-to-b from-orange-900/20 to-red-900/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="relative">
                      {/* Simplified Robot Visualization */}
                      <div className="w-32 h-48 bg-gradient-to-b from-orange-500/30 to-red-500/30 rounded-lg relative animate-pulse">
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-400/50 rounded-full"></div>
                        <div className="absolute bottom-0 left-2 w-6 h-12 bg-red-500/50 rounded"></div>
                        <div className="absolute bottom-0 right-2 w-6 h-12 bg-red-500/50 rounded"></div>
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="absolute -top-4 -right-4 bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                        {selectedRobotData.type.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Control Panel */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Icon name="play" size={20} />
                      <span>Start</span>
                    </button>
                    <button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Icon name="pause" size={20} />
                      <span>Pause</span>
                    </button>
                    <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Icon name="stop-circle" size={20} />
                      <span>Stop</span>
                    </button>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h5 className="text-lg font-semibold text-white mb-4">Performance Metrics</h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-orange-300/60">Effizienz</span>
                        <span className="text-white font-semibold">{selectedRobotData.efficiency.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                          style={{ width: `${selectedRobotData.efficiency}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-orange-300/60">Aufgaben abgeschlossen</span>
                        <span className="text-white font-semibold">{selectedRobotData.tasksCompleted}</span>
                      </div>
                      <div className="text-sm text-orange-300/60">
                        Durchschnitt: {Math.floor(selectedRobotData.tasksCompleted / 30)}/Tag
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-orange-500/10 rounded-lg p-3">
                      <p className="text-orange-400 text-2xl font-bold">0</p>
                      <p className="text-orange-300/60 text-xs">Unfälle</p>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-3">
                      <p className="text-red-400 text-2xl font-bold">99.9%</p>
                      <p className="text-red-300/60 text-xs">Verfügbarkeit</p>
                    </div>
                    <div className="bg-pink-500/10 rounded-lg p-3">
                      <p className="text-pink-400 text-2xl font-bold">24/7</p>
                      <p className="text-pink-300/60 text-xs">Autonom</p>
                    </div>
                  </div>
                </div>

                {/* AI Capabilities */}
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/30">
                  <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Icon name="brain" size={20} className="text-orange-400" />
                    KI-Fähigkeiten
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="check-circle" size={16} className="text-green-400 mt-0.5" />
                      <span className="text-orange-300/80">Autonome Navigation mit LiDAR & Computer Vision</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="check-circle" size={16} className="text-green-400 mt-0.5" />
                      <span className="text-orange-300/80">Echtzeit-Objekterkennung für Asbestmaterialien</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="check-circle" size={16} className="text-green-400 mt-0.5" />
                      <span className="text-orange-300/80">Selbstlernende Algorithmen für Effizienzsteigerung</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="check-circle" size={16} className="text-green-400 mt-0.5" />
                      <span className="text-orange-300/80">Kollisionsvermeidung mit 360° Sensoren</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fleet Overview Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="zap" size={32} className="text-orange-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">8,187</p>
            <p className="text-orange-300/60 text-sm">Aufgaben/Tag</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="clock" size={32} className="text-red-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">72%</p>
            <p className="text-orange-300/60 text-sm">Zeitersparnis</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" size={32} className="text-pink-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">100%</p>
            <p className="text-orange-300/60 text-sm">Sicherheit</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="dollar-sign" size={32} className="text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">€2.8M</p>
            <p className="text-orange-300/60 text-sm">Jährliche Einsparung</p>
          </div>
        </div>
      </div>
    </div>
  );
}