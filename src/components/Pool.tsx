import { useRef } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useScrollScene } from '../hooks/useGsap'
import Reveal from './Reveal'

export default function Pool() {
  const rootRef = useRef<HTMLElement>(null!)
  const textRef = useRef<HTMLDivElement>(null!)

  useScrollScene(rootRef, ({ gsap }) => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.9, opacity: 0.6 },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top bottom', end: 'center center', scrub: true },
      },
    )
  })

  return (
    <Box
      ref={rootRef}
      id="pool"
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(180deg, #0A2C25 0%, #0F3F35 35%, #0B2C26 70%, #171613 100%)',
      }}
    >
      {/* animated caustic-light shimmer bands, evoking sunlight on water */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{ x: ['-10%', '10%', '-10%'], opacity: [0.05, 0.18, 0.05] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
          sx={{
            position: 'absolute',
            top: `${i * 18}%`,
            left: 0,
            width: '140%',
            height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(228,200,138,0.5), transparent)',
            transform: `rotate(${-8 + i * 2}deg)`,
          }}
        />
      ))}

      <Box ref={textRef} sx={{ position: 'relative', zIndex: 1, textAlign: 'center', px: 3 }}>
        <Reveal>
          <Typography className="eyebrow" sx={{ mb: 2 }}>Swimming Pool</Typography>
        </Reveal>
        <Reveal delay={0.1}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2.6rem', sm: '4rem', md: '5.4rem' }, mb: 3, maxWidth: 900 }}
          >
            Float, beneath open sky.
          </Typography>
        </Reveal>
        <Reveal delay={0.2}>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto', mb: 5, fontSize: '1.05rem', lineHeight: 1.85 }}
          >
            A 25-metre infinity pool traces the tree line, warmed year-round, with a submerged
            lounge deck and private cabanas for slow afternoons.
          </Typography>
        </Reveal>
        <Reveal delay={0.3}>
          <Button
            href="#amenities"
            variant="outlined"
            size="large"
            sx={{ borderColor: 'rgba(228,200,138,0.5)', color: '#E4C88A', '&:hover': { borderColor: '#E4C88A' } }}
          >
            Explore Facilities
          </Button>
        </Reveal>
      </Box>
    </Box>
  )
}
