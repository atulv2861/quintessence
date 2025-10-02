import React, { useState, useEffect } from 'react'
import { 
  Plus, 
  Search, 
    Edit, 
    Trash2, 
    User,
    FileText,
    CheckCircle,
  RefreshCw
} from 'lucide-react'
import { Blog, BlogFormData } from '../../types'
import { blogService } from '../../services/blogService'
import BlogForm from '../../components/forms/BlogForm'
import ConfirmationModal from '../../components/modals/ConfirmationModal'

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Blog deletion modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [blogToDelete, setBlogToDelete] = useState<Blog | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalBlogs, setTotalBlogs] = useState(0)
  const [limit] = useState(10)

  useEffect(() => {
    loadBlogs()
  }, [currentPage])

  useEffect(() => {
    filterBlogs()
  }, [blogs, searchTerm, statusFilter])

  const loadBlogs = async () => {
    setIsLoading(true)
    try {
      const response = await blogService.getBlogsPaginated(currentPage, limit)
      setBlogs(response.blogs)
      setTotalBlogs(response.total)
      setTotalPages(Math.ceil(response.total / limit))
    } catch (error) {
      console.error('Error loading blogs:', error)
      // Fallback to empty array on error
      setBlogs([])
      setTotalBlogs(0)
      setTotalPages(1)
    } finally {
      setIsLoading(false)
    }
  }

  const filterBlogs = () => {
    let filtered = blogs

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog => blog.is_published === statusFilter)
    }

    setFilteredBlogs(filtered)
  }

  const handleDelete = (blog: Blog) => {
    setBlogToDelete(blog)
    setShowDeleteModal(true)
  }

  const confirmDeleteBlog = async () => {
    if (!blogToDelete) return

    setIsDeleting(true)
    try {
      await blogService.deleteBlog(blogToDelete.id)
      await loadBlogs()
      setShowDeleteModal(false)
      setBlogToDelete(null)
    } catch (error) {
      console.error('Error deleting blog:', error)
      alert('Failed to delete blog post. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  const cancelDeleteBlog = () => {
    setShowDeleteModal(false)
    setBlogToDelete(null)
    setIsDeleting(false)
  }

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog)
    setShowModal(true)
  }

  const handleCreate = () => {
    setEditingBlog(null)
    setShowModal(true)
  }

  const handleSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Submitting blog data:', data)
      if (editingBlog) {
        console.log('Updating existing blog:', editingBlog.id)
        await blogService.updateBlog(editingBlog.id, data)
      } else {
        console.log('Creating new blog')
        await blogService.createBlog(data)
      }
      setShowModal(false)
      setEditingBlog(null)
      setCurrentPage(1) // Reset to first page
      await loadBlogs()
    } catch (error) {
      console.error('Error saving blog:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Failed to save blog post: ${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRefresh = () => {
    setCurrentPage(1)
    loadBlogs()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    if (status === 'published') {
      return `${baseClasses} bg-green-100 text-green-800`
    }
    return `${baseClasses} bg-yellow-100 text-yellow-800`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Management</h1>
              <p className="text-gray-600">Manage your blog posts and content</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleRefresh}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>New Blog Post</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                <p className="text-2xl font-bold text-gray-900">{totalBlogs}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">
                  {blogs.filter(blog => blog.is_published === 'published').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Edit className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {blogs.filter(blog => blog.is_published === 'draft').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'published' | 'draft')}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredBlogs.length} of {totalBlogs} blogs
            </div>
          </div>
        </div>

        {/* Blogs Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Blog Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Published
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {blog.title}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2 mb-2">
                          {blog.excerpt}
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {blog.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{blog.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                          {blog.author_image ? (
                            <img
                              src={blog.author_image.startsWith('data:') ? blog.author_image : `/images/hero/${blog.author_image}`}
                              alt={blog.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          ) : null}
                          <div className={`w-full h-full bg-gray-300 flex items-center justify-center ${blog.author_image ? 'hidden' : ''}`}>
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {blog.author}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadge(blog.is_published)}>
                        {blog.is_published}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(blog.published_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(blog.created_at)}
                    </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => handleEdit(blog)}
                          className="text-blue-400 hover:text-blue-600 p-1"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog)}
                          className="text-red-400 hover:text-red-600 p-1"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first blog post.'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Create Blog Post</span>
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 border rounded-lg text-sm font-medium ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Blog Form Modal */}
        {showModal && (
          <BlogForm
            blog={editingBlog}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowModal(false)
              setEditingBlog(null)
            }}
            isLoading={isSubmitting}
          />
        )}

        {/* Delete Confirmation Modal */}
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={cancelDeleteBlog}
          onConfirm={confirmDeleteBlog}
          title="Delete Blog Post"
          message={`Are you sure you want to delete the blog post "${blogToDelete?.title}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          type="danger"
          isLoading={isDeleting}
        />
      </div>
    </div>
  )
}

export default BlogsPage
