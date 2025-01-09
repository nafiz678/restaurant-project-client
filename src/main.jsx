import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './provider/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider>
            <RouterProvider router={router}></RouterProvider>
            <Toaster/>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
