import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-outline inline-flex items-center space-x-2 w-full justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
          <div className="space-y-2">
            <Link
              to="/services"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/projects"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              Our Projects
            </Link>
            <Link
              to="/about"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
