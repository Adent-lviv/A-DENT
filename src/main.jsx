
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
