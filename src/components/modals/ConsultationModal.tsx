import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { X } from 'lucide-react'
import { RootState } from '../../store'
import { closeConsultationModal } from '../../store/slices/uiSlice'
import ContactForm from '../forms/ContactForm'

const ConsultationModal: React.FC = () => {
  const dispatch = useDispatch()
  const { isConsultationModalOpen } = useSelector((state: RootState) => state.ui)

  const handleClose = () => {
    dispatch(closeConsultationModal())
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isConsultationModalOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={handleOverlayClick}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp scrollbar-hide">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Free Consultation</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
         

          {/* Enhanced Contact Form */}
          <ContactForm onSuccess={handleClose} />
        </div>
      </div>
    </div>
  )
}

export default ConsultationModal

