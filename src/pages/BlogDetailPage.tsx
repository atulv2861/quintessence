import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  //Clock, 
  //Eye, 
  //Heart, 
  Share2, 
  //BookOpen,
  Tag,
  //ChevronLeft,
  //ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react'
import { Blog } from '../types'


const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [currentPost, setCurrentPost] = useState<Blog | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return
      
      setIsLoading(true)
      try {
        // For now, we'll use the mock data structure
        // In a real app, you'd fetch by slug from the API
        const mockBlog: Blog = {
          id: '1',
          title: 'The Future of Healthcare Infrastructure in India',
          slug: 'future-healthcare-infrastructure-india',
          excerpt: 'Exploring the latest trends and innovations in healthcare infrastructure planning and design that are revolutionizing the industry.',
          content: [
            {
              heading: 'Introduction',
              description: 'The healthcare infrastructure landscape in India is undergoing a remarkable transformation. With the government\'s ambitious healthcare initiatives and private sector investments, we\'re witnessing unprecedented growth in medical facilities across the country.',
              sub_sections: []
            },
            {
              heading: 'Current State of Healthcare Infrastructure',
              description: 'India\'s healthcare infrastructure has evolved significantly over the past decade. The country now boasts over 25,000 hospitals, with both public and private sectors contributing to this growth.',
              sub_sections: [
                'Total hospital beds: 1.8 million',
                'Doctor-to-patient ratio: 1:1,404',
                'Healthcare expenditure: 3.6% of GDP',
                'Digital health adoption: 65% in urban areas'
              ]
            },
            {
              heading: 'Emerging Trends',
              description: 'Several key trends are shaping the future of healthcare infrastructure in India:',
              sub_sections: [
                'Digital Transformation - The integration of technology in healthcare facilities is revolutionizing patient care.',
                'Sustainable Design - Green building practices and sustainable design principles are gaining traction.',
                'Modular Construction - Prefabricated and modular construction methods are enabling faster project delivery.'
              ]
            }
          ],
          image: '/images/blog/healthcare-future.jpg',
          author: 'Dr. Nitin Garg',
          author_bio: 'Dr. Nitin Garg is a renowned healthcare infrastructure consultant with over 15 years of experience in planning and designing medical facilities across India.',
          author_image: '/images/hero/nitin-garg.png',
          published_at: '2024-01-15T00:00:00Z',
          tags: ['Infrastructure', 'Planning', 'Innovation', 'Healthcare', 'India'],
          is_published: 'published',
          created_at: '2024-01-20T14:45:30.000Z',
          updated_at: '2024-01-20T14:45:30.000Z'
        }
        setCurrentPost(mockBlog)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  // Reading progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setReadingProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

//   const handleLike = () => {
//     setIsLiked(!isLiked)
//   }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = currentPost.title
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`)
        break
    }
    setShowShareMenu(false)
  }

//   const navigateToPost = (direction: 'prev' | 'next') => {
//     const newIndex = direction === 'prev' 
//       ? (currentPostIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length
//       : (currentPostIndex + 1) % BLOG_POSTS.length
    
//     const nextPost = BLOG_POSTS[newIndex]
//     navigate(`/blog/${nextPost.slug}`)
//   }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
      />
      
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              {/* <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  isLiked 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{currentPost.likes + (isLiked ? 1 : 0)}</span>
              </button> */}
              
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
                
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border py-2 z-10 share-menu">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50"
                    >
                      <Facebook className="w-4 h-4 text-blue-600" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50"
                    >
                      <Twitter className="w-4 h-4 text-blue-400" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50"
                    >
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      <span>LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50"
                    >
                      <Mail className="w-4 h-4 text-gray-600" />
                      <span>Email</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category and Date */}
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                Healthcare
              </span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(currentPost.published_at)}</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{currentPost.views} views</span>
              </div> */}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {currentPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {currentPost.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{currentPost.author}</p>
                <p className="text-sm text-gray-500">{currentPost.author_bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="article-content" style={{ lineHeight: '1.8', color: '#374151' }}>
                {currentPost.content.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">
                      {section.heading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed">
                      {section.description}
                    </p>
                    {section.sub_sections.length > 0 && (
                      <ul className="mb-6 space-y-2">
                        {section.sub_sections.map((subSection, subIndex) => (
                          <li key={subIndex} className="flex items-start space-x-3">
                            <span className="text-blue-500 font-bold text-xl leading-none mt-1">•</span>
                            <span className="text-gray-800">{subSection}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Between Posts */}
      {/* <div className="bg-white border-t">
        <div className="container-custom py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigateToPost('prev')}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition-colors group article-nav"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Previous Article</p>
                  <p className="font-medium">
                    {BLOG_POSTS[(currentPostIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length].title}
                  </p>
                </div>
              </button>

              <button
                onClick={() => navigateToPost('next')}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition-colors group article-nav"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500">Next Article</p>
                  <p className="font-medium">
                    {BLOG_POSTS[(currentPostIndex + 1) % BLOG_POSTS.length].title}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Related Articles */}
      {/* {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="related-articles">
                {relatedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden blog-card"
                  >
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white font-medium text-sm">Article Image</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                        >
                          <span>Read More</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default BlogDetailPage
