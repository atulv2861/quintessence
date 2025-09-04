import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, Users, Award } from 'lucide-react'
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
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container-custom">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <span className="text-white font-medium">Let's Connect</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                Get in
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Ready to transform your healthcare infrastructure? Let's start the conversation and bring your vision to life.
              </p>
              
              {/* CTA Buttons */}
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
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">16+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
              <span className="font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

                <div className="group bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

                <div className="group bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom py-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
              <span className="font-medium">Find Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of New Delhi, our office is easily accessible and ready to welcome you for in-person consultations.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Map Section - Takes 2/3 of the width */}
              <div className="lg:col-span-2">
                <div className="h-96 lg:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456789!2d77.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Quintessence Medical Consultants Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Info Section - Takes 1/3 of the width */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Talk</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Feel free to reach out to us through the contact information provided below. We value your inquiries, feedback, and collaboration opportunities. With a wealth of knowledge in diverse domains such as medicine, hospital administration, quality assurance, and healthcare project management, our team is here to assist you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-700 text-sm">
                          D-10, 2nd Floor, Sector-3, Rohini, Delhi-110085
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-700 text-sm">+91-9810000000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-700 text-sm">info@quintessenceconsultants.in</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                        <p className="text-gray-700 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500">
        <div className="container-custom text-center">
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
          </div>
        </div>
      </section>

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
