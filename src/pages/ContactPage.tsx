import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, Users, Award, Navigation, Globe, Video, Zap, Shield, Heart } from 'lucide-react'
import { WHATSAPP_CONFIG } from '../data/constants'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_CONFIG.message)
    const url = `https://wa.me/${WHATSAPP_CONFIG.number.replace(/\D/g, '')}?text=${message}`
    window.open(url, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Modern Design */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero1.webp')"
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-6xl text-center">
              <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <span className="text-blue-400 font-medium text-lg">Let's Connect</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Get in Touch
              </h1>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Ready to transform your healthcare infrastructure? Let's start the conversation and bring your vision to life.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 text-base"
                >
                  <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Chat on WhatsApp</span>
                </button>
                <a
                  href="#contact-form"
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center justify-center space-x-3 text-base"
                >
                  <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Send Message</span>
                </a>
                <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center justify-center space-x-3 text-base">
                  <Video className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Video Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">16+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-400 rounded-full mb-6">
              <span className="font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Project Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your healthcare infrastructure? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                    required
                  />
                </div>
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're here to help you with all your healthcare infrastructure needs. Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="group bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Office Address</h4>
                      <p className="text-gray-700 leading-relaxed">
                        606, GDITL Northex Tower, A-09<br />
                        Netaji Subhash Place, Pitampura<br />
                        New Delhi - 110034
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:01141664694" className="block text-gray-700 hover:text-green-600 transition-colors">011 41664694</a>
                        <a href="tel:+919728392333" className="block text-gray-700 hover:text-green-600 transition-colors">+91 9728392333</a>
                        <a href="tel:+919812692333" className="block text-gray-700 hover:text-green-600 transition-colors">+91 9812692333</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Email Address</h4>
                      <div className="space-y-1">
                        <a href="mailto:nitingargha@gmail.com" className="block text-gray-700 hover:text-purple-600 transition-colors">nitingargha@gmail.com</a>
                        <a href="mailto:nitdoc@gmail.com" className="block text-gray-700 hover:text-purple-600 transition-colors">nitdoc@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Working Hours</h4>
                    <p className="block text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="block text-gray-700 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              {/* WhatsApp CTA */}
              {/* <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Quick WhatsApp Chat</h4>
                    <p className="text-green-100 text-sm">Get instant responses during business hours</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-4 bg-white text-green-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Chat</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      {/* <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-pink-500/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-500/5 rounded-full animate-pulse"></div>

          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium">Find Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visit Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Located in the heart of New Delhi, our office is easily accessible and ready to welcome you for in-person consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Interactive Map</h3>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Navigation className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Globe className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <div className="h-80 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white font-medium">Interactive Map</p>
                      <p className="text-white/70 text-sm mt-2">Click to explore our location</p>
                    </div>
                  </div>

                  
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm">+</span>
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm">-</span>
                    </button>
                  </div>

                  
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      📍 Our Office
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">2.5km</div>
                    <div className="text-white/70 text-sm">From Metro</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">15min</div>
                    <div className="text-white/70 text-sm">Drive Time</div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
                </div>
                <p className="text-white/90 leading-relaxed mb-8">
                  Feel free to reach out to us through the contact information provided below. We value your inquiries, feedback, and collaboration opportunities.
                </p>

                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Office Address</h4>
                      <p className="text-white/80 leading-relaxed">
                        606, GDITL Northex Tower, A-09<br />
                        Netaji Subhash Place, Pitampura<br />
                        New Delhi - 110034
                      </p>
                      <button className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center space-x-1">
                        <Navigation className="w-4 h-4" />
                        <span>Get Directions</span>
                      </button>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Phone Numbers</h4>
                      <div className="space-y-2">
                        <a href="tel:01141664694" className="block text-white/80 hover:text-green-400 transition-colors">011 41664694</a>
                        <a href="tel:+919728392333" className="block text-white/80 hover:text-green-400 transition-colors">+91 9728392333</a>
                        <a href="tel:+919812692333" className="block text-white/80 hover:text-green-400 transition-colors">+91 9812692333</a>
                      </div>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Email Address</h4>
                      <div className="space-y-2">
                        <a href="mailto:nitingargha@gmail.com" className="block text-white/80 hover:text-purple-400 transition-colors">nitingargha@gmail.com</a>
                        <a href="mailto:nitdoc@gmail.com" className="block text-white/80 hover:text-purple-400 transition-colors">nitdoc@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Working Hours</h4>
                      <p className="text-white/80">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/60 text-sm mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="grid grid-cols-2 gap-4">
                <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  <span>WhatsApp</span>
                </button>
                <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Video className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Video Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 text-blue-400 rounded-full mb-6">
              <span className="font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the 
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent pl-2">
                Difference
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just consultants; we're your partners in creating healthcare infrastructure that transforms lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">16+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Decades of expertise in healthcare infrastructure planning and design.
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NABH Certified</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified professionals ensuring compliance with international standards.
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Turnaround</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick response times and efficient project delivery without compromising quality.
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Every design decision prioritizes patient comfort and healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-white font-medium">Ready to Start?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Healthcare Infrastructure?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you create world-class healthcare facilities that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="group bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <span>Chat on WhatsApp</span>
              </button>
              <a
                href="#contact-form"
                className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center justify-center space-x-3"
              >
                <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Send Message</span>
              </a>
              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 group-hover:animate-pulse" />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                We are a consulting company dedicated to transforming the future of health across the entire continuum of care.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✉</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 transform hover:scale-110 group"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
      </button>
    </div>
  )
}

export default ContactPage
