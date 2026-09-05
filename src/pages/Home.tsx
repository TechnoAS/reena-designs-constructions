import Nav from "@/components/layout/Nav"
import Seo from "@/components/Seo"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import AboutStrip from "@/components/home/AboutStrip"
import CoreServices from "@/components/home/CoreServices"
import FeaturedProjects from "@/components/home/FeaturedProjects"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Testimonials from "@/components/home/Testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Construction & Interior Design Company in Midnapur, West Bengal"
        description="Design-led building construction, architecture, interiors and renovation in Midnapur, Paschim Midnapur. 250+ projects delivered in 15+ years, with a completion date written into the contract."
      />
      <Nav />
      <Hero />
      <AboutStrip />
      <CoreServices />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <Footer
        cta={{
          title: "Let's build something amazing together.",
          subtitle: "Free site visit, itemised quote, and a completion date in writing.",
          buttonText: "Contact Us Today",
          buttonHref: "/contact",
        }}
      />
    </div>
  )
}
