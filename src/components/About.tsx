import { Box, Grid, Typography, Stack } from '@mui/material'
import Reveal from './Reveal'
import images from '../assets/images'

const stats = [
  { value: '48', label: 'Suites & Residences' },
  { value: '1', label: 'Michelin-noted Table' },
  { value: '120', label: 'Years of Craft' },
]

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: 'relative',
        background: '#171613',
        py: { xs: 12, md: 20 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Reveal>
            <Typography className="eyebrow" sx={{ mb: 2 }}>The Philosophy</Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.4rem' }, mb: 4, lineHeight: 1.1 }}>
              Designed for those who notice the details.
            </Typography>
          </Reveal>
          <Reveal delay={0.2}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.05rem', lineHeight: 1.85, maxWidth: 520 }}>
              Aurelia was conceived as a slow architectural gesture — sculpted timber ceilings
              that ripple like water, hand-finished plaster walls lit from within, and a palette
              of deep emerald and warm gold drawn from the forest just beyond our windows.
            </Typography>
          </Reveal>
          <Reveal delay={0.3}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.05rem', lineHeight: 1.85, maxWidth: 520 }}>
              Every space was designed as part of a single, continuous journey — one that
              begins the moment you step through our doors, and lingers long after you leave.
            </Typography>
          </Reveal>

          <Stack direction="row" spacing={{ xs: 4, md: 6 }}>
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.35 + i * 0.1} y={20}>
                <Box>
                  <Typography variant="h3" sx={{ color: '#E4C88A', fontSize: { xs: '2rem', md: '2.6rem' } }}>
                    {s.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 110 }}>
                    {s.label}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Reveal delay={0.15} y={60}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                height: { xs: 380, md: 560 },
                boxShadow: '0 40px 90px rgba(0,0,0,0.55)',
              }}
            >
              <Box
                component="img"
                src={images.lobbyReceptionWide}
                alt="Aurelia reception hall with sculptural timber ceiling"
                loading="lazy"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(15,63,53,0.35), transparent 50%)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: 24,
                  bottom: 24,
                  px: 2.5,
                  py: 1.5,
                  borderRadius: '16px',
                  background: 'rgba(23,22,19,0.55)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(228,200,138,0.25)',
                }}
              >
                <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: '#E4C88A' }}>
                  Est. 1904 · Reimagined 2024
                </Typography>
              </Box>
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  )
}
