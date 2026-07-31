import { useState } from 'react'
import { Box, Typography, Modal, IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Reveal from './Reveal'
import images from '../assets/images'
import { useLanguage } from '../i18n/LanguageContext'

const sources = [images.lobbyWide, images.lobbyReceptionDesk, images.lobbySeating, images.lobbyLounge, images.lobbyReceptionWide]
const spans = [2, 1, 1, 1, 2]

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const { t } = useLanguage()
  const alts = t<string[]>('gallery.alts')
  const photos = sources.map((src, i) => ({ src, alt: alts[i], span: spans[i] }))

  const close = () => setIndex(null)
  const prev = () => setIndex((i) => (i === null ? null : (i + photos.length - 1) % photos.length))
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % photos.length))

  return (
    <Box id="gallery" component="section" sx={{ background: '#0F0E0C', py: { xs: 12, md: 18 }, px: { xs: 3, md: 8 } }}>
      <Reveal>
        <Typography className="eyebrow" sx={{ mb: 2 }}>{t('gallery.eyebrow')}</Typography>
      </Reveal>
      <Reveal delay={0.1}>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mb: { xs: 6, md: 9 }, maxWidth: 720 }}>
          {t('gallery.title')}
        </Typography>
      </Reveal>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gridAutoRows: { xs: 240, md: 300 },
          gap: 2,
        }}
      >
        {photos.map((p, i) => (
          <Reveal key={p.src + i} delay={i * 0.08} y={30} className="reveal-mask">
            <Box
              onClick={() => setIndex(i)}
              sx={{
                position: 'relative',
                height: '100%',
                gridColumn: { sm: p.span === 2 ? 'span 2' : 'span 1' },
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover img': { transform: 'scale(1.08)' },
                '&:hover .overlay': { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src={p.src}
                alt={p.alt}
                loading="lazy"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(.16,1,.3,1)' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(10,10,8,0.55), transparent 60%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 2.5,
                }}
              >
                <Typography sx={{ fontSize: '0.85rem', color: '#F7F4EE' }}>{t('gallery.view')}</Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>

      <Modal open={index !== null} onClose={close} closeAfterTransition sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          {index !== null && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', maxWidth: '90vw', maxHeight: '86vh' }}
            >
              <Box
                component="img"
                src={photos[index].src}
                alt={photos[index].alt}
                sx={{ maxWidth: '90vw', maxHeight: '86vh', borderRadius: '14px', display: 'block' }}
              />
              <IconButton onClick={close} sx={{ position: 'absolute', top: -48, insetInlineEnd: 0, color: '#F7F4EE' }}>
                <CloseIcon />
              </IconButton>
              <IconButton onClick={prev} sx={{ position: 'absolute', insetInlineStart: -60, top: '50%', transform: 'translateY(-50%)', color: '#F7F4EE', display: { xs: 'none', md: 'flex' } }}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton onClick={next} sx={{ position: 'absolute', insetInlineEnd: -60, top: '50%', transform: 'translateY(-50%)', color: '#F7F4EE', display: { xs: 'none', md: 'flex' } }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  )
}
