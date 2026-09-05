import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, Loader2, AlertCircle } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"
import { SITE, ACTIVE_SOCIAL_LINKS } from "@/data/siteInfo"

/**
 * Where enquiries are posted. Set VITE_CONTACT_ENDPOINT to a form backend
 * (Formspree, Web3Forms, Basin, or your own handler) at build time.
 *
 * When it is unset the form falls back to opening the visitor's mail client
 * with the enquiry pre-filled. That is not ideal, but it is honest: the
 * previous version showed "Message Sent!" while doing nothing at all, so every
 * enquiry the site ever received was silently discarded.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

const PROJECT_TYPES = [
  { value: "residential", label: "Residential Construction" },
  { value: "commercial", label: "Commercial Construction" },
  { value: "interior", label: "Interior Design" },
  { value: "renovation", label: "Renovation" },
  { value: "turnkey", label: "Turnkey Solutions" },
]

const EMPTY = { name: "", phone: "", email: "", projectType: "", message: "" }

type Status = "idle" | "sending" | "sent" | "error"

export default function Contact() {
  // Project cards link here as /contact?project=Sunrise%20Villa. Seeding the
  // message means the visitor does not have to retype which build they are
  // asking about, and the enquiry arrives with that context attached.
  const [params] = useSearchParams()
  const project = params.get("project")

  const [form, setForm] = useState(() =>
    project ? { ...EMPTY, message: `I would like to know more about ${project}.\n\n` } : EMPTY,
  )
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  const set = (key: keyof typeof EMPTY) => (value: string) => setForm((f) => ({ ...f, [key]: value }))

  const mailtoFallback = () => {
    const chosen = PROJECT_TYPES.find((p) => p.value === form.projectType)?.label ?? "Not specified"
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Email: ${form.email}`,
      `Project type: ${chosen}`,
      "",
      form.message,
    ].join("\n")
    window.location.href =
      `mailto:${SITE.email}` +
      `?subject=${encodeURIComponent(`Website enquiry — ${form.name}`)}` +
      `&body=${encodeURIComponent(body)}`
  }

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return

    setStatus("sending")
    setError("")

    if (!ENDPOINT) {
      mailtoFallback()
      setStatus("sent")
      return
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          projectType:
            PROJECT_TYPES.find((p) => p.value === form.projectType)?.label ?? form.projectType,
          source: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setForm(EMPTY)
      setStatus("sent")
    } catch (err) {
      // Never claim success on a failure — the visitor needs to know their
      // enquiry did not arrive, and needs a way to reach us regardless.
      setError(err instanceof Error ? err.message : "Something went wrong")
      setStatus("error")
    }
  }

  const contactInfo = [
    { Icon: MapPin, label: "Address", value: SITE.addressLines, href: null },
    { Icon: Phone, label: "Phone", value: SITE.phones.join("\n"), href: SITE.phoneHref },
    { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: Clock, label: "Office Hours", value: SITE.hours, href: null },
  ]

  const sending = status === "sending"

  return (
    <PageWrapper>
      <Seo
        title="Contact Us — Free Site Visit & Quote in Midnapur"
        description="Talk to Reena Designs & Constructions about your build. Free site visit across Paschim Midnapur, itemised quotation and a written completion date. Call +91 98765 43210."
      />
      <PageHeader title="CONTACT US" crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className={`${SITE_CONTAINER} flex flex-col gap-12 py-14`}>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <span
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-xl"
                    style={{ background: "#fff4ef", border: "1px solid #ffe0d0" }}
                  >
                    <Icon size={18} strokeWidth={1.9} className="text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="montserrat font-700 mb-0.5 text-xs tracking-widest uppercase text-slate-400">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm whitespace-pre-line text-slate-700 transition-colors hover:text-brand"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm whitespace-pre-line text-slate-700">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {ACTIVE_SOCIAL_LINKS.length > 0 && (
              <div>
                <div className="montserrat font-700 mb-3 text-xs tracking-widest uppercase text-slate-400">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  {ACTIVE_SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border-[1.5px] border-hairline bg-surface transition-all hover:scale-105"
                    >
                      <span className="font-700 text-xs text-navy">{s.label[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: form */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-0.5 w-10 rounded-full bg-brand" />
              <h2 className="montserrat font-800 text-xl text-navy">SEND US A MESSAGE</h2>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col items-center rounded-2xl border-[1.5px] border-hairline bg-surface py-12 text-center">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "#fff4ef", border: "2px solid #FF5E00" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 12l6 6L20 6"
                      stroke="var(--color-brand)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="montserrat font-800 mb-2 text-lg text-navy">
                  {ENDPOINT ? "Message sent" : "Your email is ready"}
                </h3>
                <p className="mb-5 max-w-xs text-sm text-slate-500">
                  {ENDPOINT
                    ? "We will respond within one business day."
                    : "Your mail app should have opened with the enquiry filled in — press send and we will reply within one business day."}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-sm text-brand underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handle} className="flex flex-col gap-4" noValidate={false}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="montserrat font-600 mb-1.5 block text-xs text-slate-600">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Full name"
                      className="field"
                      disabled={sending}
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="montserrat font-600 mb-1.5 block text-xs text-slate-600">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      className="field"
                      disabled={sending}
                      value={form.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="montserrat font-600 mb-1.5 block text-xs text-slate-600">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="field"
                    disabled={sending}
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="montserrat font-600 mb-1.5 block text-xs text-slate-600"
                  >
                    Select Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="field appearance-none"
                    disabled={sending}
                    value={form.projectType}
                    onChange={(e) => set("projectType")(e.target.value)}
                  >
                    <option value="">Select project type...</option>
                    {PROJECT_TYPES.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="montserrat font-600 mb-1.5 block text-xs text-slate-600">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="field resize-none"
                    disabled={sending}
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700"
                  >
                    <AlertCircle size={16} strokeWidth={2} className="mt-px flex-none" aria-hidden="true" />
                    <span>
                      Your message could not be sent ({error}). Please call{" "}
                      <a href={SITE.phoneHref} className="font-semibold underline">
                        {SITE.phones[0]}
                      </a>{" "}
                      or email{" "}
                      <a href={`mailto:${SITE.email}`} className="font-semibold underline">
                        {SITE.email}
                      </a>
                      .
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-orange montserrat font-700 gap-2 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 size={15} strokeWidth={2.4} className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>Send Message →</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="overflow-hidden rounded-2xl border-[1.5px] border-hairline">
          <iframe
            title="Reena Designs & Constructions on the map — Midnapur, West Bengal"
            src="https://www.openstreetmap.org/export/embed.html?bbox=87.28%2C22.39%2C87.36%2C22.45&layer=mapnik&marker=22.4257%2C87.3199"
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </PageWrapper>
  )
}
