import { Quote } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import PageHeader from "@/components/ui/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import StarRating from "@/components/ui/StarRating"
import CountUp from "@/components/ui/CountUp"
import { TESTIMONIALS } from "@/data/testimonials"
import { SITE_CONTAINER } from "@/components/layout/constants"

/* "4.9/5 average rating" was here, and in WhyChooseUs, and in the footer —
   but every review the site publishes is five stars, so the average it
   actually shows is 5.0, and the 4.9 was not backed by collected reviews
   anywhere. Replaced with a count of what is on this page, which is
   verifiable by scrolling it. */
const SUMMARY = [
  { value: `${TESTIMONIALS.length}`, label: "Client accounts" },
  { value: "200+", label: "Clients served" },
  { value: "250+", label: "Projects delivered" },
] as const

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")


export default function TestimonialsPage() {
  return (
    <PageWrapper
      cta={{
        title: "Ready to be the next one?",
        subtitle: "Free site visit, itemised quote, and a completion date in writing.",
        buttonText: "Start Your Project",
        buttonHref: "/contact",
      }}
    >
      <Seo
        title="Client Testimonials — What Our Clients Say"
        description="Homeowners, business owners and developers on working with Reena Designs & Constructions: transparency, on-time handover and the quality of the finished build."
      />
      <PageHeader
        title="CLIENT TESTIMONIALS"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Client Testimonials" },
        ]}
        backdrop
      />

      {/* Heading and numbers share one row, bottom-aligned, so the figures read
          as the evidence for the sentence beside them rather than as a separate
          band stacked underneath it. */}
      <section className={`${SITE_CONTAINER} py-14 lg:py-16`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-2xl">
            <SectionTitle title="IN THEIR WORDS" align="left" className="mb-4" />
            <p className="text-sm leading-7 text-slate-500">
              Homeowners, business owners and developers on what it was actually like to build with
              us — the parts that only show up once the site is running.
            </p>
          </div>

          <dl className="flex flex-none flex-wrap gap-x-10 gap-y-5 lg:justify-end lg:text-right">
            {SUMMARY.map(({ value, label }) => (
              <div key={label}>
                <dd className="montserrat font-900 text-2xl leading-none text-navy">
                  <CountUp value={value} />
                </dd>
                <dt className="mt-2 text-[10.5px] uppercase tracking-[0.16em] text-slate-600">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Full-bleed and divided by hairline seams rather than boxed into cards —
          six bordered tiles read as six separate objects; the ledger reads as
          one body of evidence, which is what a wall of testimony should do. */}
      <div className="grid gap-px border-y border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map(({ name, role, place, rating, quote }) => (
          <figure key={name} className="flex flex-col bg-white p-7 lg:p-8">
            <Quote
              size={22}
              strokeWidth={2}
              aria-hidden="true"
              className="mb-4 flex-none rotate-180 text-orange-200"
            />

            <blockquote className="flex-1 text-sm leading-7 text-slate-600">{quote}</blockquote>

            <figcaption className="mt-6 flex items-center gap-3.5 border-t border-hairline pt-5">
              {/* Initials rather than a stock headshot — putting an unrelated
                  real person's face beside a named client would misrepresent
                  them, and the licence would not cover it either. */}
              <span
                className="grad-navy montserrat font-800 flex h-11 w-11 flex-none items-center justify-center text-[13px] text-white"
                aria-hidden="true"
              >
                {initials(name)}
              </span>
              <span className="min-w-0">
                <span className="montserrat font-700 block text-sm text-navy">{name}</span>
                <span className="block text-xs text-slate-500">
                  {role} · {place}
                </span>
              </span>
              <span className="ml-auto flex-none">
                <StarRating rating={rating} />
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </PageWrapper>
  )
}
