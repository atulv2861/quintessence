import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, X } from 'lucide-react'
import { RootState } from '../../store'
import { toggleMobileMenu, closeMobileMenu, openConsultationModal } from '../../store/slices/uiSlice'
import { NAV_ITEMS } from '../../data/constants'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.ui)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu())
  }

  const handleCloseMobileMenu = () => {
    dispatch(closeMobileMenu())
  }

  const handleConsultationClick = () => {
    dispatch(openConsultationModal())
    handleCloseMobileMenu()
  }

  return (
    <>
      {/* Main Header */}
      <header className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-400 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">SHC</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900">SHC</div>
                <div className="text-sm text-gray-600">Seven Healer counsultancy Pvt.Ltd</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      location.pathname === item.href ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* 3D FREE CONSULTATION Button */}
              <button
                onClick={handleConsultationClick}
                className="btn-3d ml-4"
              >
                FREE CONSULTATION
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container-custom py-4">
              <nav className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      onClick={handleCloseMobileMenu}
                      className={`block py-2 px-4 rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={handleCloseMobileMenu}
                            className="block py-2 px-4 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleConsultationClick}
                    className="w-full btn-primary"
                  >
                    FREE CONSULTATION
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header

