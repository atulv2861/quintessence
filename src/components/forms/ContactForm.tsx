import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronDown, X, File, Paperclip } from 'lucide-react'
import { RootState } from '../../store'
import { updateFormField, updateFiles, removeFile, setSubmitting, setSubmitStatus, setErrorMessage, resetForm } from '../../store/slices/contactSlice'
import { ContactFormData } from '../../types'
import EmailService from '../../services/emailService'

interface ContactFormProps {
  onSuccess?: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const dispatch = useDispatch()
  const { formData, isSubmitting, submitStatus, errorMessage } = useSelector((state: RootState) => state.contact)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    defaultValues: formData
  })

  const onSubmit = async () => {
    dispatch(setSubmitting(true))
    dispatch(setSubmitStatus('idle'))
    dispatch(setErrorMessage(''))

    try {
      // Send data to backend using EmailService - use Redux state instead of form data
      const response = await EmailService.sendContactForm(formData)
      
      if (response.status === 'success') {
        dispatch(setSubmitStatus('success'))
        dispatch(resetForm())
        reset()
        
        if (onSuccess) {
          onSuccess()
        }
      } else {
        dispatch(setSubmitStatus('error'))
        dispatch(setErrorMessage(response.message || 'Failed to send message. Please try again.'))
      }
    } catch (error) {
      dispatch(setSubmitStatus('error'))
      dispatch(setErrorMessage('Failed to send message. Please try again.'))
      console.error('Form submission error:', error)
    } finally {
      dispatch(setSubmitting(false))
    }
  }

  const handleFieldChange = (field: Exclude<keyof ContactFormData, 'files'>, value: string) => {
    dispatch(updateFormField({ field, value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const currentFiles = formData.files || []
    const newFiles = [...currentFiles, ...files]
    
    // Limit to 5 files maximum
    if (newFiles.length > 5) {
      dispatch(setErrorMessage('Maximum 5 files allowed'))
      return
    }
    
    // Check file size (10MB limit per file)
    const oversizedFiles = newFiles.filter(file => file.size > 10 * 1024 * 1024)
    if (oversizedFiles.length > 0) {
      dispatch(setErrorMessage('File size should not exceed 10MB'))
      return
    }
    
    dispatch(updateFiles(newFiles))
    dispatch(setErrorMessage(''))
  }

  const handleRemoveFile = (index: number) => {
    dispatch(removeFile(index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
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
        <label className="block text-sm font-semibold text-gray-700 mb-3">Address</label>
        <input
          type="text"
          {...register('address')}
          onChange={(e) => handleFieldChange('address', e.target.value)}
          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
          placeholder="Your address"
        />
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

      {/* File Attachments Section */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Attachments (Optional)</label>
        
        {/* File Upload Area */}
        <div 
          className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt"
            onChange={handleFileChange}
            className="hidden"
          />
          <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 mb-2">
            <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
          </p>
          <p className="text-sm text-gray-500">
            PDF, DOC, PPT, XLS, Images (Max 10MB each, up to 5 files)
          </p>
        </div>

        {/* File List */}
        {formData.files && formData.files.length > 0 && (
          <div className="mt-4 space-y-2">
            {formData.files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <File className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
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

