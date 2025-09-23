import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Briefcase, MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  postedDate: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

const JobsPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedJobType, setSelectedJobType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 6

  const jobs: Job[] = [
    {
      id: 'JD-0028',
      title: 'Assistant Manager – Marketing',
      company: 'SNHC',
      location: 'Sant Nirankari Health City',
      type: 'Full Time',
      postedDate: 'Posted 3 weeks ago',
      description: 'We are looking for a dynamic and strategic Marketing Manager to lead the development and execution of integrated marketing initiatives for our upcoming state-of-the-art hospital. The ideal candidate will have a strong background in healthcare marketing and brand management.',
      requirements: [
        'Bachelor\'s degree in Marketing, Business Administration, or related field',
        '5+ years of experience in healthcare marketing',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and presentation skills'
      ],
      responsibilities: [
        'Develop and execute comprehensive marketing strategies',
        'Manage brand positioning and messaging',
        'Coordinate with internal teams and external agencies',
        'Analyze market trends and competitor activities'
      ]
    },
    {
      id: 'JD-0027',
      title: 'Sr. Manager/ AGM – Marketing',
      company: 'SNHC',
      location: 'Sant Nirankari Health City',
      type: 'Full Time',
      postedDate: 'Posted 3 weeks ago',
      description: 'We are looking for a dynamic and strategic Marketing Manager to lead the development and execution of integrated marketing initiatives for our upcoming state-of-the-art hospital. The ideal candidate will have a strong background in healthcare marketing and brand management.',
      requirements: [
        'Master\'s degree in Marketing, Business Administration, or related field',
        '8+ years of experience in healthcare marketing',
        'Proven track record in team leadership',
        'Strong analytical and strategic thinking skills'
      ],
      responsibilities: [
        'Lead marketing team and strategic initiatives',
        'Develop and execute comprehensive marketing strategies',
        'Manage brand positioning and messaging',
        'Coordinate with internal teams and external agencies'
      ]
    },
    {
      id: 'JD-0026',
      title: 'Hospital Administrator',
      company: 'Seven Healer Consultants',
      location: 'New Delhi',
      type: 'Full Time',
      postedDate: 'Posted 2 weeks ago',
      description: 'We are seeking an experienced Hospital Administrator to oversee daily operations and ensure efficient healthcare service delivery.',
      requirements: [
        'Master\'s degree in Hospital Administration or related field',
        '10+ years of experience in hospital management',
        'Strong leadership and organizational skills',
        'Knowledge of healthcare regulations and compliance'
      ],
      responsibilities: [
        'Oversee daily hospital operations',
        'Manage staff and resources efficiently',
        'Ensure compliance with healthcare regulations',
        'Develop and implement operational policies'
      ]
    },
    {
      id: 'JD-0025',
      title: 'Healthcare Consultant',
      company: 'Seven Healer Consultants',
      location: 'Mumbai',
      type: 'Full Time',
      postedDate: 'Posted 1 week ago',
      description: 'Join our team as a Healthcare Consultant to provide expert advice on healthcare infrastructure planning and development.',
      requirements: [
        'Bachelor\'s degree in Healthcare Administration or related field',
        '3+ years of experience in healthcare consulting',
        'Strong analytical and problem-solving skills',
        'Excellent client relationship management skills'
      ],
      responsibilities: [
        'Provide healthcare infrastructure consulting services',
        'Conduct feasibility studies and market analysis',
        'Develop project proposals and recommendations',
        'Maintain client relationships and ensure satisfaction'
      ]
    },
    {
      id: 'JD-0024',
      title: 'Project Manager',
      company: 'Seven Healer Consultants',
      location: 'New Delhi',
      type: 'Full Time',
      postedDate: 'Posted 5 days ago',
      description: 'We are looking for an experienced Project Manager to oversee healthcare infrastructure projects from planning to completion.',
      requirements: [
        'Bachelor\'s degree in Project Management or related field',
        '5+ years of project management experience',
        'PMP certification preferred',
        'Strong leadership and communication skills'
      ],
      responsibilities: [
        'Plan and execute healthcare infrastructure projects',
        'Coordinate with stakeholders and team members',
        'Monitor project progress and budgets',
        'Ensure timely delivery of projects'
      ]
    },
    {
      id: 'JD-0023',
      title: 'Business Development Executive',
      company: 'Seven Healer Consultants',
      location: 'Bangalore',
      type: 'Full Time',
      postedDate: 'Posted 4 days ago',
      description: 'Join our business development team to identify new opportunities and build relationships with healthcare organizations.',
      requirements: [
        'Bachelor\'s degree in Business Administration or related field',
        '3+ years of business development experience',
        'Strong networking and negotiation skills',
        'Knowledge of healthcare industry'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Prepare proposals and presentations',
        'Meet sales targets and objectives'
      ]
    },
    {
      id: 'JD-0022',
      title: 'Quality Assurance Specialist',
      company: 'Seven Healer Consultants',
      location: 'Chennai',
      type: 'Full Time',
      postedDate: 'Posted 3 days ago',
      description: 'We need a Quality Assurance Specialist to ensure our healthcare infrastructure projects meet the highest standards.',
      requirements: [
        'Bachelor\'s degree in Quality Management or related field',
        '4+ years of QA experience in healthcare',
        'Knowledge of healthcare regulations and standards',
        'Attention to detail and analytical skills'
      ],
      responsibilities: [
        'Develop and implement quality standards',
        'Conduct quality audits and inspections',
        'Ensure compliance with regulations',
        'Document and report quality issues'
      ]
    },
    {
      id: 'JD-0021',
      title: 'Technical Writer',
      company: 'Seven Healer Consultants',
      location: 'Remote',
      type: 'Part Time',
      postedDate: 'Posted 2 days ago',
      description: 'We are seeking a Technical Writer to create comprehensive documentation for our healthcare infrastructure projects.',
      requirements: [
        'Bachelor\'s degree in Technical Writing or related field',
        '2+ years of technical writing experience',
        'Strong writing and editing skills',
        'Knowledge of healthcare terminology'
      ],
      responsibilities: [
        'Create technical documentation and manuals',
        'Edit and proofread project documents',
        'Collaborate with technical teams',
        'Maintain documentation standards'
      ]
    },
    {
      id: 'JD-0020',
      title: 'Financial Analyst',
      company: 'Seven Healer Consultants',
      location: 'New Delhi',
      type: 'Full Time',
      postedDate: 'Posted 1 day ago',
      description: 'Join our finance team to analyze project costs and provide financial insights for healthcare infrastructure projects.',
      requirements: [
        'Bachelor\'s degree in Finance or Accounting',
        '3+ years of financial analysis experience',
        'Strong analytical and Excel skills',
        'Knowledge of project finance'
      ],
      responsibilities: [
        'Analyze project costs and budgets',
        'Prepare financial reports and forecasts',
        'Support project financial planning',
        'Ensure financial compliance'
      ]
    }
  ]

  const categories = ['All Categories', 'Marketing', 'Administration', 'Consulting', 'Operations']
  const jobTypes = ['All Types', 'Full Time', 'Part Time', 'Contract', 'Internship']
  const locations = ['All Locations', 'New Delhi', 'Mumbai', 'Sant Nirankari Health City', 'Remote']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All Categories' || 
                           job.title.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesJobType = selectedJobType === '' || selectedJobType === 'All Types' || 
                          job.type === selectedJobType
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || 
                           job.location === selectedLocation

    return matchesSearch && matchesCategory && matchesJobType && matchesLocation
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const startIndex = (currentPage - 1) * jobsPerPage
  const endIndex = startIndex + jobsPerPage
  const currentJobs = filteredJobs.slice(startIndex, endIndex)

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedJobType, selectedLocation])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
                          {job.title} ({job.id})
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
                        <span>{job.postedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="lg:ml-6">
                    <button 
                      onClick={() => navigate(`/career/job/${job.id}`)}
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

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Found</h3>
              <p className="text-gray-600">Try adjusting your search criteria to find more opportunities.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredJobs.length > 0 && totalPages > 1 && (
            <div className="mt-12 flex justify-center">
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
          {filteredJobs.length > 0 && (
            <div className="mt-6 text-center text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} jobs
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default JobsPage
