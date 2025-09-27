import { AdminUser, UserFormData, UsersResponse } from '../types'

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

// User API service
export const userService = {
  // Create new user
  async createUser(userData: UserFormData): Promise<AdminUser> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          password: userData.password,
          phone: userData.phone
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: AdminUser = await response.json()
      return data
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    }
  },

  // Get all users with pagination
  async getUsersPaginated(page: number = 1, limit: number = 10): Promise<UsersResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: UsersResponse = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  },

  // Get user by ID
  async getUserById(id: string): Promise<AdminUser> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/${id}`, {
        method: 'GET',
        headers: getHeaders()
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: AdminUser = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching user:', error)
      throw error
    }
  },

  // Update user
  async updateUser(id: string, userData: Partial<UserFormData>): Promise<AdminUser> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: AdminUser = await response.json()
      return data
    } catch (error) {
      console.error('Error updating user:', error)
      throw error
    }
  },

  // Delete user
  async deleteUser(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      throw error
    }
  },

  // Change user password
  async changePassword(id: string, newPassword: string): Promise<AdminUser> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/${id}/password`, {
        method: 'PATCH',
        headers: getHeaders(),
        body: JSON.stringify({ new_password: newPassword })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: AdminUser = await response.json()
      return data
    } catch (error) {
      console.error('Error changing password:', error)
      throw error
    }
  }
}

export default userService
