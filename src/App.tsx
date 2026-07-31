import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Lobby from './components/Lobby'
import Rooms from './components/Rooms'
import Restaurant from './components/Restaurant'
import Spa from './components/Spa'
import Pool from './components/Pool'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

function App() {
  return (
    <Box sx={{ position: 'relative', background: '#171613' }}>
      <div className="grain" />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Lobby />
      <Rooms />
      <Restaurant />
      <Spa />
      <Pool />
      <Amenities />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </Box>
  )
}

export default App
