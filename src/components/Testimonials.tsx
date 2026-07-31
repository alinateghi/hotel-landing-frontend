import { Box, Typography, Grid, Rating } from '@mui/material'
import Reveal from './Reveal'

const reviews = [
  {
    quote: 'The kind of hotel you remember years later — not because it tried hard, but because it never had to.',
    name: 'Isabelle M.',
    trip: 'Anniversary Stay',
  },
  {
    quote: 'From the lobby ceiling to the last cup of coffee, every detail felt considered. Genuinely restorative.',
    name: 'Daniel K.',
    trip: 'Solo Retreat',
  },
  {
    quote: 'Quiet luxury, done properly. The spa alone is worth the trip back.',
    name: 'Amara T.',
    trip: 'Wellness Weekend',
  },
]

export default function Testimonials() {
  return (
    <Box id="reviews" component="section" sx={{ background: '#171613', py: { xs: 12, md: 18 }, px: { xs: 3, md: 8 } }}>
      <Reveal>
        <Typography className="eyebrow" sx={{ mb: 2 }}>Guest Reviews</Typography>
      </Reveal>
      <Reveal delay={0.1}>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, mb: { xs: 6, md: 9 }, maxWidth: 720 }}>
          Told, in their own words.
        </Typography>
      </Reveal>

      <Grid container spacing={4}>
        {reviews.map((r, i) => (
          <Grid item xs={12} md={4} key={r.name}>
            <Reveal delay={i * 0.12} y={30}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '20px',
                  height: '100%',
                  border: '1px solid rgba(228,200,138,0.14)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <Rating value={5} readOnly size="small" sx={{ color: '#C6A25C', mb: 2.5 }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.8, mb: 3, color: '#F7F4EE' }}>
                  “{r.quote}”
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>{r.name}</Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary' }}>{r.trip}</Typography>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
