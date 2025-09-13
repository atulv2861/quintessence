import React from 'react'
import { Eye, Building, Heart, Shield, Award, Target } from 'lucide-react'
// import { COMPANY_INFO } from '../data/constants' Bed, FileText, Users,
import StatsSection from '../components/sections/StatsSection'

const AboutPage: React.FC = () => {
  // const { stats } = COMPANY_INFO

  // const formatNumber = (num: number) => {
  //   return num.toLocaleString()
  // }
  // const ourClients = [
  //   {
  //     name: 'HKSD Health City',
  //     title: 'HKSD',
  //     logo: '/images/clients/hksd-health-city.jpg'
  //   },
  //   {
  //     name: 'PWD Delhi Government',
  //     title: 'PWD',
  //     logo: '/images/clients/pwd-delhi-government.jpg'
  //   },
  //   {
  //     name: 'DDF Consultants Private Limited',
  //     title: 'DDF',
  //     logo: '/images/clients/ddf-consultants.jpg'
  //   },
  //   {
  //     name: 'Dexterous Designers & Associates',
  //     title: 'Dexterous',
  //     logo: '/images/clients/dexterous-designers.jpg'
  //   }
  // ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Floating Medical Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="medical-floating-element top-20 left-10 w-20 h-20 bg-blue-200 rounded-full"></div>
        <div className="medical-floating-element top-40 right-20 w-16 h-16 bg-purple-200 rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="medical-floating-element bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full" style={{animationDelay: '4s'}}></div>
        <div className="medical-floating-element bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Modern Hero Section */}
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

        {/* Animated Medical Icons */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 animate-float">
            <Heart className="w-20 h-20 text-white" />
          </div>
          <div className="absolute top-40 right-32 animate-pulse-slow">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-40 left-32 animate-rotate-slow">
            <Award className="w-18 h-18 text-white" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{animationDelay: '2s'}}>
            <Target className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-1/2 left-10 animate-pulse-slow" style={{animationDelay: '1s'}}>
            <Building className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-6xl text-center">
              {/* Badge */}
              <div className="inline-block mb-6 animate-fade-in">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3">
                  <span className="text-blue-400 text-lg font-semibold tracking-wider">ABOUT US</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
                About Seven Healer
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
                We provide you the ethos of the various aspects and standards of the functionality and process of a hospital.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
                <button className="btn-3d text-lg px-8 py-4">
                  FREE CONSULTATION
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg border border-white/30 transform hover:scale-105 hover:shadow-xl">
                  OUR SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Dr. Nitin Garg Section */}
      <section className="section-padding medical-section-bg relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-blue-400 text-lg font-semibold tracking-wider">ABOUT US</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Who Are <span className="text-blue-400">We?</span>
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mb-8"></div>
              </div>

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

                <div className="medical-card p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    His expertise spans across medicine, hospital administration, hospital planning and design, quality assurance, policymaking, supply chain management, medical procurement, healthcare IT, project execution and planning, and project management.
                  </p>
                </div>

                <div className="medical-card p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Provided technical and medical consultancy to numerous private and government hospitals, either directly or through collaborations with architectural firms.
                  </p>
                </div>
              </div>
            </div>

            {/* Image and Quote */}
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

              <div className="medical-card p-8 relative">
                <div className="absolute top-4 left-4 text-4xl text-blue-200">"</div>
                <p className="text-gray-700 leading-relaxed text-lg italic pl-8">
                  He works with the philosophy that every healthcare organization should be planned to keep in view the local practices & culture but at the same time follow the international best practices, guidelines, statutes, rules, laws, and most importantly take care of the safety of patient, staff & visitors.
                </p>
                <div className="absolute bottom-4 right-4 text-4xl text-blue-200">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-lg font-semibold tracking-wider">INTRO</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-400">Vision & Mission</span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h4>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <div className="medical-card p-8 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="medical-icon flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">01</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To provide consultancy for designing of safe Infrastructure for patient, staff and visitors in all health care settings
                    </p>
                  </div>
                </div>

                <div className="medical-card p-8 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="medical-icon flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">02</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To design Healthcare Infrastructure which is receptive and comfortable to its users adopting the local culture and beliefs yet compliant to national & international guidelines.
                    </p>
                  </div>
                </div>

                <div className="medical-card p-8 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="medical-icon flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">03</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To train and guide the stakeholders about special needs and complexity of Healthcare Infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-slide-in-right">
              <div className="medical-card p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse-slow">
                    <Eye className="w-12 h-12 text-blue-600" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Our Vision</h4>
                  <p className="text-blue-100 leading-relaxed text-xl">
                    To create sustainable and resilient Infrastructure in Healthcare sector.
                  </p>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding medical-section-bg relative">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-lg font-semibold tracking-wider">INTRODUCTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {/* <span className="medical-text-gradient">INTRODUCTION</span> */}
              <span className="text-blue-400">INTRODUCTION</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="medical-card p-8 animate-slide-up">
              <p className="text-gray-700 leading-relaxed text-lg">
                At <span className="font-bold text-blue-400">Seven Healer</span>, we provide you the ethos of the various aspects and standards of the functionality and process of a hospital. We provide consultancy for hospitals to align and customize the hospital structure with its functional processes in line with national and international quality standards.
              </p>
            </div>

            <div className="medical-card p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <p className="text-gray-700 leading-relaxed text-lg">
                As a medical consultancy firm, we focus on providing a versatile and comfortable environment for staff, patients, and visitors. We prioritize functional processes to optimize system efficiency and user satisfaction. The company designs facilities with flexibility for future expansion, anticipating changes in technology and care models. We also incorporate sustainable design principles, including energy-efficient lighting, water conservation, waste management systems, and eco-friendly materials, to minimize environmental impact.
              </p>
            </div>

            <div className="medical-card p-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <p className="text-gray-700 leading-relaxed text-lg">
                <span className="font-bold text-blue-400">Seven Healer</span> provide end to end solutions for whole arena of project management from conceptualization and execution to operations and turnkey management. We are known for providing cost-effective solutions that adhere to Standards & Guidelines while addressing all functional aspects, enabling clients to streamline projects and ensure seamless integration.
              </p>
            </div>

            <div className="medical-card p-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <p className="text-gray-700 leading-relaxed text-lg">
                We extend our expertise in designing of various special services required in healthcare organisations such as <span className="font-semibold text-blue-400">Medical Gas Pipeline System (MGPS)</span>, <span className="font-semibold text-blue-400">Pneumatic Tube Transfer System (PTTS)</span>, <span className="font-semibold text-blue-400">Central Sterile Supply Department (CSSD)</span>, <span className="font-semibold text-blue-400">Nurse Call System (NCS)</span>, <span className="font-semibold text-blue-400">Modular Operation Theatre Complexes (MOT)</span>, Kitchen, laundry.
              </p>
            </div>

            <div className="medical-card p-8 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <p className="text-gray-700 leading-relaxed text-lg">
                Audits of the processes both in terms of Quality & Safety, workflow optimization, clinical process improvement, operational improvement etc by applying various operational management techniques is our <span className="font-bold text-blue-400">passion</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Milestones */}
      {/* <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-blue-600 text-lg font-semibold tracking-wider">WELL BEYOND HEALTHCARE</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="medical-text-gradient">Achievements and Milestones</span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
              Collaborative effort of various stakeholders has paved the way for improved healthcare infrastructure benefiting communities worldwide. We have a vision to create sustainable and resilient infrastructure across the healthcare sector. Our mission is to plan healthcare infrastructure which is receptive and comfortable to its users with their local architecture yet equipped with all the modern facilities and advancement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group animate-scale-in">
              <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8" />
              </div>
              <div className="medical-counter mb-2">
                {formatNumber(stats.area)} Sqm
              </div>
              <div className="text-gray-600 font-medium text-lg">Area</div>
            </div>

            <div className="text-center group animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bed className="w-8 h-8" />
              </div>
              <div className="medical-counter mb-2">
                {formatNumber(stats.beds)}*
              </div>
              <div className="text-gray-600 font-medium text-lg">Beds</div>
            </div>

            <div className="text-center group animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <div className="medical-counter mb-2">
                {stats.projects}*
              </div>
              <div className="text-gray-600 font-medium text-lg">Projects</div>
            </div>

            <div className="text-center group animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <div className="medical-counter mb-2">
                {stats.associates}*
              </div>
              <div className="text-gray-600 font-medium text-lg">Associates</div>
            </div>
          </div>
        </div>
      </section> */}
      <StatsSection />
      {/* Our Clients Section */}
      <section className="section-padding medical-section-bg relative">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-lg font-semibold tracking-wider">OUR CLIENTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {/* <span className="medical-text-gradient">Our Clients</span> */}
              <span className="text-blue-400">Our Clients</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/* HKSD Health City */}            
            <div className="flex flex-col items-center p-6 medical-card group hover:scale-105 transition-all duration-300 animate-scale-in">
              <div className="mb-4">
                <div className="h-20 w-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">+</span>
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
            <div className="flex flex-col items-center p-6 medical-card group hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="mb-4">
                <div className="h-20 w-20 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm">🌍</span>
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
            <div className="flex flex-col items-center p-6 medical-card group hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="mb-4">
                <div className="h-20 w-20 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm">🚜</span>
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
            <div className="flex flex-col items-center p-6 medical-card group hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="mb-4">
                <div className="h-20 w-28 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="flex space-x-1">
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm"></div>
                    <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm"></div>
                    <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                DDF Consultants Private Limited
              </p>
            </div>

            {/* Dexterous Designers */}
            <div className="flex flex-col items-center p-6 medical-card group hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="mb-4">
                <div className="h-20 w-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">d</span>
                    </div>
                    <span className="text-white text-sm font-bold">Dexterous</span>
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
