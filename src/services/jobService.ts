import { Job, JobFormData, JobsResponse } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// Get JWT token from localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
}

// Create headers with authorization
const getHeaders = (): HeadersInit => {
  const token = getAuthToken()
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  }
}

// Job API service
export const jobService = {
  // Get all jobs
  async getJobs(): Promise<Job[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: JobsResponse = await response.json()
      return data.job_openings
    } catch (error) {
      console.error('Error fetching jobs:', error)
      throw error
    }
  },

  // Get job by ID
  async getJobById(jobId: string): Promise<Job> {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: Job = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching job:', error)
      throw error
    }
  },

  // Create new job
  async createJob(jobData: JobFormData): Promise<Job> {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(jobData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: Job = await response.json()
      return data
    } catch (error) {
      console.error('Error creating job:', error)
      throw error
    }
  },

  // Update job
  async updateJob(jobId: string, jobData: Partial<JobFormData>): Promise<Job> {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(jobData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: Job = await response.json()
      return data
    } catch (error) {
      console.error('Error updating job:', error)
      throw error
    }
  },

  // Delete job
  async deleteJob(jobId: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
        method: 'DELETE',
        headers: getHeaders()
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error deleting job:', error)
      throw error
    }
  },

  // Get jobs with pagination
  async getJobsPaginated(page: number = 1, limit: number = 10): Promise<JobsResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: JobsResponse = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching paginated jobs:', error)
      throw error
    }
  }
}

export default jobService
