import { Box, Typography, Grid, Stack, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import PinterestIcon from '@mui/icons-material/Pinterest'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

interface NavLink {
  label: string
  href: string
}

export default function Footer() {
  const { t } = useLanguage()
  const navLinks = t<NavLink[]>('nav.links')
  const hotelLinks = t<string[]>('footer.hotelLinks')

  return (
    <Box component="footer" sx={{ background: '#0A0A08', pt: { xs: 8, md: 12 }, pb: 4, px: { xs: 3, md: 8 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Reveal>
            <Typography variant="h4" sx={{ letterSpacing: '0.1em', mb: 2 }}>AURELIA</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 280, lineHeight: 1.8 }}>
              {t('footer.description')}
            </Typography>
          </Reveal>
        </Grid>

        <Grid item xs={6} md={2}>
          <Reveal delay={0.1}>
            <Typography sx={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: '#E4C88A', mb: 2 }}>{t('footer.exploreHeading')}</Typography>
            <Stack spacing={1.2}>
              {navLinks.map((l) => (
                <Typography key={l.href} component="a" href={l.href} variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#F7F4EE' } }}>
                  {l.label}
                </Typography>
              ))}
            </Stack>
          </Reveal>
        </Grid>

        <Grid item xs={6} md={2}>
          <Reveal delay={0.15}>
            <Typography sx={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: '#E4C88A', mb: 2 }}>{t('footer.hotelHeading')}</Typography>
            <Stack spacing={1.2}>
              {hotelLinks.map((l) => (
                <Typography key={l} component="a" href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#F7F4EE' } }}>
                  {l}
                </Typography>
              ))}
            </Stack>
          </Reveal>
        </Grid>

        <Grid item xs={12} md={4}>
          <Reveal delay={0.2}>
            <Typography sx={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: '#E4C88A', mb: 2 }}>{t('footer.connectedHeading')}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>{t('footer.email')}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, direction: 'ltr', textAlign: 'match-parent' }}>{t('footer.phone')}</Typography>
            <Stack direction="row" spacing={1}>
              {[InstagramIcon, FacebookIcon, PinterestIcon].map((Icon, i) => (
                <IconButton key={i} size="small" sx={{ border: '1px solid rgba(228,200,138,0.25)', color: '#E4C88A' }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Reveal>
        </Grid>
      </Grid>

      <Box sx={{ mt: { xs: 8, md: 10 }, pt: 3, borderTop: '1px solid rgba(228,200,138,0.1)', display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ color: 'rgba(247,244,238,0.4)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} AURELIA — {t('footer.rights')}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Typography variant="body2" component="a" href="#" sx={{ color: 'rgba(247,244,238,0.4)', fontSize: '0.82rem', textDecoration: 'none' }}>{t('footer.privacy')}</Typography>
          <Typography variant="body2" component="a" href="#" sx={{ color: 'rgba(247,244,238,0.4)', fontSize: '0.82rem', textDecoration: 'none' }}>{t('footer.terms')}</Typography>
        </Stack>
      </Box>
    </Box>
  )
}
