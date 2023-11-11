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
    // <div className="bg-gray-900 text-gray-200 tracking-tight">
    //   <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    //     <Header />

    //     {/* <main  className="grow">
    //       <PageIllustration />
    //       <Hero />
    //       <Features />
    //       <Zigzag />
    //       <Testimonials />
    //       <Team />
    //       <ContactUs />
    //     </main>
      
    //     <Footer /> */}
    //   </div>
    // </div>
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