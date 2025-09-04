import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/constants'

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonial & Reviews
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customer satisfaction is our major goal. See what our customers are saying about us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-card text-center">
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-primary-200 mx-auto mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary-600 font-medium">
                          {testimonial.position}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
