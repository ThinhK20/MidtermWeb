import Navbar from "./Header/Navbar";
import Hero from "./Section/Hero";
import Features from "./Section/Features";
import Features2 from "./Section/Features2";
import Features1 from "./Section/Features1";
import About from "./Section/About";
import Package from "./Section/Package";
import Testimonial from "./Section/Testimonial";
import Footer from "./Footer/footer";

function LandingPage() {
   return (
      <div className="relative overflow-hidden">
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
   );
}

export default LandingPage;
