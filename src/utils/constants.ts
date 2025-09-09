// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

// WhatsApp Configuration
export const WHATSAPP_NUMBER = '+919812692333'
export const WHATSAPP_MESSAGE = 'Hello! I would like to know more about your healthcare consulting services.'

// Contact Information
export const CONTACT_EMAIL = 'Info@sevenhealerconsultants.in'
export const CONTACT_PHONE = '011 41664694'
export const CONTACT_PHONE_2 = '+91 9812692333'
export const CONTACT_PHONE_3 = '+91 9728392333'

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/sevenhealerconsultants',
  linkedin: 'https://linkedin.com/company/Seven Healer-consultants',
  email: 'Info@sevenhealerconsultants.in'
}

// Company Information
export const COMPANY_NAME = 'Seven Healer counsultancy Pvt.Ltd'
export const COMPANY_TAGLINE = 'Transforming Healthcare Infrastructure'

// Animation Delays
export const ANIMATION_DELAYS = {
  fast: 100,
  medium: 200,
  slow: 300
}

// Form Validation
export const VALIDATION_RULES = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  name: /^[a-zA-Z\s]{2,50}$/
}

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'Seven Healer_user_preferences',
  FORM_DATA: 'Seven Healer_form_data',
  THEME: 'Seven Healer_theme'
}
