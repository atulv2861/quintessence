import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { X } from 'lucide-react'
import { RootState } from '../../store'
import { closeContactModal } from '../../store/slices/uiSlice'
import ContactForm from '../forms/ContactForm'

const ContactModal: React.FC = () => {
  const dispatch = useDispatch()
  const { isContactModalOpen } = useSelector((state: RootState) => state.ui)

  const handleClose = () => {
    dispatch(closeContactModal())
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isContactModalOpen) return null

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600">
              Have a question about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <ContactForm onSuccess={handleClose} />
        </div>
      </div>
    </div>
  )
}

export default ContactModal

