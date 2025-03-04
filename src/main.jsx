import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
