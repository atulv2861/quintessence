import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building, Wrench, Shield, CheckCircle, Heart, Award, Target, Stethoscope } from 'lucide-react'
import { SERVICES } from '../../data/constants'

const ServicesSection: React.FC = () => {
  const serviceIcons = [Building, Wrench, Shield, CheckCircle]

  return (
    <section id="services" className="section-padding medical-section-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-300/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-100/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          {/* Service Badge */}
          <div className="inline-block mb-6">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 shadow-lg">
              <span className="text-blue-600 text-lg font-semibold tracking-wider">OUR SERVICES</span>
            </div>
          </div>

          {/* Main Title with Enhanced Styling */}
          <div className="relative mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block medical-text-gradient">INTEGRATED ARCHITECTURAL</span>
              <span className="block medical-text-gradient">AND MEP PLANNING</span>
              <span className="block text-gray-700 text-xl md:text-2xl lg:text-3xl mt-4">
                SOLUTIONS FOR SEAMLESS PROJECTS
              </span>
          </h3>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -top-2 -right-4 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Enhanced Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare infrastructure solutions that ensure optimal patient care, staff efficiency, and regulatory compliance in modern medical facilities.
          </p>
        </div>

        {/* Horizontal Scrollable Service Cards */}
        <div className="mb-16">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {SERVICES.map((service, index) => {
              const IconComponent = serviceIcons[index] || Building
              return (
            <div
              key={service.id}
                  className="medical-card p-6 group hover:scale-105 transition-all duration-300 animate-scale-in relative overflow-hidden flex-shrink-0 w-80"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Service Icon */}
                  <div className="mb-4 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Image */}
                  <div className="mb-4 relative z-10">
                    <div className="w-full h-40 bg-gray-100 rounded-xl overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
                  {/* Service Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                {service.title.toUpperCase()}
              </h3>
              
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group/link"
                    >
                      <span className="text-sm">READ MORE</span>
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Scroll Indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
              <span>←</span>
              <span>Scroll to see more services</span>
              <span>→</span>
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 medical-card group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Design</h4>
            <p className="text-gray-600">Every design prioritizes patient comfort, safety, and healing environment.</p>
          </div>
          
          <div className="text-center p-6 medical-card group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h4>
            <p className="text-gray-600">Compliance with international standards and best practices in healthcare.</p>
          </div>
          
          <div className="text-center p-6 medical-card group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Precision Planning</h4>
            <p className="text-gray-600">Detailed planning ensures seamless project execution and optimal outcomes.</p>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="medical-card p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your <span className="medical-text-gradient">Healthcare Infrastructure?</span>
              </h4>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let our expert team help you design and implement world-class medical facilities that prioritize patient care, staff efficiency, and operational excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="btn-3d text-lg px-8 py-4"
                >
                  GET STARTED TODAY
                </Link>
                <Link
                  to="/about"
                  className="bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg border border-blue-200 transform hover:scale-105 hover:shadow-xl"
                >
                  LEARN MORE ABOUT US
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
