import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Search, BookOpen, Star, Clock, Eye, Heart } from 'lucide-react'

// Mock blog data - in a real app, this would come from an API
const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Future of Healthcare Infrastructure in India',
    slug: 'future-healthcare-infrastructure-india',
    excerpt: 'Exploring the latest trends and innovations in healthcare infrastructure planning and design that are revolutionizing the industry.',
    content: 'Full article content would go here...',
    featuredImage: '/images/blog/healthcare-future.jpg',
    author: 'Dr. Nitin Garg',
    publishedAt: '2024-01-15',
    category: 'Healthcare Planning',
    tags: ['Infrastructure', 'Planning', 'Innovation'],
    readTime: '5 min read',
    views: 1250,
    likes: 89,
    featured: true
  },
  {
    id: '2',
    title: 'NABH Accreditation: A Complete Guide',
    slug: 'nabh-accreditation-complete-guide',
    excerpt: 'Everything you need to know about NABH accreditation for healthcare facilities and how to achieve it successfully.',
    content: 'Full article content would go here...',
    featuredImage: '/images/blog/nabh-accreditation.jpg',
    author: 'Dr. Nitin Garg',
    publishedAt: '2024-01-10',
    category: 'Accreditation',
    tags: ['NABH', 'Accreditation', 'Standards'],
    readTime: '8 min read',
    views: 980,
    likes: 67,
    featured: false
  },
  {
    id: '3',
    title: 'MEP Systems in Healthcare Facilities',
    slug: 'mep-systems-healthcare-facilities',
    excerpt: 'Understanding the importance of Mechanical, Electrical, and Plumbing systems in healthcare infrastructure design.',
    content: 'Full article content would go here...',
    featuredImage: '/images/blog/mep-systems.jpg',
    author: 'Dr. Nitin Garg',
    publishedAt: '2024-01-05',
    category: 'MEP Planning',
    tags: ['MEP', 'Systems', 'Infrastructure'],
    readTime: '6 min read',
    views: 756,
    likes: 45,
    featured: false
  },
  {
    id: '4',
    title: 'Sustainable Healthcare Design Principles',
    slug: 'sustainable-healthcare-design-principles',
    excerpt: 'Learn how to create environmentally friendly and sustainable healthcare facilities that benefit both patients and the planet.',
    content: 'Full article content would go here...',
    featuredImage: '/images/blog/sustainable-design.jpg',
    author: 'Dr. Nitin Garg',
    publishedAt: '2024-01-01',
    category: 'Sustainability',
    tags: ['Sustainability', 'Green Design', 'Environment'],
    readTime: '7 min read',
    views: 634,
    likes: 52,
    featured: false
  },
  {
    id: '5',
    title: 'Digital Transformation in Healthcare Infrastructure',
    slug: 'digital-transformation-healthcare-infrastructure',
    excerpt: 'How technology is reshaping healthcare infrastructure and what it means for the future of medical facilities.',
    content: 'Full article content would go here...',
    featuredImage: '/images/blog/digital-transformation.jpg',
    author: 'Dr. Nitin Garg',
    publishedAt: '2023-12-28',
    category: 'Technology',
    tags: ['Digital', 'Technology', 'Innovation'],
    readTime: '9 min read',
    views: 1120,
    likes: 78,
    featured: true
  },
  {
    id: '6',
    title: 'Patient Safety in Hospital Design',
    slug: 'patient-safety-hospital-design',
    excerpt: 'Critical design considerations that ensure patient safety and improve healthcare outcomes in modern hospitals.',
    content: 'Full article content would go here...',
    featuredImage: '/images/blog/patient-safety.jpg',
    author: 'Dr. Nitin Garg',
    publishedAt: '2023-12-20',
    category: 'Patient Safety',
    tags: ['Safety', 'Design', 'Patient Care'],
    readTime: '6 min read',
    views: 892,
    likes: 61,
    featured: false
  }
]

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))]
  const featuredPosts = BLOG_POSTS.filter(post => post.featured)

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero4.jpg')"
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-6xl text-center">
              {/* <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-blue-400 font-medium">Latest Insights</span>
              </div> */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Our Blog
              </h1>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover the latest trends, insights, and expert advice on healthcare infrastructure planning and management.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:ring-4 focus:ring-white/20 focus:border-white/50 transition-all duration-300"
                  />
                  <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.slice(1).map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              {/* <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full mb-6">
                <span className="font-medium flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Featured</span>
                </span>
              </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trending
                <span className="pl-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss these popular articles that are making waves in the healthcare infrastructure community.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white font-medium">Featured Article</p>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Featured</span>
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} views</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gradient-to-r from-blue-200 to-blue-300 text-blue-500 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            {/* <div className="inline-block px-6 py-2 bg-blue-100 text-blue-400 rounded-full mb-6">
              <span className="font-medium">All Articles</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest
              <span className="pl-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of articles covering all aspects of healthcare infrastructure.
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/50 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-gray-600" />
                        </div>
                        <p className="text-gray-600 font-medium text-sm">Article Image</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      </div>
                    )}
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

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-00 font-medium transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-white font-medium">Stay Connected</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an Update
              <span className="block text-white">
                Update
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights on healthcare infrastructure planning and industry trends delivered straight to your inbox.
            </p>
            <div className="max-w-lg mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:ring-4 focus:ring-white/20 focus:border-white/30 transition-all duration-300"
              />
              <button className="bg-white text-blue-400 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 2,500+ healthcare professionals who trust our insights
            </p>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default BlogPage
