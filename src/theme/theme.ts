import { createTheme } from '@mui/material/styles'

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

const theme = createTheme({
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
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.02em',
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

export default theme
