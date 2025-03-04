import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './burgerbutton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
