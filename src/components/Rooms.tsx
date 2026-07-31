import { Box, Typography, Stack, Chip } from '@mui/material'
import Reveal from './Reveal'
import images from '../assets/images'
import { useLanguage } from '../i18n/LanguageContext'

interface Room {
  name: string
  size: string
  view: string
  desc: string
}

const tones = [
  'linear-gradient(150deg, rgba(15,63,53,0.94), rgba(23,22,19,0.98))',
  'linear-gradient(150deg, rgba(198,162,92,0.5), rgba(23,22,19,0.98))',
  'linear-gradient(150deg, rgba(10,44,37,0.96), rgba(198,162,92,0.35))',
]

export default function Rooms() {
  const { t } = useLanguage()
  const rooms = t<Room[]>('rooms.items')

  return (
    <Box id="rooms" component="section" sx={{ background: '#171613', py: { xs: 12, md: 18 } }}>
      <Box sx={{ px: { xs: 3, md: 8 }, mb: { xs: 6, md: 9 } }}>
        <Reveal>
          <Typography className="eyebrow" sx={{ mb: 2 }}>{t('rooms.eyebrow')}</Typography>
        </Reveal>
        <Reveal delay={0.1}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, maxWidth: 720 }}>
            {t('rooms.title')}
          </Typography>
        </Reveal>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 2, md: 3 },
          px: { xs: 3, md: 8 },
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          pb: 3,
          '&::-webkit-scrollbar': { height: 6 },
        }}
      >
        {rooms.map((room, i) => (
          <Reveal key={room.name} delay={i * 0.12} y={50}>
            <Box
              sx={{
                position: 'relative',
                scrollSnapAlign: 'start',
                minWidth: { xs: '85vw', sm: 380, md: 440 },
                height: { xs: 460, md: 560 },
                borderRadius: '28px',
                overflow: 'hidden',
                background: tones[i % tones.length],
                border: '1px solid rgba(228,200,138,0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                p: 4,
                transition: 'transform 0.5s cubic-bezier(.16,1,.3,1)',
                '&:hover': { transform: 'translateY(-10px)' },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.16,
                  backgroundImage: `url(${i % 2 === 0 ? images.lobbyLounge : images.lobbySeating})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  mixBlendMode: 'luminosity',
                }}
              />
              <Chip
                label={room.view}
                size="small"
                sx={{
                  position: 'absolute',
                  top: 24,
                  insetInlineStart: 24,
                  background: 'rgba(23,22,19,0.55)',
                  color: '#E4C88A',
                  border: '1px solid rgba(228,200,138,0.3)',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mb: 1 }}>
                  {room.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7 }}>
                  {room.desc}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography sx={{ fontSize: '0.85rem', letterSpacing: '0.06em', color: '#E4C88A' }}>
                    {room.size}
                  </Typography>
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(247,244,238,0.4)' }} />
                  <Typography
                    component="a"
                    href="#booking"
                    sx={{ fontSize: '0.85rem', textDecoration: 'underline', textUnderlineOffset: 4, color: '#F7F4EE' }}
                  >
                    {t('rooms.cta')}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}
