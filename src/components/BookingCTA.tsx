import { Box, Typography, Button, Grid, TextField, MenuItem } from '@mui/material'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import images from '../assets/images'

export default function BookingCTA() {
  return (
    <Box
      id="booking"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 8 },
        overflow: 'hidden',
        background: `linear-gradient(180deg, rgba(23,22,19,0.96), rgba(10,44,37,0.94)), url(${images.lobbyLounge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Reveal>
            <Typography className="eyebrow" sx={{ mb: 2 }}>Your Stay Awaits</Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '4rem' }, mb: 3 }}>
              Begin your journey at Aurelia.
            </Typography>
          </Reveal>
          <Reveal delay={0.2}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 460, fontSize: '1.05rem', lineHeight: 1.85 }}>
              Complimentary breakfast, early check-in, and a welcome ritual await every direct
              reservation — available exclusively through our own front desk.
            </Typography>
          </Reveal>
        </Grid>

        <Grid item xs={12} md={6}>
          <Reveal delay={0.2} y={30}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: 'rgba(23,22,19,0.55)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(228,200,138,0.25)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Check-in"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Check-out"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField select label="Guests" defaultValue="2" fullWidth variant="filled" size="small">
                    {[1, 2, 3, 4].map((n) => (
                      <MenuItem key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    fullWidth
                    size="large"
                    variant="contained"
                    sx={{
                      py: 1.8,
                      background: 'linear-gradient(135deg, #E4C88A, #C6A25C)',
                      color: '#171613',
                      fontWeight: 600,
                      fontSize: '1rem',
                      boxShadow: '0 10px 40px rgba(198,162,92,0.4)',
                      '&:hover': { background: 'linear-gradient(135deg, #F0DBAA, #D3AE6C)' },
                    }}
                  >
                    Check Availability
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  )
}
