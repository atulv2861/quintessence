import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Briefcase, MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight, Upload, File, X, Cloud } from 'lucide-react'
import CvUploadService from '../services/cvUploadService'
import { jobService } from '../services/jobService'
import { Job } from '../types'


const JobsPage: React.FC = () => {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedJobType, setSelectedJobType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 6
  const [totalJobs, setTotalJobs] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  // CV Upload form state
  const [cvFormData, setCvFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [cvFiles, setCvFiles] = useState<File[]>([])
  const [isSubmittingCv, setIsSubmittingCv] = useState(false)
  const [cvSubmitStatus, setCvSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [cvSubmitMessage, setCvSubmitMessage] = useState('')
  const cvFileInputRef = React.useRef<HTMLInputElement>(null)

  // Load jobs from API
  useEffect(() => {
    loadJobs()
  }, [currentPage])

  // Filter jobs when search terms change
  useEffect(() => {
    filterJobs()
  }, [jobs, searchTerm, selectedCategory, selectedJobType, selectedLocation])

  const loadJobs = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await jobService.getJobsPaginated(currentPage, jobsPerPage)
      setJobs(response.job_openings)
      setTotalJobs(response.total)
      setTotalPages(Math.ceil(response.total / jobsPerPage))
    } catch (error) {
      console.error('Error loading jobs:', error)
      setError('Failed to load jobs. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const filterJobs = () => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    }

    if (selectedJobType && selectedJobType !== 'All Types') {
      filtered = filtered.filter(job => job.type === selectedJobType)
    }

    if (selectedLocation && selectedLocation !== 'All Locations') {
      filtered = filtered.filter(job => job.location === selectedLocation)
    }

    setFilteredJobs(filtered)
  }

  const categories = ['All Categories', 'Marketing', 'Administration', 'Consulting', 'Operations']
  const jobTypes = ['All Types', 'Full Time', 'Part Time', 'Contract', 'Internship']
  const locations = ['All Locations', 'New Delhi', 'Mumbai', 'Sant Nirankari Health City', 'Remote']

  // Pagination logic
  const startIndex = (currentPage - 1) * jobsPerPage
  const endIndex = startIndex + jobsPerPage
  const currentJobs = filteredJobs.slice(startIndex, endIndex)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedJobType, selectedLocation])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  // CV Upload form handlers
  const handleCvInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCvFormData({
      ...cvFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleCvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || [])
    const updatedFiles = [...cvFiles, ...newFiles]
    
    // Limit to 1 file for CV
    if (updatedFiles.length > 1) {
      setCvSubmitMessage('Only one CV file is allowed')
      setCvSubmitStatus('error')
      return
    }
    
    // Check file size (10MB limit)
    const oversizedFiles = updatedFiles.filter(file => file.size > 10 * 1024 * 1024)
    if (oversizedFiles.length > 0) {
      setCvSubmitMessage('File size should not exceed 10MB')
      setCvSubmitStatus('error')
      return
    }
    
    // Check file type (PDF only)
    const invalidFiles = updatedFiles.filter(file => file.type !== 'application/pdf')
    if (invalidFiles.length > 0) {
      setCvSubmitMessage('Only PDF files are allowed')
      setCvSubmitStatus('error')
      return
    }
    
    setCvFiles(updatedFiles)
    setCvSubmitMessage('')
    setCvSubmitStatus('idle')
  }

  const handleRemoveCvFile = (index: number) => {
    setCvFiles(cvFiles.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleCvSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingCv(true)
    setCvSubmitStatus('idle')
    setCvSubmitMessage('')

    try {
      // Validate that a CV file is uploaded
      if (cvFiles.length === 0) {
        setCvSubmitStatus('error')
        setCvSubmitMessage('Please upload your CV before submitting.')
        setIsSubmittingCv(false)
        return
      }

      // Prepare CV upload data
      const cvUploadData = {
        full_name: cvFormData.name,
        email: cvFormData.email,
        phone: cvFormData.phone,
        files: cvFiles[0] // Take the first file
      }

      const response = await CvUploadService.uploadCv(cvUploadData)
      
      if (response.status === 'success') {
        setCvSubmitStatus('success')
        setCvSubmitMessage(response.message || 'CV submitted successfully! We\'ll review your application and get back to you soon.')
        // Reset form
        setCvFormData({
          name: '',
          email: '',
          phone: ''
        })
        setCvFiles([])
      } else {
        setCvSubmitStatus('error')
        setCvSubmitMessage(response.message || 'Failed to submit CV. Please try again.')
      }
    } catch (error) {
      setCvSubmitStatus('error')
      setCvSubmitMessage('Failed to submit CV. Please try again.')
      console.error('CV submission error:', error)
    } finally {
      setIsSubmittingCv(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Available Jobs
              </h1>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Join our team and be part of transforming healthcare infrastructure. Explore exciting career opportunities with Seven Healer Consultants.
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Keywords Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Keywords</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Job Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Job Type</label>
                <div className="relative">
                  <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search Jobs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">Showing all available positions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Listings - Left Column */}
            <div className="lg:col-span-2">
              {/* Loading State */}
              {isLoading && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading jobs...</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 text-red-500 mr-2">⚠️</div>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Job Listings */}
              {!isLoading && !error && (
                <div className="space-y-6">
                  {currentJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    {/* Company Logo/Initials */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">{job.company.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-1">
                          {job.title} ({job.job_id})
                        </h3>
                      </div>
                    </div>

                    {/* Job Overview */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{job.posted_date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="lg:ml-6">
                    <button 
                      onClick={() => navigate(`/career/job/${job.job_id}`)}
                      className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
                </div>
              )}

              {!isLoading && !error && filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria to find more opportunities.</p>
                </div>
              )}

              {/* Pagination - Centered within job listings */}
              {!isLoading && !error && totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current page
                        const shouldShow = 
                          page === 1 || 
                          page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1)

                        if (!shouldShow) {
                          // Show ellipsis for gaps
                          if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <span key={page} className="px-3 py-2 text-sm text-gray-500">
                                ...
                              </span>
                            )
                          }
                          return null
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                              currentPage === page
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        )
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Pagination Info */}
              {!isLoading && !error && (
                <div className="mt-4 text-center text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredJobs.length)} of {totalJobs} jobs
                </div>
              )}
            </div>

            {/* CV Upload Section - Right Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Your CV</h3>
                    <p className="text-gray-600 text-sm">Quick CV submission for career opportunities</p>
                  </div>

                  {/* Success/Error Messages */}
                  {cvSubmitStatus === 'success' && (
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-green-700 text-sm font-medium">{cvSubmitMessage}</p>
                      </div>
                    </div>
                  )}
                  
                  {cvSubmitStatus === 'error' && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <p className="text-red-700 text-sm font-medium">{cvSubmitMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleCvSubmit} className="space-y-4">
                    {/* Basic Contact Info */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={cvFormData.name}
                        onChange={handleCvInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={cvFormData.email}
                        onChange={handleCvInputChange}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={cvFormData.phone}
                        onChange={handleCvInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload CV (PDF) *</label>
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer"
                        onClick={() => cvFileInputRef.current?.click()}
                      >
                        <input
                          ref={cvFileInputRef}
                          type="file"
                          accept=".pdf"
                          onChange={handleCvFileChange}
                          className="hidden"
                        />
                        <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF files only, max 10MB</p>
                      </div>

                      {/* File List */}
                      {cvFiles.length > 0 && (
                        <div className="mt-3">
                          {cvFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center space-x-2">
                                <File className="w-4 h-4 text-blue-500" />
                                <div>
                                  <p className="text-xs font-medium text-gray-900">{file.name}</p>
                                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveCvFile(index)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmittingCv || cvFiles.length === 0}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{isSubmittingCv ? 'Submitting...' : 'Submit CV'}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default JobsPage
