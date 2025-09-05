import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Building2, Zap, Stethoscope, CheckCircle, ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/constants'

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const getServiceIcon = (iconName: string) => {
    const icons = {
      Building2,
      Zap,
      Stethoscope,
      CheckCircle
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Building2
    return <IconComponent className="w-20 h-20" />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg text-white py-20">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/services"
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-primary-200 mb-6 flex justify-center">
              {getServiceIcon(service.icon)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Service Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {service.detailedDescription}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features & Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Why Choose Our {service.title}?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team of experienced professionals brings years of expertise in healthcare infrastructure planning. 
                      We understand the unique challenges of healthcare facilities and provide solutions that are both 
                      practical and innovative. With our comprehensive approach, we ensure that every aspect of your 
                      project is carefully planned and executed to meet the highest standards of quality and efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Contact CTA */}
                  <div className="bg-primary-600 text-white rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Get Expert Consultation</h3>
                    <p className="text-blue-100 mb-6">
                      Ready to discuss your project? Our experts are here to help you plan the perfect healthcare infrastructure.
                    </p>
                    <Link
                      to="/contact"
                      className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 w-full justify-center"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Related Services */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Other Services</h3>
                    <div className="space-y-3">
                      {SERVICES.filter(s => s.id !== service.id).map((relatedService) => (
                        <Link
                          key={relatedService.id}
                          to={`/services/${relatedService.slug}`}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 mb-1">
                            {relatedService.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {relatedService.description.substring(0, 100)}...
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-medium">16+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Projects:</span>
                        <span className="font-medium">25+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area Covered:</span>
                        <span className="font-medium">1.4M+ Sqm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Beds Planned:</span>
                        <span className="font-medium">19K+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you create world-class healthcare infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>View Our Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage

