import React, { useState, useEffect } from 'react'
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar, 
  MapPin,
  Briefcase,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  RefreshCw
} from 'lucide-react'
import { Job, JobFormData } from '../../types'
import { jobService } from '../../services/jobService'
import JobForm from '../../components/forms/JobForm'

interface Application {
  id: string
  jobId: string
  name: string
  email: string
  phone: string
  appliedDate: string
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected'
  cvUrl: string
}

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [applications, setApplications] = useState<Application[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Active' | 'Inactive'>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications'>('jobs')
  const [showModal, setShowModal] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalJobs, setTotalJobs] = useState(0)
  const [limit] = useState(10)

  useEffect(() => {
    loadData()
  }, [currentPage])

  useEffect(() => {
    filterJobs()
  }, [jobs, searchTerm, statusFilter, typeFilter])

  const loadData = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const jobsResponse = await jobService.getJobsPaginated(currentPage, limit)
      
      setJobs(jobsResponse.job_openings)
      setTotalJobs(jobsResponse.total)
      setTotalPages(Math.ceil(jobsResponse.total / limit))
      
      // Mock applications data for now
      const mockApplications: Application[] = [
        {
          id: 'APP-001',
          jobId: 'JD-0028',
          name: 'Priya Sharma',
          email: 'priya.sharma@email.com',
          phone: '+91 98765 43210',
          appliedDate: '2024-01-20',
          status: 'pending',
          cvUrl: '/cv/priya-sharma.pdf'
        },
        {
          id: 'APP-002',
          jobId: 'JD-0028',
          name: 'Rajesh Kumar',
          email: 'rajesh.kumar@email.com',
          phone: '+91 98765 43211',
          appliedDate: '2024-01-19',
          status: 'reviewed',
          cvUrl: '/cv/rajesh-kumar.pdf'
        },
        {
          id: 'APP-003',
          jobId: 'JD-0027',
          name: 'Anita Singh',
          email: 'anita.singh@email.com',
          phone: '+91 98765 43212',
          appliedDate: '2024-01-18',
          status: 'shortlisted',
          cvUrl: '/cv/anita-singh.pdf'
        }
      ]
      setApplications(mockApplications)
    } catch (error) {
      console.error('Error loading data:', error)
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

    if (statusFilter !== 'all') {
      filtered = filtered.filter(job => job.is_active === statusFilter)
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(job => job.type === typeFilter)
    }

    setFilteredJobs(filtered)
  }

  const handleDelete = async (job: Job) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      try {
        await jobService.deleteJob(job.job_id)
        // Refresh the data to get updated list
        await loadData()
        setApplications(applications.filter(app => app.jobId !== job.id))
      } catch (error) {
        console.error('Error deleting job:', error)
        setError('Failed to delete job. Please try again.')
      }
    }
  }

  const handleEdit = (job: Job) => {
    setEditingJob(job)
    setShowModal(true)
  }

  const handleCreate = () => {
    setEditingJob(null)
    setShowModal(true)
  }

  const handleSubmit = async (jobData: JobFormData) => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      if (editingJob) {
        // Update existing job
        await jobService.updateJob(editingJob.job_id, jobData)
      } else {
        // Create new job
        await jobService.createJob(jobData)
      }
      
      // Refresh the data to get updated list
      await loadData()
      
      setShowModal(false)
      setEditingJob(null)
    } catch (error) {
      console.error('Error saving job:', error)
      setError('Failed to save job. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    switch (status) {
      case 'Active':
        return `${baseClasses} bg-green-100 text-green-800`
      case 'Inactive':
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  const getApplicationStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    switch (status) {
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`
      case 'reviewed':
        return `${baseClasses} bg-blue-100 text-blue-800`
      case 'shortlisted':
        return `${baseClasses} bg-green-100 text-green-800`
      case 'rejected':
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  const jobTypes = ['all', 'Full Time', 'Part Time', 'Contract', 'Internship']

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading jobs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Management</h1>
              <p className="text-gray-600">Manage job postings and applications</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={loadData}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Post New Job</span>
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Job Postings ({jobs.length})
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'applications'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Applications ({applications.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold text-gray-900">{totalJobs}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobs.filter(job => job.is_active === 'Active').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
              </div>
            </div>
          </div>
        </div>

        {activeTab === 'jobs' ? (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-sm text-gray-600">
                  Showing {filteredJobs.length} of {jobs.length} jobs
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        <span className={getStatusBadge(job.is_active)}>
                          {job.is_active}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Posted {formatDate(job.posted_date)}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div>
                          <span className="text-gray-500">Remuneration: </span>
                          <span className="font-medium text-gray-900">{job.remuneration}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Job ID: </span>
                          <span className="font-medium text-gray-900">{job.job_id}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-6">
                      <button
                        onClick={() => handleEdit(job)}
                        className="text-blue-400 hover:text-blue-600 p-2"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(job)}
                        className="text-red-400 hover:text-red-600 p-2"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== 'all' || typeFilter !== 'all'
                    ? 'Try adjusting your search or filter criteria.'
                    : 'Get started by posting your first job.'
                  }
                </p>
                {!searchTerm && statusFilter === 'all' && typeFilter === 'all' && (
                  <button
                    onClick={handleCreate}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Post Job</span>
                  </button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-8">
                <div className="text-sm text-gray-700">
                  Showing {((currentPage - 1) * limit) + 1} to {Math.min(currentPage * limit, totalJobs)} of {totalJobs} jobs
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Applications Tab */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => {
                    const job = jobs.find(j => j.id === application.jobId)
                    return (
                      <tr key={application.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-gray-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {application.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {application.email}
                              </div>
                              <div className="text-sm text-gray-500">
                                {application.phone}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {job?.title || 'Unknown Position'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {job?.company || 'Unknown Company'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(application.appliedDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={getApplicationStatusBadge(application.status)}>
                            {application.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => window.open(application.cvUrl, '_blank')}
                              className="text-blue-400 hover:text-blue-600 p-1"
                              title="View CV"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              className="text-green-400 hover:text-green-600 p-1"
                              title="Contact"
                            >
                              <Mail className="w-4 h-4" />
                            </button>
                            <button
                              className="text-purple-400 hover:text-purple-600 p-1"
                              title="Call"
                            >
                              <Phone className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Job Form Modal */}
        <JobForm
          job={editingJob}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
            setEditingJob(null)
            setError(null)
          }}
          onSubmit={handleSubmit}
          isLoading={isSubmitting}
        />
      </div>
    </div>
  )
}

export default JobsPage
