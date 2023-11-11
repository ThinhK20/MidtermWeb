
import Navbar from './Header/Navbar'
import Hero from './NewUI/Hero'
import Features from './NewUI/Features'

import '/src/shared/css/LandingPage.css'

import Features2 from './NewUI/Features2'
import Features1 from './NewUI/Features1'
import About from './NewUI/About'
import Package from './NewUI/Package'
import Testimonial from './NewUI/Testimonial'
import Footer from './Footer/footer'


function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Features1 />
      <Features2 />
      <About />
      <Package />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default LandingPage