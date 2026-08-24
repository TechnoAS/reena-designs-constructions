import { useState } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import { SITE_CONTAINER } from "@/components/layout/constants"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", projectType: "", message: "" })
  const [sent, setSent] = useState(false)

  const handle = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const contactInfo = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C7.24 2 5 4.24 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1110 5a1.5 1.5 0 010 3.5z" fill="#FF5E00"/></svg>,
      label: "Address",
      value: "Midnapur, Paschim Midnapur\nWest Bengal 721101, India",
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.6 2A1.6 1.6 0 002 3.6v.9C2 10.6 9.4 18 16.5 18h.9A1.6 1.6 0 0019 16.4v-1.95a1.6 1.6 0 00-1.14-1.54l-2-.55a1.6 1.6 0 00-1.6.46l-.6.6a9.23 9.23 0 01-3.08-3.08l.6-.6a1.6 1.6 0 00.46-1.6l-.55-2A1.6 1.6 0 007.55 2H3.6z" fill="#FF5E00"/></svg>,
      label: "Phone",
      value: "+91 98765 43210\n+91 98765 43211",
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9A1.5 1.5 0 0116.5 16h-13A1.5 1.5 0 012 14.5v-9zM3.5 5.5v.8L10 10.3l6.5-4V5.5H3.5zm13 2.3l-6.5 4-6.5-4V14.5h13V7.8z" fill="#FF5E00"/></svg>,
      label: "Email",
      value: "info@reenabuild.com",
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#FF5E00" strokeWidth="1.6"/><path d="M10 6v4l3 3" stroke="#FF5E00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Office Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ]

  return (
    <PageWrapper>
      <PageHeader title="CONTACT US" crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className={`${SITE_CONTAINER} py-14`}>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Get In Touch */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10 rounded-full" style={{ background: "#FF5E00" }} />
              <h2 className="montserrat font-800 text-xl" style={{ color: "#1a2744" }}>GET IN TOUCH</h2>
            </div>

            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#fff4ef", border: "1px solid #ffe0d0" }}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="montserrat font-700 text-xs uppercase tracking-widest mb-0.5" style={{ color: "#999" }}>{info.label}</div>
                    <div className="text-sm text-gray-700 whitespace-pre-line">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="montserrat font-700 text-xs uppercase tracking-widest mb-3" style={{ color: "#999" }}>Follow Us</div>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
                  <a key={s} href="#" title={s} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-105" style={{ background: "#f7f7f7", border: "1.5px solid #e8e8e8" }}>
                    <span className="text-xs font-700" style={{ color: "#1a2744" }}>{s[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10 rounded-full" style={{ background: "#FF5E00" }} />
              <h2 className="montserrat font-800 text-xl" style={{ color: "#1a2744" }}>SEND US A MESSAGE</h2>
            </div>

            {sent ? (
              <div className="flex flex-col items-center py-12 text-center rounded-2xl" style={{ background: "#f7f7f7", border: "1.5px solid #e8e8e8" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: "#fff4ef", border: "2px solid #FF5E00" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12l6 6L20 6" stroke="#FF5E00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="montserrat font-800 text-lg mb-2" style={{ color: "#1a2744" }}>Message Sent!</h3>
                <p className="text-sm text-gray-400 mb-5">We will respond within one business day.</p>
                <button onClick={() => setSent(false)} className="text-sm underline" style={{ color: "#FF5E00" }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handle} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: "name", label: "Your Name", ph: "Full name", type: "text", req: true },
                    { key: "phone", label: "Phone Number", ph: "+91 98765 43210", type: "tel", req: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="montserrat font-600 text-xs mb-1.5 block" style={{ color: "#555" }}>{f.label}</label>
                      <input
                        type={f.type}
                        required={f.req}
                        placeholder={f.ph}
                        className="w-full rounded-lg px-4 py-3 text-sm border outline-none transition-all"
                        style={{ borderColor: "#e0e0e0", color: "#333" }}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "#FF5E00")}
                        onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="montserrat font-600 text-xs mb-1.5 block" style={{ color: "#555" }}>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg px-4 py-3 text-sm border outline-none transition-all"
                    style={{ borderColor: "#e0e0e0", color: "#333" }}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#FF5E00")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>
                <div>
                  <label className="montserrat font-600 text-xs mb-1.5 block" style={{ color: "#555" }}>Select Project Type</label>
                  <select
                    className="w-full rounded-lg px-4 py-3 text-sm border outline-none appearance-none"
                    style={{ borderColor: "#e0e0e0", color: "#555" }}
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  >
                    <option value="">Select project type...</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="turnkey">Turnkey Solutions</option>
                  </select>
                </div>
                <div>
                  <label className="montserrat font-600 text-xs mb-1.5 block" style={{ color: "#555" }}>Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-lg px-4 py-3 text-sm border outline-none resize-none"
                    style={{ borderColor: "#e0e0e0", color: "#333" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#FF5E00")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>
                <button type="submit" className="btn-orange montserrat font-700 text-sm py-3.5 rounded-lg">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-2xl overflow-hidden" style={{ height: 280, border: "1.5px solid #e8e8e8" }}>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=350&fit=crop&auto=format"
            alt="Map location - Midnapur, Paschim Midnapur, West Bengal"
            className="w-full h-full object-cover"
          />
          <div className="relative -top-full h-full flex items-center justify-center" style={{ background: "rgba(26,39,68,0.25)" }}>
            <div className="bg-white rounded-xl px-6 py-3 shadow-lg text-center">
              <div className="montserrat font-800 text-sm mb-0.5" style={{ color: "#1a2744" }}>📍 Reena Designs & Constructions</div>
              <div className="text-xs text-gray-500">Midnapur, Paschim Midnapur, West Bengal 721101</div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
