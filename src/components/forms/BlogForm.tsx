import React, { useState, useEffect } from 'react'
import { X, Plus, Trash2, Calendar } from 'lucide-react'
import { Blog, BlogFormData, BlogContentSection } from '../../types'

interface BlogFormProps {
  blog?: Blog | null
  onSubmit: (data: BlogFormData) => Promise<void>
  onCancel: () => void
  isLoading?: boolean
}

const BlogForm: React.FC<BlogFormProps> = ({ blog, onSubmit, onCancel, isLoading = false }) => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    excerpt: '',
    content: [
      {
        heading: '',
        description: '',
        sub_sections: []
      }
    ],
    image: null,
    author: 'Dr. Nitin Garg',
    author_bio: 'Dr. Nitin Garg is a renowned healthcare infrastructure consultant with over 15 years of experience in planning and designing medical facilities across India.',
    author_image: '/images/hero/nitin-garg.png',
    published_at: new Date().toISOString().split('T')[0] + 'T00:00:00Z',
    tags: [],
    is_published: 'draft'
  })

  const [tagInput, setTagInput] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [authorImagePreview, setAuthorImagePreview] = useState<string>('')
  const [blogImagePreview, setBlogImagePreview] = useState<string>('')

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        image: blog.image,
        author: blog.author,
        author_bio: blog.author_bio,
        author_image: blog.author_image,
        published_at: blog.published_at,
        tags: blog.tags,
        is_published: blog.is_published
      })
      setAuthorImagePreview(blog.author_image)
      setBlogImagePreview(blog.image || '')
    }
  }, [blog])

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required'
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required'
    }

    if (!formData.author_bio.trim()) {
      newErrors.author_bio = 'Author bio is required'
    }

    if (formData.content.length === 0) {
      newErrors.content = 'At least one content section is required'
    }

    formData.content.forEach((section, index) => {
      if (!section.heading.trim()) {
        newErrors[`content_${index}_heading`] = 'Section heading is required'
      }
      if (!section.description.trim()) {
        newErrors[`content_${index}_description`] = 'Section description is required'
      }
    })

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
    } catch (error) {
      console.error('Error submitting blog:', error)
    }
  }

  const addContentSection = () => {
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, { heading: '', description: '', sub_sections: [] }]
    }))
  }

  const removeContentSection = (index: number) => {
    if (formData.content.length > 1) {
      setFormData(prev => ({
        ...prev,
        content: prev.content.filter((_, i) => i !== index)
      }))
    }
  }

  const updateContentSection = (index: number, field: keyof BlogContentSection, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.map((section, i) => 
        i === index ? { ...section, [field]: value } : section
      )
    }))
  }

  const addSubSection = (sectionIndex: number) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.map((section, i) => 
        i === sectionIndex 
          ? { ...section, sub_sections: [...section.sub_sections, ''] }
          : section
      )
    }))
  }

  const updateSubSection = (sectionIndex: number, subIndex: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.map((section, i) => 
        i === sectionIndex 
          ? { 
              ...section, 
              sub_sections: section.sub_sections.map((sub, j) => j === subIndex ? value : sub)
            }
          : section
      )
    }))
  }

  const removeSubSection = (sectionIndex: number, subIndex: number) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content.map((section, i) => 
        i === sectionIndex 
          ? { 
              ...section, 
              sub_sections: section.sub_sections.filter((_, j) => j !== subIndex)
            }
          : section
      )
    }))
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  const handleAuthorImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setAuthorImagePreview(result)
        setFormData(prev => ({ ...prev, author_image: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBlogImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setBlogImagePreview(result)
        setFormData(prev => ({ ...prev, image: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAuthorImage = () => {
    setAuthorImagePreview('')
    setFormData(prev => ({ ...prev, author_image: '' }))
  }

  const removeBlogImage = () => {
    setBlogImagePreview('')
    setFormData(prev => ({ ...prev, image: null }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter blog title"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.is_published}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  is_published: e.target.value as 'published' | 'draft' 
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.excerpt ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={3}
              placeholder="Enter blog excerpt"
            />
            {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
          </div>

          {/* Author Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.author ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter author name"
              />
              {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author Image
              </label>
              
              {/* Image Preview */}
              {authorImagePreview && (
                <div className="mb-3 relative">
                  <img
                    src={authorImagePreview}
                    alt="Author preview"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={removeAuthorImage}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* File Upload */}
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAuthorImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500">
                  Upload an image file (JPG, PNG, GIF) - Max 5MB
                </p>
              </div>

              {/* URL Input (Alternative) */}
              <div className="mt-3">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Or enter image URL:
                </label>
                <input
                  type="url"
                  value={formData.author_image}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, author_image: e.target.value }))
                    setAuthorImagePreview(e.target.value)
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter author image URL"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Bio *
            </label>
            <textarea
              value={formData.author_bio}
              onChange={(e) => setFormData(prev => ({ ...prev, author_bio: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.author_bio ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={2}
              placeholder="Enter author bio"
            />
            {errors.author_bio && <p className="text-red-500 text-sm mt-1">{errors.author_bio}</p>}
          </div>

          {/* Image and Published Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>
              
              {/* Image Preview */}
              {blogImagePreview && (
                <div className="mb-3 relative">
                  <img
                    src={blogImagePreview}
                    alt="Blog preview"
                    className="w-32 h-20 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={removeBlogImage}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* File Upload */}
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBlogImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500">
                  Upload an image file (JPG, PNG, GIF) - Max 5MB
                </p>
              </div>

              {/* URL Input (Alternative) */}
              <div className="mt-3">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Or enter image URL:
                </label>
                <input
                  type="url"
                  value={formData.image || ''}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, image: e.target.value || null }))
                    setBlogImagePreview(e.target.value)
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Published Date
              </label>
              <input
                type="datetime-local"
                value={formData.published_at.slice(0, 16)}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  published_at: new Date(e.target.value).toISOString()
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagKeyPress}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter tag and press Enter"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Content Sections *
              </label>
              <button
                type="button"
                onClick={addContentSection}
                className="inline-flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Section
              </button>
            </div>

            {formData.content.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Section {sectionIndex + 1}</h4>
                  {formData.content.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeContentSection(sectionIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Heading *
                    </label>
                    <input
                      type="text"
                      value={section.heading}
                      onChange={(e) => updateContentSection(sectionIndex, 'heading', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors[`content_${sectionIndex}_heading`] ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter section heading"
                    />
                    {errors[`content_${sectionIndex}_heading`] && (
                      <p className="text-red-500 text-sm mt-1">{errors[`content_${sectionIndex}_heading`]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      value={section.description}
                      onChange={(e) => updateContentSection(sectionIndex, 'description', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors[`content_${sectionIndex}_description`] ? 'border-red-500' : 'border-gray-300'
                      }`}
                      rows={3}
                      placeholder="Enter section description"
                    />
                    {errors[`content_${sectionIndex}_description`] && (
                      <p className="text-red-500 text-sm mt-1">{errors[`content_${sectionIndex}_description`]}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Sub-sections
                      </label>
                      <button
                        type="button"
                        onClick={() => addSubSection(sectionIndex)}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                        Add Sub-section
                      </button>
                    </div>

                    {section.sub_sections.map((subSection, subIndex) => (
                      <div key={subIndex} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={subSection}
                          onChange={(e) => updateSubSection(sectionIndex, subIndex, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter sub-section"
                        />
                        <button
                          type="button"
                          onClick={() => removeSubSection(sectionIndex, subIndex)}
                          className="px-2 py-2 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : (blog ? 'Update Blog' : 'Create Blog')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogForm
