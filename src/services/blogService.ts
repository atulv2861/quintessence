import { Blog, BlogFormData, BlogsResponse, ApiResponse } from '../types'

const API_BASE_URL = 'http://localhost:8000/api/v1'

// Get JWT token from localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
}

// Create headers with authorization
const createHeaders = (): HeadersInit => {
  const token = getAuthToken()
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  }
}

// Validate blog data before sending to API
const validateBlogData = (data: any): void => {
  console.log('Validating blog data structure...')
  
  // Check required fields
  if (!data.title || typeof data.title !== 'string') {
    throw new Error('Title is required and must be a string')
  }
  
  if (!data.excerpt || typeof data.excerpt !== 'string') {
    throw new Error('Excerpt is required and must be a string')
  }
  
  if (!data.author || typeof data.author !== 'string') {
    throw new Error('Author is required and must be a string')
  }
  
  if (!data.author_bio || typeof data.author_bio !== 'string') {
    throw new Error('Author bio is required and must be a string')
  }
  
  if (!Array.isArray(data.content) || data.content.length === 0) {
    throw new Error('Content must be a non-empty array')
  }
  
  // Validate content structure
  data.content.forEach((section: any, index: number) => {
    if (!section.heading || typeof section.heading !== 'string') {
      throw new Error(`Content section ${index + 1} heading is required`)
    }
    if (!section.description || typeof section.description !== 'string') {
      throw new Error(`Content section ${index + 1} description is required`)
    }
    if (!Array.isArray(section.sub_sections)) {
      throw new Error(`Content section ${index + 1} sub_sections must be an array`)
    }
  })
  
  if (!Array.isArray(data.tags)) {
    throw new Error('Tags must be an array')
  }
  
  if (!data.published_at || typeof data.published_at !== 'string') {
    throw new Error('Published date is required and must be a string')
  }
  
  if (!data.is_published || !['published', 'draft'].includes(data.is_published)) {
    throw new Error('Publish status must be either "published" or "draft"')
  }
  
  console.log('Blog data validation passed')
}

export const blogService = {
  // Get all blogs with pagination (admin endpoint)
  async getBlogsPaginated(page: number = 1, limit: number = 10): Promise<BlogsResponse> {
    const response = await fetch(`${API_BASE_URL}/blogs/admin?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: createHeaders()
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`)
    }

    return response.json()
  },

  // Get all blogs
  async getBlogs(): Promise<Blog[]> {
    const response = await fetch(`${API_BASE_URL}/blogs/`, {
      method: 'GET',
      headers: createHeaders()
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`)
    }

    const data = await response.json()
    return data.blogs || data
  },

  // Get blog by ID
  async getBlogById(id: string): Promise<Blog> {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'GET',
      headers: createHeaders()
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.statusText}`)
    }

    return response.json()
  },

  // Create new blog
  async createBlog(blogData: BlogFormData): Promise<Blog> {
    console.log('Creating new blog with data:', blogData)
    
    // Validate data before sending
    validateBlogData(blogData)
    
    const response = await fetch(`${API_BASE_URL}/blogs/`, {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(blogData)
    })

    console.log('Create response status:', response.status)

    if (!response.ok) {
      let errorMessage = `Failed to create blog: ${response.status} ${response.statusText}`
      try {
        const errorData = await response.json()
        console.error('Create error response data:', errorData)
        errorMessage = errorData.detail || errorData.message || errorMessage
      } catch (parseError) {
        console.error('Failed to parse create error response:', parseError)
        const responseText = await response.text()
        console.error('Raw create response text:', responseText)
      }
      throw new Error(errorMessage)
    }

    const result = await response.json()
    console.log('Create successful, response:', result)
    return result
  },

  // Update blog
  async updateBlog(id: string, blogData: Partial<BlogFormData>): Promise<Blog> {
    console.log('Updating blog with ID:', id)
    console.log('Blog data being sent:', blogData)
    
    // Validate data before sending (for partial updates, we'll be more lenient)
    try {
      validateBlogData(blogData)
    } catch (validationError) {
      console.warn('Validation warning for update:', validationError)
      // For updates, we'll continue but log the warning
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: createHeaders(),
      body: JSON.stringify(blogData)
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      let errorMessage = `Failed to update blog: ${response.status} ${response.statusText}`
      try {
        const errorData = await response.json()
        console.error('Error response data:', errorData)
        errorMessage = errorData.detail || errorData.message || errorMessage
      } catch (parseError) {
        console.error('Failed to parse error response:', parseError)
        const responseText = await response.text()
        console.error('Raw response text:', responseText)
      }
      throw new Error(errorMessage)
    }

    const result = await response.json()
    console.log('Update successful, response:', result)
    return result
  },

  // Delete blog
  async deleteBlog(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'DELETE',
      headers: createHeaders()
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `Failed to delete blog: ${response.statusText}`)
    }
  }
}
