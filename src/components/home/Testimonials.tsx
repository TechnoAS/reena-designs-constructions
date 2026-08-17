import { useState } from "react"
import SectionTitle from "@/components/ui/SectionTitle"

const testimonials = [
  { name: "Rajesh Mehta", quote: "Reena Designs & Constructions delivered our dream home on time with excellent quality." },
  { name: "Priya Dutta", quote: "Outstanding craftsmanship and professional team. Our office renovation was flawless." },
  { name: "Amit Banerjee", quote: "Transparent communication throughout. Highly recommend for any construction project." },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-14" style={{ background: "#f7f7f7" }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="CLIENT TESTIMONIALS" />
        <div className="bg-white rounded-2xl px-10 py-10 text-center" style={{ border: "1.5px solid #e8e8e8" }}>
          <div className="text-4xl mb-4" style={{ color: "#e0e0e0", fontFamily: "Georgia, serif" }}>"</div>
          <p className="text-gray-600 text-base leading-relaxed mb-6 italic max-w-xl mx-auto">{testimonials[active].quote}</p>
          <div className="montserrat font-700 text-sm mb-1" style={{ color: "#1a2744" }}>— {testimonials[active].name}</div>
          <div className="text-xs text-gray-400">Verified Client</div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className="h-1.5 rounded-full transition-all duration-300"
                style={i === active ? { width: 28, background: "#FF5E00" } : { width: 10, background: "#ddd" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
