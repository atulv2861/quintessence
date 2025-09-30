import React, { useState, useEffect } from 'react'
import { ArrowRight, MapPin, Building, Users, Calendar, Award, ExternalLink, Grid, List } from 'lucide-react'
import { projectService } from '../services/projectService'
import { Project } from '../types'

const ProjectsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const projectsPerPage = 6
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Load projects from API
  useEffect(() => {
    loadProjects()
  }, [currentPage])

  const loadProjects = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await projectService.getPublicProjects(currentPage, projectsPerPage)
      setProjects(response.projects)
      setTotalPages(Math.ceil(response.total / projectsPerPage))
    } catch (error) {
      console.error('Error loading projects:', error)
      setError('Failed to load projects. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [projectsCount, setProjectsCount] = useState(1)
  const [bedsCount, setBedsCount] = useState(1)
  const [areaCount, setAreaCount] = useState(1)
  const [associatesCount, setAssociatesCount] = useState(1)
  const increaseCount = (targetValue: number, update: (val: number) => void) => {
    const duration = 3000 // Total animation duration in milliseconds
    const steps = 60 // Number of animation steps
    const stepTime = duration / steps // Time between each step
    const increment = targetValue / steps // Increment per step
    
    let current = 0
    let step = 0
    
    const interval = setInterval(() => {
      step++
      current = Math.min(Math.floor(increment * step), targetValue)
      update(current)
      
      if (step >= steps) {
        clearInterval(interval)
        update(targetValue) // Ensure we end exactly at target value
      }
    }, stepTime)
  }
  
  useEffect(() => {
    increaseCount(60,setProjectsCount)
    increaseCount(19474,setBedsCount)
    increaseCount(139528,setAreaCount)
    increaseCount(20,setAssociatesCount)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Interactive Background */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero3.webp')"
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-6xl text-center">
              {/* <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-blue-400 font-medium">Portfolio Showcase</span>
              </div> */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Our Projects
              </h1>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover our portfolio of innovative healthcare infrastructure projects that are transforming the future of medical facilities.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{projectsCount}+</div>
                  <div className="text-white/70 text-sm">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{bedsCount}+</div>
                  <div className="text-white/70 text-sm">Total Beds</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{areaCount}+</div>
                  <div className="text-white/70 text-sm">Sq. Mtr.</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{associatesCount}+</div>
                  <div className="text-white/70 text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>


      {/* Projects Grid/List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative mb-16">
            {/* Centered Content */}
            <div className="text-center">
              {/* <div className="inline-block px-6 py-2 bg-blue-100 text-blue-400 rounded-full mb-6">
                <span className="font-medium">Portfolio</span>
              </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured  
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 pl-2 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our diverse portfolio of healthcare infrastructure projects that showcase innovation, excellence, and impact.
              </p>
            </div>
            
            {/* View Mode Toggle - Positioned absolutely on the right */}
            <div className="absolute top-0 right-0 hidden lg:flex items-center space-x-4">
              <span className="text-gray-600 font-medium">View:</span>
              <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* View Mode Toggle - For mobile, centered below content */}
            <div className="flex justify-center mt-8 lg:hidden">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">View:</span>
                <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

           {/* Loading State */}
           {isLoading && (
             <div className="text-center py-20">
               <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
               <p className="text-gray-600">Loading projects...</p>
             </div>
           )}

           {/* Error State */}
           {error && (
             <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
               <div className="flex items-center">
                 <div className="w-5 h-5 text-red-500 mr-2">⚠️</div>
                 <p className="text-red-700">{error}</p>
               </div>
             </div>
           )}

           {/* Projects Grid/List */}
           {!isLoading && !error && projects.length > 0 && (
             <>
               {viewMode === 'grid' ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  //onMouseEnter={() => setHoveredProject(project.id)}
                  //onMouseLeave={() => setHoveredProject(null)}
                >
                   {/* Project Image */}
                   <div className="relative overflow-hidden">
                     {project.image ? (
                       <img 
                         src={`data:image/jpeg;base64,${project.image}`} 
                         alt={project.title} 
                         className="w-full h-64 object-cover" 
                         onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.style.display = 'none';
                           target.nextElementSibling?.classList.remove('hidden');
                         }}
                       />
                     ) : null}
                     <div className={`w-full h-64 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center ${project.image ? 'hidden' : ''}`}>
                       {/* <div className="text-center">
                         <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                           <Building className="w-10 h-10 text-white" />
                         </div>
                         <p className="text-white font-medium">Project Image</p>
                       </div> */}
                       <img src={`data:image/jpeg;base64,${project.image}`} alt={project.title} className="w-full h-64 object-cover" />
                     </div>
                    
                    {/* Status Badge */}
                    {/* <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500 text-white' 
                          : project.status === 'In Progress'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-blue-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div> */}

                    {/* Category Badge */}
                    {/* <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div> */}

                    {/* Hover Overlay */}
                    {/* <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="flex space-x-4">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Eye className="w-6 h-6 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Heart className="w-6 h-6 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Share2 className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div> */}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center space-x-2 text-sm text-gray-500">
                         <MapPin className="w-4 h-4" />
                         <span>{project.location}</span>
                       </div>
                       <div className="text-sm text-gray-500">{project.client}</div>
                     </div>

                     <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                       {project.title}
                     </h3>

                     <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                       {project.description}
                     </p>

                     {/* Project Stats */}
                     <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className="text-center p-3 bg-gray-50 rounded-lg">
                         <div className="text-lg font-bold text-blue-400">{project.beds} beds</div>
                         <div className="text-xs text-gray-500">Capacity</div>
                       </div>
                       <div className="text-center p-3 bg-gray-50 rounded-lg">
                         <div className="text-lg font-bold text-blue-400">{project.area}</div>
                         <div className="text-xs text-gray-500">Area</div>
                       </div>
                     </div>

                    {/* Features */}
                    {/* <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-blue-100 to-blue-400 text-blue-400 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div> */}

                    {/* Engagement Stats */}
                    {/* <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(project.stats.views)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{project.stats.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 className="w-4 h-4" />
                          <span>{project.stats.shares}</span>
                        </div>
                      </div>
                    </div> */}

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                     {/* Project Image */}
                     <div className="relative overflow-hidden">
                       {project.image ? (
                         <img 
                           src={`data:image/jpeg;base64,${project.image}`} 
                           alt={project.title} 
                           className="w-full h-64 lg:h-full object-cover" 
                           onError={(e) => {
                             const target = e.target as HTMLImageElement;
                             target.style.display = 'none';
                             target.nextElementSibling?.classList.remove('hidden');
                           }}
                         />
                       ) : null}
                       <div className={`w-full h-64 lg:h-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center ${project.image ? 'hidden' : ''}`}>
                         {/* <div className="text-center">
                           <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                             <Building className="w-8 h-8 text-white" />
                           </div>
                           <p className="text-white font-medium text-sm">Project Image</p>
                         </div> */}
                         <img src={`data:image/jpeg;base64,${project.image}`} alt={project.title} className="w-full h-64 lg:h-full object-cover" />
                       </div>
                      {/* <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-500 text-white' 
                            : project.status === 'In Progress'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-blue-500 text-white'
                        }`}>
                          {project.status}
                        </span>
                      </div> */}
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                         <div>
                           <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                             <MapPin className="w-4 h-4" />
                             <span>{project.location}</span>
                             <span>•</span>
                             <span>{project.client}</span>
                           </div>
                           <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-400 transition-colors">
                             {project.title}
                           </h3>
                         </div>
                         <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                           project.status === 'Completed' 
                             ? 'bg-green-100 text-green-600' 
                             : project.status === 'In Progress'
                             ? 'bg-blue-100 text-blue-600'
                             : 'bg-yellow-100 text-yellow-600'
                         }`}>
                           {project.status}
                         </span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                         <div className="text-center p-3 bg-gray-50 rounded-lg">
                           <div className="text-lg font-bold text-blue-400">{project.beds} beds</div>
                           <div className="text-xs text-gray-500">Capacity</div>
                         </div>
                         <div className="text-center p-3 bg-gray-50 rounded-lg">
                           <div className="text-lg font-bold text-blue-400">{project.area}</div>
                           <div className="text-xs text-gray-500">Area</div>
                         </div>
                         <div className="text-center p-3 bg-gray-50 rounded-lg">
                           <div className="text-lg font-bold text-blue-400">{project.client}</div>
                           <div className="text-xs text-gray-500">Client</div>
                         </div>
                       </div>

                       <div className="flex items-center justify-between">
                         <div className="flex flex-wrap gap-2">
                           {project.features && project.features.slice(0, 4).map((feature, index) => (
                             <span
                               key={index}
                               className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                             >
                               {feature}
                             </span>
                           ))}
                         </div>
                         <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                           <span>View Details</span>
                           <ArrowRight className="w-4 h-4" />
                         </button>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
             </div>
           )}

           {/* Pagination */}
           {!isLoading && !error && totalPages > 1 && (
             <div className="flex justify-center items-center space-x-2 mt-12">
               <button
                 onClick={() => handlePageChange(currentPage - 1)}
                 disabled={currentPage === 1}
                 className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
               >
                 Previous
               </button>
               
               <div className="flex space-x-2">
                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                   <button
                     key={page}
                     onClick={() => handlePageChange(page)}
                     className={`px-4 py-2 rounded-lg transition-colors ${
                       currentPage === page
                         ? 'bg-blue-500 text-white'
                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                     }`}
                   >
                     {page}
                   </button>
                 ))}
               </div>
               
               <button
                 onClick={() => handlePageChange(currentPage + 1)}
                 disabled={currentPage === totalPages}
                 className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
               >
                 Next
               </button>
             </div>
           )}

           {/* No Projects State */}
           {!isLoading && !error && projects.length === 0 && (
             <div className="text-center py-20">
               <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Building className="w-12 h-12 text-blue-500" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
               <p className="text-gray-600 mb-8 max-w-md mx-auto">
                 We're working on adding more projects to our portfolio. Check back soon!
               </p>
             </div>
           )}
             </>
           )}
         </div>
       </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-white font-medium">Let's Build Together</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
             
              <span className="block text-white">
                Next Project?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join the ranks of healthcare organizations that trust us to deliver world-class infrastructure solutions. Let's discuss your vision and make it a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <span>Start a Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center justify-center space-x-3">
                <span>View Portfolio</span>
                <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default ProjectsPage
