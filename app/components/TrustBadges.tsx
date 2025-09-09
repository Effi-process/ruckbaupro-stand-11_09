'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface TrustBadgesProps {
  variant?: 'full' | 'compact' | 'minimal';
  showLiveStats?: boolean;
}

export default function TrustBadges({ 
  variant = 'full', 
  showLiveStats = true 
}: TrustBadgesProps) {
  const [activeProjects, setActiveProjects] = useState(7);
  const [expertTeams, setExpertTeams] = useState(22);
  const [certificationExpiry, setCertificationExpiry] = useState(new Date('2025-12-31'));

  useEffect(() => {
    if (showLiveStats) {
      const interval = setInterval(() => {
        setActiveProjects(prev => {
          const change = Math.random() > 0.5 ? 1 : -1;
          return Math.max(5, Math.min(12, prev + change));
        });
        setExpertTeams(prev => {
          const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
          return Math.max(18, Math.min(26, prev + change));
        });
      }, 45000);

      return () => clearInterval(interval);
    }
  }, [showLiveStats]);

  const certifications = [
    {
      name: 'TRGS 519 Zertifiziert',
      logo: '/images/certifications/trgs-519.svg',
      description: 'Fachbetrieb für Asbestsanierung',
      expiry: '2025',
      verified: true
    },
    {
      name: 'TÜV Rheinland',
      logo: '/images/certifications/tuv-rheinland.svg',
      description: 'Geprüfte Schadstoffsanierung',
      expiry: '2025',
      verified: true
    },
    {
      name: 'ISO 9001:2015',
      logo: '/images/certifications/iso-9001.svg',
      description: 'Qualitätsmanagement',
      expiry: '2026',
      verified: true
    },
    {
      name: 'DEKRA Zertifikat',
      logo: '/images/certifications/dekra.svg',
      description: 'Arbeitsschutz & Sicherheit',
      expiry: '2025',
      verified: true
    },
    {
      name: 'BG BAU Mitglied',
      logo: '/images/certifications/bg-bau.svg',
      description: 'Berufsgenossenschaft Bau',
      expiry: '2025',
      verified: true
    },
    {
      name: 'VDI 6202 Konform',
      logo: '/images/certifications/vdi-6202.svg',
      description: 'Schadstoffmessung nach VDI',
      expiry: '2025',
      verified: true
    }
  ];

  const trustStats = [
    { label: 'Aktive Projekte', value: activeProjects, icon: 'construction', color: 'text-blue-600' },
    { label: 'Experten-Teams', value: expertTeams, icon: 'users', color: 'text-blue-600' },
    { label: 'Vollversichert', value: '100%', icon: 'check-circle', color: 'text-blue-600' },
    { label: 'Preistransparenz', value: '100%', icon: 'star', color: 'text-blue-600' }
  ];

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center gap-4 py-4">
        {certifications.slice(0, 3).map((cert, index) => (
          <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <Icon name="shield-check" size={16} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{cert.name}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Vertrauen Sie den Experten</h3>
          <p className="text-gray-600">Zertifiziert, vollversichert und bereit für Ihr Projekt</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {certifications.slice(0, 6).map((cert, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition-colors">
                <Icon name="shield-check" size={24} className="text-blue-600" />
              </div>
              <p className="text-xs font-medium text-gray-700">{cert.name}</p>
              <p className="text-xs text-blue-600">Gültig bis {cert.expiry}</p>
            </div>
          ))}
        </div>

        {showLiveStats && (
          <div className="grid grid-cols-2 gap-4">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-3">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Full variant - return null to remove entire section
  return null;
}