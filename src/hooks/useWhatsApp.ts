import { useCallback } from 'react'
import { WHATSAPP_CONFIG } from '../data/constants'

export const useWhatsApp = () => {
  const openWhatsApp = useCallback((customMessage?: string) => {
    const message = customMessage || WHATSAPP_CONFIG.message
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = WHATSAPP_CONFIG.number.replace(/\D/g, '')
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(url, '_blank')
  }, [])

  const openWhatsAppWithMessage = useCallback((message: string) => {
    openWhatsApp(message)
  }, [openWhatsApp])

  return {
    openWhatsApp,
    openWhatsAppWithMessage
  }
}
