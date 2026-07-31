import { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, IconButton, Drawer, ButtonBase } from '@mui/material'
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useLanguage } from '../i18n/LanguageContext'

interface NavLink {
  label: string
  href: string
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()
  const links = t<NavLink[]>('nav.links')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LanguageSwitch = () => (
    <Stack
      direction="row"
      sx={{
        border: '1px solid rgba(228,200,138,0.3)',
        borderRadius: 100,
        p: 0.4,
        gap: 0.4,
      }}
    >
      {(['en', 'fa'] as const).map((code) => (
        <ButtonBase
          key={code}
          onClick={() => setLanguage(code)}
          sx={{
            px: 1.6,
            py: 0.4,
            borderRadius: 100,
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            color: language === code ? '#171613' : '#E4C88A',
            background: language === code ? 'linear-gradient(135deg, #E4C88A, #C6A25C)' : 'transparent',
            transition: 'all 0.3s ease',
          }}
        >
          {code === 'en' ? 'EN' : 'فا'}
        </ButtonBase>
      ))}
    </Stack>
  )

  return (
    <Box
      component={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      sx={{
        position: 'fixed',
        top: 0,
        insetInline: 0,
        zIndex: 1200,
        px: { xs: 3, md: 6 },
        py: scrolled ? 1.6 : 2.8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.5s cubic-bezier(.16,1,.3,1)',
        background: scrolled ? 'rgba(23,22,19,0.55)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(198,162,92,0.15)' : '1px solid transparent',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          letterSpacing: '0.12em',
          fontSize: { xs: '1.3rem', md: '1.5rem' },
        }}
      >
        {t('brand.wordmark')}
      </Typography>

      <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {links.map((l) => (
          <Typography
            key={l.href}
            component="a"
            href={l.href}
            variant="body2"
            sx={{
              textDecoration: 'none',
              opacity: 0.85,
              letterSpacing: '0.04em',
              position: 'relative',
              '&:hover': { opacity: 1 },
              '&:hover::after': { width: '100%' },
              '&::after': {
                content: '""',
                position: 'absolute',
                insetInlineStart: 0,
                bottom: -4,
                height: '1px',
                width: 0,
                background: '#C6A25C',
                transition: 'width 0.35s ease',
              },
            }}
          >
            {l.label}
          </Typography>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
        <LanguageSwitch />
        <Button
          variant="outlined"
          href="#booking"
          sx={{
            borderColor: '#C6A25C',
            color: '#E4C88A',
            '&:hover': { borderColor: '#E4C88A', background: 'rgba(198,162,92,0.08)' },
          }}
        >
          {t('nav.reserve')}
        </Button>
      </Stack>

      <IconButton
        onClick={() => setOpen(true)}
        sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#F7F4EE' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor={language === 'fa' ? 'left' : 'right'} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, height: '100%', background: '#171613', p: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <IconButton onClick={() => setOpen(false)} sx={{ color: '#F7F4EE' }}>
              <CloseIcon />
            </IconButton>
            <LanguageSwitch />
          </Stack>
          <Stack spacing={3}>
            {links.map((l) => (
              <Typography
                key={l.href}
                component="a"
                href={l.href}
                variant="h5"
                onClick={() => setOpen(false)}
                sx={{ textDecoration: 'none', color: '#F7F4EE' }}
              >
                {l.label}
              </Typography>
            ))}
            <Button
              variant="contained"
              href="#booking"
              onClick={() => setOpen(false)}
              sx={{ background: '#C6A25C', color: '#171613', mt: 2 }}
            >
              {t('nav.reserve')}
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  )
}
