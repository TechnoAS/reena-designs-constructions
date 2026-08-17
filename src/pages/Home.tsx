import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import AboutStrip from "@/components/home/AboutStrip"
import CoreServices from "@/components/home/CoreServices"
import FeaturedProjects from "@/components/home/FeaturedProjects"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Testimonials from "@/components/home/Testimonials"
import CTABanner from "@/components/ui/CTABanner"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <AboutStrip />
      <CoreServices />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner
        title="LET'S BUILD SOMETHING AMAZING TOGETHER"
        buttonText="Contact Us Today"
        buttonHref="/contact"
        fullWidth
      />
      <Footer />
    </div>
  )
}
