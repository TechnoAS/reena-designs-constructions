import { Building2, CalendarClock, Users, ShieldCheck } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"

const stats = [
  { num: "250+", label: "Projects delivered", sub: "Across Paschim Midnapur & India", Icon: Building2 },
  { num: "15+", label: "Years of experience", sub: "Since 2010, without a lapsed site", Icon: CalendarClock },
  { num: "200+", label: "Happy clients", sub: "4.9/5 average client rating", Icon: Users },
  { num: "100%", label: "Quality assurance", sub: "Engineer-supervised, ISI-grade material", Icon: ShieldCheck },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-surface py-12 md:py-16">
      <div className={SITE_CONTAINER}>
        {/* Top Header Row — small, refined typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pb-8 border-b border-slate-200/80">
          <div>
            <p className="montserrat font-700 text-[11px] tracking-[0.25em] text-brand uppercase mb-1.5">
              Why choose us
            </p>
            <h2 className="montserrat font-800 text-xl sm:text-2xl md:text-3xl tracking-wide text-navy uppercase">
              A TRACK RECORD YOU CAN AUDIT
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed md:text-right">
            We publish the numbers because they hold up. Fixed timelines, transparent costing and engineer-supervised quality control on every site we run.
          </p>
        </div>

        {/* Metric Spec Ledger — completely unboxed, no cards, hairline dividers */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 lg:divide-x divide-slate-200/80">
          {stats.map(({ num, label, sub, Icon }) => (
            <div key={label} className="lg:first:pl-0 lg:px-7">
              <div className="flex items-center gap-2 mb-2">
                <Icon size={15} className="text-brand shrink-0" strokeWidth={2.2} aria-hidden="true" />
                <span className="montserrat font-700 text-[11px] tracking-wider uppercase text-slate-600">
                  {label}
                </span>
              </div>
              <div className="montserrat font-900 text-2xl sm:text-3xl tracking-tight text-navy">
                {num}
              </div>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
