import Hero from "./Section/Hero";
import Features from "./Section/Features";
import Features2 from "./Section/Features2";
import Features1 from "./Section/Features1";
import About from "./Section/About";
import Package from "./Section/Package";
import Testimonial from "./Section/Testimonial";
import Footer from "../../shared/Footer/footer";
import Header from "../../shared/Header/header";

export default function Homepage() {
   return (
      <div className="relative overflow-hidden">
         <Header />
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
