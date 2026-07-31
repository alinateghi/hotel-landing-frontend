import { useRef } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useScrollScene } from '../hooks/useGsap'
import Reveal from './Reveal'
import images from '../assets/images'
import { useLanguage } from '../i18n/LanguageContext'

interface Dish {
  name: string
  note: string
}

export default function Restaurant() {
  const rootRef = useRef<HTMLElement>(null!)
  const imgRef = useRef<HTMLDivElement>(null!)
  const { t } = useLanguage()
  const dishes = t<Dish[]>('restaurant.dishes')

  useScrollScene(rootRef, ({ gsap }) => {
    gsap.fromTo(
      imgRef.current,
      { yPercent: -12 },
      {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    )
  })

  return (
    <Box
      ref={rootRef}
      id="restaurant"
      component="section"
      sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#0F0E0C', py: { xs: 12, md: 0 }, display: 'flex', alignItems: 'center' }}
    >
      <Box
        ref={imgRef}
        sx={{
          position: 'absolute',
          inset: '-8% 0',
          backgroundImage: `linear-gradient(90deg, rgba(15,14,12,0.97) 15%, rgba(15,14,12,0.55) 60%, rgba(15,14,12,0.15) 100%), url(${images.lobbyReceptionDesk})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.9) brightness(0.85)',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 8 }, width: '100%' }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Reveal>
              <Typography className="eyebrow" sx={{ mb: 2 }}>{t('restaurant.eyebrow')}</Typography>
            </Reveal>
            <Reveal delay={0.1}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mb: 3 }}>
                {t('restaurant.title')}
              </Typography>
            </Reveal>
            <Reveal delay={0.2}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.05rem', lineHeight: 1.85, maxWidth: 460 }}>
                {t('restaurant.description')}
              </Typography>
            </Reveal>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {dishes.map((d, i) => (
                <Reveal key={d.name} delay={0.3 + i * 0.1} y={20}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, borderBottom: '1px solid rgba(228,200,138,0.15)', pb: 2 }}>
                    <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>{d.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'end', maxWidth: 220 }}>
                      {d.note}
                    </Typography>
                  </Box>
                </Reveal>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
