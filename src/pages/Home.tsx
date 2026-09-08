import Nav from "@/components/layout/Nav"
import Seo from "@/components/Seo"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import AboutStrip from "@/components/home/AboutStrip"
import CoreServices from "@/components/home/CoreServices"
import FeaturedProjects from "@/components/home/FeaturedProjects"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Testimonials from "@/components/home/Testimonials"
import ServiceAreas from "@/components/ui/ServiceAreas"
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  webPageSchema,
  serviceCatalogSchema,
  serviceAreaSchema,
  pageGraph,
} from "@/data/structuredData"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* The homepage carries the full entity graph — the company, the site,
          the office and the service catalogue. Every other route ships a
          page-level node that points back at these by `@id` rather than
          restating them. */}
      <Seo
        title="Construction & Interior Design Company in Midnapur, West Bengal"
        description="Design-led building construction, architecture, interiors and renovation in Midnapur, Paschim Midnapur. 250+ projects delivered in 15+ years, with a completion date written into the contract."
        schema={pageGraph(
          organizationSchema(),
          websiteSchema(),
          localBusinessSchema(),
          webPageSchema({
            path: "/",
            name: "Construction & Interior Design Company in Midnapur, West Bengal",
            description:
              "Design-led building construction, architecture, interiors and renovation in Midnapur, Paschim Midnapur, serving Kharagpur, Ghatal, Jhargram and clients across India.",
          }),
          serviceCatalogSchema("/"),
          serviceAreaSchema("/"),
        )}
      />
      <Nav />
      <Hero />
      <AboutStrip />
      <CoreServices />
      <FeaturedProjects />
      <WhyChooseUs />
      <ServiceAreas />
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
