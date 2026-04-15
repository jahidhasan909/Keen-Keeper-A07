import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import route from './routes/route.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer />
    </ContextProvider>

  </StrictMode>,
)
