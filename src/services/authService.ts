import { SignupRequest, SignupResponse, LoginRequest, LoginResponse, User } from '../types'

const API_BASE_URL = 'http://localhost:8000/api/v1'

// Authentication API service
export const authService = {
  // Sign up new user
  async signup(signupData: SignupRequest): Promise<SignupResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: SignupResponse = await response.json()
      return data
    } catch (error) {
      console.error('Error during signup:', error)
      throw error
    }
  },

  // Login user
  async login(loginData: LoginRequest): Promise<LoginResponse> {
    try {
      // Convert data to URL-encoded format
      const formData = new URLSearchParams()
      formData.append('username', loginData.email) // API expects 'username' field
      formData.append('password', loginData.password)

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: LoginResponse = await response.json()
      return data
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  },

  // Logout user (clear local storage)
  logout(): void {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userData')
  },

  // Get current user from token
  async getCurrentUser(): Promise<User> {
    try {
      const token = localStorage.getItem('authToken')
      if (!token) {
        throw new Error('No authentication token found')
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: User = await response.json()
      return data
    } catch (error) {
      console.error('Error getting current user:', error)
      throw error
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken')
    return !!token
  },

  // Get stored user data
  getStoredUserData(): User | null {
    try {
      const userData = localStorage.getItem('userData')
      return userData ? JSON.parse(userData) : null
    } catch (error) {
      console.error('Error parsing stored user data:', error)
      return null
    }
  },

  // Store user data
  storeUserData(userData: User): void {
    localStorage.setItem('userData', JSON.stringify(userData))
  },

  // Store auth token
  storeAuthToken(token: string): void {
    localStorage.setItem('authToken', token)
  },

  // Get auth token
  getAuthToken(): string | null {
    return localStorage.getItem('authToken')
  }
}

export default authService
