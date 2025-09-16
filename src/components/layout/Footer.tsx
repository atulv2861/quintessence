import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react'
import { CONTACT_INFO, SOCIAL_LINKS, NAV_ITEMS } from '../../data/constants'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                {/* <span className="font-bold text-xl">SHC</span> */}
                <img src="/images/logo/seven_healer.png" alt="SHC" className="w-10 h-10" />
              </div>
              <div>
                <div className="font-bold text-xl">SHC</div>
                <div className="text-sm text-gray-400">Seven Healer counsultancy Pvt.Ltd</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              We are a consulting company dedicated to transforming the future of health across the entire continuum of care.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ADDRESS</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>{CONTACT_INFO.phone}</div>
                  <div>{CONTACT_INFO.phone2}</div>
                  <div>{CONTACT_INFO.phone3}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">FIND US</h3>
            <ul className="space-y-2">
              {/* add map here */}
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.508383624963!2d77.15058017528954!3d28.691256975634517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02347a0e8fbb%3A0xa51d40303c4dbf1a!2sA9%20GDITL%20Northex%20Tower%2C%20Netaji%20Subhash%20Place!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
                  // width="600"
                  height="200"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>

              </div>
            </ul>
          </div>
        </div>


        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} <span className="font-semibold">Seven Healer</span> All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              Website Design by Seven Healer
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

