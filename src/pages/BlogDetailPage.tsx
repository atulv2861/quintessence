import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
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

// Mock blog data - in a real app, this would come from an API
const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Future of Healthcare Infrastructure in India',
    slug: 'future-healthcare-infrastructure-india',
    excerpt: 'Exploring the latest trends and innovations in healthcare infrastructure planning and design that are revolutionizing the industry.',
    content: `
      <h2>Introduction</h2>
      <p>The healthcare infrastructure landscape in India is undergoing a remarkable transformation. With the government's ambitious healthcare initiatives and private sector investments, we're witnessing unprecedented growth in medical facilities across the country.</p>
      
      <h2>Current State of Healthcare Infrastructure</h2>
      <p>India's healthcare infrastructure has evolved significantly over the past decade. The country now boasts over 25,000 hospitals, with both public and private sectors contributing to this growth. However, challenges remain in terms of accessibility, quality, and distribution across urban and rural areas.</p>
      
      <h3>Key Statistics</h3>
      <ul>
        <li>Total hospital beds: 1.8 million</li>
        <li>Doctor-to-patient ratio: 1:1,404</li>
        <li>Healthcare expenditure: 3.6% of GDP</li>
        <li>Digital health adoption: 65% in urban areas</li>
      </ul>
      
      <h2>Emerging Trends</h2>
      <p>Several key trends are shaping the future of healthcare infrastructure in India:</p>
      
      <h3>1. Digital Transformation</h3>
      <p>The integration of technology in healthcare facilities is revolutionizing patient care. From telemedicine platforms to AI-powered diagnostic tools, digital health solutions are becoming integral to modern healthcare infrastructure.</p>
      
      <h3>2. Sustainable Design</h3>
      <p>Green building practices and sustainable design principles are gaining traction. Healthcare facilities are increasingly incorporating energy-efficient systems, renewable energy sources, and environmentally friendly materials.</p>
      
      <h3>3. Modular Construction</h3>
      <p>Prefabricated and modular construction methods are enabling faster project delivery and cost-effective healthcare facility development, particularly in remote areas.</p>
      
      <h2>Innovation in Healthcare Planning</h2>
      <p>Modern healthcare infrastructure planning involves sophisticated approaches that consider multiple factors:</p>
      
      <h3>Patient-Centered Design</h3>
      <p>Healthcare facilities are being designed with patient experience at the forefront. This includes creating healing environments, reducing wait times, and improving accessibility for all patients.</p>
      
      <h3>Technology Integration</h3>
      <p>Smart building systems, IoT devices, and integrated healthcare information systems are becoming standard features in new healthcare facilities.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>While the future looks promising, several challenges need to be addressed:</p>
      
      <h3>Challenges</h3>
      <ul>
        <li>Rural-urban healthcare disparity</li>
        <li>Skilled workforce shortage</li>
        <li>Regulatory compliance complexity</li>
        <li>Funding and investment gaps</li>
      </ul>
      
      <h3>Opportunities</h3>
      <ul>
        <li>Public-private partnerships</li>
        <li>Technology adoption acceleration</li>
        <li>International collaboration</li>
        <li>Innovation in service delivery</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>The next decade promises significant advancements in India's healthcare infrastructure. With continued investment, technological innovation, and policy support, India is well-positioned to become a global leader in healthcare infrastructure development.</p>
      
      <p>As we move forward, the focus will be on creating sustainable, accessible, and technologically advanced healthcare facilities that can serve the diverse needs of India's population while maintaining the highest standards of care.</p>
    `,
    image: '/images/blog/healthcare-future.jpg',
    author: 'Dr. Nitin Garg',
    authorBio: 'Dr. Nitin Garg is a renowned healthcare infrastructure consultant with over 15 years of experience in planning and designing medical facilities across India.',
    authorImage: '/images/hero/nitin-garg.png',
    publishedAt: '2024-01-15',
    category: 'Healthcare Planning',
    tags: ['Infrastructure', 'Planning', 'Innovation', 'Healthcare', 'India'],
    readTime: '8 min read',
    views: 1250,
    likes: 89,
    featured: true
  },
  {
    id: '2',
    title: 'NABH Accreditation: A Complete Guide',
    slug: 'nabh-accreditation-complete-guide',
    excerpt: 'Everything you need to know about NABH accreditation for healthcare facilities and how to achieve it successfully.',
    content: `
      <h2>What is NABH Accreditation?</h2>
      <p>The National Accreditation Board for Hospitals & Healthcare Providers (NABH) is a constituent board of Quality Council of India, set up to establish and operate accreditation programs for healthcare organizations.</p>
      
      <h2>Benefits of NABH Accreditation</h2>
      <p>NABH accreditation brings numerous benefits to healthcare organizations:</p>
      <ul>
        <li>Improved patient safety and quality of care</li>
        <li>Enhanced credibility and reputation</li>
        <li>Better operational efficiency</li>
        <li>Reduced medical errors</li>
        <li>Increased patient satisfaction</li>
      </ul>
      
      <h2>Accreditation Process</h2>
      <p>The NABH accreditation process involves several key steps that organizations must follow to achieve certification.</p>
    `,
    featuredImage: '/images/blog/nabh-accreditation.jpg',
    author: 'Dr. Nitin Garg',
    authorBio: 'Dr. Nitin Garg is a renowned healthcare infrastructure consultant with over 15 years of experience in planning and designing medical facilities across India.',
    authorImage: '/images/hero/nitin-garg.png',
    publishedAt: '2024-01-10',
    category: 'Accreditation',
    tags: ['NABH', 'Accreditation', 'Standards'],
    readTime: '8 min read',
    views: 980,
    likes: 67,
    featured: false
  }
]

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
//   const navigate = useNavigate()
//   const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [currentPostIndex, setCurrentPostIndex] = useState(0)
  const [readingProgress, setReadingProgress] = useState(0)
  console.log(currentPostIndex)
  // Find the current blog post
  const currentPost = BLOG_POSTS.find(post => post.slug === slug)
  
  // Get related posts (other posts from the same category or recent posts)
//   const relatedPosts = BLOG_POSTS.filter(post => 
//     post.slug !== slug && 
//     (post.category === currentPost?.category || post.featured)
//   ).slice(0, 3)

  useEffect(() => {
    if (currentPost) {
      setCurrentPostIndex(BLOG_POSTS.findIndex(post => post.slug === slug))
    }
  }, [slug, currentPost])

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
                {currentPost.category}
              </span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(currentPost.publishedAt)}</span>
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
                <p className="text-sm text-gray-500">{currentPost.authorBio}</p>
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
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
                style={{
                  lineHeight: '1.8',
                  color: '#374151'
                }}
              />
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
