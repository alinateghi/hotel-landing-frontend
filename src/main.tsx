import React from 'react'
import ReactDOM from 'react-dom/client'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { createEmotionCache } from './theme/createEmotionCache'
import getTheme from './theme/theme'
import App from './App'
import './index.css'

const ltrCache = createEmotionCache('ltr')
const rtlCache = createEmotionCache('rtl')

function ThemedApp() {
  const { dir, language } = useLanguage()
  const cache = dir === 'rtl' ? rtlCache : ltrCache
  const theme = getTheme(dir, language)

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemedApp />
    </LanguageProvider>
  </React.StrictMode>,
)
