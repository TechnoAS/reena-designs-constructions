import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import PageHeader from "@/components/ui/PageHeader"
import BuildSimulator from "@/components/ui/BuildSimulator"
import { SITE_CONTAINER } from "@/components/layout/constants"

const SERVICES = [
  {
    title: "Residential Construction",
    copy: "Independent homes and apartments built to your approved drawing, with certified steel and cement at every stage.",
  },
  {
    title: "Commercial Construction",
    copy: "Offices, showrooms and retail shells delivered on commercial timelines, with minimal disruption to trading.",
  },
  {
    title: "Architectural Design",
    copy: "Site-responsive planning, working drawings and sanction-ready documentation prepared in-house.",
  },
  {
    title: "Structural Engineering",
    copy: "Load calculations, RCC detailing and seismic-compliant framing signed off by qualified structural engineers.",
  },
  {
    title: "Renovation & Remodeling",
    copy: "Structural retrofits and full-property makeovers that modernise ageing buildings without touching their integrity.",
  },
  {
    title: "Interior Design",
    copy: "Bespoke interiors resolved to the joinery, lighting layer and material palette before execution begins.",
  },
  {
    title: "Exterior Design",
    copy: "Elevations, facade treatments and landscaping that give the building its street presence.",
  },
  {
    title: "Turnkey Construction",
    copy: "Design to handover under one contract — a single team, one timeline and one fixed cost.",
  },
] as const

const CAPABILITY_STATS = [
  { value: "8", label: "Disciplines" },
  { value: "In-house", label: "Every stage" },
  { value: "1", label: "Contract" },
] as const

/** A section heading, matching the About page. */
function Heading({ title }: { title: string }) {
  return <h2 className="montserrat font-800 mb-8 text-xl text-navy md:text-2xl">{title}</h2>
}

export default function Services() {
  return (
    <PageWrapper
      cta={{
        title: "Ready to start your project?",
        subtitle: "Itemised quote, named materials, and a fixed completion date.",
        buttonText: "Get a Free Quote",
        buttonHref: "/contact",
      }}
    >
      <Seo
        title="Our Services — Construction, Architecture & Interiors"
        description="Eight disciplines delivered in-house: residential and commercial construction, architectural design, structural engineering, renovation, interiors, exteriors and turnkey delivery across India."
      />
      <PageHeader
        title="OUR SERVICES"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        backdrop
      />

      {/* ── Full-service capability ───────────────────────────────── */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        {/* Artwork pinned to the right edge, dissolving sideways into the copy. */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] select-none md:block lg:w-[50%]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 18%, #000 48%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 18%, #000 48%)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&h=900&fit=crop&auto=format&q=80"
            alt="A site crew marking out the slab on a live construction site"
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className={`${SITE_CONTAINER} relative z-10 grid items-center gap-10 md:grid-cols-2`}>
          <div className="max-w-xl">
            <Heading title="FULL-SERVICE CAPABILITY" />

            <div className="flex flex-col gap-4 text-sm leading-7 text-slate-500">
              <p>
                Eight construction and design disciplines delivered in-house across India — so
                responsibility for your project never changes hands, and no part of it is quietly
                handed to a subcontractor you never met.
              </p>
              <p>
                Drawings, structure, execution and finishing all sit with the same team, under one
                contract and one fixed cost. That is what lets us put a completion date in writing
                rather than an estimate.
              </p>
            </div>

            <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5 border-t border-hairline pt-7">
              {CAPABILITY_STATS.map(({ value, label }) => (
                <div key={label}>
                  <dd className="montserrat font-900 text-2xl leading-none text-navy">{value}</dd>
                  <dt className="mt-2 text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Mobile view: the same artwork, masked for a narrow screen. */}
          <div className="md:hidden">
            <div className="relative overflow-hidden py-2">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1100&h=720&fit=crop&auto=format&q=80"
                alt="A site crew marking out the slab on a live construction site"
                width={1100}
                height={720}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover sm:h-72"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── The eight disciplines ─────────────────────────────────── */}
      <section className="border-y border-hairline bg-surface py-14 lg:py-16">
        <div className={SITE_CONTAINER}>
          <Heading title="SERVICES WE PROVIDE" />
        </div>

        {/* Full-bleed, divided by hairline seams rather than boxed into cards —
            the same ledger the About page uses. The decorative icon tiles are
            gone: eight near-identical orange squares carried no information and
            competed with the titles. */}
        <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, copy }) => (
            <article key={title} className="group flex flex-col gap-3.5 bg-surface p-7 lg:p-8">
              <span
                className="h-0.5 w-9 flex-none rounded-full bg-brand transition-all duration-500 group-hover:w-14"
                aria-hidden="true"
              />
              <h3 className="montserrat font-800 text-[15px] leading-snug text-navy">{title}</h3>
              <p className="text-[13px] leading-relaxed text-slate-500">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20">
        <div className={SITE_CONTAINER}>
          <Heading title="WATCH YOUR BUILDING TAKE SHAPE" />
          <p className="-mt-4 mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            Nineteen steps, four phases, one documented sequence — from bare plot to keys in your
            hand. Press play, or step through it yourself.
          </p>
          <BuildSimulator />
        </div>
      </section>
    </PageWrapper>
  )
}
