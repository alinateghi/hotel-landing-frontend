import { motion, useScroll, useSpring } from 'framer-motion'
import { Box } from '@mui/material'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 1300, transformOrigin: '0%' }}>
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          height: '100%',
          background: 'linear-gradient(90deg, #C6A25C, #E4C88A)',
        }}
      />
    </Box>
  )
}
