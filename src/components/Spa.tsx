import { Box, Typography, Grid, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import SpaIcon from '@mui/icons-material/SelfImprovement'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

interface Ritual {
  name: string
  time: string
}

const icons = [<SpaIcon key="spa" />, <WaterDropIcon key="water" />, <LocalFloristIcon key="flower" />]

export default function Spa() {
  const { t } = useLanguage()
  const rituals = t<Ritual[]>('spa.rituals')

  return (
    <Box
      id="spa"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(120% 100% at 20% 0%, #1C5347 0%, #0A2C25 45%, #171613 100%)',
        py: { xs: 12, md: 0 },
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14 + i * 4, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            width: { xs: 260, md: 420 },
            height: { xs: 260, md: 420 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(228,200,138,0.18), transparent 70%)',
            top: `${10 + i * 25}%`,
            insetInlineStart: `${60 + i * 8}%`,
            filter: 'blur(20px)',
          }}
        />
      ))}

      <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 8 }, width: '100%' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Reveal>
              <Typography className="eyebrow" sx={{ mb: 2 }}>{t('spa.eyebrow')}</Typography>
            </Reveal>
            <Reveal delay={0.1}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mb: 3 }}>
                {t('spa.title')}
              </Typography>
            </Reveal>
            <Reveal delay={0.2}>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: 480 }}>
                {t('spa.description')}
              </Typography>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={0}>
              {rituals.map((r, i) => (
                <Reveal key={r.name} delay={0.3 + i * 0.12} y={26}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      py: 3,
                      borderBottom: '1px solid rgba(228,200,138,0.15)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(228,200,138,0.12)',
                        color: '#E4C88A',
                        flexShrink: 0,
                      }}
                    >
                      {icons[i % icons.length]}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontSize: '1.15rem' }}>{r.name}</Typography>
                    </Box>
                    <Typography sx={{ color: '#E4C88A', fontSize: '0.9rem' }}>{r.time}</Typography>
                  </Box>
                </Reveal>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
