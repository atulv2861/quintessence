import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../../data/constants'

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 text-lg font-semibold mb-4">SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            INTEGRATED ARCHITECTURAL AND MEP PLANNING SOLUTIONS FOR SEAMLESS PROJECTS
          </h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">
                        {index === 0 ? '🏥' : index === 1 ? '⚡' : index === 2 ? '🩺' : '✅'}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Service Image</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                {service.title.toUpperCase()}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
