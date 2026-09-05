import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import PageHeader from "@/components/ui/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import CTABanner from "@/components/ui/CTABanner"
import { SITE_CONTAINER } from "@/components/layout/constants"

/**
 * Team.
 *
 * These were stock Unsplash headshots of unrelated real people, captioned with
 * staff names and job titles — which misrepresents identifiable individuals and
 * is a straightforward licensing problem too (Unsplash's licence does not cover
 * using a recognisable person to imply endorsement or employment).
 *
 * Initials stand in until real photographs are supplied. Drop a file into
 * src/imports and set `img` to use it.
 */
const team: { name: string; role: string; img?: string }[] = [
  { name: "Rajesh Kumar", role: "Chief Architect" },
  { name: "Priya Sharma", role: "Interior Designer" },
  { name: "Amit Singh", role: "Project Manager" },
  { name: "Sunita Patel", role: "Structural Engineer" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")

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
      <Seo
        title="About Us — 15+ Years of Building in Paschim Midnapur"
        description="Who we are: the architects, engineers and designers behind Reena Designs & Constructions, our story, values, certifications and the team delivering every project in Midnapur and across India."
      />
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
                alt="Reena Designs & Constructions site work in progress"
                width={700}
                height={440}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="var(--color-brand)" strokeWidth="1.6"/><path d="M16 10v6l4 3" stroke="var(--color-brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "OUR MISSION",
                text: "To deliver high-quality construction services that meet the highest standards of excellence with integrity and innovation.",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 17c-3.33 0-6.29-1.7-8-4.3.04-2.65 5.34-4.1 8-4.1s7.96 1.45 8 4.1c-1.71 2.6-4.67 4.3-8 4.3z" fill="var(--color-brand)" opacity="0.85"/></svg>,
                title: "OUR VISION",
                text: "To be a leading construction company known for excellence and trust, setting new benchmarks in quality and innovation across every project.",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 8h8l-6.5 4.7 2.5 8L16 20.2l-7 4.5 2.5-8L5 12h8L16 4z" stroke="var(--color-brand)" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
                title: "OUR VALUES",
                text: "Quality. Integrity. Transparency. Teamwork and Customer Focus — these are the principles that guide every decision we make.",
              },
            ].map((card) => (
              <div key={card.title} className="svc-card p-7 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "#fff4ef", border: "1px solid #ffe0d0" }}>
                  {card.icon}
                </div>
                <h3 className="montserrat font-800 text-sm tracking-wider text-navy">{card.title}</h3>
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
                <div className="mb-4 h-28 w-28 overflow-hidden rounded-full border-[3px] border-hairline">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={`${member.name}, ${member.role}`}
                      width={112}
                      height={112}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="montserrat font-800 flex h-full w-full items-center justify-center text-2xl text-white"
                      style={{ background: "linear-gradient(145deg, #1a2744 0%, #23355c 100%)" }}
                      aria-hidden="true"
                    >
                      {initials(member.name)}
                    </div>
                  )}
                </div>
                <div className="montserrat font-700 text-sm mb-1 text-navy">{member.name}</div>
                <div className="text-xs text-brand">{member.role}</div>
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
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--color-brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: "1.5px solid #e8e8e8" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=440&fit=crop&auto=format"
              alt="Engineers reviewing drawings on site"
              width={700}
              height={440}
              loading="lazy"
              className="h-64 w-full object-cover"
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
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-surface">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="4" stroke="var(--color-navy)" strokeWidth="1.5"/>
                    <path d="M10 16l4 4 8-8" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="montserrat font-700 text-xs text-navy">{cert}</span>
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
