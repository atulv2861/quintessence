import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { openConsultationModal } from '../../store/slices/uiSlice'
import { SERVICES } from '../../data/constants'

const HeroSection: React.FC = () => {
  const dispatch = useDispatch()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleConsultationClick = () => {
    dispatch(openConsultationModal())
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SERVICES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SERVICES.length) % SERVICES.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentService = SERVICES[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        {/* Placeholder for medical equipment background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-green-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-red-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 hover:bg-gray-800/70 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 hover:bg-gray-800/70 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {currentService.title.toUpperCase()}
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              {currentService.description}
            </p>
            <button
              onClick={handleConsultationClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {SERVICES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
