import React from 'react'
import { Heart, Award, Target } from 'lucide-react'
import ServiceSlider from './ServiceSlider'

const ServicesSection: React.FC = () => {
  //const serviceIcons = [Building, Wrench, Shield, CheckCircle]

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
          {/* <div className="inline-block mb-6">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 shadow-lg">
              <span className="text-blue-400 text-lg font-semibold tracking-wider">OUR SERVICES</span>
            </div>
          </div> */}
          
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-lg font-semibold tracking-wider">OUR SERVICES</span>
            </div>
            
            
          

          {/* Main Title with Enhanced Styling */}
          <div className="relative mb-8">
            {/* <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block medical-text-gradient">INTEGRATED ARCHITECTURAL</span>
              <span className="block medical-text-gradient">AND MEP PLANNING</span>
              <span className="block text-gray-700 text-xl md:text-2xl lg:text-3xl mt-4">
                SOLUTIONS FOR SEAMLESS PROJECTS
              </span>
            </h3> */}
             <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block text-blue-400">INTEGRATED ARCHITECTURAL</span>
              <span className="block text-blue-400">AND MEP PLANNING</span>
              <span className="block text-gray-700 text-xl md:text-2xl lg:text-3xl mt-4">
                SOLUTIONS FOR SEAMLESS PROJECTS
              </span>
            </h3>
            
            {/* Decorative Elements */}
            {/* <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -top-2 -right-4 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div> */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -top-2 -right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Enhanced Decorative Line */}
          {/* <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
          </div> */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare infrastructure solutions that ensure optimal patient care, staff efficiency, and regulatory compliance in modern medical facilities.
          </p>
        </div>

        {/* Service Slider */}
        <div className="mb-16">
          <ServiceSlider />
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 medical-card group hover:scale-105  transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Design</h4>
            <p className="text-gray-600">Every design prioritizes patient comfort, safety, and healing environment.</p>
          </div>
          
          <div className="text-center p-6 medical-card group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h4>
            <p className="text-gray-600">Compliance with international standards and best practices in healthcare.</p>
          </div>
          
          <div className="text-center p-6 medical-card group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Precision Planning</h4>
            <p className="text-gray-600">Detailed planning ensures seamless project execution and optimal outcomes.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
