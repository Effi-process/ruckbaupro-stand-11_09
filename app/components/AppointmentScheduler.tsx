'use client'
import { useState } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface Appointment {
  id: string;
  title: string;
  type: 'inspection' | 'meeting' | 'project_start' | 'project_end' | 'training' | 'maintenance';
  date: string;
  time: string;
  duration: number; // in minutes
  location: string;
  client?: string;
  team: string[];
  notes: string;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'high' | 'medium' | 'low';
}

export default function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  // Demo appointments
  const appointments: Appointment[] = [
    {
      id: 'A001',
      title: 'Objektbesichtigung Friedrichstr. 12',
      type: 'inspection',
      date: '2024-01-20',
      time: '09:00',
      duration: 90,
      location: 'Friedrichstr. 12, 10117 Berlin',
      client: 'Immobilien GmbH',
      team: ['Thomas Müller', 'Sarah Schmidt'],
      notes: 'Verdacht auf Asbestplatten im Dachbereich',
      status: 'confirmed',
      priority: 'high'
    },
    {
      id: 'A002',
      title: 'Behördentermin - Genehmigung Projekt #47',
      type: 'meeting',
      date: '2024-01-20',
      time: '11:30',
      duration: 60,
      location: 'Umweltamt München',
      team: ['Sarah Schmidt'],
      notes: 'Unterlagen für Großprojekt mitbringen',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: 'A003',
      title: 'Teammeeting Sicherheitsschulung',
      type: 'training',
      date: '2024-01-20',
      time: '14:00',
      duration: 120,
      location: 'Schulungsraum Zentrale',
      team: ['Alle Mitarbeiter'],
      notes: 'Jährliche Pflichtschulung TRGS 519',
      status: 'scheduled',
      priority: 'medium'
    },
    {
      id: 'A004',
      title: 'Projektstart Industriehalle',
      type: 'project_start',
      date: '2024-01-22',
      time: '07:00',
      duration: 480,
      location: 'Werner-von-Siemens-Str. 1, München',
      client: 'Siemens AG',
      team: ['Michael Weber', 'Anna Fischer', 'Team A'],
      notes: 'Zugang nur mit Werksausweis',
      status: 'confirmed',
      priority: 'high'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'inspection': return 'eye';
      case 'meeting': return 'users';
      case 'project_start': return 'play';
      case 'project_end': return 'check-circle';
      case 'training': return 'award';
      case 'maintenance': return 'settings';
      default: return 'calendar';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'inspection': return 'bg-blue-100 text-blue-700';
      case 'meeting': return 'bg-purple-100 text-purple-700';
      case 'project_start': return 'bg-green-100 text-green-700';
      case 'project_end': return 'bg-gray-100 text-gray-700';
      case 'training': return 'bg-yellow-100 text-yellow-700';
      case 'maintenance': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'inspection': return 'Besichtigung';
      case 'meeting': return 'Besprechung';
      case 'project_start': return 'Projektstart';
      case 'project_end': return 'Projektende';
      case 'training': return 'Schulung';
      case 'maintenance': return 'Wartung';
      default: return type;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-gray-100 text-gray-700';
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'in_progress': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // Get appointments for selected date
  const dayAppointments = appointments.filter(apt => apt.date === selectedDate);

  // Get week dates
  const getWeekDates = () => {
    const current = new Date(selectedDate);
    const week = [];
    const monday = new Date(current);
    monday.setDate(current.getDate() - current.getDay() + 1);
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      week.push(day.toISOString().split('T')[0]);
    }
    return week;
  };

  const weekDates = getWeekDates();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Terminplanung</h2>
            <p className="text-gray-600">Verwalten Sie alle Termine und Einsätze</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(['day', 'week', 'month'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    viewMode === mode
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {mode === 'day' ? 'Tag' : mode === 'week' ? 'Woche' : 'Monat'}
                </button>
              ))}
            </div>
            
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
            
            <PremiumButton size="small" onClick={() => setShowNewAppointment(true)}>
              <Icon name="plus" size={16} />
              Neuer Termin
            </PremiumButton>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      {viewMode === 'week' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Week Header */}
          <div className="grid grid-cols-2 md:grid-cols-8 bg-gray-50 border-b">
            <div className="p-4 text-sm font-semibold text-gray-700">Zeit</div>
            {weekDates.map((date) => {
              const dateObj = new Date(date);
              const isToday = date === new Date().toISOString().split('T')[0];
              const dayName = dateObj.toLocaleDateString('de-DE', { weekday: 'short' });
              const dayNum = dateObj.getDate();
              
              return (
                <div
                  key={date}
                  className={`p-4 text-center border-l ${
                    isToday ? 'bg-blue-50' : ''
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-700">{dayName}</p>
                  <p className={`text-lg font-bold ${
                    isToday ? 'text-[#0066CC]' : 'text-gray-900'
                  }`}>
                    {dayNum}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Time Slots */}
          <div className="relative">
            {[...Array(13)].map((_, i) => {
              const hour = 7 + i;
              return (
                <div key={hour} className="grid grid-cols-2 md:grid-cols-8 border-b">
                  <div className="p-4 text-sm text-gray-600 bg-gray-50">
                    {hour}:00
                  </div>
                  {weekDates.map((date) => (
                    <div key={`${date}-${hour}`} className="p-2 border-l min-h-[80px] relative">
                      {appointments
                        .filter(apt => apt.date === date && parseInt(apt.time.split(':')[0]) === hour)
                        .map((apt) => (
                          <div
                            key={apt.id}
                            className={`absolute left-2 right-2 p-2 rounded-lg text-xs ${getTypeColor(apt.type)} cursor-pointer hover:shadow-md transition-shadow`}
                            style={{
                              top: `${(parseInt(apt.time.split(':')[1]) / 60) * 80}px`,
                              height: `${(apt.duration / 60) * 80 - 4}px`
                            }}
                          >
                            <div className="font-semibold truncate">{apt.time} - {apt.title}</div>
                            <div className="flex items-center gap-1 mt-1">
                              <Icon name={getTypeIcon(apt.type)} size={12} />
                              <span className="truncate">{apt.location}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Day View */}
      {viewMode === 'day' && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Termine am {new Date(selectedDate).toLocaleDateString('de-DE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h3>
              
              {dayAppointments.length > 0 ? (
                <div className="space-y-4">
                  {dayAppointments.map((apt) => (
                    <div key={apt.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${getTypeColor(apt.type)}`}>
                            <Icon name={getTypeIcon(apt.type)} size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{apt.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {apt.time} - {
                                new Date(new Date(`2024-01-01 ${apt.time}`).getTime() + apt.duration * 60000)
                                  .toTimeString().slice(0, 5)
                              } ({apt.duration} Min.)
                            </p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(apt.status)}`}>
                          {apt.status === 'scheduled' ? 'Geplant' :
                           apt.status === 'confirmed' ? 'Bestätigt' :
                           apt.status === 'in_progress' ? 'Läuft' :
                           apt.status === 'completed' ? 'Erledigt' : 'Abgesagt'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Ort</p>
                          <p className="font-medium">{apt.location}</p>
                        </div>
                        {apt.client && (
                          <div>
                            <p className="text-gray-600">Kunde</p>
                            <p className="font-medium">{apt.client}</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-3">
                        <p className="text-gray-600 text-sm">Team</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {apt.team.map((member, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-sm">
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>

                      {apt.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">Notizen</p>
                          <p className="text-sm mt-1">{apt.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="calendar" size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Keine Termine für diesen Tag</p>
                </div>
              )}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-4">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tagesübersicht</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Termine gesamt</span>
                  <span className="font-semibold">{dayAppointments.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Arbeitszeit</span>
                  <span className="font-semibold">
                    {Math.round(dayAppointments.reduce((sum, apt) => sum + apt.duration, 0) / 60)} Std.
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Mitarbeiter im Einsatz</span>
                  <span className="font-semibold">
                    {new Set(dayAppointments.flatMap(apt => apt.team)).size}
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nächste Termine</h3>
              <div className="space-y-3">
                {appointments
                  .filter(apt => apt.date > selectedDate)
                  .slice(0, 5)
                  .map((apt) => (
                    <div key={apt.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className={`p-1.5 rounded ${getTypeColor(apt.type)}`}>
                        <Icon name={getTypeIcon(apt.type)} size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{apt.title}</p>
                        <p className="text-xs text-gray-600">
                          {new Date(apt.date).toLocaleDateString('de-DE')} - {apt.time}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}