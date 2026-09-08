import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import { organizationSchema, webPageSchema, pageGraph } from "@/data/structuredData"
import PageHeader from "@/components/ui/PageHeader"
import { SITE_CONTAINER } from "@/components/layout/constants"
import draftingTable from "@/imports/about-drafting-table.jpg"

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

const STORY_STATS = [
  { value: "2010", label: "Founded" },
  { value: "250+", label: "Projects delivered" },
  { value: "4", label: "Disciplines in-house" },
] as const

const PRINCIPLES = [
  {
    title: "Our mission",
    text: "To deliver high-quality construction services that meet the highest standards of excellence with integrity and innovation.",
  },
  {
    title: "Our vision",
    text: "To be a leading construction company known for excellence and trust, setting new benchmarks in quality and innovation across every project.",
  },
  {
    title: "Our values",
    text: "Quality. Integrity. Transparency. Teamwork and customer focus — these are the principles that guide every decision we make.",
  },
] as const

const whyUs = [
  "Experienced and skilled professionals",
  "On-time project delivery",
  "Quality materials and workmanship",
  "Customer satisfaction is our priority",
  "Transparent communication",
]

const CERTIFICATIONS = [
  {
    name: "ISO 9001:2015 Certified",
    copy: "Our quality management system is independently audited every year.",
  },
  {
    name: "IGBC Green Buildings",
    copy: "Accredited to design and deliver green-rated, energy-efficient buildings.",
  },
  {
    name: "BIS Certified",
    copy: "Structural steel and cement conform to Bureau of Indian Standards grades.",
  },
  {
    name: "CIDC Registered",
    copy: "Registered with the Construction Industry Development Council of India.",
  },
] as const

/** A section heading. */
function Heading({ title, onDark = false }: { title: string; onDark?: boolean }) {
  return (
    <h2 className={`montserrat font-800 mb-8 text-xl md:text-2xl ${onDark ? "text-white" : "text-navy"}`}>
      {title}
    </h2>
  )
}

