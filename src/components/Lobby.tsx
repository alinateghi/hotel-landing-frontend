import { useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useScrollScene } from '../hooks/useGsap'
import images from '../assets/images'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

interface Waypoint {
  caption: string
}

// The three photographs the "walk" passes on either side, then the
// reception desk, which the visitor arrives at head-on.
const waypointImages = [images.lobbySeating, images.lobbyLounge, images.lobbyWide]
const arrivalImage = images.lobbyReceptionWide

export default function Lobby() {
  const rootRef = useRef<HTMLElement>(null!)
  const planeRefs = useRef<(HTMLDivElement | null)[]>([])
  const captionRefs = useRef<(HTMLDivElement | null)[]>([])
  const arrivalRef = useRef<HTMLDivElement>(null!)
  const arrivalCaptionRef = useRef<HTMLDivElement>(null!)

  const { t } = useLanguage()
  const waypoints = t<Waypoint[]>('lobby.waypoints')

  useScrollScene(rootRef, ({ gsap }) => {
    const planes = planeRefs.current.filter(Boolean) as HTMLDivElement[]
    const captions = captionRefs.current.filter(Boolean) as HTMLDivElement[]
    const n = planes.length
    const perStep = 1

    // Base centering (constant) + starting depth-of-field state: far away,
    // small, blurred, and off to alternating sides — like pieces of the
    // room only just becoming visible ahead as you walk.
    planes.forEach((plane, i) => {
      const side = i % 2 === 0 ? -1 : 1
      gsap.set(plane, {
        xPercent: -50,
        yPercent: -50,
        z: -1800,
        x: side * 460,
        rotateY: side * -38,
        scale: 0.42,
        opacity: 0,
        filter: 'blur(12px)',
      })
    })
    gsap.set(captions, { autoAlpha: 0, y: 22 })
    gsap.set(arrivalRef.current, { scale: 1.4, opacity: 0, filter: 'blur(16px)' })
    gsap.set(arrivalCaptionRef.current, { autoAlpha: 0, y: 22 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: `+=${(n + 1) * 100}%`,
        scrub: 0.7,
        pin: true,
      },
    })

    planes.forEach((plane, i) => {
      const side = i % 2 === 0 ? -1 : 1
      const start = i * perStep

      // Approach: the piece of the lobby drifts into focus alongside the
      // walking path — larger, sharper, closer to camera.
      tl.to(
        plane,
        {
          z: -60,
          x: side * 70,
          rotateY: side * -10,
          scale: 1.08,
          opacity: 1,
          filter: 'blur(0px)',
          duration: perStep * 0.42,
          ease: 'power2.out',
        },
        start,
      )
      tl.to(captions[i], { autoAlpha: 1, y: 0, duration: perStep * 0.22 }, start + perStep * 0.16)
      tl.to(captions[i], { autoAlpha: 0, y: -18, duration: perStep * 0.2 }, start + perStep * 0.6)

      // Pass by: swings past the camera and recedes behind, like turning
      // your head as you keep walking forward.
      tl.to(
        plane,
        {
          z: 520,
          x: side * -300,
          rotateY: side * 50,
          scale: 1.7,
          opacity: 0,
          filter: 'blur(10px)',
          duration: perStep * 0.5,
          ease: 'power1.in',
        },
        start + perStep * 0.5,
      )
    })

    // Arrival: the reception desk resolves dead ahead and holds — the
    // destination of the walk.
    const arrivalStart = n * perStep
    tl.to(
      arrivalRef.current,
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: perStep * 0.65, ease: 'power2.out' },
      arrivalStart,
    )
    tl.to(
      arrivalCaptionRef.current,
      { autoAlpha: 1, y: 0, duration: perStep * 0.3 },
      arrivalStart + perStep * 0.4,
    )
  }, [waypoints.length])

  return (
    <Box
      ref={rootRef}
      id="lobby"
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: '#050403',
        perspective: { xs: '900px', md: '1600px' },
        perspectiveOrigin: '50% 45%',
      }}
    >
      {/* ambient drifting light for depth */}
      {[...Array(4)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          sx={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            top: `${10 + i * 20}%`,
            left: `${20 + i * 18}%`,
            background: 'radial-gradient(circle, rgba(228,200,138,0.16), transparent 70%)',
            filter: 'blur(30px)',
            zIndex: 0,
          }}
        />
      ))}

      {/* the 3D scene: a shared perspective space the planes move through */}
      <Box sx={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', zIndex: 1 }}>
        {waypointImages.map((src, i) => (
          <Box
            key={src + i}
            ref={(el: HTMLDivElement | null) => (planeRefs.current[i] = el)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: { xs: 260, sm: 340, md: 440 },
              height: { xs: 340, sm: 440, md: 560 },
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow: '0 50px 120px rgba(0,0,0,0.65)',
              willChange: 'transform, filter, opacity',
              transformStyle: 'preserve-3d',
            }}
          >
            <Box
              component="img"
              src={src}
              alt=""
              loading="lazy"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,4,3,0.05), rgba(5,4,3,0.5))' }} />
          </Box>
        ))}

        {/* arrival plane: full-bleed reception backdrop */}
        <Box
          ref={arrivalRef}
          sx={{
            position: 'absolute',
            inset: 0,
            willChange: 'transform, filter, opacity',
          }}
        >
          <Box
            component="img"
            src={arrivalImage}
            alt=""
            loading="lazy"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,4,3,0.15), rgba(5,4,3,0.82) 100%)' }} />
        </Box>
      </Box>

      {/* section heading */}
      <Box sx={{ position: 'absolute', top: { xs: 100, md: 64 }, left: { xs: 24, md: 64 }, zIndex: 3 }}>
        <Reveal>
          <Typography className="eyebrow">{t('lobby.eyebrow')}</Typography>
        </Reveal>
        <Reveal delay={0.1}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mt: 1, maxWidth: 560 }}>
            {t('lobby.title')}
          </Typography>
        </Reveal>
      </Box>

      {/* per-waypoint captions */}
      {waypoints.map((wp, i) => (
        <Box
          key={i}
          ref={(el: HTMLDivElement | null) => (captionRefs.current[i] = el)}
          sx={{ position: 'absolute', left: { xs: 24, md: 64 }, right: { xs: 24, md: 64 }, bottom: { xs: 56, md: 76 }, zIndex: 3 }}
        >
          <Typography variant="h5" sx={{ fontStyle: 'italic', maxWidth: 560, fontSize: { xs: '1.25rem', md: '1.6rem' } }}>
            {wp.caption}
          </Typography>
        </Box>
      ))}

      {/* arrival caption */}
      <Box
        ref={arrivalCaptionRef}
        sx={{ position: 'absolute', left: 0, right: 0, bottom: { xs: 64, md: 88 }, textAlign: 'center', zIndex: 3, px: 3 }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
          {t('lobby.arrival')}
        </Typography>
      </Box>
    </Box>
  )
}
