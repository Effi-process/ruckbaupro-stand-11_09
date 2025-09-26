'use client'
import { useState, useEffect } from 'react';
import Icon from './Icon';

interface HologramData {
  id: string;
  type: 'building' | 'sensor' | 'alert' | 'robot';
  position: { x: number; y: number; z: number };
  data: any;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export default function HolographicInterface() {
  const [isActive, setIsActive] = useState(true);
  const [selectedLayer, setSelectedLayer] = useState('all');
  const [holograms, setHolograms] = useState<HologramData[]>([
    {
      id: 'H001',
      type: 'building',
      position: { x: 50, y: 50, z: 0 },
      data: { name: 'München Tower', asbestosLevel: 'high', progress: 67 },
      priority: 'high'
    },
    {
      id: 'H002',
      type: 'sensor',
      position: { x: 30, y: 70, z: 20 },
      data: { reading: 0.003, status: 'active' },
      priority: 'low'
    },
    {
      id: 'H003',
      type: 'alert',
      position: { x: 70, y: 30, z: 40 },
      data: { message: 'Erhöhte Faserwerte detektiert' },
      priority: 'critical'
    },
    {
      id: 'H004',
      type: 'robot',
      position: { x: 45, y: 60, z: 10 },
      data: { name: 'Atlas Pro', battery: 87 },
      priority: 'medium'
    }
  ]);

  // Simulate hologram updates
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setHolograms(prev => 
        prev.map(h => ({
          ...h,
          position: {
            x: h.position.x + (Math.random() - 0.5) * 2,
            y: h.position.y + (Math.random() - 0.5) * 2,
            z: h.position.z + (Math.random() - 0.5) * 1
          }
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isActive]);

  const getHologramColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'from-red-400 to-red-600';
      case 'high': return 'from-orange-400 to-orange-600';
      case 'medium': return 'from-blue-400 to-blue-600';
      case 'low': return 'from-green-400 to-green-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-blue-950 to-purple-950 rounded-3xl p-8 border border-blue-500/20 relative overflow-hidden h-[800px]">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 150, 255, 0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.05) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
          transform: 'perspective(1000px) rotateX(45deg)'
        }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">
            Holographic Command Interface
          </h3>
          <p className="text-blue-300/80">
            Mixed Reality Control • Gesture Recognition • 3D Spatial Mapping
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`
              px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2
              ${isActive 
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' 
                : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'}
            `}
          >
            <Icon name={isActive ? 'power' : 'power'} size={20} />
            {isActive ? 'Active' : 'Inactive'}
          </button>
        </div>
      </div>

      {/* Layer Controls */}
      <div className="relative z-10 flex gap-2 mb-8">
        {['all', 'buildings', 'sensors', 'alerts', 'robots'].map((layer) => (
          <button
            key={layer}
            onClick={() => setSelectedLayer(layer)}
            className={`
              px-4 py-2 rounded-lg transition-all
              ${selectedLayer === layer 
                ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50' 
                : 'bg-white/5 text-white/60 hover:bg-white/10'}
            `}
          >
            {layer.charAt(0).toUpperCase() + layer.slice(1)}
          </button>
        ))}
      </div>

      {/* 3D Holographic Display */}
      <div className="relative z-10 h-[500px] bg-black/40 backdrop-blur-sm rounded-2xl border border-blue-500/30 overflow-hidden">
        {/* Central Hologram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-96 h-96" style={{ transformStyle: 'preserve-3d' }}>
            {/* Base Platform */}
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-8 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>

            {/* Hologram Elements */}
            {holograms.map((hologram) => (
              <div
                key={hologram.id}
                className="absolute w-16 h-16 transition-all duration-1000"
                style={{
                  left: `${hologram.position.x}%`,
                  top: `${hologram.position.y}%`,
                  transform: `translateZ(${hologram.position.z}px)`,
                  display: selectedLayer === 'all' || selectedLayer === hologram.type + 's' ? 'block' : 'none'
                }}
              >
                <div className={`
                  w-full h-full rounded-lg bg-gradient-to-br ${getHologramColor(hologram.priority)}
                  opacity-80 animate-pulse shadow-lg
                `}>
                  <div className="flex items-center justify-center h-full">
                    <Icon 
                      name={
                        hologram.type === 'building' ? 'building' :
                        hologram.type === 'sensor' ? 'cpu' :
                        hologram.type === 'alert' ? 'alert-triangle' :
                        'cpu'
                      } 
                      size={24} 
                      color="white" 
                    />
                  </div>
                </div>
                
                {/* Hologram Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs text-blue-300/80 bg-black/60 px-2 py-1 rounded">
                    {hologram.data.name || hologram.data.message || `Sensor ${hologram.id}`}
                  </span>
                </div>
              </div>
            ))}

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-blue-500/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* HUD Overlay */}
        <div className="absolute top-4 left-4 space-y-2">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
            <p className="text-blue-300/60">System Status</p>
            <p className="text-white font-semibold">Optimal</p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
            <p className="text-blue-300/60">Active Holograms</p>
            <p className="text-white font-semibold">{holograms.length}</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 space-y-2">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-right">
            <p className="text-blue-300/60">Rendering FPS</p>
            <p className="text-white font-semibold">120</p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-right">
            <p className="text-blue-300/60">Latency</p>
            <p className="text-green-400 font-semibold">3ms</p>
          </div>
        </div>

        {/* Gesture Recognition Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm">Gesture Recognition Active</span>
            <Icon name="hand" size={20} className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="relative z-10 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-4 rounded-xl transition-all flex flex-col items-center gap-2">
          <Icon name="maximize" size={24} />
          <span>Expand View</span>
        </button>
        <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-4 rounded-xl transition-all flex flex-col items-center gap-2">
          <Icon name="layers" size={24} />
          <span>Layer Control</span>
        </button>
        <button className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-4 rounded-xl transition-all flex flex-col items-center gap-2">
          <Icon name="save" size={24} />
          <span>Save Layout</span>
        </button>
        <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 py-4 rounded-xl transition-all flex flex-col items-center gap-2">
          <Icon name="share-2" size={24} />
          <span>Share View</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}