import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronDown } from 'lucide-react'
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
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Name *</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Email *</label>
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
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Phone</label>
          <input
            type="tel"
            {...register('phone')}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Company</label>
          <input
            type="text"
            {...register('company')}
            onChange={(e) => handleFieldChange('company', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Subject *</label>
        <div className="relative">
          <select
            {...register('subject', { required: 'Subject is required' })}
            onChange={(e) => handleFieldChange('subject', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 appearance-none cursor-pointer"
          >
            <option value="">Select a subject</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="service-consultation">Service Consultation</option>
            <option value="project-inquiry">Project Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {errors.subject && <p className="text-red-600 text-sm mt-2">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Message *</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500 resize-none"
          rows={5}
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && <p className="text-red-600 text-sm mt-2">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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

