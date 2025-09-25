import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextPage from './pages/context/Contextpage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextPage/>
  </StrictMode>
)
