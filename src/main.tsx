import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FistStepsApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
  </StrictMode>,
)
