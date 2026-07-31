import { createTheme } from '@mui/material/styles'
import type { Language } from '../i18n/translations'

// Luxury palette
export const palette = {
  warmWhite: '#F7F4EE',
  champagne: '#E8DCC4',
  champagneDeep: '#D9C79E',
  charcoal: '#171613',
  charcoalSoft: '#24221E',
  green: '#0F3F35',
  greenDeep: '#0A2C25',
  greenSoft: '#1C5347',
  gold: '#C6A25C',
  goldLight: '#E4C88A',
}

// English uses a luxury serif (Cormorant Garamond) for headings paired with
// Inter for body copy. Persian doesn't have Latin-serif glyphs, so headings
// fall back to a heavier weight of Vazirmatn — a clean, elegant Persian
// typeface with excellent web-font support — for the same "display" feeling.
const headingFont = (lang: Language) =>
  lang === 'fa' ? '"Vazirmatn", sans-serif' : '"Cormorant Garamond", serif'
const bodyFont = (lang: Language) => (lang === 'fa' ? '"Vazirmatn", sans-serif' : '"Inter", sans-serif')

export function getTheme(direction: 'ltr' | 'rtl', lang: Language) {
  return createTheme({
    direction,
    palette: {
      mode: 'dark',
      background: {
        default: palette.charcoal,
        paper: palette.charcoalSoft,
      },
      primary: { main: palette.gold },
      secondary: { main: palette.green },
      text: {
        primary: palette.warmWhite,
        secondary: 'rgba(247,244,238,0.7)',
      },
    },
    typography: {
      fontFamily: bodyFont(lang),
      h1: { fontFamily: headingFont(lang), fontWeight: lang === 'fa' ? 700 : 500, letterSpacing: '-0.01em' },
      h2: { fontFamily: headingFont(lang), fontWeight: lang === 'fa' ? 700 : 500, letterSpacing: '-0.01em' },
      h3: { fontFamily: headingFont(lang), fontWeight: lang === 'fa' ? 700 : 500 },
      h4: { fontFamily: headingFont(lang), fontWeight: lang === 'fa' ? 700 : 500 },
      h5: { fontFamily: headingFont(lang), fontWeight: lang === 'fa' ? 700 : 500 },
      button: {
        textTransform: 'none',
        fontWeight: 500,
        letterSpacing: lang === 'fa' ? 'normal' : '0.02em',
      },
    },
    shape: { borderRadius: 18 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 100,
            padding: '14px 34px',
          },
        },
      },
    },
  })
}

export default getTheme
