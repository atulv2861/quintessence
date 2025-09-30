import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Briefcase, MapPin, Calendar } from 'lucide-react'
import { jobService } from '../services/jobService'
import { Job } from '../types'


const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>()
  const navigate = useNavigate()
  const [job, setJob] = useState<Job | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load job data from API
  useEffect(() => {
    if (jobId) {
      loadJob(jobId)
    }
  }, [jobId])

  const loadJob = async (id: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const jobData = await jobService.getJobById(id)
      setJob(jobData)
    } catch (error) {
      console.error('Error loading job:', error)
      setError('Failed to load job details. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading job details...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Job</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/career/current-openings')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    )
  }

  // Job not found
  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/career/current-openings')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero3.webp')"
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {job.title}
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Join our team and be part of transforming healthcare infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate('/career/current-openings')}
              className="flex items-center text-gray-600 hover:text-blue-500 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Careers Page
            </button>

            {/* Job Header */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {job.title} ({job.job_id})
                  </h2>
                  
                  {/* Company Logo/Initials */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">{job.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.company}</h3>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{job.posted_date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div>
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h3>
                <div className="space-y-6">
                  {job.key_responsibilities.map((section, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {index + 1}. {section.category}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications & Experience */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualifications & Experience</h3>
                <ul className="space-y-2">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Remuneration */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Remuneration</h3>
                <p className="text-gray-700">{job.remuneration}</p>
              </div>

              {/* Why Join Us */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  {job.why_join_us}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                <button
                  onClick={() => navigate('/career/apply')}
                  className="flex-1 bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Apply Now</span>
                </button>
                <button
                  onClick={() => navigate('/career/current-openings')}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Careers Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobDetailPage
