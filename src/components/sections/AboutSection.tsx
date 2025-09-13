import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Building } from 'lucide-react'

const AboutSection: React.FC = () => {

  return (
    <section id="about" className="section-padding medical-section-bg relative">
      <div className="container-custom">
        {/* <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-blue-600 text-lg font-semibold tracking-wider">ABOUT US</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Are <span className="medical-text-gradient">We?</span>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div> */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-lg font-semibold tracking-wider">ABOUT US</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Are <span className="text-blue-400">We?</span>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="medical-card p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  <span className="font-bold text-blue-400">Dr. Nitin Garg</span> is a diligent and experienced professional with over <span className="font-semibold text-blue-400">16 years</span> of expertise in various aspects of the healthcare industry. Completed his medical education at Pt. B. D. Sharma Post Graduate Institute of Medical Sciences (PGIMS), Rohtak and further pursued a postgraduate degree in Hospital Administration from the prestigious <span className="font-semibold text-blue-400">All India Institute of Medical Sciences (AIIMS)</span>, New Delhi.
                </p>
              </div>
              
              <div className="medical-card p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  With a strong focus on professional development, he attended the renowned POI course of the National Accreditation Board for Hospitals & Healthcare Providers (NABH) for the 5th edition. He holds a leadership position in a leading private hospital, where he also leads the team responsible for obtaining NABH accreditation.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-3 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg">Read More About Our Story</span>
            </Link>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="relative">
              <div className="medical-card overflow-hidden">
                <div className="w-full h-96 relative overflow-hidden">
                  <img 
                    src="/images/hero/nitin-garg.png" 
                    alt="Dr. Nitin Garg" 
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-20 animate-float"></div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 medical-card group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">16+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center p-4 medical-card group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              
              <div className="text-center p-4 medical-card group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
