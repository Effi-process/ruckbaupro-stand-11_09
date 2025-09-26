'use client'
import { useState } from 'react';
import Icon from './Icon';
import PremiumButton from './PremiumButton';

interface Project {
  id: string;
  name: string;
  client: string;
  address: string;
  type: 'asbestos_removal' | 'kmf_removal' | 'pcb_removal' | 'analysis';
  status: 'planning' | 'approved' | 'in_progress' | 'quality_check' | 'completed' | 'on_hold';
  priority: 'high' | 'medium' | 'low';
  startDate: string;
  endDate: string;
  progress: number;
  team: string[];
  budget: number;
  spent: number;
  notes: string;
  risks: string[];
  documents: number;
  images: number;
}

export default function ProjectTracker() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Demo data
  const projects: Project[] = [
    {
      id: 'P2024-001',
      name: 'Schulgebäude Münchner Str. 42',
      client: 'Stadt München',
      address: 'Münchner Str. 42, 80333 München',
      type: 'asbestos_removal',
      status: 'in_progress',
      priority: 'high',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      progress: 65,
      team: ['Thomas Müller', 'Anna Fischer', 'Michael Weber'],
      budget: 45000,
      spent: 29250,
      notes: 'Dachsanierung, besondere Vorsicht bei Dachfenstern',
      risks: ['Wetterabhängig', 'Angrenzende Wohnbebauung'],
      documents: 23,
      images: 87
    },
    {
      id: 'P2024-002',
      name: 'Industriehalle Siemens AG',
      client: 'Siemens AG',
      address: 'Werner-von-Siemens-Str. 1, 80333 München',
      type: 'asbestos_removal',
      status: 'planning',
      priority: 'medium',
      startDate: '2024-03-01',
      endDate: '2024-04-15',
      progress: 20,
      team: ['Sarah Schmidt'],
      budget: 120000,
      spent: 0,
      notes: 'Großprojekt, Koordination mit Werksleitung erforderlich',
      risks: ['Produktionsausfall minimieren', 'Zugang nur am Wochenende'],
      documents: 8,
      images: 12
    },
    {
      id: 'P2024-003',
      name: 'Wohnhaus Berliner Allee 42',
      client: 'Hausverwaltung Weber',
      address: 'Berliner Allee 42, 10117 Berlin',
      type: 'analysis',
      status: 'completed',
      priority: 'low',
      startDate: '2024-01-05',
      endDate: '2024-01-10',
      progress: 100,
      team: ['Michael Weber'],
      budget: 2500,
      spent: 2500,
      notes: 'Materialproben aus allen Stockwerken entnommen',
      risks: [],
      documents: 5,
      images: 24
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-gray-100 text-gray-700';
      case 'approved': return 'bg-blue-100 text-blue-700';
      case 'in_progress': return 'bg-yellow-100 text-yellow-700';
      case 'quality_check': return 'bg-purple-100 text-purple-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'on_hold': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'planning': return 'In Planung';
      case 'approved': return 'Genehmigt';
      case 'in_progress': return 'In Bearbeitung';
      case 'quality_check': return 'Qualitätskontrolle';
      case 'completed': return 'Abgeschlossen';
      case 'on_hold': return 'Pausiert';
      default: return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'asbestos_removal': return 'Asbestsanierung';
      case 'kmf_removal': return 'KMF-Sanierung';
      case 'pcb_removal': return 'PCB-Sanierung';
      case 'analysis': return 'Schadstoffanalyse';
      default: return type;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Projektübersicht</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {filteredProjects.length} Projekte
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Icon name="search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Projekt suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            >
              <option value="all">Alle Status</option>
              <option value="planning">In Planung</option>
              <option value="approved">Genehmigt</option>
              <option value="in_progress">In Bearbeitung</option>
              <option value="quality_check">Qualitätskontrolle</option>
              <option value="completed">Abgeschlossen</option>
              <option value="on_hold">Pausiert</option>
            </select>
            
            <PremiumButton size="small">
              <Icon name="plus" size={16} />
              Neues Projekt
            </PremiumButton>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`bg-white rounded-xl shadow-sm p-6 border cursor-pointer transition-all hover:shadow-md ${
                selectedProject === project.id ? 'border-[#0066CC] ring-2 ring-[#0066CC]/20' : 'border-gray-100'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <span className={`${getPriorityColor(project.priority)}`}>
                      <Icon name="flag" size={16} />
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{project.id}</span>
                    <span>•</span>
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{getTypeText(project.type)}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-600">Zeitraum</p>
                  <p className="font-medium">{new Date(project.startDate).toLocaleDateString('de-DE')} - {new Date(project.endDate).toLocaleDateString('de-DE')}</p>
                </div>
                <div>
                  <p className="text-gray-600">Team</p>
                  <p className="font-medium">{project.team.length} Mitarbeiter</p>
                </div>
                <div>
                  <p className="text-gray-600">Budget</p>
                  <p className="font-medium">€{project.spent.toLocaleString('de-DE')} / €{project.budget.toLocaleString('de-DE')}</p>
                </div>
                <div>
                  <p className="text-gray-600">Dokumente</p>
                  <p className="font-medium">{project.documents} Dateien</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Fortschritt</span>
                  <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      project.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="lg:col-span-1">
          {selectedProjectData ? (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Projektdetails</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Adresse</p>
                  <p className="font-medium">{selectedProjectData.address}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Team</p>
                  <div className="space-y-2">
                    {selectedProjectData.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <Icon name="user" size={16} className="text-gray-600" />
                        </div>
                        <span className="text-sm">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Notizen</p>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">{selectedProjectData.notes}</p>
                </div>

                {selectedProjectData.risks.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Risiken</p>
                    <div className="space-y-1">
                      {selectedProjectData.risks.map((risk, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <Icon name="alert-triangle" size={16} className="text-orange-500 mt-0.5" />
                          <span>{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#0066CC]">{selectedProjectData.images}</p>
                    <p className="text-sm text-gray-600">Fotos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#0066CC]">{selectedProjectData.documents}</p>
                    <p className="text-sm text-gray-600">Dokumente</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <PremiumButton size="small" className="flex-1">
                    <Icon name="edit" size={16} />
                    Bearbeiten
                  </PremiumButton>
                  <PremiumButton variant="outline" size="small" className="flex-1">
                    <Icon name="file-text" size={16} />
                    Bericht
                  </PremiumButton>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Icon name="folder" size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Wählen Sie ein Projekt aus, um Details anzuzeigen</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}