import React from 'react'
import { Eye, Building, Bed, FileText, Users } from 'lucide-react'
import { COMPANY_INFO } from '../data/constants'

const AboutPage: React.FC = () => {
  const { stats } = COMPANY_INFO

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }
  const ourClients = [
    {
      name: 'HKSD Health City',
      title: 'HKSD',
      logo: '/images/clients/hksd-health-city.jpg'
    },
    {
      name: 'PWD Delhi Government',
      title: 'PWD',
      logo: '/images/clients/pwd-delhi-government.jpg'
    },
    {
      name: 'DDF Consultants Private Limited',
      title: 'DDF',
      logo: '/images/clients/ddf-consultants.jpg'
    },
    {
      name: 'Dexterous Designers & Associates',
      title: 'Dexterous',
      logo: '/images/clients/dexterous-designers.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Hospital Background */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          {/* Placeholder for hospital building background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gray-600 rounded-t-full"></div>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gray-500 rounded-t-lg"></div>
            <div className="absolute bottom-0 right-1/4 w-1/4 h-1/3 bg-gray-400 rounded-t-lg"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                ABOUT US
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                At Quintessence, we provide you the ethos of the various aspects and standards of the functionality and process of a hospital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Nitin Garg Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-blue-600 text-lg font-semibold mb-4">ABOUT US</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Who Are We?
                </h3>
                <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Dr. Nitin Garg</strong> is a diligent and experienced professional with over 16 years of expertise in various aspects of the healthcare industry. Completed his medical education at Pt. B. D. Sharma Post Graduate Institute of Medical Sciences (PGIMS), Rohtak and further pursued a postgraduate degree in Hospital Administration from the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  With a strong focus on professional development, he attended the renowned POI course of the National Accreditation Board for Hospitals & Healthcare Providers (NABH) for the 5th edition. He holds a leadership position in a leading private hospital, where he also leads the team responsible for obtaining NABH accreditation.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  His expertise spans across medicine, hospital administration, hospital planning and design, quality assurance, policymaking, supply chain management, medical procurement, healthcare IT, project execution and planning, and project management.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Provided technical and medical consultancy to numerous private and government hospitals, either directly or through collaborations with architectural firms.
                </p>
              </div>
            </div>

            {/* Image and Quote */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src="/images/hero/nitin-garg.png" 
                    alt="Dr. Nitin Garg" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed italic">
                  "He works with the philosophy that every healthcare organization should be planned to keep in view the local practices & culture but at the same time follow the international best practices, guidelines, statutes, rules, laws, and most importantly take care of the safety of patient, staff & visitors."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-lg font-semibold mb-4">INTRO</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Mission</h4>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6 flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    01
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To provide consultancy for designing of safe Infrastructure for patient, staff and visitors in all health care settings
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    02
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To design Healthcare Infrastructure which is receptive and comfortable to its users adopting the local culture and beliefs yet compliant to national & international guidelines.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    03
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To train and guide the stakeholders about special needs and complexity of Healthcare Infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                <p className="text-blue-100 leading-relaxed">
                  To create sustainable and resilient Infrastructure in Healthcare sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              INTRODUCTION
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-700 leading-relaxed">
              At Quintessence, we provide you the ethos of the various aspects and standards of the functionality and process of a hospital. We provide consultancy for hospitals to align and customize the hospital structure with its functional processes in line with national and international quality standards.
            </p>

            <p className="text-gray-700 leading-relaxed">
              As a medical consultancy firm, we focus on providing a versatile and comfortable environment for staff, patients, and visitors. We prioritize functional processes to optimize system efficiency and user satisfaction. The company designs facilities with flexibility for future expansion, anticipating changes in technology and care models. We also incorporate sustainable design principles, including energy-efficient lighting, water conservation, waste management systems, and eco-friendly materials, to minimize environmental impact.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Quintessence provide end to end solutions for whole arena of project management from conceptualization and execution to operations and turnkey management. We are known for providing cost-effective solutions that adhere to Standards & Guidelines while addressing all functional aspects, enabling clients to streamline projects and ensure seamless integration.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We extend our expertise in designing of various special services required in healthcare organisations such as Medical Gas Pipeline System (MGPS), Pneumatic Tube Transfer System (PTTS), Central Sterile Supply Department (CSSD), Nurse Call System (NCS), Modular Operation Theatre Complexes (MOT), Kitchen, laundry.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Audits of the processes both in terms of Quality & Safety, workflow optimization, clinical process improvement, operational improvement etc by applying various operational management techniques is our passion.
            </p>
          </div>
        </div>
      </section>

            {/* Achievements and Milestones */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-lg font-semibold mb-4">WELL BEYOND HEALTHCARE</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements and Milestones
            </h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Collaborative effort of various stakeholders has paved the way for improved healthcare infrastructure benefiting communities worldwide. We have a vision to create sustainable and resilient infrastructure across the healthcare sector. Our mission is to plan healthcare infrastructure which is receptive and comfortable to its users with their local architecture yet equipped with all the modern facilities and advancement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {formatNumber(stats.area)} Sqm
              </div>
              <div className="text-gray-600 font-medium">Area</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {formatNumber(stats.beds)}*
              </div>
              <div className="text-gray-600 font-medium">Beds</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stats.projects}*
              </div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stats.associates}*
              </div>
              <div className="text-gray-600 font-medium">Associates</div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Clients Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Clients
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/* HKSD Health City */}            
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-20 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                    <span className="text-gray-600 text-xs font-bold">HKSD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                HKSD Health City
              </p>
            </div>
           

            {/* PWD Delhi Government */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-16 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs">🌍</span>
                    </div>
                    <span className="text-gray-600 text-xs font-bold">PWD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                PWD Delhi Government
              </p>
            </div>

            {/* PWD Delhi Government (Tractor) */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-16 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs">🚜</span>
                    </div>
                    <span className="text-gray-600 text-xs font-bold">PWD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                PWD Delhi Government
              </p>
            </div>

            {/* DDF Consultants */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-24 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                DDF Consultants Private Limited
              </p>
            </div>

            {/* Dexterous Designers */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-24 bg-gray-800 rounded flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">d</span>
                    </div>
                    <span className="text-white text-xs font-bold">Dexterous</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                Dexterous Designers & Associates
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
