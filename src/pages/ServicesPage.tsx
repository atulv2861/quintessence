import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Zap, Stethoscope, CheckCircle } from 'lucide-react'
import { SERVICES } from '../data/constants'

const ServicesPage: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const icons = {
      Building2,
      Zap,
      Stethoscope,
      CheckCircle
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Building2
    return <IconComponent className="w-16 h-16" />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero2.jpg')"
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-6xl text-center">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-blue-400 font-medium">Our Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Our Services
              </h1>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Comprehensive healthcare infrastructure solutions designed to meet the highest standards of quality and efficiency.
              </p>
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

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              INTEGRATED ARCHITECTURAL AND MEP PLANNING SOLUTIONS FOR SEAMLESS PROJECTS
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures that every aspect of healthcare infrastructure is carefully planned and executed to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary-600 mb-8 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.icon)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Detailed Description:</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert consultation for your healthcare project. Our team is ready to help you create world-class healthcare facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default ServicesPage

