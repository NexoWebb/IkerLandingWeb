import './App.css'
import { StickyNavbar } from './components/Navbar'
import { HeroCarousel } from './components/HeroCarousel'
import { BeforeAfter } from './components/BeforeAfter'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen">
      <StickyNavbar />
      <main>
        <HeroCarousel />
        <BeforeAfter />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
