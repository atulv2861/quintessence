import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ChevronLeft, ChevronRight, Heart, Shield, Award, Target, Stethoscope, Building } from 'lucide-react'
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
      subtitle: "Advanced Medical Solutions",
      description: "Strategic planning and arrangement of medical equipment and technology within healthcare facilities for optimal patient care.",
      image: "/images/hero/hero1.webp",
      icon: Stethoscope
    },
    {
      title: "HEALTHCARE INFRASTRUCTURE DESIGN", 
      subtitle: "Modern Medical Facilities",
      description: "Comprehensive healthcare infrastructure design ensuring optimal patient care, staff efficiency, and regulatory compliance.",
      image: "/images/hero/hero2.jpg",
      icon: Building
    },
    {
      title: "MEP SYSTEMS INTEGRATION",
      subtitle: "Seamless Operations",
      description: "Advanced MEP systems integration for healthcare facilities ensuring seamless operations and enhanced patient safety.",
      image: "/images/hero/hero3.webp",
      icon: Shield
    },
    {
      title: "PRE-COMMISSIONING AND COMMISSIONING ACTIVITIES",
      subtitle: "Quality Assurance",
      description: "Pre-commissioning activities and preparatory steps before the actual commissioning process of hospital facilities.",
      image: "/images/hero/hero4.jpg",
      icon: Award
    }
  ]

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Modern Medical Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentSlideData.image})`,
        }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Medical Icons */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 animate-float">
            <Heart className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-40 right-32 animate-pulse-slow">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-40 left-32 animate-rotate-slow">
            <Target className="w-14 h-14 text-white" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{animationDelay: '2s'}}>
            <Award className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Modern Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
      </button>

      {/* Modern Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-5xl text-center">
            {/* Icon and Subtitle */}
            <div 
              className={`flex items-center justify-center space-x-4 mb-6 transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? '0.1s' : '0s'
              }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <currentSlideData.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-blue-200 text-lg font-semibold tracking-wider">
                {currentSlideData.subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl transition-all duration-500 transform ${
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

            {/* Description */}
            <p 
              className={`text-lg md:text-xl text-blue-100 mb-6 leading-relaxed drop-shadow-lg max-w-5xl transition-all duration-500 transform ${
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

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? '0.6s' : '0s'
              }}
            >
              <button
                onClick={handleConsultationClick}
                className="btn-3d text-lg px-8 py-4"
              >
                FREE CONSULTATION
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg border border-white/30 transform hover:scale-105 hover:shadow-xl">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white shadow-xl animate-pulse w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
