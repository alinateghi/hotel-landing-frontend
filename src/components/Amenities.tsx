import { Box, Typography, Grid } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCarFilled'
import WifiIcon from '@mui/icons-material/Wifi'
import PetsIcon from '@mui/icons-material/Pets'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

interface Amenity {
  title: string
  desc: string
}

const icons = [
  <FitnessCenterIcon key="fitness" />,
  <LocalBarIcon key="bar" />,
  <RoomServiceIcon key="service" />,
  <DirectionsCarIcon key="car" />,
  <WifiIcon key="wifi" />,
  <PetsIcon key="pets" />,
]

export default function Amenities() {
  const { t } = useLanguage()
  const items = t<Amenity[]>('amenities.items')

  return (
    <Box id="amenities" component="section" sx={{ background: '#171613', py: { xs: 12, md: 18 }, px: { xs: 3, md: 8 } }}>
      <Reveal>
        <Typography className="eyebrow" sx={{ mb: 2 }}>{t('amenities.eyebrow')}</Typography>
      </Reveal>
      <Reveal delay={0.1}>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mb: { xs: 6, md: 9 }, maxWidth: 720 }}>
          {t('amenities.title')}
        </Typography>
      </Reveal>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {items.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Reveal delay={i * 0.08} y={30}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '20px',
                  border: '1px solid rgba(228,200,138,0.14)',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: 'rgba(228,200,138,0.4)',
                    transform: 'translateY(-6px)',
                    background: 'linear-gradient(160deg, rgba(228,200,138,0.08), rgba(255,255,255,0))',
                  },
                }}
              >
                <Box sx={{ color: '#E4C88A', mb: 2.5, fontSize: '1.8rem', display: 'flex' }}>{icons[i % icons.length]}</Box>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 1 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.desc}</Typography>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
