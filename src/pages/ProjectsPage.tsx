import React from 'react'
import { ArrowRight } from 'lucide-react'

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "All India Institute of Medical Sciences (AIIMS), Delhi",
      beds: "2000 Bedded Hospital",
      area: "10,00,000 Sq. Mtr. (Approx.)",
      client: "ARCOP",
      images: [
        "/images/projects/aiims-1.jpg",
        "/images/projects/aiims-2.jpg"
      ]
    },
    {
      id: 2,
      title: "New Super Specialty Hospital Blocks",
      location: "Jwalapuri, Delhi",
      beds: "750 Bedded Hospital",
      area: "70,000 Sq. Mtr (Approx.)",
      client: "ARCOP",
      images: [
        "/images/projects/jwalapuri-1.jpg",
        "/images/projects/jwalapuri-2.jpg"
      ]
    },
    {
      id: 3,
      title: "Sarvesh Health City",
      location: "Hisar, Haryana",
      beds: "400 Bedded Hospital",
      area: "22,000 Sq. Mtr. (Approx.)",
      client: "HKSD Sarvodya Healthcare",
      images: [
        "/images/projects/sarvesh-1.jpg",
        "/images/projects/sarvesh-2.jpg"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Hospital Background */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          {/* Placeholder for hospital complex background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gray-600 rounded-t-full"></div>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gray-500 rounded-t-lg"></div>
            <div className="absolute bottom-0 right-1/4 w-1/4 h-1/3 bg-gray-400 rounded-t-lg"></div>
            <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-yellow-400 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                PROJECTS
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Some of the projects attributed to me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {projects.map((project, index) => (
            <div key={project.id} className={`mb-20 ${index > 0 ? 'border-t border-gray-200 pt-20' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <h2 className="text-blue-600 text-lg font-semibold mb-4">PROJECTS</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    {project.location && (
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">
                        {project.location}
                      </h4>
                    )}
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold">No. of Beds:</span> {project.beds}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Area:</span> {project.area}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Client:</span> {project.client}
                    </p>
                  </div>

                  <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <span>See Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Images */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {/* Main Image */}
                  <div className="relative">
                    <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl">🏥</span>
                        </div>
                        <p className="text-gray-500 font-medium">Project Image 1</p>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Image */}
                  <div className="relative">
                    <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-xl">🏢</span>
                        </div>
                        <p className="text-gray-500 font-medium">Project Image 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
