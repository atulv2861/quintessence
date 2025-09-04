import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppWidget from '../common/WhatsAppWidget'
import ConsultationModal from '../modals/ConsultationModal'
import ContactModal from '../modals/ContactModal'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
      <ConsultationModal />
      <ContactModal />
    </div>
  )
}

export default Layout
