'use client'
import { useState, useEffect } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface Avatar {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  status: 'online' | 'busy' | 'offline';
}

interface ShowroomSpace {
  id: string;
  name: string;
  type: 'exhibition' | 'conference' | 'demo' | 'lounge';
  capacity: number;
  currentVisitors: number;
  features: string[];
}

export default function MetaverseShowroom() {
  const [connectedUsers, setConnectedUsers] = useState(47);
  const [activeSpace, setActiveSpace] = useState('main-hall');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState('professional');

  const avatars: Avatar[] = [
    {
      id: 'user-1',
      name: 'Dr. Sarah Chen',
      role: 'Asbestexperte',
      company: 'TechSafe GmbH',
      avatar: 'professional',
      status: 'online'
    },
    {
      id: 'user-2',
      name: 'Michael Weber',
      role: 'Projektleiter',
      company: 'BauTech AG',
      avatar: 'business',
      status: 'online'
    },
    {
      id: 'user-3',
      name: 'AI Assistant',
      role: 'Virtual Guide',
      avatar: 'ai',
      status: 'online'
    }
  ];

  const spaces: ShowroomSpace[] = [
    {
      id: 'main-hall',
      name: 'Haupthalle',
      type: 'exhibition',
      capacity: 100,
      currentVisitors: 23,
      features: ['3D Produktdemos', 'Interaktive Displays', 'Info-Points']
    },
    {
      id: 'conference-room',
      name: 'Konferenzraum',
      type: 'conference',
      capacity: 50,
      currentVisitors: 12,
      features: ['Hologramm-Präsentationen', 'Spatial Audio', 'Screen Sharing']
    },
    {
      id: 'demo-area',
      name: 'Demo-Bereich',
      type: 'demo',
      capacity: 30,
      currentVisitors: 8,
      features: ['VR-Simulationen', 'Hands-On Training', 'Live-Demos']
    },
    {
      id: 'networking-lounge',
      name: 'Networking Lounge',
      type: 'lounge',
      capacity: 40,
      currentVisitors: 4,
      features: ['Casual Meetings', 'Voice Chat', 'Virtual Coffee']
    }
  ];

  // Simulate user activity
  useEffect(() => {
    const interval = setInterval(() => {
      setConnectedUsers(prev => prev + Math.floor(Math.random() * 5 - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSpace = spaces.find(s => s.id === activeSpace);

  return (
    <div className="bg-gradient-to-br from-violet-950 via-fuchsia-950 to-pink-950 rounded-3xl p-8 border border-violet-500/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Metaverse Showroom & Conference Center
            </h3>
            <p className="text-violet-300/80">
              Immersive 3D-Umgebung für Produktpräsentationen und virtuelle Meetings
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-violet-300/60 text-sm">Online</p>
              <p className="text-3xl font-bold text-white">{connectedUsers}</p>
            </div>
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all">
              Metaverse betreten
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Metaverse Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden">
              {/* 3D Space Preview */}
              <div className="relative h-[500px] bg-gradient-to-b from-violet-900/20 to-black/50">
                {/* Virtual Environment */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Icon name="cube" size={64} className="text-violet-400" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-2">
                      {currentSpace?.name || 'Metaverse Showroom'}
                    </h4>
                    <p className="text-violet-300/60 mb-6">
                      {currentSpace?.currentVisitors} Besucher online
                    </p>
                    
                    {/* Space Features */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                      {currentSpace?.features.map((feature, index) => (
                        <span key={index} className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Avatar Selection */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 inline-block">
                      <p className="text-violet-300 text-sm mb-3">Wählen Sie Ihren Avatar</p>
                      <div className="flex gap-4">
                        {['professional', 'casual', 'futuristic', 'custom'].map((avatar) => (
                          <button
                            key={avatar}
                            onClick={() => setSelectedAvatar(avatar)}
                            className={`
                              w-16 h-16 rounded-lg border-2 transition-all
                              ${selectedAvatar === avatar 
                                ? 'border-violet-500 scale-110' 
                                : 'border-white/20 hover:border-white/40'}
                            `}
                          >
                            <div className="w-full h-full bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-md"></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                        className={`
                          p-3 rounded-lg transition-all
                          ${isVoiceEnabled 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'}
                        `}
                      >
                        <Icon name={isVoiceEnabled ? 'mic' : 'mic-off'} size={20} />
                      </button>
                      <button className="bg-violet-500/20 text-violet-400 p-3 rounded-lg hover:bg-violet-500/30 transition-all">
                        <Icon name="video" size={20} />
                      </button>
                      <button className="bg-violet-500/20 text-violet-400 p-3 rounded-lg hover:bg-violet-500/30 transition-all">
                        <Icon name="screen-share" size={20} />
                      </button>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="bg-violet-500/20 text-violet-400 px-4 py-2 rounded-lg hover:bg-violet-500/30 transition-all flex items-center gap-2">
                        <Icon name="users" size={16} />
                        <span>Teilnehmer</span>
                      </button>
                      <button className="bg-violet-500/20 text-violet-400 px-4 py-2 rounded-lg hover:bg-violet-500/30 transition-all flex items-center gap-2">
                        <Icon name="settings" size={16} />
                        <span>Einstellungen</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Space Navigation */}
              <div className="bg-black/60 p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {spaces.map((space) => (
                    <button
                      key={space.id}
                      onClick={() => setActiveSpace(space.id)}
                      className={`
                        px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2
                        ${activeSpace === space.id 
                          ? 'bg-violet-500 text-white' 
                          : 'bg-white/10 text-violet-300 hover:bg-white/20'}
                      `}
                    >
                      <Icon 
                        name={
                          space.type === 'exhibition' ? 'image' :
                          space.type === 'conference' ? 'users' :
                          space.type === 'demo' ? 'play' : 'coffee'
                        } 
                        size={16} 
                      />
                      <span>{space.name}</span>
                      <span className="text-xs opacity-60">({space.currentVisitors})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connected Users */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Aktive Teilnehmer</h4>
              <div className="space-y-3">
                {avatars.map((avatar) => (
                  <div key={avatar.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-full"></div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black
                        ${avatar.status === 'online' ? 'bg-green-400' : ''}
                        ${avatar.status === 'busy' ? 'bg-yellow-400' : ''}
                        ${avatar.status === 'offline' ? 'bg-gray-400' : ''}
                      `}></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{avatar.name}</p>
                      <p className="text-violet-300/60 text-sm">{avatar.role}</p>
                    </div>
                    <button className="text-violet-400 hover:text-violet-300 transition-colors">
                      <Icon name="message-circle" size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
                Alle {connectedUsers} Teilnehmer anzeigen →
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Nächste Events</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-violet-500 pl-4">
                  <p className="text-white font-medium">Asbestsanierung 2024 Summit</p>
                  <p className="text-violet-300/60 text-sm">Heute, 15:00 Uhr • Haupthalle</p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-white font-medium">VR Training Workshop</p>
                  <p className="text-violet-300/60 text-sm">Morgen, 10:00 Uhr • Demo-Bereich</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-white font-medium">KI & Robotik Showcase</p>
                  <p className="text-violet-300/60 text-sm">Fr, 14:00 Uhr • Konferenzraum</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <PremiumButton className="w-full">
                <Icon name="calendar" size={16} />
                Event planen
              </PremiumButton>
              <PremiumButton variant="outline" className="w-full">
                <Icon name="download" size={16} />
                Metaverse App
              </PremiumButton>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="globe" size={32} className="text-violet-400" />
            </div>
            <h5 className="text-white font-semibold mb-2">Global Accessible</h5>
            <p className="text-violet-300/60 text-sm">Weltweiter Zugang ohne Reisekosten</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="users" size={32} className="text-fuchsia-400" />
            </div>
            <h5 className="text-white font-semibold mb-2">Unbegrenzte Kapazität</h5>
            <p className="text-violet-300/60 text-sm">Tausende gleichzeitige Besucher</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="sparkles" size={32} className="text-pink-400" />
            </div>
            <h5 className="text-white font-semibold mb-2">Immersive Experience</h5>
            <p className="text-violet-300/60 text-sm">Photorealistische 3D-Umgebung</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" size={32} className="text-purple-400" />
            </div>
            <h5 className="text-white font-semibold mb-2">Datenschutz</h5>
            <p className="text-violet-300/60 text-sm">Ende-zu-Ende verschlüsselt</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}