import { Box, Typography, Button, Grid, TextField, MenuItem } from '@mui/material'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import images from '../assets/images'
import { useLanguage } from '../i18n/LanguageContext'

export default function BookingCTA() {
  const { t } = useLanguage()

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
            <Typography className="eyebrow" sx={{ mb: 2 }}>{t('booking.eyebrow')}</Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '4rem' }, mb: 3 }}>
              {t('booking.title')}
            </Typography>
          </Reveal>
          <Reveal delay={0.2}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 460, fontSize: '1.05rem', lineHeight: 1.85 }}>
              {t('booking.description')}
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
                    label={t('booking.checkIn')}
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label={t('booking.checkOut')}
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField select label={t('booking.guests')} defaultValue="2" fullWidth variant="filled" size="small">
                    {[1, 2, 3, 4].map((n) => (
                      <MenuItem key={n} value={n}>
                        {n} {n > 1 ? t('booking.guestLabelPlural') : t('booking.guestLabel')}
                      </MenuItem>
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
                    {t('booking.submit')}
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
