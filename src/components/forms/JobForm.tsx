import React, { useState, useEffect } from 'react'
import { X, Plus, Trash2, Save, AlertCircle } from 'lucide-react'
import { Job, JobFormData, KeyResponsibility } from '../../types'

interface JobFormProps {
  job?: Job | null
  isOpen: boolean
  onClose: () => void
  onSubmit: (jobData: JobFormData) => Promise<void>
  isLoading?: boolean
}

const JobForm: React.FC<JobFormProps> = ({ 
  job, 
  isOpen, 
  onClose, 
  onSubmit, 
  isLoading = false 
}) => {
  const [formData, setFormData] = useState<JobFormData>({
    job_id: '',
    title: '',
    company: 'Seven Healer Consultancy',
    location: '',
    type: 'Full Time',
    posted_date: new Date().toISOString().split('T')[0],
    description: '',
    overview: '',
    key_responsibilities: [{ category: '', items: [''] }],
    qualifications: [''],
    remuneration: '',
    why_join_us: '',
    requirements: [''],
    responsibilities: [''],
    is_active: 'Active'
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (job) {
      setFormData({
        job_id: job.job_id || '',
        title: job.title || '',
        company: job.company || 'Seven Healer Consultancy',
        location: job.location || '',
        type: job.type || 'Full Time',
        posted_date: job.posted_date || new Date().toISOString().split('T')[0],
        description: job.description || '',
        overview: job.overview || '',
        key_responsibilities: job.key_responsibilities?.length > 0 
          ? job.key_responsibilities 
          : [{ category: '', items: [''] }],
        qualifications: job.qualifications?.length > 0 ? job.qualifications : [''],
        remuneration: job.remuneration || '',
        why_join_us: job.why_join_us || '',
        requirements: job.requirements?.length > 0 ? job.requirements : [''],
        responsibilities: job.responsibilities?.length > 0 ? job.responsibilities : [''],
        is_active: job.is_active || 'Active'
      })
    } else {
      // Reset form for new job
      setFormData({
        job_id: '',
        title: '',
        company: 'Seven Healer Consultancy',
        location: '',
        type: 'Full Time',
        posted_date: new Date().toISOString().split('T')[0],
        description: '',
        overview: '',
        key_responsibilities: [{ category: '', items: [''] }],
        qualifications: [''],
        remuneration: '',
        why_join_us: '',
        requirements: [''],
        responsibilities: [''],
        is_active: 'Active'
      })
    }
    setErrors({})
  }, [job, isOpen])

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.job_id.trim()) newErrors.job_id = 'Job ID is required'
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.overview.trim()) newErrors.overview = 'Overview is required'
    if (!formData.remuneration.trim()) newErrors.remuneration = 'Remuneration is required'

    // Validate key responsibilities
    formData.key_responsibilities.forEach((resp, index) => {
      if (!resp.category.trim()) {
        newErrors[`key_responsibilities_${index}_category`] = 'Category is required'
      }
      if (resp.items.length === 0 || resp.items.every(item => !item.trim())) {
        newErrors[`key_responsibilities_${index}_items`] = 'At least one item is required'
      }
    })

    // Validate qualifications
    if (formData.qualifications.length === 0 || formData.qualifications.every(q => !q.trim())) {
      newErrors.qualifications = 'At least one qualification is required'
    }

    // Validate requirements
    if (formData.requirements.length === 0 || formData.requirements.every(r => !r.trim())) {
      newErrors.requirements = 'At least one requirement is required'
    }

    // Validate responsibilities
    if (formData.responsibilities.length === 0 || formData.responsibilities.every(r => !r.trim())) {
      newErrors.responsibilities = 'At least one responsibility is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    try {
      await onSubmit(formData)
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleInputChange = (field: keyof JobFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const addKeyResponsibility = () => {
    setFormData(prev => ({
      ...prev,
      key_responsibilities: [...prev.key_responsibilities, { category: '', items: [''] }]
    }))
  }

  const removeKeyResponsibility = (index: number) => {
    setFormData(prev => ({
      ...prev,
      key_responsibilities: prev.key_responsibilities.filter((_, i) => i !== index)
    }))
  }

  const updateKeyResponsibility = (index: number, field: 'category' | 'items', value: any) => {
    setFormData(prev => ({
      ...prev,
      key_responsibilities: prev.key_responsibilities.map((resp, i) => 
        i === index ? { ...resp, [field]: value } : resp
      )
    }))
  }

  const addKeyResponsibilityItem = (respIndex: number) => {
    setFormData(prev => ({
      ...prev,
      key_responsibilities: prev.key_responsibilities.map((resp, i) => 
        i === respIndex 
          ? { ...resp, items: [...resp.items, ''] }
          : resp
      )
    }))
  }

  const removeKeyResponsibilityItem = (respIndex: number, itemIndex: number) => {
    setFormData(prev => ({
      ...prev,
      key_responsibilities: prev.key_responsibilities.map((resp, i) => 
        i === respIndex 
          ? { ...resp, items: resp.items.filter((_, j) => j !== itemIndex) }
          : resp
      )
    }))
  }

  const addArrayItem = (field: 'qualifications' | 'requirements' | 'responsibilities') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayItem = (field: 'qualifications' | 'requirements' | 'responsibilities', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const updateArrayItem = (field: 'qualifications' | 'requirements' | 'responsibilities', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {job ? 'Edit Job' : 'Create New Job'}
                </h3>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job ID *
                    </label>
                    <input
                      type="text"
                      value={formData.job_id}
                      onChange={(e) => handleInputChange('job_id', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.job_id ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., JD-0028"
                    />
                    {errors.job_id && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.job_id}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.title ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Senior Software Engineer"
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.location ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Remote, New Delhi"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Posted Date
                    </label>
                    <input
                      type="date"
                      value={formData.posted_date}
                      onChange={(e) => handleInputChange('posted_date', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={formData.is_active}
                      onChange={(e) => handleInputChange('is_active', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Brief job description..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Overview */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Overview *
                  </label>
                  <textarea
                    value={formData.overview}
                    onChange={(e) => handleInputChange('overview', e.target.value)}
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.overview ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Detailed job overview..."
                  />
                  {errors.overview && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.overview}
                    </p>
                  )}
                </div>

                {/* Key Responsibilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Responsibilities *
                  </label>
                  {formData.key_responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="mb-4 p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <input
                          type="text"
                          value={resp.category}
                          onChange={(e) => updateKeyResponsibility(respIndex, 'category', e.target.value)}
                          className={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors[`key_responsibilities_${respIndex}_category`] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Category (e.g., Development, Technical Leadership)"
                        />
                        {formData.key_responsibilities.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeKeyResponsibility(respIndex)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      {errors[`key_responsibilities_${respIndex}_category`] && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors[`key_responsibilities_${respIndex}_category`]}
                        </p>
                      )}
                      
                      <div className="space-y-2">
                        {resp.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => {
                                const newItems = [...resp.items]
                                newItems[itemIndex] = e.target.value
                                updateKeyResponsibility(respIndex, 'items', newItems)
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Responsibility item..."
                            />
                            {resp.items.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeKeyResponsibilityItem(respIndex, itemIndex)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addKeyResponsibilityItem(respIndex)}
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add Item
                        </button>
                      </div>
                      {errors[`key_responsibilities_${respIndex}_items`] && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors[`key_responsibilities_${respIndex}_items`]}
                        </p>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addKeyResponsibility}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Category
                  </button>
                </div>

                {/* Qualifications */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualifications *
                  </label>
                  {formData.qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={qual}
                        onChange={(e) => updateArrayItem('qualifications', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Qualification requirement..."
                      />
                      {formData.qualifications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('qualifications', index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('qualifications')}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Qualification
                  </button>
                  {errors.qualifications && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.qualifications}
                    </p>
                  )}
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirements *
                  </label>
                  {formData.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => updateArrayItem('requirements', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Job requirement..."
                      />
                      {formData.requirements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('requirements', index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('requirements')}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Requirement
                  </button>
                  {errors.requirements && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.requirements}
                    </p>
                  )}
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Responsibilities *
                  </label>
                  {formData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={resp}
                        onChange={(e) => updateArrayItem('responsibilities', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Job responsibility..."
                      />
                      {formData.responsibilities.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('responsibilities', index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('responsibilities')}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Responsibility
                  </button>
                  {errors.responsibilities && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.responsibilities}
                    </p>
                  )}
                </div>

                {/* Remuneration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Remuneration *
                  </label>
                  <input
                    type="text"
                    value={formData.remuneration}
                    onChange={(e) => handleInputChange('remuneration', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.remuneration ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Competitive salary based on experience"
                  />
                  {errors.remuneration && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.remuneration}
                    </p>
                  )}
                </div>

                {/* Why Join Us */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why Join Us
                  </label>
                  <textarea
                    value={formData.why_join_us}
                    onChange={(e) => handleInputChange('why_join_us', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe why candidates should join your company..."
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {job ? 'Updating...' : 'Creating...'}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    {job ? 'Update Job' : 'Create Job'}
                  </div>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobForm

