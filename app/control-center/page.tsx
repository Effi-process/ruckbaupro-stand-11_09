'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '../components/Icon';
import LoginForm from '../components/LoginForm';
import Link from 'next/link';
import Image from 'next/image';
import FloatingElements from '../components/FloatingElements';

export default function ControlCenter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('employeeAuth');
    setIsAuthenticated(auth === 'true');
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('employeeAuth');
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm type="employee" onSuccess={() => setIsAuthenticated(true)} />;
  }

  const views = [
    { id: 'dashboard', name: 'Dashboard', icon: 'dashboard', badge: null },
    { id: 'trust', name: 'Trust Management', icon: 'star', badge: 3, link: '/control-center/trust-management' },
    { id: 'projects', name: 'Projekte', icon: 'folder', badge: 12 },
    { id: 'calendar', name: 'Kalender', icon: 'calendar', badge: 3 },
    { id: 'team', name: 'Team', icon: 'users', badge: null },
    { id: 'customers', name: 'Kunden', icon: 'user-check', badge: null },
    { id: 'inventory', name: 'Lager', icon: 'archive', badge: 2 },
    { id: 'documents', name: 'Dokumente', icon: 'document', badge: null },
    { id: 'safety', name: 'Sicherheit', icon: 'shield', badge: null },
    { id: 'reports', name: 'Berichte', icon: 'bar-chart', badge: null },
    { id: 'settings', name: 'Einstellungen', icon: 'settings', badge: null }
  ];

  const stats = [
    { label: 'Umsatz heute', value: '€12,450', change: '+15%', icon: 'euro', color: 'green' },
    { label: 'Neue Anfragen', value: '7', change: '+3', icon: 'mail', color: 'blue' },
    { label: 'Aktive Teams', value: '4/6', change: null, icon: 'users', color: 'purple' },
    { label: 'Abschlussrate', value: '94%', change: '+2%', icon: 'check-circle', color: 'green' }
  ];

  const projects = [
    {
      id: 'P-2024-015',
      name: 'Bürogebäude Alexanderplatz',
      client: 'Immobilien GmbH',
      status: 'active',
      priority: 'high',
      progress: 45,
      team: 'Team Alpha',
      deadline: '25.01.2024',
      value: '€85,000'
    },
    {
      id: 'P-2024-014',
      name: 'Schulgebäude Renovation',
      client: 'Stadt München',
      status: 'planning',
      priority: 'medium',
      progress: 20,
      team: 'Team Beta',
      deadline: '10.02.2024',
      value: '€120,000'
    },
    {
      id: 'P-2024-013',
      name: 'Industriehalle Siemens',
      client: 'Siemens AG',
      status: 'active',
      priority: 'high',
      progress: 80,
      team: 'Team Gamma',
      deadline: '18.01.2024',
      value: '€95,500'
    }
  ];

  const teamMembers = [
    { 
      name: 'Michael Schmidt', 
      role: 'Projektleiter', 
      status: 'active', 
      location: 'Büro',
      currentProject: 'Bürogebäude Alex.',
      avatar: 'MS',
      skills: ['TRGS 519', 'Projektmanagement'],
      availability: 100
    },
    { 
      name: 'Sarah Weber', 
      role: 'Sicherheitsbeauftragte', 
      status: 'active', 
      location: 'Vor Ort - München',
      currentProject: 'Industriehalle',
      avatar: 'SW',
      skills: ['Sicherheit', 'Schulungen'],
      availability: 80
    },
    { 
      name: 'Thomas Müller', 
      role: 'Techniker', 
      status: 'break', 
      location: 'Büro',
      currentProject: '-',
      avatar: 'TM',
      skills: ['Dachsanierung', 'KMF'],
      availability: 0
    },
    { 
      name: 'Anna Fischer', 
      role: 'Technikerin', 
      status: 'active', 
      location: 'Vor Ort - Berlin',
      currentProject: 'Bürogebäude Alex.',
      avatar: 'AF',
      skills: ['Fassade', 'Innenraum'],
      availability: 100
    }
  ];

  const upcomingTasks = [
    { time: '09:00', title: 'Sicherheitsbesprechung Team Alpha', type: 'meeting', priority: 'high' },
    { time: '10:30', title: 'Materiallieferung Projekt P-2024-015', type: 'delivery', priority: 'medium' },
    { time: '14:00', title: 'Behördentermin - Genehmigung', type: 'official', priority: 'high' },
    { time: '16:00', title: 'Kundentermin Vor-Ort Besichtigung', type: 'inspection', priority: 'medium' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'planning': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'break': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="shield" size={24} color="white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Kontrollzentrum</h1>
                <p className="text-xs text-gray-500">Mitarbeiter-Dashboard</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition-colors flex items-center gap-2">
                <Icon name="plus" size={16} />
                Neues Projekt
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Icon name="calendar" size={16} />
                Termin planen
              </button>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="bell" size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Max Mustermann</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <div className="relative group">
                <button className="w-10 h-10 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center text-white font-semibold">
                  MM
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Icon name="user" size={16} className="inline mr-2" />
                    Mein Profil
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Icon name="settings" size={16} className="inline mr-2" />
                    Einstellungen
                  </button>
                  <hr className="my-2" />
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <Icon name="log-out" size={16} className="inline mr-2" />
                    Abmelden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <div className="space-y-1">
              {views.map((view) => (
                view.link ? (
                  <Link
                    key={view.id}
                    href={view.link}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                      text-gray-700 hover:bg-gray-100
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={view.icon} size={20} />
                      <span className="font-medium">{view.name}</span>
                    </div>
                    {view.badge && (
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-[#0066CC] text-white">
                        {view.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                      ${activeView === view.id 
                        ? 'bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white shadow-lg' 
                        : 'text-gray-700 hover:bg-gray-100'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={view.icon} size={20} />
                      <span className="font-medium">{view.name}</span>
                    </div>
                    {view.badge && (
                      <span className={`
                        px-2 py-1 text-xs font-bold rounded-full
                        ${activeView === view.id ? 'bg-white/20 text-white' : 'bg-[#0066CC] text-white'}
                      `}>
                        {view.badge}
                      </span>
                    )}
                  </button>
                )
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Heutige Statistik</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Abgeschlossen</span>
                  <span className="text-sm font-bold text-green-600">3/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Team Auslastung</span>
                  <span className="text-sm font-bold text-blue-600">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Materialverbrauch</span>
                  <span className="text-sm font-bold text-orange-600">€2,340</span>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeView === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                        <Icon name={stat.icon} size={24} className={`text-${stat.color}-600`} />
                      </div>
                      {stat.change && (
                        <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Projects Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Aktive Projekte</h2>
                  <Link href="#" className="text-[#0066CC] hover:text-[#0052A3] font-medium text-sm">
                    Alle anzeigen →
                  </Link>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#0066CC] transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-semibold text-gray-900">{project.name}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                              {project.priority === 'high' ? 'Hoch' : project.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{project.client} • {project.id}</p>
                        </div>
                        <span className="text-lg font-bold text-[#0066CC]">{project.value}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                        <div>
                          <p className="text-gray-500">Team</p>
                          <p className="font-medium">{project.team}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Deadline</p>
                          <p className="font-medium">{project.deadline}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className={`font-medium ${project.status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>
                            {project.status === 'active' ? 'Aktiv' : 'Planung'}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Fortschritt</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-full bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Team Status */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Team Status</h2>
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white ${
                            member.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                          }`}>
                            {member.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{member.location}</p>
                          <p className="text-xs text-gray-500">{member.currentProject}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Schedule */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Heutige Termine</h2>
                  <div className="space-y-3">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="text-sm font-medium text-gray-600 w-12">{task.time}</div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{task.title}</p>
                          <span className={`inline-flex items-center gap-1 text-xs ${getPriorityColor(task.priority)}`}>
                            <Icon name="flag" size={12} />
                            {task.priority === 'high' ? 'Hoch' : 'Mittel'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other views */}
          {activeView !== 'dashboard' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="text-center">
                <Icon name={views.find(v => v.id === activeView)?.icon || 'folder'} size={48} className="text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {views.find(v => v.id === activeView)?.name}
                </h2>
                <p className="text-gray-600">
                  Diese Funktion wird in Kürze verfügbar sein.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}