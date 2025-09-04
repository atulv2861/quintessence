import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './slices/uiSlice'
import contactSlice from './slices/contactSlice'

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    contact: contactSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
