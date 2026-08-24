import { Building2, CalendarClock, Users, ShieldCheck } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"
import SectionTitle from "@/components/ui/SectionTitle"

const stats = [
  { num: "250+", label: "Projects delivered", sub: "Across Paschim Midnapur & India", Icon: Building2 },
  { num: "15+", label: "Years of experience", sub: "Since 2010, without a lapsed site", Icon: CalendarClock },
  { num: "200+", label: "Happy clients", sub: "4.9/5 average client rating", Icon: Users },
  { num: "100%", label: "Quality assurance", sub: "Engineer-supervised, ISI-grade material", Icon: ShieldCheck },
]

export default function WhyChooseUs() {
  return (
    <section className="border-t border-b py-16" style={{ background: "#fff", borderColor: "#f0f0f0" }}>
      <div className={SITE_CONTAINER}>
        <SectionTitle
          eyebrow="Why choose us"
          title="A TRACK RECORD YOU CAN AUDIT"
          subtitle="We publish the numbers because they hold up. Fixed timelines, transparent costing and engineer-supervised quality control on every site we run."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ num, label, sub, Icon }) => (
            <div key={label} className="stat-item flex items-start gap-4 bg-white px-6 py-7">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <div className="montserrat font-900 text-3xl leading-none" style={{ color: "#FF5E00" }}>{num}</div>
                <div className="montserrat font-700 mt-1.5 text-sm" style={{ color: "#1a2744" }}>{label}</div>
                <div className="mt-0.5 text-[12px] leading-relaxed text-slate-400">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
