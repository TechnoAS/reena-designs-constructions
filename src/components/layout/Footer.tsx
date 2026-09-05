import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons"
import v4Logo from "@/imports/V4.png"
import { SITE_CONTAINER } from "./constants"
import { SITE, ACTIVE_SOCIAL_LINKS } from "@/data/siteInfo"

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
} as const

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #111a2e 0%, #1a2744 100%)" }}>
      {/* Vector Line Drawing Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.35]">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
              <path d="M 10 0 L 10 40 M 20 0 L 20 40 M 30 0 L 30 40 M 0 10 L 40 10 M 0 20 L 40 20 M 0 30 L 40 30" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.12" />
            </pattern>
          </defs>
          
          {/* Grid Background */}
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          
          {/* Left Side: Truss Structure & Construction Elevation */}
          <g transform="translate(60, 40)">
            {/* Ground & Foundation lines */}
            <line x1="0" y1="200" x2="350" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            <line x1="0" y1="220" x2="350" y2="220" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.3" />
            
            {/* Building Frame */}
            <rect x="30" y="80" width="80" height="120" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            <rect x="150" y="50" width="120" height="150" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            
            {/* Diagonal Structural Bracing (Truss-like) */}
            <path d="M 30 80 L 110 200 M 110 80 L 30 200" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
            <path d="M 150 50 L 270 200 M 270 50 L 150 200" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
            
            {/* Roof Truss Detail */}
            <path d="M 20 80 L 70 40 L 120 80 Z" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <line x1="70" y1="40" x2="70" y2="80" stroke="#ffffff" strokeWidth="0.8" opacity="0.4" />
            <line x1="45" y1="60" x2="45" y2="80" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
            <line x1="95" y1="60" x2="95" y2="80" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
            
            {/* Dimension Lines */}
            <line x1="30" y1="235" x2="270" y2="235" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <path d="M 30 231 L 30 239 M 270 231 L 270 239" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <path d="M 30 235 L 35 231 M 30 235 L 35 239 M 270 235 L 265 231 M 270 235 L 265 239" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <text x="150" y="230" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.7">24.00 m</text>
            
            {/* Elevation Dimension (Vertical) */}
            <line x1="295" y1="50" x2="295" y2="200" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <path d="M 291 50 L 299 50 M 291 200 L 299 200" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <text x="305" y="130" fill="#ffffff" fontSize="9" fontFamily="monospace" transform="rotate(90, 305, 130)" textAnchor="middle" opacity="0.7">15.00 m</text>
            
            {/* Accent Orange Dimension Line / Circle (Theme connection) */}
            <circle cx="70" cy="40" r="4" stroke="var(--color-brand)" strokeWidth="1.5" fill="none" opacity="0.7" />
            <circle cx="150" cy="50" r="4" stroke="var(--color-brand)" strokeWidth="1.5" fill="none" opacity="0.7" />
          </g>
          
          {/* Right Side: Architectural Blueprint Floor Plan */}
          <g transform="translate(1120, 50)">
            {/* Wall boundaries */}
            <rect x="0" y="0" width="220" height="170" stroke="#ffffff" strokeWidth="1.2" opacity="0.55" />
            
            {/* Interior wall dividers */}
            <line x1="80" y1="0" x2="80" y2="170" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            <line x1="150" y1="0" x2="150" y2="170" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            <line x1="0" y1="70" x2="220" y2="70" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            
            {/* Column Markers (hashed squares) */}
            <rect x="-3" y="-3" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="77" y="-3" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="147" y="-3" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="217" y="-3" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="-3" y="67" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="77" y="67" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="147" y="67" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="217" y="67" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="-3" y="167" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="77" y="167" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="147" y="167" width="6" height="6" fill="#ffffff" opacity="0.5" />
            <rect x="217" y="167" width="6" height="6" fill="#ffffff" opacity="0.5" />

            {/* Door swing detail */}
            <path d="M 80 50 A 20 20 0 0 1 100 70" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.45" />
            <line x1="80" y1="50" x2="80" y2="70" stroke="#ffffff" strokeWidth="0.8" opacity="0.45" />
            <line x1="80" y1="70" x2="100" y2="70" stroke="#ffffff" strokeWidth="0.8" opacity="0.45" />
            
            {/* Stairs layout */}
            <g opacity="0.4">
              <line x1="10" y1="10" x2="70" y2="10" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="18" x2="70" y2="18" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="26" x2="70" y2="26" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="34" x2="70" y2="34" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="42" x2="70" y2="42" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="50" x2="70" y2="50" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="58" x2="70" y2="58" stroke="#ffffff" strokeWidth="0.8" />
              {/* Direction Indicator */}
              <path d="M 40 55 L 40 15 M 37 20 L 40 15 L 43 20" stroke="#ffffff" strokeWidth="1" fill="none" />
            </g>
            
            {/* Axis grid bubbles */}
            <circle cx="110" cy="-20" r="10" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <text x="110" y="-16" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">B</text>
            <line x1="110" y1="-10" x2="110" y2="0" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.5" />

            <circle cx="185" cy="-20" r="10" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <text x="185" y="-16" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">C</text>
            <line x1="185" y1="-10" x2="185" y2="0" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.5" />

            <circle cx="240" cy="35" r="10" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <text x="240" y="39" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">1</text>
            <line x1="220" y1="35" x2="230" y2="35" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.5" />

            <circle cx="240" cy="120" r="10" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
            <text x="240" y="124" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">2</text>
            <line x1="220" y1="120" x2="230" y2="120" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.5" />
            
            {/* Orange Highlight Accent on a structural boundary */}
            <rect x="150" y="70" width="70" height="100" stroke="var(--color-brand)" strokeWidth="1" strokeDasharray="2,2" fill="none" opacity="0.6" />
          </g>
        </svg>
      </div>

      <div className={`${SITE_CONTAINER} relative z-10 grid gap-12 py-20 md:grid-cols-4 md:gap-10 lg:py-24`}>
        <div className="md:pr-4">
          <div className="mb-5 flex items-center gap-2.5">
            <img
              src={v4Logo}
              alt=""
              width={52}
              height={52}
              loading="lazy"
              className="h-[52px] w-[52px] rounded object-contain opacity-90"
            />
            <div>
              <div className="montserrat font-900 text-sm text-white">REENA</div>
              <div className="text-white/40" style={{ fontSize: "9px", letterSpacing: "0.07em" }}>DESIGNS &amp; CONSTRUCTIONS</div>
            </div>
          </div>
          <p className="mb-6 text-xs leading-6 text-white/45">
            A design-led construction company based in Midnapur, Paschim Midnapur, delivering turnkey construction,
            architecture, interiors and renovation. 250+ projects completed over 15+ years — every one
            handed over to the approved drawing, on the date we committed to.
          </p>
          {/* Only profiles with a real URL are rendered. These were four
              `href="#"` anchors, which push a bare hash onto the router and
              read as broken outbound links to a crawler. Add a URL in
              siteInfo.ts and the icon appears. */}
          {ACTIVE_SOCIAL_LINKS.length > 0 && (
            <div className="flex gap-2.5">
              {ACTIVE_SOCIAL_LINKS.map(({ label, url }) => {
                const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS]
                if (!Icon) return null
                return (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${SITE.name} on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-white/50 transition duration-300 hover:bg-orange-500 hover:text-white"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          )}
        </div>

        <div>
          <h4 className="montserrat font-800 mb-6 text-xs uppercase tracking-widest text-white">Quick Links</h4>
          {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Our Work", "/our-work"], ["Contact Us", "/contact"]].map(([l, h]) => (
            <Link key={l} to={h} className="group mb-3.5 flex items-center gap-1.5 text-xs text-white/45 transition-colors hover:text-white/85">
              <ArrowRight size={11} strokeWidth={2.2} className="text-orange-500/0 transition-all duration-300 group-hover:text-orange-500" aria-hidden="true" />
              {l}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="montserrat font-800 mb-6 text-xs uppercase tracking-widest text-white">Services</h4>
          {[
            ["Building Construction", "/services"],
            ["Architectural Design", "/services"],
            ["Interior Design", "/our-work/interior/residential"],
            ["Renovation & Remodeling", "/our-work/renovation"],
            ["Turnkey Solutions", "/contact"],
          ].map(([l, h]) => (
            <Link key={l} to={h} className="group mb-3.5 flex items-center gap-1.5 text-xs text-white/45 transition-colors hover:text-white/85">
              <ArrowRight size={11} strokeWidth={2.2} className="text-orange-500/0 transition-all duration-300 group-hover:text-orange-500" aria-hidden="true" />
              {l}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="montserrat font-800 mb-6 text-xs uppercase tracking-widest text-white">Contact Info</h4>
          {[
            { Icon: MapPin, text: `${SITE.address.street}, ${SITE.address.region} ${SITE.address.postalCode}, India`, href: null },
            { Icon: Phone, text: SITE.phones[0], href: SITE.phoneHref },
            { Icon: Mail, text: SITE.email, href: `mailto:${SITE.email}` },
          ].map(({ Icon, text, href }) => (
            <div key={text} className="mb-4 flex items-start gap-2.5">
              <Icon size={14} strokeWidth={1.9} className="mt-0.5 flex-none text-orange-500" aria-hidden="true" />
              {href ? (
                <a href={href} className="text-xs leading-relaxed text-white/45 transition-colors hover:text-white/85">{text}</a>
              ) : (
                <span className="text-xs leading-relaxed text-white/45">{text}</span>
              )}
            </div>
          ))}
          <div className="mt-6 rounded-xl px-4 py-3.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div className="montserrat font-700 text-[10px] uppercase tracking-[0.2em] text-orange-400">Office hours</div>
            <div className="mt-1.5 text-xs text-white/50">{SITE.hours}</div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-between gap-3 border-t py-6 text-center md:flex-row md:px-14"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span className="text-xs text-white/30">
          © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </span>
        <div className="flex items-center gap-5">
          <Link to="/privacy" className="text-xs text-white/30 transition-colors hover:text-white/70">
            Privacy Policy
          </Link>
          <Link to="/cookies" className="text-xs text-white/30 transition-colors hover:text-white/70">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
