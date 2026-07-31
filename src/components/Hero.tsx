import { useRef } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useScrollScene } from '../hooks/useGsap'
import images from '../assets/images'

const headline = ['A Quiet', 'Kind of', 'Luxury.']

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null!)
  const imgRef = useRef<HTMLDivElement>(null!)

  useScrollScene(rootRef, ({ gsap, ScrollTrigger }) => {
    // Parallax + slow zoom on the hero image as the visitor "walks in"
    gsap.to(imgRef.current, {
      yPercent: 18,
      scale: 1.12,
      ease: 'none',
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    // Fade + blur the whole hero as we leave it, like stepping through a doorway
    gsap.to(rootRef.current, {
      opacity: 0.15,
      filter: 'blur(6px)',
      ease: 'none',
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  return (
    <Box
      ref={rootRef}
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Box
        ref={imgRef}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(10,10,8,0.15) 0%, rgba(10,10,8,0.35) 55%, rgba(10,10,8,0.92) 100%), url(${images.lobbyWide})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* floating gold particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            borderRadius: '50%',
            background: 'rgba(228,200,138,0.6)',
            left: `${12 + i * 14}%`,
            top: `${20 + (i % 4) * 15}%`,
            filter: 'blur(0.5px)',
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', px: { xs: 3, md: 8 }, pb: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography className="eyebrow" sx={{ mb: 2 }}>
            Aurelia Hotel &amp; Residences
          </Typography>
        </motion.div>

        <Box sx={{ mb: 3 }}>
          {headline.map((word, i) => (
            <Box key={word} className="reveal-mask">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3.1rem', sm: '4.5rem', md: '6.8rem' },
                    lineHeight: 1.02,
                    color: '#F7F4EE',
                  }}
                >
                  {word}
                </Typography>
              </motion.div>
            </Box>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 300,
              color: 'rgba(247,244,238,0.78)',
              maxWidth: 480,
              mb: 5,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            Nestled between old cedar and quiet water, Aurelia is an invitation to slow down —
            where every room, every meal, every hour is composed with care.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
            <Button
              component={motion.a}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#booking"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(135deg, #E4C88A, #C6A25C)',
                color: '#171613',
                fontWeight: 600,
                boxShadow: '0 8px 40px rgba(198,162,92,0.35)',
                '&:hover': { background: 'linear-gradient(135deg, #F0DBAA, #D3AE6C)' },
              }}
            >
              Reserve Your Stay
            </Button>
            <Button
              href="#about"
              variant="text"
              size="large"
              sx={{ color: '#F7F4EE', opacity: 0.85 }}
            >
              Discover the Hotel
            </Button>
          </Stack>
        </motion.div>
      </Box>

      {/* scroll indicator */}
      <Stack
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        alignItems="center"
        spacing={1}
        sx={{ position: 'absolute', right: { xs: 24, md: 48 }, bottom: 28, zIndex: 2 }}
      >
        <Box
          component={motion.div}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            width: 1,
            height: 46,
            background: 'linear-gradient(180deg, rgba(198,162,92,0.9), rgba(198,162,92,0))',
          }}
        />
        <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.6, writingMode: 'vertical-rl' }}>
          SCROLL
        </Typography>
      </Stack>
    </Box>
  )
}
