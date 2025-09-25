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
  location: string
  beds: string
  area: string
  client: string
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold'
  description: string
  features: string[]
  image: string | null
  image_name: string | null
  created_at: string
  updated_at: string
}

export interface ProjectFormData {
  title: string
  location: string
  beds: string
  area: string
  client: string
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold'
  description: string
  features: string[]
  image: string
  image_name: string
}

export interface ProjectsResponse {
  projects: Project[]
  total: number
  page: number
  limit: number
}

// User Management types
export interface AdminUser {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  role: 'user' | 'admin'
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface UserFormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  role: 'user' | 'admin'
  is_active: boolean
  password?: string
}

export interface UsersResponse {
  users: AdminUser[]
  total: number
  page: number
  limit: number
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

// Job types
export interface KeyResponsibility {
  category: string
  items: string[]
}

export interface Job {
  id: string
  job_id: string
  title: string
  company: string
  location: string
  type: string
  posted_date: string
  description: string
  overview: string
  key_responsibilities: KeyResponsibility[]
  qualifications: string[]
  remuneration: string
  why_join_us: string
  requirements: string[]
  responsibilities: string[]
  is_active: 'Active' | 'Inactive'
  created_at: string
  updated_at: string
}

export interface JobFormData {
  job_id: string
  title: string
  company: string
  location: string
  type: string
  posted_date: string
  description: string
  overview: string
  key_responsibilities: KeyResponsibility[]
  qualifications: string[]
  remuneration: string
  why_join_us: string
  requirements: string[]
  responsibilities: string[]
  is_active: 'Active' | 'Inactive'
}

export interface JobsResponse {
  job_openings: Job[]
  total: number
  page: number
  limit: number
}

// Authentication types
export interface SignupRequest {
  first_name: string
  last_name: string
  email: string
  password: string
  phone: string
  role: 'user' | 'admin'
}

export interface SignupResponse {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  role: string
  is_active: boolean
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  token_type: string
  user: {
    id: string
    first_name: string
    last_name: string
    email: string
    phone: string
    role: string
    is_active: boolean
  }
}

export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  role: string
  is_active: boolean
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

