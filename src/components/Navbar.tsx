import { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, IconButton, Drawer } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Spa', href: '#spa' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      component={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
        AURELIA
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
                left: 0,
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

      <Button
        variant="outlined"
        href="#booking"
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
          borderColor: '#C6A25C',
          color: '#E4C88A',
          '&:hover': { borderColor: '#E4C88A', background: 'rgba(198,162,92,0.08)' },
        }}
      >
        Reserve
      </Button>

      <IconButton
        onClick={() => setOpen(true)}
        sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#F7F4EE' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, height: '100%', background: '#171613', p: 4 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: '#F7F4EE', mb: 4 }}>
            <CloseIcon />
          </IconButton>
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
              Reserve
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  )
}
