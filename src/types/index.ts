// Service types
export interface Service {
  id: string
  title: string
  description: string
  detailedDescription: string
  icon: string
  image?: string
  features: string[]
  slug: string
}

// Project types
export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  location: string
  area: number
  beds: number
  status: 'planned' | 'ongoing' | 'completed'
  clientName?: string
  completionDate?: string
  isFeatured: boolean
  slug: string
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  image?: string
  rating: number
  isFeatured: boolean
}

// FAQ types
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  sortOrder: number
}

// Blog types
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
}

// Contact types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  address: string
  subject: string
  message: string
  files?: File[]
}

export interface ContactInfo {
  address: string
  email: string
  phone: string
  phone2: string
  phone3: string
}

// Company info types
export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  founder: FounderInfo
  stats: StatsData
}

export interface FounderInfo {
  name: string
  title: string
  education: string[]
  experience: string
  achievements: string[]
  image?: string
}

export interface StatsData {
  area: number
  beds: number
  projects: number
  associates: number
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

// API response types
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

