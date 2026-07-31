import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import translations, { type Language } from './translations'

type Dict = Record<string, unknown>

function getPath(obj: Dict, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Dict)) {
      return (acc as Dict)[key]
    }
    return undefined
  }, obj)
}

interface LanguageContextValue {
  language: Language
  dir: 'ltr' | 'rtl'
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  /** Returns a string, array, or object at the given dot-path for the active language. */
  t: <T = string>(path: string) => T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'aurelia-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'fa' || saved === 'en' ? saved : 'en'
  })

  const dir: 'ltr' | 'rtl' = language === 'fa' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    document.documentElement.setAttribute('dir', dir)
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language, dir])

  const setLanguage = (lang: Language) => setLanguageState(lang)
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'en' ? 'fa' : 'en'))

  const t = useMemo(() => {
    return <T,>(path: string): T => {
      const dict = translations[language] as Dict
      const value = getPath(dict, path)
      return (value ?? path) as T
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  const value = useMemo(
    () => ({ language, dir, setLanguage, toggleLanguage, t }),
    [language, dir, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
