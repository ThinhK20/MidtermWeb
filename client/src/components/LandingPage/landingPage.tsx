import Header from "./Header/header"
import PageIllustration from "./Ui/page-illustration"
import Hero from "./Ui/hero"
import Features from "./Ui/features"
import Zigzag from "./Ui/zigzag"
import Testimonials from "./Ui/testimonials"
import Team from "./Ui/team"
import ContactUs from "./Ui/contact-us"
import Footer from "./Footer/footer"

import '/src/shared/css/style.css'

function LandingPage() {
  return (
    <div className="bg-gray-900 text-gray-200 tracking-tight">
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />

        <main  className="grow">
          <PageIllustration />
          <Hero />
          <Features />
          <Zigzag />
          <Testimonials />
          <Team />
          <ContactUs />
        </main>
      
        <Footer />
      </div>
    </div>

  )
}

export default LandingPage