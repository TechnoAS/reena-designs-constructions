import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import CTABanner from "@/components/ui/CTABanner"
import { SITE_CONTAINER } from "@/components/layout/constants"

const team = [
  { name: "Rajesh Kumar", role: "Chief Architect", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format" },
  { name: "Priya Sharma", role: "Interior Designer", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&auto=format" },
  { name: "Amit Singh", role: "Project Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format" },
  { name: "Sunita Patel", role: "Structural Engineer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format" },
]

const whyUs = [
  "Experienced and skilled professionals",
  "On-time project delivery",
  "Quality materials and workmanship",
  "Customer satisfaction is our priority",
  "Transparent communication",
]

export default function About() {
  return (
    <PageWrapper>
      <PageHeader title="ABOUT US" crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <div className={`${SITE_CONTAINER} py-14 flex flex-col gap-16`}>

        {/* Our Story */}
        <section>
          <SectionTitle title="OUR STORY" align="left" accentBar />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Reena Designs & Constructions was founded with a vision to deliver exceptional construction and design solutions. Starting as a small contracting firm, we have grown into a full-service architectural and construction company trusted by hundreds of clients across the region.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We are committed to quality, transparency and customer satisfaction. Every project we undertake is approached with meticulous planning, skilled execution, and a genuine passion for creating spaces that endure.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                From modest residential homes to large-scale commercial developments, our team of architects, engineers, and designers brings the same dedication and craftsmanship to every build.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1.5px solid #e8e8e8" }}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=440&fit=crop&auto=format"
                alt="Construction site"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#FF5E00" strokeWidth="1.6"/><path d="M16 10v6l4 3" stroke="#FF5E00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "OUR MISSION",
                text: "To deliver high-quality construction services that meet the highest standards of excellence with integrity and innovation.",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 17c-3.33 0-6.29-1.7-8-4.3.04-2.65 5.34-4.1 8-4.1s7.96 1.45 8 4.1c-1.71 2.6-4.67 4.3-8 4.3z" fill="#FF5E00" opacity="0.85"/></svg>,
                title: "OUR VISION",
                text: "To be a leading construction company known for excellence and trust, setting new benchmarks in quality and innovation across every project.",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 8h8l-6.5 4.7 2.5 8L16 20.2l-7 4.5 2.5-8L5 12h8L16 4z" stroke="#FF5E00" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
                title: "OUR VALUES",
                text: "Quality. Integrity. Transparency. Teamwork and Customer Focus — these are the principles that guide every decision we make.",
              },
            ].map((card) => (
              <div key={card.title} className="svc-card p-7 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "#fff4ef", border: "1px solid #ffe0d0" }}>
                  {card.icon}
                </div>
                <h3 className="montserrat font-800 text-sm tracking-wider" style={{ color: "#1a2744" }}>{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section>
          <SectionTitle title="OUR TEAM" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4" style={{ border: "3px solid #e8e8e8" }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="montserrat font-700 text-sm mb-1" style={{ color: "#1a2744" }}>{member.name}</div>
                <div className="text-xs" style={{ color: "#FF5E00" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle title="WHY CHOOSE US" align="left" accentBar />
            <div className="flex flex-col gap-4">
              {whyUs.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#fff4ef", border: "1.5px solid #FF5E00" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#FF5E00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: "1.5px solid #e8e8e8" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=440&fit=crop&auto=format"
              alt="Team at work"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        {/* Certifications */}
        <section>
          <SectionTitle title="CERTIFICATIONS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "ISO 9001:2015 Certified",
              "IGBC Green Buildings",
              "BIS Certified",
              "CIDC Registered",
            ].map((cert, i) => (
              <div key={i} className="svc-card p-6 flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: "#f7f7f7" }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="4" stroke="#1a2744" strokeWidth="1.5"/>
                    <path d="M10 16l4 4 8-8" stroke="#FF5E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="montserrat font-700 text-xs" style={{ color: "#1a2744" }}>{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          title="LET'S BUILD SOMETHING AMAZING TOGETHER"
          subtitle="Ready to start your dream project? Reach out to us today."
          buttonText="Contact Us Today"
          buttonHref="/contact"
        />
      </div>
    </PageWrapper>
  )
}
