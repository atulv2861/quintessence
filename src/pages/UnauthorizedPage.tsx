import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldX, ArrowLeft } from 'lucide-react'

const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldX className="w-8 h-8 text-red-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Access Denied
        </h1>
        
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. This area is restricted to administrators only.
        </p>
        
        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          
          <Link
            to="/login"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
          >
            <span>Login with Different Account</span>
          </Link>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact your administrator.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UnauthorizedPage
