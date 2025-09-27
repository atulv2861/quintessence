import { Project, ProjectFormData, ProjectsResponse } from '../types'

const API_BASE_URL = 'http://localhost:8000/api/v1'

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

// Project API service
export const projectService = {
  // Get all projects
  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: ProjectsResponse = await response.json()
      return data.projects
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw error
    }
  },

  // Get projects with pagination
  async getProjectsPaginated(page: number = 1, limit: number = 10): Promise<ProjectsResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: ProjectsResponse = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw error
    }
  },

  // Get project by ID
  async getProjectById(id: string): Promise<Project> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: Project = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching project:', error)
      throw error
    }
  },

  // Create new project
  async createProject(projectData: ProjectFormData): Promise<Project> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(projectData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: Project = await response.json()
      return data
    } catch (error) {
      console.error('Error creating project:', error)
      throw error
    }
  },

  // Update project
  async updateProject(id: string, projectData: Partial<ProjectFormData>): Promise<Project> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(projectData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: Project = await response.json()
      return data
    } catch (error) {
      console.error('Error updating project:', error)
      throw error
    }
  },

  // Delete project
  async deleteProject(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error deleting project:', error)
      throw error
    }
  }
}

export default projectService
