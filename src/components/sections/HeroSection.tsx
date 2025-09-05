import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { openConsultationModal } from '../../store/slices/uiSlice'

const HeroSection: React.FC = () => {
  const dispatch = useDispatch()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleConsultationClick = () => {
    dispatch(openConsultationModal())
  }

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsVisible(false)
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
      setIsVisible(true)
      setTimeout(() => setIsAnimating(false), 100)
    }, 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsVisible(false)
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + 3) % 3)
      setIsVisible(true)
      setTimeout(() => setIsAnimating(false), 100)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setIsVisible(false)
    
    setTimeout(() => {
      setCurrentSlide(index)
      setIsVisible(true)
      setTimeout(() => setIsAnimating(false), 100)
    }, 300)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAnimating])

  const slides = [
    {
      title: "OPTIMIZED HOSPITAL EQUIPMENT PLANNING",
      description: "Hospital equipment planning is a methodical process that involves identifying, selecting, and strategically arranging medical equipment and technology within a healthcare facility.",
      image: "/images/hero/hero1.webp"
    },
    {
      title: "HEALTHCARE INFRASTRUCTURE DESIGN", 
      description: "Comprehensive healthcare infrastructure design that ensures optimal patient care, staff efficiency, and regulatory compliance in modern medical facilities.",
      image: "/images/hero/hero2.jpg"
    },
    {
      title: "MEP SYSTEMS INTEGRATION",
      description: "Advanced Mechanical, Electrical, and Plumbing systems integration for healthcare facilities ensuring seamless operations and patient safety.",
      image: "/images/hero/hero3.webp"
    },
    {
      title: "PRE-COMMISSIONING AND COMMISSIONING ACTIVITIES",
      description: "Hospital pre-commissioning activities refer to the preparatory steps and tasks that take place before the actual commissioning process of a hospital facility.",
      image: "/images/hero/hero4.jpg"
    }
  ]

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hospital Equipment Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentSlideData.image})`,
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Hospital Room Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-transparent"></div>
        
        {/* Medical Equipment Placeholders */}
        <div className="absolute inset-0 opacity-30">
          {/* Hospital Bed */}
          <div className="absolute bottom-20 right-1/3 w-32 h-20 bg-white rounded-lg shadow-lg animate-pulse">
            <div className="absolute top-2 left-2 w-28 h-16 bg-blue-100 rounded animate-pulse"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          </div>
          
          {/* Medical Monitor */}
          <div className="absolute top-1/3 right-1/4 w-16 h-12 bg-gray-800 rounded-lg animate-bounce">
            <div className="absolute top-1 left-1 w-14 h-10 bg-green-400 rounded opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
          </div>
          
          {/* IV Pole */}
          <div className="absolute top-1/4 right-1/3 w-1 h-24 bg-gray-600 animate-pulse">
            <div className="absolute top-0 left-0 w-8 h-8 bg-blue-200 rounded-full animate-bounce"></div>
            <div className="absolute top-8 left-0 w-6 h-6 bg-blue-300 rounded-full animate-ping"></div>
          </div>
          
          {/* Surgical Lights */}
          <div className="absolute top-10 left-1/2 w-20 h-20 bg-white rounded-full shadow-lg opacity-60 animate-pulse">
            <div className="absolute top-2 left-2 w-16 h-16 bg-yellow-100 rounded-full animate-pulse"></div>
            <div className="absolute top-6 left-6 w-8 h-8 bg-yellow-200 rounded-full animate-ping"></div>
          </div>
          
          {/* Medical Cart with Laptop */}
          <div className="absolute bottom-32 left-1/4 w-20 h-16 bg-white rounded-lg shadow-lg animate-bounce">
            <div className="absolute top-1 left-1 w-18 h-12 bg-gray-200 rounded"></div>
            <div className="absolute top-2 left-2 w-16 h-8 bg-blue-300 rounded opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
          </div>
          
          {/* Window */}
          <div className="absolute top-1/4 left-1/3 w-24 h-16 bg-blue-200 rounded-lg opacity-40 animate-pulse">
            <div className="absolute top-1 left-1 w-22 h-14 bg-blue-300 rounded animate-pulse"></div>
            <div className="absolute top-2 left-2 w-20 h-12 bg-blue-400 rounded animate-pulse"></div>
          </div>
          
          {/* Floor Pattern */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-200 to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      >
        <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? '0.2s' : '0s'
              }}
            >
              {currentSlideData.title}
            </h1>
            <p 
              className={`text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-md max-w-xl transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? '0.4s' : '0s'
              }}
            >
              {currentSlideData.description}
            </p>
            <button
              onClick={handleConsultationClick}
              className={`bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-500 shadow-lg border-2 border-gray-300 transform hover:scale-105 hover:shadow-xl ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? '0.6s' : '0s'
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white shadow-lg animate-pulse' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
