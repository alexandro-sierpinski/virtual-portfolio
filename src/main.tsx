import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { ThemeProvider } from './Context/Theme/Theme.tsx'
import { FunctionsProvider } from './Context/Functions/Functions.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FunctionsProvider>
      <ThemeProvider>        
        <App />
      </ThemeProvider>
    </FunctionsProvider>
  </React.StrictMode>
)
