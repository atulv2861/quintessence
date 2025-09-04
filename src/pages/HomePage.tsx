import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import StatsSection from '../components/sections/StatsSection'
import ClientsSection from '../components/sections/ClientsSection'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ClientsSection />
    </div>
  )
}

export default HomePage
