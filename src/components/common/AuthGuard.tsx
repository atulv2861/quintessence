import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authService } from '../../services/authService'

interface AuthGuardProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requireAdmin = false }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = authService.getAuthToken()
        const userData = authService.getStoredUserData()

        if (!token || !userData) {
          setIsAuthenticated(false)
          setIsAuthorized(false)
          setIsLoading(false)
          return
        }

        setIsAuthenticated(true)

        // Check if admin access is required
        if (requireAdmin) {
          const hasAdminRole = userData.role === 'admin'
          const isActive = userData.is_active === true

          if (hasAdminRole && isActive) {
            setIsAuthorized(true)
          } else {
            setIsAuthorized(false)
            console.warn('Access denied: User does not have admin privileges or is inactive', {
              role: userData.role,
              is_active: userData.is_active
            })
          }
        } else {
          // For non-admin routes, just check if user is active
          const isActive = userData.is_active === true
          setIsAuthorized(isActive)
        }

        setIsLoading(false)
      } catch (error) {
        console.error('Auth check failed:', error)
        setIsAuthenticated(false)
        setIsAuthorized(false)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [requireAdmin])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Redirect to unauthorized page if not authorized
  if (!isAuthorized) {
    return <Navigate to="/unauthorized" replace />
  }

  // Render children if authenticated and authorized
  return <>{children}</>
}

export default AuthGuard
