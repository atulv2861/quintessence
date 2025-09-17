import React, { useState } from 'react'
import { ArrowRight, MapPin, Building, Users, Calendar, Award, ExternalLink, Grid, List } from 'lucide-react'

const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "All India Institute of Medical Sciences (AIIMS), Delhi",
      location: "New Delhi, India",
      beds: "2000 Bedded Hospital",
      area: "10,00,000 Sq. Mtr. (Approx.)",
      client: "ARCOP",
      status: "Completed",
      year: "2023",
      category: "Super Specialty",
      description: "A state-of-the-art medical facility featuring advanced healthcare infrastructure with cutting-edge technology and patient-centric design.",
      features: ["Emergency Services", "ICU Units", "Operation Theaters", "Diagnostic Center", "Research Labs"],
      images: [
        "/images/projects/aiims-1.jpg",
        "/images/projects/aiims-2.jpg"
      ],
      stats: {
        views: 1250,
        likes: 89,
        shares: 23
      }
    },
    {
      id: 2,
      title: "New Super Specialty Hospital Blocks",
      location: "Jwalapuri, Delhi",
      beds: "750 Bedded Hospital",
      area: "70,000 Sq. Mtr (Approx.)",
      client: "ARCOP",
      status: "In Progress",
      year: "2024",
      category: "Multi-Specialty",
      description: "Modern healthcare complex designed with sustainable architecture and advanced medical technology integration.",
      features: ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Orthopedics"],
      images: [
        "/images/projects/jwalapuri-1.jpg",
        "/images/projects/jwalapuri-2.jpg"
      ],
      stats: {
        views: 980,
        likes: 67,
        shares: 18
      }
    },
    {
      id: 3,
      title: "Sarvesh Health City",
      location: "Hisar, Haryana",
      beds: "400 Bedded Hospital",
      area: "22,000 Sq. Mtr. (Approx.)",
      client: "HKSD Sarvodya Healthcare",
      status: "Completed",
      year: "2022",
      category: "Health City",
      description: "Comprehensive health city featuring multiple specialty centers and wellness facilities in a single campus.",
      features: ["Wellness Center", "Diagnostic Hub", "Rehabilitation", "Mental Health", "Community Health"],
      images: [
        "/images/projects/sarvesh-1.jpg",
        "/images/projects/sarvesh-2.jpg"
      ],
      stats: {
        views: 756,
        likes: 45,
        shares: 12
      }
    },
    {
      id: 4,
      title: "Metro Healthcare Complex",
      location: "Gurgaon, Haryana",
      beds: "500 Bedded Hospital",
      area: "45,000 Sq. Mtr. (Approx.)",
      client: "Metro Healthcare Group",
      status: "Planning",
      year: "2025",
      category: "Multi-Specialty",
      description: "Next-generation healthcare facility with smart building technology and AI-powered patient care systems.",
      features: ["Smart ICU", "Telemedicine", "Robotic Surgery", "Digital Health", "Green Building"],
      images: [
        "/images/projects/metro-1.jpg",
        "/images/projects/metro-2.jpg"
      ],
      stats: {
        views: 634,
        likes: 52,
        shares: 15
      }
    },
    {
      id: 5,
      title: "Rural Health Mission Center",
      location: "Bihar, India",
      beds: "150 Bedded Hospital",
      area: "15,000 Sq. Mtr. (Approx.)",
      client: "Government of Bihar",
      status: "Completed",
      year: "2021",
      category: "Rural Healthcare",
      description: "Community-focused healthcare facility designed to serve rural populations with essential medical services.",
      features: ["Primary Care", "Maternal Health", "Child Health", "Emergency Care", "Community Outreach"],
      images: [
        "/images/projects/rural-1.jpg",
        "/images/projects/rural-2.jpg"
      ],
      stats: {
        views: 892,
        likes: 61,
        shares: 28
      }
    },
    {
      id: 6,
      title: "International Medical Center",
      location: "Mumbai, Maharashtra",
      beds: "1200 Bedded Hospital",
      area: "85,000 Sq. Mtr. (Approx.)",
      client: "International Healthcare Ltd.",
      status: "In Progress",
      year: "2024",
      category: "International",
      description: "World-class medical facility designed to international standards with advanced technology and luxury amenities.",
      features: ["International Standards", "Luxury Suites", "Advanced Diagnostics", "Specialist Clinics", "Medical Tourism"],
      images: [
        "/images/projects/international-1.jpg",
        "/images/projects/international-2.jpg"
      ],
      stats: {
        views: 1120,
        likes: 78,
        shares: 31
      }
    }
  ]

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedFilter === 'all' || project.category === selectedFilter || project.status === selectedFilter
    return matchesCategory
  })

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

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
                  <div className="text-2xl font-bold text-white mb-1">60+</div>
                  <div className="text-white/70 text-sm">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">4,350</div>
                  <div className="text-white/70 text-sm">Total Beds</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">12.5M</div>
                  <div className="text-white/70 text-sm">Sq. Mtr.</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">20+</div>
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

      {/* Filter and View Controls */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-105 border border-gray-200'
                }`}
              >
                All Projects
              </button>
              {categories.slice(1).map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === category
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-105 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">View:</span>
              <div className="flex bg-white rounded-lg p-1 border border-gray-200">
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
      </section>

      {/* Projects Grid/List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
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

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  //onMouseEnter={() => setHoveredProject(project.id)}
                  //onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Building className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white font-medium">Project Image</p>
                      </div>
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
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

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
                      <div className="text-sm text-gray-500">{project.year}</div>
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
                        <div className="text-lg font-bold text-blue-400">{project.beds}</div>
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
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <Building className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white font-medium text-sm">Project Image</p>
                        </div>
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
                            <span>{project.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-400">{project.beds}</div>
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
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-400">{formatNumber(project.stats.views)}</div>
                          <div className="text-xs text-gray-500">Views</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 4).map((feature, index) => (
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
