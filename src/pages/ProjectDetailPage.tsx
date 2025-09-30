import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Building,CheckCircle,AlertCircle} from 'lucide-react'
import { projectService } from '../services/projectService'
import { Project } from '../types'

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      loadProject()
    }
  }, [id])

  const loadProject = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await projectService.getProjectById(id!)
      setProject(response)
    } catch (error) {
      console.error('Error loading project:', error)
      setError('Failed to load project details. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Project</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/projects')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building className="w-8 h-8 text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/projects')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Main Content - Document Style */}
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Document Header */}
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            {/* <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div> */}
          </div>

          {/* Project Image */}
          <div className="mb-8">
            <div className="relative h-96 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg overflow-hidden">
              {project.image ? (
                <img 
                  src={`data:image/jpeg;base64,${project.image}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover"                  
                />
              ) : null}
              {/* <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center ${project.image ? 'hidden' : ''}`}>
                <div className="text-center text-white">
                  <Building className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-medium">Project Image</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Document Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.title} is a multi-specialty healthcare facility offering advanced medical services across a wide range of specialties. 
                It is part of the {project.client} network, known for high standards of clinical excellence and patient care.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The hospital is equipped with modern infrastructure, diagnostic facilities, and advanced technology. 
                Treatment areas include cardiology, orthopedics, neurology, oncology, gastroenterology, urology, gynecology, pediatrics, and emergency care. 
                The facility offers minimally invasive and laparoscopic surgeries, along with preventive health check-up packages.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The hospital focuses on patient-centric care, safety, and comfort, supported by a team of experienced doctors, nurses, and support staff. 
                It emphasizes 24x7 emergency and critical care services for immediate and specialized attention during emergencies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In addition to in-hospital services, {project.title} provides home healthcare solutions in {project.location}. 
                These solutions include doctor visits at home, diagnostic tests, physiotherapy, nursing, and medicine delivery.
              </p>
            </div>

            {/* Section a) */}
            {project.details && project.details.length > 0 && (
            <div className="mb-8">
                {project.details.map((detail, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{index + 1}. {detail.heading}</h2>
                        <p className="text-gray-700 leading-relaxed">{detail.description}</p>
                    </div>
                ))}
              {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">a). Architectural and MEP planning:</h2>
              <p className="text-gray-700 leading-relaxed">
                The hospital focuses on patient-centric care, safety, and comfort, supported by a team of experienced doctors, nurses, and support staff. 
                It emphasizes 24x7 emergency and critical care services for immediate and specialized attention during emergencies.
              </p> */}
            </div>
            )}

           

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features & Services:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>          
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
