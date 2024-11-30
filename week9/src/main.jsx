import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseEffect from './UseEffect.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <UseEffect/>
  </>,
)
