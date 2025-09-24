import React, { useState, useEffect } from 'react'
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar, 
  MapPin,
  Filter,
  Building2,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Pause
} from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  client: string
  location: string
  area: number
  beds: number
  status: 'planning' | 'ongoing' | 'completed' | 'on-hold'
  startDate: string
  endDate: string
  budget: number
  progress: number
  category: string
  image: string
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'planning' | 'ongoing' | 'completed' | 'on-hold'>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  useEffect(() => {
    loadProjects()
  }, [])

  useEffect(() => {
    filterProjects()
  }, [projects, searchTerm, statusFilter, categoryFilter])

  const loadProjects = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'Multi-Specialty Hospital - Delhi',
        description: 'A comprehensive 500-bed multi-specialty hospital with advanced medical facilities and modern infrastructure.',
        client: 'Delhi Healthcare Group',
        location: 'New Delhi',
        area: 150000,
        beds: 500,
        status: 'ongoing',
        startDate: '2023-01-15',
        endDate: '2024-12-31',
        budget: 25000000,
        progress: 75,
        category: 'Multi-Specialty',
        image: '/images/projects/hospital-delhi.jpg'
      },
      {
        id: '2',
        title: 'Cardiac Care Center - Mumbai',
        description: 'State-of-the-art cardiac care facility with advanced diagnostic and treatment capabilities.',
        client: 'Mumbai Cardiac Institute',
        location: 'Mumbai',
        area: 75000,
        beds: 200,
        status: 'completed',
        startDate: '2022-03-01',
        endDate: '2023-08-15',
        budget: 18000000,
        progress: 100,
        category: 'Cardiac Care',
        image: '/images/projects/cardiac-mumbai.jpg'
      },
      {
        id: '3',
        title: 'Oncology Center - Bangalore',
        description: 'Comprehensive cancer care facility with advanced radiation therapy and chemotherapy units.',
        client: 'Bangalore Cancer Institute',
        location: 'Bangalore',
        area: 100000,
        beds: 150,
        status: 'planning',
        startDate: '2024-06-01',
        endDate: '2025-12-31',
        budget: 22000000,
        progress: 15,
        category: 'Oncology',
        image: '/images/projects/oncology-bangalore.jpg'
      },
      {
        id: '4',
        title: 'Pediatric Hospital - Chennai',
        description: 'Specialized pediatric care facility designed with child-friendly environments and advanced medical equipment.',
        client: 'Chennai Children\'s Hospital',
        location: 'Chennai',
        area: 60000,
        beds: 100,
        status: 'on-hold',
        startDate: '2024-01-01',
        endDate: '2025-06-30',
        budget: 15000000,
        progress: 30,
        category: 'Pediatric',
        image: '/images/projects/pediatric-chennai.jpg'
      }
    ]
    
    setProjects(mockProjects)
    setIsLoading(false)
  }

  const filterProjects = () => {
    let filtered = projects

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(project => project.status === statusFilter)
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(project => project.category === categoryFilter)
    }

    setFilteredProjects(filtered)
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id))
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setShowModal(true)
  }

  const handleCreate = () => {
    setEditingProject(null)
    setShowModal(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`
      case 'ongoing':
        return `${baseClasses} bg-blue-100 text-blue-800`
      case 'planning':
        return `${baseClasses} bg-yellow-100 text-yellow-800`
      case 'on-hold':
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'ongoing':
        return <Clock className="w-4 h-4" />
      case 'planning':
        return <AlertCircle className="w-4 h-4" />
      case 'on-hold':
        return <Pause className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const categories = ['all', 'Multi-Specialty', 'Cardiac Care', 'Oncology', 'Pediatric', 'Emergency', 'Rehabilitation']

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Management</h1>
              <p className="text-gray-600">Manage your healthcare infrastructure projects</p>
            </div>
            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(project => project.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Ongoing</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(project => project.status === 'ongoing').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(projects.reduce((sum, project) => sum + project.budget, 0))}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="planning">Planning</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="on-hold">On Hold</option>
              </select>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className={getStatusBadge(project.status)}>
                    {getStatusIcon(project.status)}
                    <span className="ml-1 capitalize">{project.status.replace('-', ' ')}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-blue-100 text-sm">{project.category}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{project.beds} beds</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{project.area.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>{formatCurrency(project.budget)}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Start: {formatDate(project.startDate)}</span>
                    <span>End: {formatDate(project.endDate)}</span>
                  </div>
                </div>

                {/* Client */}
                <div className="mb-4 text-sm">
                  <span className="text-gray-600">Client: </span>
                  <span className="font-medium text-gray-900">{project.client}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={() => window.open(`/projects/${project.id}`, '_blank')}
                    className="text-gray-400 hover:text-gray-600 p-2"
                    title="View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-400 hover:text-blue-600 p-2"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-400 hover:text-red-600 p-2"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first project.'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && categoryFilter === 'all' && (
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Create Project</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
