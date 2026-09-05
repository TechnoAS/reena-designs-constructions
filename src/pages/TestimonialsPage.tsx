import { Quote } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import PageHeader from "@/components/ui/PageHeader"
import StarRating from "@/components/ui/StarRating"
import { SITE_CONTAINER } from "@/components/layout/constants"

const REVIEWS = [
  {
    name: "Rajesh Mehta",
    role: "Homeowner",
    place: "Midnapur",
    rating: 5,
    text: "Reena Designs & Constructions delivered our dream home on time with excellent quality. The team was professional and transparent throughout the entire process.",
  },
  {
    name: "Priya Dutta",
    role: "Business Owner",
    place: "Kharagpur",
    rating: 5,
    text: "Outstanding craftsmanship and professional team. Our office renovation was completed flawlessly. Highly satisfied with the quality of work.",
  },
  {
    name: "Amit Banerjee",
    role: "Property Developer",
    place: "Ghatal",
    rating: 5,
    text: "Transparent communication throughout the project. The 3D designs matched perfectly with the final outcome. Will definitely work with them again.",
  },
  {
    name: "Sunita Ghosh",
    role: "Homeowner",
    place: "Midnapur",
    rating: 5,
    text: "The interior design team understood our brief perfectly. Our home looks exactly like we envisioned — beautiful and functional.",
  },
  {
    name: "Vikram Sharma",
    role: "Corporate Client",
    place: "Kharagpur",
    rating: 5,
    text: "We have partnered with Reena on three commercial projects. Each time delivered with zero structural issues and on schedule.",
  },
  {
    name: "Anita Roy",
    role: "Homeowner",
    place: "Belda",
    rating: 5,
    text: "The renovation of our 20-year-old home was done with great care. They preserved the heritage elements while modernizing the interiors.",
  },
] as const

const SUMMARY = [
  { value: "4.9/5", label: "Average rating" },
  { value: "200+", label: "Clients served" },
  { value: "250+", label: "Projects delivered" },
] as const

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")

/** A section heading, matching the other pages. */
function Heading({ title }: { title: string }) {
  return <h2 className="montserrat font-800 mb-4 text-xl text-navy md:text-2xl">{title}</h2>
}

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
            <Heading title="IN THEIR WORDS" />
            <p className="text-sm leading-7 text-slate-500">
              Homeowners, business owners and developers on what it was actually like to build with
              us — the parts that only show up once the site is running.
            </p>
          </div>

          <dl className="flex flex-none flex-wrap gap-x-10 gap-y-5 lg:justify-end lg:text-right">
            {SUMMARY.map(({ value, label }) => (
              <div key={label}>
                <dd className="montserrat font-900 text-2xl leading-none text-navy">{value}</dd>
                <dt className="mt-2 text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
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
        {REVIEWS.map(({ name, role, place, rating, text }) => (
          <figure key={name} className="flex flex-col bg-white p-7 lg:p-8">
            <Quote
              size={22}
              strokeWidth={2}
              aria-hidden="true"
              className="mb-4 flex-none rotate-180 text-orange-200"
            />

            <blockquote className="flex-1 text-sm leading-7 text-slate-600">{text}</blockquote>

            <figcaption className="mt-6 flex items-center gap-3.5 border-t border-hairline pt-5">
              {/* Initials rather than a stock headshot — putting an unrelated
                  real person's face beside a named client would misrepresent
                  them, and the licence would not cover it either. */}
              <span
                className="montserrat font-800 flex h-11 w-11 flex-none items-center justify-center text-[13px] text-white"
                style={{ background: "linear-gradient(145deg, #1a2744 0%, #23355c 100%)" }}
                aria-hidden="true"
              >
                {initials(name)}
              </span>
              <span className="min-w-0">
                <span className="montserrat font-700 block text-sm text-navy">{name}</span>
                <span className="block text-xs text-slate-400">
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
