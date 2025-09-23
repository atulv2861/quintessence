import React, { useState } from 'react'
import { Search, Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react'

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
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedJobType, setSelectedJobType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Available Jobs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our team and be part of transforming healthcare infrastructure. Explore exciting career opportunities with Seven Healer Consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Keywords Search */}
              <div>
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
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Jobs</span>
              </button>
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
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    {/* Company Logo/Initials */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">{job.company.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-600 mb-1">
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
                    <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2 group">
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
        </div>
      </section>
    </div>
  )
}

export default JobsPage
