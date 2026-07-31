import { useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { useScrollScene } from '../hooks/useGsap'
import images from '../assets/images'
import Reveal from './Reveal'

const frames = [
  {
    src: images.lobbySeating,
    caption: 'Sculpted timber overhead, like walking beneath a canopy of light.',
  },
  {
    src: images.lobbyLounge,
    caption: 'Emerald velvet and warm brass invite you to sit a while longer.',
  },
  {
    src: images.lobbyWide,
    caption: 'A living room for the city — quiet, generous, unhurried.',
  },
]

export default function Lobby() {
  const rootRef = useRef<HTMLElement>(null!)
  const frameRefs = useRef<(HTMLDivElement | null)[]>([])
  const capRefs = useRef<(HTMLDivElement | null)[]>([])

  useScrollScene(rootRef, ({ gsap, ScrollTrigger }) => {
    const panels = frameRefs.current.filter(Boolean) as HTMLDivElement[]
    const caps = capRefs.current.filter(Boolean) as HTMLDivElement[]

    gsap.set(panels.slice(1), { autoAlpha: 0, scale: 1.06 })
    gsap.set(caps.slice(1), { autoAlpha: 0, y: 24 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: `+=${panels.length * 100}%`,
        scrub: 0.6,
        pin: true,
      },
    })

    panels.forEach((panel, i) => {
      if (i === 0) return
      tl.to(panels[i - 1], { autoAlpha: 0, scale: 0.96, duration: 0.5 }, i - 0.5)
      tl.to(caps[i - 1], { autoAlpha: 0, y: -24, duration: 0.4 }, i - 0.5)
      tl.fromTo(panel, { autoAlpha: 0, scale: 1.06 }, { autoAlpha: 1, scale: 1, duration: 0.6 }, i - 0.5)
      tl.fromTo(caps[i], { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5 }, i - 0.2)
    })
  }, [])

  return (
    <Box
      ref={rootRef}
      id="lobby"
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: '#0A0A08',
      }}
    >
      {frames.map((frame, i) => (
        <Box
          key={frame.src}
          ref={(el: HTMLDivElement | null) => (frameRefs.current[i] = el)}
          sx={{ position: 'absolute', inset: 0 }}
        >
          <Box
            component="img"
            src={frame.src}
            alt="Aurelia lobby lounge"
            loading="lazy"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,8,0.15), rgba(10,10,8,0.75) 100%)' }} />
        </Box>
      ))}

      <Box sx={{ position: 'absolute', top: { xs: 100, md: 64 }, left: { xs: 24, md: 64 }, zIndex: 2 }}>
        <Reveal>
          <Typography className="eyebrow">Step Inside</Typography>
        </Reveal>
        <Reveal delay={0.1}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mt: 1, maxWidth: 560 }}>
            The Lobby
          </Typography>
        </Reveal>
      </Box>

      <Box sx={{ position: 'absolute', left: { xs: 24, md: 64 }, right: { xs: 24, md: 64 }, bottom: { xs: 48, md: 64 }, zIndex: 2 }}>
        {frames.map((frame, i) => (
          <Box
            key={frame.src}
            ref={(el: HTMLDivElement | null) => (capRefs.current[i] = el)}
            sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontStyle: 'italic',
                maxWidth: 560,
                color: '#F7F4EE',
                fontSize: { xs: '1.3rem', md: '1.7rem' },
              }}
            >
              {frame.caption}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* progress dots */}
      <Box sx={{ position: 'absolute', right: { xs: 24, md: 64 }, top: '50%', transform: 'translateY(-50%)', zIndex: 2, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1.5 }}>
        {frames.map((f) => (
          <Box key={f.src} sx={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(228,200,138,0.5)' }} />
        ))}
      </Box>
    </Box>
  )
}
