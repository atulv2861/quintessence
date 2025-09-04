import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isMobileMenuOpen: boolean
  isConsultationModalOpen: boolean
  isContactModalOpen: boolean
  isLoading: boolean
  activeSection: string
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  isConsultationModalOpen: false,
  isContactModalOpen: false,
  isLoading: false,
  activeSection: 'home',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false
    },
    openConsultationModal: (state) => {
      state.isConsultationModalOpen = true
    },
    closeConsultationModal: (state) => {
      state.isConsultationModalOpen = false
    },
    openContactModal: (state) => {
      state.isContactModalOpen = true
    },
    closeContactModal: (state) => {
      state.isContactModalOpen = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
  },
})

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openConsultationModal,
  closeConsultationModal,
  openContactModal,
  closeContactModal,
  setLoading,
  setActiveSection,
} = uiSlice.actions

export default uiSlice.reducer
