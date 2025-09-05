import React from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_CONFIG } from '../../data/constants'

const WhatsAppWidget: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_CONFIG.message)
    const url = `https://wa.me/${WHATSAPP_CONFIG.number.replace(/\D/g, '')}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}

export default WhatsAppWidget