export default function About() {
  return (
    <PageWrapper
      cta={{
        title: "Let's build something amazing together.",
        subtitle: "Free consultation and a drawing review, at no cost.",
        buttonText: "Contact Us Today",
        buttonHref: "/contact",
      }}
    >
      <Seo
        title="About Us — 15+ Years of Building in Paschim Midnapur"
        description="Who we are: the architects, engineers and designers behind Reena Designs & Constructions, our story, values, certifications and the team delivering every project in Midnapur and across India."
        schema={pageGraph(
          webPageSchema({
            path: "/about",
            name: "About Reena Designs & Constructions — Builders in Midnapur since 2010",
            description:
              "The architects, engineers and designers behind Reena Designs & Constructions: our story, values, certifications and the team delivering every project across Paschim Midnapur.",
            type: "AboutPage",
          }),
          organizationSchema(),
        )}
      />
      <PageHeader title="ABOUT US" crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} backdrop />

      {/* ── Our story ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        {/* Full-bleed background artwork pinned to right edge (0 space from right) */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] select-none md:block lg:w-[50%]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 18%, #000 48%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 18%, #000 48%)",
          }}
        >
          <img
            src={draftingTable}
            alt="A Reena Designs & Constructions architect drawing up a working elevation at the drafting table"
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className={`${SITE_CONTAINER} relative z-10 grid items-center gap-10 md:grid-cols-2`}>
          <div className="max-w-xl">
            <Heading title="OUR STORY" />

            <div className="flex flex-col gap-4 text-sm leading-7 text-slate-500">
              <p>
                Reena Designs &amp; Constructions was founded with a vision to deliver exceptional
                construction and design solutions. Starting as a small contracting firm, we have grown
                into a full-service architectural and construction company trusted by hundreds of
                clients across the region.
              </p>
              <p>
                We are committed to quality, transparency and customer satisfaction. Every project we
                undertake is approached with meticulous planning, skilled execution, and a genuine
                passion for creating spaces that endure.
              </p>
              <p>
                From modest residential homes to large-scale commercial developments, our team of
                architects, engineers and designers brings the same dedication and craftsmanship to
                every build.
              </p>
            </div>

            <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5 border-t border-hairline pt-7">
              {STORY_STATS.map(({ value, label }) => (
                <div key={label}>
                  <dd className="montserrat font-900 text-2xl leading-none text-navy">{value}</dd>
                  <dt className="mt-2 text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Mobile: no mask. The side fade exists on desktop so the photograph
              dissolves into the copy beside it — on a phone the image sits above
              the copy, with nothing to its left or right to blend into, so the
              fade only ate its edges. */}
          <div className="md:hidden">
            <div className="relative -mx-8 overflow-hidden sm:-mx-9">
              <img
                src={draftingTable}
                alt="A Reena Designs & Constructions architect drawing up a working elevation at the drafting table"
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
                className="h-64 sm:h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What we stand for ─────────────────────────────────────── */}
      <section className="border-y border-hairline bg-surface py-14 lg:py-16">
        <div className={SITE_CONTAINER}>
          <Heading title="MISSION, VISION & VALUES" />
          <div className="grid gap-px bg-hairline md:grid-cols-3">
            {PRINCIPLES.map(({ title, text }) => (
              <div key={title} className="bg-surface p-7 md:p-8">
                <h3 className="montserrat font-800 mb-3 text-sm uppercase tracking-wider text-navy">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        {/* Full-bleed left background artwork (mirrored, 0 space on left edge) */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[55%] select-none md:block lg:w-[50%]"
          style={{
            maskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.18) 18%, #000 48%)",
            WebkitMaskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.18) 18%, #000 48%)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format&q=80"
            alt="A completed contemporary home at dusk, lit from within"
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className={`${SITE_CONTAINER} relative z-10 grid items-center gap-10 md:grid-cols-2`}>
          {/* Mobile view */}
          <div className="order-2 md:hidden">
            <div className="relative -mx-8 overflow-hidden sm:-mx-9">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1100&h=720&fit=crop&auto=format&q=80"
                alt="A completed contemporary home at dusk, lit from within"
                width={1100}
                height={720}
                loading="lazy"
                decoding="async"
                className="h-64 sm:h-72 w-full object-cover"
              />
            </div>
          </div>

          {/* Spacer for desktop layout (artwork sits in left background) */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Text column */}
          <div className="order-1 md:order-2 max-w-xl">
            <Heading title="WHY CHOOSE US" />
            <ul className="flex flex-col">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3.5 border-b border-hairline py-3.5 last:border-b-0"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="flex-none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="var(--color-brand)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────── */}
      <section className="border-t border-hairline py-14 lg:py-16">
        <div className={SITE_CONTAINER}>
          <Heading title="OUR TEAM" />
          <div className="grid grid-cols-2 gap-px bg-hairline md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6">
                <div className="mb-5 aspect-square w-full overflow-hidden">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={`${member.name}, ${member.role}`}
                      width={280}
                      height={280}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="montserrat font-800 flex h-full w-full items-center justify-center text-3xl text-white"
                      style={{ background: "linear-gradient(145deg, #1a2744 0%, #23355c 100%)" }}
                      aria-hidden="true"
                    >
                      {initials(member.name)}
                    </div>
                  )}
                </div>
                <div className="montserrat font-700 text-sm text-navy">{member.name}</div>
                <div className="mt-1 text-xs text-brand">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────────── */}
      <section className="border-t border-hairline bg-surface py-14 lg:py-16">
        <div className={SITE_CONTAINER}>
          <Heading title="CERTIFICATIONS" />

          <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map(({ name, copy }) => (
              <div
                key={name}
                className="group flex flex-col gap-3.5 bg-white p-7 transition-colors duration-300 hover:bg-slate-50/80 lg:p-8"
              >
                <span
                  className="h-0.5 w-9 flex-none rounded-full bg-brand transition-all duration-500 group-hover:w-14"
                  aria-hidden="true"
                />
                <h3 className="montserrat font-800 text-[15px] leading-snug text-navy">{name}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageWrapper>
  )
}
