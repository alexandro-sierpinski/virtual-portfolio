import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { ThemeProvider } from './Context/Theme/Theme.tsx'
import { TranslateProvider } from './Context/Languages/Translate.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TranslateProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TranslateProvider>
  </React.StrictMode>
)
