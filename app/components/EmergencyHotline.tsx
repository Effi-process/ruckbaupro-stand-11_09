'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';

interface EmergencyHotlineProps {
  position?: 'fixed' | 'inline';
  variant?: 'emergency' | 'standard';
}

export default function EmergencyHotline({ 
  position = 'fixed', 
  variant = 'emergency' 
}: EmergencyHotlineProps) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [callsToday, setCallsToday] = useState(247);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [responseTime, setResponseTime] = useState('< 2 Min');

  useEffect(() => {
    // Simulate real-time availability and stats
    const interval = setInterval(() => {
      setCallsToday(prev => prev + Math.floor(Math.random() * 2));
      const hour = new Date().getHours();
      setIsAvailable(hour >= 6 && hour <= 22); // Available 6 AM - 10 PM
      setResponseTime(hour >= 8 && hour <= 18 ? '< 1 Min' : '< 2 Min');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (position === 'fixed') {
    return null;
  }

  if (position === 'inline' && variant === 'standard') {
    return null;
  }

  // Inline version for emergency sections
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Icon name="phone" size={28} color="white" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-red-600">NOTFALL HOTLINE</h3>
            <p className="text-lg font-bold text-gray-900">+49 174 8083023</p>
            <p className="text-sm text-gray-600">
              Asbest-Entfernung • Sofort verfügbar
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-green-600">{responseTime}</div>
            <div className="text-xs text-gray-600">Reaktionszeit</div>
          </div>
        </div>
      </div>
    </div>
  );
}