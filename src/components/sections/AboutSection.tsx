import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const AboutSection: React.FC = () => {

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 text-lg font-semibold mb-4">ABOUT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Are We?
          </h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Dr. Nitin Garg</strong> is a diligent and experienced professional with over 16 years of expertise in various aspects of the healthcare industry. Completed his medical education at Pt. B. D. Sharma Post Graduate Institute of Medical Sciences (PGIMS), Rohtak and further pursued a postgraduate degree in Hospital Administration from the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With a strong focus on professional development, he attended the renowned POI course of the National Accreditation Board for Hospitals & Healthcare Providers (NABH) for the 5th edition. He holds a leadership position in a leading private hospital, where he also leads the team responsible for obtaining NABH accreditation.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <span>Read More</span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden bg-gray-100">
                <img 
                  src="/images/hero/nitin-garg.png" 
                  alt="Dr. Nitin Garg" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
