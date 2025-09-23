import React, { useState } from 'react'
import { Upload, File, X, Cloud } from 'lucide-react'
import EmailService from '../services/emailService'

const ApplyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    applicationType: 'available',
    availableJob: '',
    prefix: 'Mr.',
    firstName: '',
    surname: '',
    phone: '9999999999',
    email: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    education: '',
    experience: '',
    currentEmployer: '',
    currentDesignation: ''
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || [])
    const updatedFiles = [...files, ...newFiles]
    
    // Limit to 1 file for CV
    if (updatedFiles.length > 1) {
      setSubmitMessage('Only one CV file is allowed')
      setSubmitStatus('error')
      return
    }
    
    // Check file size (10MB limit)
    const oversizedFiles = updatedFiles.filter(file => file.size > 10 * 1024 * 1024)
    if (oversizedFiles.length > 0) {
      setSubmitMessage('File size should not exceed 10MB')
      setSubmitStatus('error')
      return
    }
    
    // Check file type (PDF only)
    const invalidFiles = updatedFiles.filter(file => file.type !== 'application/pdf')
    if (invalidFiles.length > 0) {
      setSubmitMessage('Only PDF files are allowed')
      setSubmitStatus('error')
      return
    }
    
    setFiles(updatedFiles)
    setSubmitMessage('')
    setSubmitStatus('idle')
  }

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await EmailService.sendContactForm({
        name: `${formData.prefix} ${formData.firstName} ${formData.surname}`.trim(),
        email: formData.email,
        phone: formData.phone,
        address: `${formData.streetAddress}, ${formData.streetAddress2}, ${formData.city}, ${formData.state} ${formData.postalCode}`.trim(),
        subject: `CV Application - ${formData.applicationType === 'available' ? formData.availableJob : 'Future Opportunities'}`,
        message: `
Application Type: ${formData.applicationType === 'available' ? 'Available Jobs' : 'Future Jobs'}
${formData.applicationType === 'available' ? `Job Applied For: ${formData.availableJob}` : ''}

Personal Information:
Name: ${formData.prefix} ${formData.firstName} ${formData.surname}
Phone: ${formData.phone}
Email: ${formData.email}

Address:
${formData.streetAddress}
${formData.streetAddress2}
${formData.city}, ${formData.state} ${formData.postalCode}

Professional Information:
Highest Education: ${formData.education}
Total Experience: ${formData.experience} years
Current/Last Employer: ${formData.currentEmployer}
Current/Last Designation: ${formData.currentDesignation}
        `,
        files: files
      })
      
      if (response.status === 'success') {
        setSubmitStatus('success')
        setSubmitMessage('CV submitted successfully! We\'ll review your application and get back to you soon.')
        // Reset form
        setFormData({
          applicationType: 'available',
          availableJob: '',
          prefix: 'Mr.',
          firstName: '',
          surname: '',
          phone: '9999999999',
          email: '',
          streetAddress: '',
          streetAddress2: '',
          city: '',
          state: '',
          postalCode: '',
          education: '',
          experience: '',
          currentEmployer: '',
          currentDesignation: ''
        })
        setFiles([])
      } else {
        setSubmitStatus('error')
        setSubmitMessage(response.message || 'Failed to submit CV. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Failed to submit CV. Please try again.')
      console.error('CV submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const clearForm = () => {
    setFormData({
      applicationType: 'available',
      availableJob: '',
      prefix: 'Mr.',
      firstName: '',
      surname: '',
      phone: '9999999999',
      email: '',
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
      education: '',
      experience: '',
      currentEmployer: '',
      currentDesignation: ''
    })
    setFiles([])
    setSubmitStatus('idle')
    setSubmitMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-6xl text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Apply for a Position
              </h1>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Ready to join our team? Submit your application and let's start your journey with Seven Healer Consultants.
              </p>
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

      {/* Form Header */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-6">
          <div className="text-center">            
            <h2 className="text-3xl font-bold text-gray-800 mb-2">SHCP - Recruitment</h2>
            <p className="text-lg text-gray-600">Drop your CV here</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container-custom py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-medium">{submitMessage}</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-red-700 font-medium">{submitMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Application Type */}
              <div>
                <p className="text-gray-700 mb-4">
                  Do you want to apply for available jobs or want to drop your CV for future jobs ?
                </p>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="applicationType"
                      value="available"
                      checked={formData.applicationType === 'available'}
                      onChange={handleInputChange}
                      className="mr-3 text-blue-600"
                    />
                    <span className="text-gray-700">Yes, I want to apply for available jobs</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="applicationType"
                      value="future"
                      checked={formData.applicationType === 'future'}
                      onChange={handleInputChange}
                      className="mr-3 text-blue-600"
                    />
                    <span className="text-gray-700">No, I want to drop my CV for future jobs</span>
                  </label>
                </div>
                
                {formData.applicationType === 'available' && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Jobs *
                    </label>
                    <select
                      name="availableJob"
                      value={formData.availableJob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Please Select</option>
                      <option value="Assistant Manager – Marketing (JD-0028)">Assistant Manager – Marketing (JD-0028)</option>
                      <option value="Sr. Manager/ AGM – Marketing (JD-0027)">Sr. Manager/ AGM – Marketing (JD-0027)</option>
                      <option value="Healthcare Consultant (JD-0025)">Healthcare Consultant (JD-0025)</option>
                      <option value="Project Manager (JD-0024)">Project Manager (JD-0024)</option>
                      <option value="Business Development Executive (JD-0023)">Business Development Executive (JD-0023)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                
                {/* Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <div className="flex gap-3">
                    <select
                      name="prefix"
                      value={formData.prefix}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      placeholder="Surname"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Please enter a registered phone number.</p>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Please enter a registered email id.</p>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information *</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Street Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="streetAddress2"
                    value={formData.streetAddress2}
                    onChange={handleInputChange}
                    placeholder="Street Address Line 2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State/Province"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="Postal / Zip Code"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Educational Qualification *
                    </label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      placeholder="e.g., MBA, B.Tech, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Years of Experience *
                    </label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current or Last Employer *
                    </label>
                    <input
                      type="text"
                      name="currentEmployer"
                      value={formData.currentEmployer}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current or Last Designation *
                    </label>
                    <input
                      type="text"
                      name="currentDesignation"
                      value={formData.currentDesignation}
                      onChange={handleInputChange}
                      placeholder="Job title"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* CV Upload */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Upload your updated CV here in PDF format
                </h3>
                
                {/* File Upload Area */}
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Cloud className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg text-gray-600 mb-2">
                    <span className="text-blue-600 font-medium">Browse Files</span>
                  </p>
                  <p className="text-gray-500">Drag and drop files here</p>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <File className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center space-y-4 pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 px-12 rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <button
                  type="button"
                  onClick={clearForm}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyPage