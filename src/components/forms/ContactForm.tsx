import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { updateFormField, setSubmitting, setSubmitStatus, setErrorMessage, resetForm } from '../../store/slices/contactSlice'
import { ContactFormData } from '../../types'

interface ContactFormProps {
  onSuccess?: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const dispatch = useDispatch()
  const { formData, isSubmitting, submitStatus, errorMessage } = useSelector((state: RootState) => state.contact)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    defaultValues: formData
  })

  const onSubmit = async (data: ContactFormData) => {
    dispatch(setSubmitting(true))
    dispatch(setSubmitStatus('idle'))
    dispatch(setErrorMessage(''))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data)
      
      dispatch(setSubmitStatus('success'))
      dispatch(resetForm())
      reset()
      
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch(setSubmitStatus('error'))
      dispatch(setErrorMessage('Failed to send message. Please try again.'))
    } finally {
      dispatch(setSubmitting(false))
    }
  }

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    dispatch(updateFormField({ field, value }))
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600">
          Thank you for your inquiry. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Name *</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            className="form-input"
            placeholder="Your full name"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div>
          <label className="form-label">Email *</label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            className="form-input"
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Phone</label>
          <input
            type="tel"
            {...register('phone')}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
            className="form-input"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label className="form-label">Company</label>
          <input
            type="text"
            {...register('company')}
            onChange={(e) => handleFieldChange('company', e.target.value)}
            className="form-input"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label className="form-label">Subject *</label>
        <select
          {...register('subject', { required: 'Subject is required' })}
          onChange={(e) => handleFieldChange('subject', e.target.value)}
          className="form-input"
        >
          <option value="">Select a subject</option>
          <option value="general-inquiry">General Inquiry</option>
          <option value="service-consultation">Service Consultation</option>
          <option value="project-inquiry">Project Inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p className="form-error">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="form-label">Message *</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          className="form-textarea"
          rows={5}
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="loading-spinner"></div>
            <span>Sending...</span>
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}

export default ContactForm

