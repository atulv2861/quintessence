import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import StatsSection from '../components/sections/StatsSection'
import ClientsSection from '../components/sections/ClientsSection'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Floating Medical Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="medical-floating-element top-20 left-10 w-20 h-20 bg-blue-200 rounded-full"></div>
        <div className="medical-floating-element top-40 right-20 w-16 h-16 bg-purple-200 rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="medical-floating-element bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full" style={{animationDelay: '4s'}}></div>
        <div className="medical-floating-element bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ClientsSection />
      </div>
    </div>
  )
}

export default HomePage
