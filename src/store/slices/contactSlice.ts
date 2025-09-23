import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactFormData {
  name: string
  email: string
  phone: string
  address: string
  subject: string
  message: string
  files?: File[]
}

interface ContactState {
  formData: ContactFormData
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  errorMessage: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  subject: '',
  message: '',
  files: [],
}

const initialState: ContactState = {
  formData: initialFormData,
  isSubmitting: false,
  submitStatus: 'idle',
  errorMessage: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormField: (state, action: PayloadAction<{ field: Exclude<keyof ContactFormData, 'files'>; value: string }>) => {
      state.formData[action.payload.field] = action.payload.value
    },
    updateFiles: (state, action: PayloadAction<File[]>) => {
      state.formData.files = action.payload
    },
    removeFile: (state, action: PayloadAction<number>) => {
      if (state.formData.files) {
        state.formData.files.splice(action.payload, 1)
      }
    },
    resetForm: (state) => {
      state.formData = initialFormData
      state.submitStatus = 'idle'
      state.errorMessage = ''
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload
    },
    setSubmitStatus: (state, action: PayloadAction<'idle' | 'success' | 'error'>) => {
      state.submitStatus = action.payload
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
  },
})

export const {
  updateFormField,
  updateFiles,
  removeFile,
  resetForm,
  setSubmitting,
  setSubmitStatus,
  setErrorMessage,
} = contactSlice.actions

export default contactSlice.reducer

