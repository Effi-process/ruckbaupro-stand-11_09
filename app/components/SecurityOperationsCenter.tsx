'use client'
import { useState, useEffect } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface SecurityThreat {
  id: string;
  type: 'intrusion' | 'malware' | 'ddos' | 'phishing' | 'anomaly';
  severity: 'critical' | 'high' | 'medium' | 'low';
  source: string;
  target: string;
  timestamp: Date;
  status: 'active' | 'mitigated' | 'investigating';
  description: string;
}

interface SecurityMetric {
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  status: 'good' | 'warning' | 'critical';
}

export default function SecurityOperationsCenter() {
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [activeScans, setActiveScans] = useState(3);
  const [securityScore, setSecurityScore] = useState(98.7);
  const [selectedThreat, setSelectedThreat] = useState<string | null>(null);
  
  const [metrics, setMetrics] = useState<SecurityMetric[]>([
    { name: 'Firewall-Status', value: 100, trend: 'stable', status: 'good' },
    { name: 'Verschlüsselung', value: 100, trend: 'stable', status: 'good' },
    { name: 'Zugriffskontrolle', value: 99.8, trend: 'up', status: 'good' },
    { name: 'Netzwerkintegrität', value: 99.9, trend: 'stable', status: 'good' },
    { name: 'Datensicherheit', value: 100, trend: 'stable', status: 'good' },
    { name: 'Compliance', value: 100, trend: 'stable', status: 'good' }
  ]);

  // Simulate security monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly generate threats
      if (Math.random() > 0.8) {
        const threatTypes: SecurityThreat['type'][] = ['intrusion', 'malware', 'ddos', 'phishing', 'anomaly'];
        const severities: SecurityThreat['severity'][] = ['critical', 'high', 'medium', 'low'];
        
        const newThreat: SecurityThreat = {
          id: `THREAT-${Date.now()}`,
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
          severity: severities[Math.floor(Math.random() * severities.length)],
          source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          target: ['Server-01', 'Database-Main', 'API-Gateway', 'Web-Portal'][Math.floor(Math.random() * 4)],
          timestamp: new Date(),
          status: 'active',
          description: 'Verdächtige Aktivität erkannt'
        };

        setThreats(prev => [newThreat, ...prev].slice(0, 20));

        // Auto-mitigate after some time
        setTimeout(() => {
          setThreats(prev => 
            prev.map(t => t.id === newThreat.id ? { ...t, status: 'mitigated' } : t)
          );
        }, 5000 + Math.random() * 10000);
      }

      // Update security score
      setSecurityScore(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(95, Math.min(100, prev + change));
      });

      // Update active scans
      setActiveScans(prev => Math.max(0, Math.min(10, prev + Math.floor(Math.random() * 3 - 1))));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getThreatIcon = (type: string) => {
    switch (type) {
      case 'intrusion': return 'alert-triangle';
      case 'malware': return 'bug';
      case 'ddos': return 'zap';
      case 'phishing': return 'mail';
      case 'anomaly': return 'activity';
      default: return 'alert-circle';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-950 via-gray-950 to-black rounded-3xl p-8 border border-red-500/20 relative overflow-hidden">
      {/* Animated Radar Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 border border-red-500/30 rounded-full animate-radar-scan"></div>
          <div className="absolute inset-8 border border-red-500/20 rounded-full animate-radar-scan" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-16 border border-red-500/10 rounded-full animate-radar-scan" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-24 border border-red-500/10 rounded-full animate-radar-scan" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Security Operations Center (SOC)
            </h3>
            <p className="text-red-300/80">
              24/7 Echtzeit-Überwachung mit KI-gestützter Bedrohungserkennung
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-red-300/60 text-sm">Sicherheitsscore</p>
              <p className="text-3xl font-bold text-white">{securityScore.toFixed(1)}%</p>
            </div>
            <div className="text-center">
              <p className="text-red-300/60 text-sm">Aktive Scans</p>
              <p className="text-3xl font-bold text-orange-400">{activeScans}</p>
            </div>
            <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-6 py-3 rounded-xl font-medium transition-all border border-red-500/50">
              Notfall-Protokoll
            </button>
          </div>
        </div>

        {/* Security Metrics Grid */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <Icon 
                  name={metric.trend === 'up' ? 'trending-up' : metric.trend === 'down' ? 'trending-down' : 'minus'} 
                  size={16} 
                  className={
                    metric.status === 'good' ? 'text-green-400' :
                    metric.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                  }
                />
                <span className={`text-xs font-medium ${
                  metric.status === 'good' ? 'text-green-400' :
                  metric.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {metric.value}%
                </span>
              </div>
              <p className="text-sm text-white font-medium">{metric.name}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Threat Detection Feed */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-white mb-4">Bedrohungserkennung Live-Feed</h4>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 max-h-[600px] overflow-y-auto">
              {threats.length === 0 ? (
                <div className="p-8 text-center">
                  <Icon name="shield-check" size={48} className="text-green-400/50 mx-auto mb-4" />
                  <p className="text-green-400/60">Keine aktiven Bedrohungen erkannt</p>
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {threats.map((threat) => (
                    <div
                      key={threat.id}
                      onClick={() => setSelectedThreat(threat.id)}
                      className={`p-4 hover:bg-white/5 cursor-pointer transition-all ${
                        selectedThreat === threat.id ? 'bg-white/5' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getSeverityColor(threat.severity)}`}>
                          <Icon name={getThreatIcon(threat.type)} size={20} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-semibold text-white">
                              {threat.type === 'intrusion' && 'Einbruchsversuch'}
                              {threat.type === 'malware' && 'Malware erkannt'}
                              {threat.type === 'ddos' && 'DDoS-Angriff'}
                              {threat.type === 'phishing' && 'Phishing-Versuch'}
                              {threat.type === 'anomaly' && 'Anomalie erkannt'}
                            </h5>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              threat.status === 'active' ? 'bg-red-500/20 text-red-400' :
                              threat.status === 'mitigated' ? 'bg-green-500/20 text-green-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {threat.status === 'active' ? 'Aktiv' :
                               threat.status === 'mitigated' ? 'Abgewehrt' : 'Untersuche'}
                            </span>
                          </div>
                          
                          <p className="text-red-300/80 text-sm mb-2">{threat.description}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-red-300/60">
                            <span className="flex items-center gap-1">
                              <Icon name="map-pin" size={12} />
                              {threat.source}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="target" size={12} />
                              {threat.target}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="clock" size={12} />
                              {threat.timestamp.toLocaleTimeString('de-DE')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Security Controls */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Sicherheitskontrollen</h4>
            
            {/* Quick Actions */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
              <h5 className="font-semibold text-white mb-4">Schnellaktionen</h5>
              <div className="space-y-3">
                <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 p-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Icon name="shield-off" size={20} />
                  <span>Lockdown aktivieren</span>
                </button>
                <button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 p-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Icon name="scan" size={20} />
                  <span>Vollscan starten</span>
                </button>
                <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 p-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Icon name="rotate-ccw" size={20} />
                  <span>Backup wiederherstellen</span>
                </button>
                <button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 p-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Icon name="check-circle" size={20} />
                  <span>Compliance-Check</span>
                </button>
              </div>
            </div>

            {/* Active Defenses */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-semibold text-white mb-4">Aktive Verteidigung</h5>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white">KI-Anomalieerkennung</span>
                  </div>
                  <span className="text-green-400 text-sm">Aktiv</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Quantum-Verschlüsselung</span>
                  </div>
                  <span className="text-green-400 text-sm">256-bit</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Zero-Trust-Netzwerk</span>
                  </div>
                  <span className="text-green-400 text-sm">Enforced</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Blockchain-Audit</span>
                  </div>
                  <span className="text-green-400 text-sm">Immutable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Overview Dashboard */}
        <div className="mt-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <Icon name="shield" size={24} className="text-red-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-2">Sicherheitsstatus Zusammenfassung</h4>
              <p className="text-red-300/80 mb-4">
                Das System ist vollständig geschützt mit mehrschichtiger Verteidigung. Alle kritischen 
                Systeme sind durch Quantum-Verschlüsselung gesichert und werden kontinuierlich überwacht.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">0</p>
                  <p className="text-red-300/60 text-sm">Kritische Bedrohungen</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-red-300/60 text-sm">Überwachung</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">100%</p>
                  <p className="text-red-300/60 text-sm">Compliance</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">∞</p>
                  <p className="text-red-300/60 text-sm">Audit-Trail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes radar-scan {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-radar-scan {
          animation: radar-scan 4s ease-out infinite;
        }
      `}</style>
    </div>
  );
}