// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

// WhatsApp Configuration
export const WHATSAPP_NUMBER = '+919812692333'
export const WHATSAPP_MESSAGE = 'Hello! I would like to know more about your healthcare consulting services.'

// Contact Information
export const CONTACT_EMAIL = 'Info@quintessenceconsultants.in'
export const CONTACT_PHONE = '011 41664694'
export const CONTACT_PHONE_2 = '+91 9812692333'
export const CONTACT_PHONE_3 = '+91 9728392333'

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/quintessenceconsultants',
  linkedin: 'https://linkedin.com/company/quintessence-consultants',
  email: 'Info@quintessenceconsultants.in'
}

// Company Information
export const COMPANY_NAME = 'Quintessence Medical Consultants'
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
  USER_PREFERENCES: 'quintessence_user_preferences',
  FORM_DATA: 'quintessence_form_data',
  THEME: 'quintessence_theme'
}
