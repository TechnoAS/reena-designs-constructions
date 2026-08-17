import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import v4Logo from "@/imports/V4.png"
import { NAV_CONTAINER, SITE_CONTAINER, NAV_LINKS } from "./constants"

function DropdownMenu({ items }: { items: typeof NAV_LINKS[3]["dropdown"] }) {
  return (
    <div
      className="absolute top-full left-0 mt-1 rounded-xl shadow-2xl py-2 z-50 min-w-56"
      style={{ background: "#fff", border: "1.5px solid #e8e8e8" }}
    >
      {items!.map((item) => {
        if ("children" in item && item.children) {
          return (
            <div key={item.label} className="group relative">
              <div className="px-4 py-2.5 text-sm font-600 flex items-center justify-between cursor-default" style={{ color: "#1a2744" }}>
                {item.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div className="absolute left-full top-0 hidden group-hover:block rounded-xl shadow-xl py-2 min-w-48" style={{ background: "#fff", border: "1.5px solid #e8e8e8" }}>
                {item.children.map((child) => (
                  <Link key={child.href} to={child.href} className="block px-4 py-2.5 text-sm hover:bg-orange-50 transition-colors" style={{ color: "#444" }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        }
        const simple = item as { label: string; href: string }
        return (
          <Link key={simple.href} to={simple.href} className="block px-4 py-2.5 text-sm hover:bg-orange-50 transition-colors" style={{ color: "#444" }}>
            {simple.label}
          </Link>
        )
      })}
    </div>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileWork, setMobileWork] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMenuOpen(false); setDropOpen(false) }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isHomePage = location.pathname === "/"
  const hasBg = scrolled || !isHomePage
  const navTextColor = "#1f2937"

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasBg ? "bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className={`${SITE_CONTAINER} py-1.5 flex items-center justify-between`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={v4Logo} alt="Logo" className="w-[58px] h-[58px] object-contain rounded" />
          <div>
            <div className="text-base font-black leading-tight" style={{ fontFamily: "Inter, sans-serif", color: "#0f172a" }}>REENA</div>
            <div className="text-[9px] font-medium leading-tight tracking-[0.08em]" style={{ fontFamily: "Inter, sans-serif", color: "#475569" }}>DESIGNS &amp; CONSTRUCTIONS</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="relative" ref={dropRef}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  className="flex items-center gap-1 pb-0.5 text-sm font-500 transition-colors"
                  style={{ color: isActive(link.href) ? "#FF5E00" : navTextColor }}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {isActive(link.href) && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: "#FF5E00" }} />}
                </button>
                {dropOpen && <DropdownMenu items={link.dropdown} />}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="relative pb-0.5 text-sm font-500 transition-colors"
                style={{ color: isActive(link.href) ? "#FF5E00" : navTextColor }}
              >
                {link.label}
                {isActive(link.href) && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: "#FF5E00" }} />}
              </Link>
            )
          ))}
        </div>

        {/* CTA */}
        <Link to="/contact" className="hidden md:flex btn-orange montserrat font-700 text-sm px-5 py-2.5 items-center gap-2">
          Contact Us
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 5.5A1.5 1.5 0 013.8 4h.7c.5 0 1 .65.8 1.1L4.5 7a1.5 1.5 0 00.35 1.6l.6.6a7 7 0 002.35 1.65l.6.6A1.5 1.5 0 009.9 10.5l1.9-.8c.45-.2 1.1.3 1.1.8v.7A1.5 1.5 0 0111.5 12.6C5.6 12.1 2 6.8 2.5 5.5z" fill="currentColor"/></svg>
        </Link>

        {/* Burger */}
        <button className="p-2 md:hidden" style={{ color: "#1a2744" }} onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/> : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-1" style={{ background: "rgba(255,255,255,0.97)", borderColor: "#eee" }}>
          <Link to="/" className="py-2 text-sm font-500" style={{ color: "#333" }}>Home</Link>
          <Link to="/about" className="py-2 text-sm font-500" style={{ color: "#333" }}>About Us</Link>
          <Link to="/services" className="py-2 text-sm font-500" style={{ color: "#333" }}>Services</Link>
          <button onClick={() => setMobileWork(!mobileWork)} className="py-2 text-sm font-500 flex items-center justify-between" style={{ color: "#333" }}>
            Our Work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${mobileWork ? "rotate-180" : ""}`}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          {mobileWork && (
            <div className="pl-4 flex flex-col gap-1 border-l-2" style={{ borderColor: "#FF5E00" }}>
              <Link to="/our-work" className="py-1.5 text-sm" style={{ color: "#555" }}>Overview</Link>
              <Link to="/our-work/projects/successful" className="py-1.5 text-sm" style={{ color: "#555" }}>Successful Projects</Link>
              <Link to="/our-work/projects/ongoing" className="py-1.5 text-sm" style={{ color: "#555" }}>Ongoing Projects</Link>
              <Link to="/our-work/interior/residential" className="py-1.5 text-sm" style={{ color: "#555" }}>Residential Interior</Link>
              <Link to="/our-work/interior/commercial" className="py-1.5 text-sm" style={{ color: "#555" }}>Commercial Interior</Link>
              <Link to="/our-work/exterior" className="py-1.5 text-sm" style={{ color: "#555" }}>Exterior Design</Link>
              <Link to="/our-work/renovation" className="py-1.5 text-sm" style={{ color: "#555" }}>Renovation Projects</Link>
            </div>
          )}
          <Link to="/contact" className="btn-orange montserrat font-700 text-sm px-5 py-2.5 text-center mt-2">Contact Us</Link>
        </div>
      )}
    </nav>
  )
}
