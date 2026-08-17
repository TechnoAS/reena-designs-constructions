import { Link } from "react-router-dom"
import { SITE_CONTAINER } from "@/components/layout/constants"

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-slate-50 overflow-hidden">
      {/* Blueprint Technical Drawing Background */}
      <div className="absolute inset-0 w-full h-full bg-slate-50">
        {/* Vector Line Drawing Blueprint Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 1920 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Slate/navy grid lines for light background */}
              <pattern id="hero-blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1a2744" strokeWidth="0.6" opacity="0.08" />
                <path d="M 10 0 L 10 50 M 20 0 L 20 50 M 30 0 L 30 50 M 40 0 L 40 50 M 0 10 L 50 10 M 0 20 L 50 20 M 0 30 L 50 30 M 0 40 L 50 40" fill="none" stroke="#1a2744" strokeWidth="0.4" opacity="0.03" />
              </pattern>
              
              {/* Fade out for left side (under text) to keep text legible */}
              <linearGradient id="blueprint-drawings-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="35%" stopColor="#1a2744" stopOpacity="0.04" />
                <stop offset="60%" stopColor="#1a2744" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1a2744" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="accent-orange-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="35%" stopColor="#FF5E00" stopOpacity="0.1" />
                <stop offset="60%" stopColor="#FF5E00" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FF5E00" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Grid Fill */}
            <rect width="100%" height="100%" fill="url(#hero-blueprint-grid)" />

            {/* Left/Middle Background Details (Very faint behind text, to keep text readable) */}
            <g stroke="#1a2744" strokeWidth="0.8" fill="none" opacity="0.12">
              {/* Drafting coordinates / circular grids */}
              <circle cx="200" cy="450" r="150" strokeDasharray="3,3" />
              <circle cx="200" cy="450" r="80" />
              <line x1="50" y1="450" x2="350" y2="450" />
              <line x1="200" y1="300" x2="200" y2="600" />
              
              {/* Angle marking */}
              <path d="M 280 450 A 80 80 0 0 0 256.5 393.5" />
              <text x="275" y="420" fontSize="10" fontFamily="monospace">45°</text>
            </g>

            {/* MAIN DRAWINGS ON THE RIGHT (House, Crane, Bridge, Scaffolding) */}
            
            {/* 1. TOWER CRANE (x: 1450 to 1800, y: 60 to 700) */}
            <g stroke="url(#blueprint-drawings-fade)" strokeWidth="1" fill="none">
              {/* Vertical Mast Truss */}
              <line x1="1600" y1="120" x2="1600" y2="680" strokeWidth="1.2" />
              <line x1="1624" y1="120" x2="1624" y2="680" strokeWidth="1.2" />
              {/* Diagonal bracing on mast */}
              <path d="M 1600 120 L 1624 144 M 1600 144 L 1624 120 M 1600 144 L 1624 168 M 1600 168 L 1624 144 M 1600 168 L 1624 192 M 1600 192 L 1624 168 M 1600 192 L 1624 216 M 1600 216 L 1624 192 M 1600 216 L 1624 240 M 1600 240 L 1624 216 M 1600 240 L 1624 264 M 1600 264 L 1624 240 M 1600 264 L 1624 288 M 1600 288 L 1624 264 M 1600 288 L 1624 312 M 1600 312 L 1624 288 M 1600 312 L 1624 336 M 1600 336 L 1624 312 M 1600 336 L 1624 360 M 1600 360 L 1624 336 M 1600 360 L 1624 384 M 1600 384 L 1624 360 M 1600 384 L 1624 408 M 1600 408 L 1624 384 M 1600 408 L 1624 432 M 1600 432 L 1624 408 M 1600 432 L 1624 456 M 1600 456 L 1624 432 M 1600 456 L 1624 480 M 1600 480 L 1624 456 M 1600 480 L 1624 504 M 1600 504 L 1624 480 M 1600 504 L 1624 528 M 1600 528 L 1624 504 M 1600 528 L 1624 552 M 1600 552 L 1624 528 M 1600 552 L 1624 576 M 1600 576 L 1624 552 M 1600 576 L 1624 600 M 1600 600 L 1624 576 M 1600 600 L 1624 624 M 1600 624 L 1624 600 M 1600 624 L 1624 648 M 1600 648 L 1624 624 M 1600 648 L 1624 672 M 1600 672 L 1624 648" />

              {/* Crane cabin & tower top */}
              <rect x="1590" y="80" width="44" height="40" strokeWidth="1.2" fill="#ffffff" />
              <path d="M 1612 80 L 1612 40" strokeWidth="1.2" /> {/* Apex peak */}
              
              {/* Horizontal Jib Truss */}
              <line x1="1300" y1="90" x2="1750" y2="90" strokeWidth="1.2" />
              <line x1="1300" y1="105" x2="1750" y2="105" strokeWidth="1.2" />
              {/* Jib diagonals */}
              <path d="M 1300 105 L 1325 90 M 1325 105 L 1350 90 M 1350 105 L 1375 90 M 1375 105 L 1400 90 M 1400 105 L 1425 90 M 1425 105 L 1450 90 M 1450 105 L 1475 90 M 1475 105 L 1500 90 M 1500 105 L 1525 90 M 1525 105 L 1550 90 M 1550 105 L 1575 90 M 1575 105 L 1600 90 M 1600 105 L 1625 90 M 1625 105 L 1650 90 M 1650 105 L 1675 90 M 1675 105 L 1700 90 M 1700 105 L 1725 90 M 1725 105 L 1750 90" />
              
              {/* Tension Cables */}
              <line x1="1612" y1="40" x2="1400" y2="90" />
              <line x1="1612" y1="40" x2="1720" y2="90" />
              
              {/* Counterweight */}
              <rect x="1700" y="105" width="30" height="25" fill="#ffffff" strokeWidth="1.2" />
              <line x1="1715" y1="105" x2="1715" y2="130" />
              
              {/* Trolley, Hoist Cable & Hook */}
              <rect x="1420" y="105" width="15" height="6" fill="#1a2744" />
              <line x1="1427" y1="111" x2="1427" y2="280" strokeDasharray="3,3" />
              {/* Hook */}
              <path d="M 1427 280 C 1422 283 1422 288 1427 290 C 1432 292 1430 297 1425 295" strokeWidth="1.5" />
              
              {/* HOISTED STEEL I-BEAM */}
              <g transform="translate(1320, 300)" stroke="url(#blueprint-drawings-fade)" strokeWidth="1">
                {/* Suspension Cables */}
                <line x1="107" y1="-10" x2="50" y2="20" />
                <line x1="107" y1="-10" x2="160" y2="20" />
                {/* Horizontal Truss Steel Beam */}
                <rect x="20" y="20" width="170" height="15" fill="#ffffff" strokeWidth="1.5" />
                <line x1="20" y1="27.5" x2="190" y2="27.5" strokeDasharray="2,2" />
                <path d="M 20 20 L 35 35 M 35 20 L 50 35 M 50 20 L 65 35 M 65 20 L 80 35 M 80 20 L 95 35 M 95 20 L 110 35 M 110 20 L 125 35 M 125 20 L 140 35 M 140 20 L 155 35 M 155 20 L 170 35 M 170 20 L 185 35" strokeWidth="0.6" />
                
                {/* Hook connection node - Orange Accent */}
                <circle cx="107" cy="-10" r="3.5" fill="#FF5E00" stroke="#FF5E00" />
              </g>
            </g>

            {/* 2. MODERN HOUSE ELEVATION (x: 720 to 1180, y: 220 to 650) */}
            <g stroke="url(#blueprint-drawings-fade)" strokeWidth="1" fill="none">
              {/* Ground level reference line */}
              <line x1="680" y1="650" x2="1250" y2="650" strokeWidth="1.5" />
              <line x1="680" y1="670" x2="1250" y2="670" strokeDasharray="3,3" />

              {/* Main building box */}
              <rect x="750" y="340" width="380" height="310" strokeWidth="1.2" />
              {/* Columns */}
              <rect x="780" y="340" width="20" height="310" />
              <rect x="1100" y="340" width="20" height="310" />
              
              {/* First Floor Living Space (Sliding Glass Doors) */}
              <rect x="830" y="470" width="240" height="180" />
              <line x1="910" y1="470" x2="910" y2="650" />
              <line x1="990" y1="470" x2="990" y2="650" />
              
              {/* Second Story Cantilever */}
              <rect x="710" y="240" width="340" height="230" strokeWidth="1.5" fill="#ffffff" />
              
              {/* Floor dividers and structural hashes */}
              <line x1="710" y1="455" x2="1050" y2="455" strokeWidth="2" stroke="url(#blueprint-drawings-fade)" />
              
              {/* Window grid system */}
              <rect x="740" y="270" width="280" height="150" />
              <line x1="810" y1="270" x2="810" y2="420" />
              <line x1="880" y1="270" x2="880" y2="420" />
              <line x1="950" y1="270" x2="950" y2="420" />
              <line x1="740" y1="345" x2="1020" y2="345" />

              {/* Diagonal drafting layout lines */}
              <line x1="660" y1="240" x2="710" y2="240" />
              <line x1="1050" y1="240" x2="1160" y2="240" strokeDasharray="4,4" />
              <line x1="710" y1="180" x2="710" y2="240" strokeDasharray="3,3" />

              {/* Measurement Annotations (Color writings) */}
              <g stroke="none" fill="none">
                <line x1="710" y1="210" x2="1050" y2="210" stroke="url(#blueprint-drawings-fade)" strokeWidth="0.8" />
                <path d="M 710 206 L 710 214 M 1050 206 L 1050 214" stroke="url(#blueprint-drawings-fade)" strokeWidth="0.8" />
                <text x="880" y="202" fill="#FF5E00" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold" opacity="0.8">17.00 m</text>

                <line x1="670" y1="240" x2="670" y2="650" stroke="url(#blueprint-drawings-fade)" strokeWidth="0.8" />
                <path d="M 666 240 L 674 240 M 666 650 L 674 650" stroke="url(#blueprint-drawings-fade)" strokeWidth="0.8" />
                <text x="655" y="445" fill="#FF5E00" fontSize="11" fontFamily="monospace" transform="rotate(-90, 655, 445)" textAnchor="middle" fontWeight="bold" opacity="0.8">9.20 m</text>
              </g>

              {/* Accent Orange Joint Highlights */}
              <circle cx="710" cy="240" r="5" stroke="#FF5E00" strokeWidth="1.5" fill="none" opacity="0.8" />
              <circle cx="1050" cy="240" r="5" stroke="#FF5E00" strokeWidth="1.5" fill="#ffffff" opacity="0.8" />
              <circle cx="750" cy="340" r="4" stroke="#FF5E00" strokeWidth="1.5" fill="none" opacity="0.6" />
              <circle cx="1130" cy="340" r="4" stroke="#FF5E00" strokeWidth="1.5" fill="none" opacity="0.6" />
            </g>

            {/* 3. STRUCTURAL TRUSS BRIDGE (x: 1050 to 1600, y: 550 to 750) */}
            <g stroke="url(#blueprint-drawings-fade)" strokeWidth="1.2" fill="none">
              {/* Bridge Abutments / Piers */}
              <rect x="1100" y="650" width="30" height="90" strokeWidth="1.2" />
              <rect x="1400" y="650" width="30" height="90" strokeWidth="1.2" />
              {/* Foundation concrete diagonals */}
              <line x1="1100" y1="740" x2="1130" y2="650" />
              <line x1="1400" y1="740" x2="1430" y2="650" />

              {/* Bridge Road Deck */}
              <line x1="1000" y1="650" x2="1550" y2="650" strokeWidth="2" stroke="url(#blueprint-drawings-fade)" />
              <line x1="1000" y1="662" x2="1550" y2="662" strokeWidth="1" stroke="url(#blueprint-drawings-fade)" />

              {/* Arch truss profile */}
              <path d="M 1030 650 Q 1265 520 1500 650" strokeWidth="1.8" stroke="url(#blueprint-drawings-fade)" />
              <path d="M 1030 650 Q 1265 500 1500 650" strokeWidth="1" stroke="url(#blueprint-drawings-fade)" strokeDasharray="4,2" />

              {/* Truss Diagonal Grid (Warren Truss style) */}
              <path d="M 1060 635 L 1100 650 M 1100 650 L 1140 615 M 1140 615 L 1180 650 M 1180 650 L 1220 595 M 1220 595 L 1260 650 M 1260 650 L 1300 585 M 1300 585 L 1340 650 M 1340 650 L 1380 595 M 1380 595 L 1420 650 M 1420 650 L 1460 615 M 1460 615 L 1500 650" strokeWidth="0.8" />
              
              {/* Vertical bridge suspenders */}
              <line x1="1100" y1="628" x2="1100" y2="650" strokeWidth="0.6" />
              <line x1="1160" y1="610" x2="1160" y2="650" strokeWidth="0.6" />
              <line x1="1220" y1="592" x2="1220" y2="650" strokeWidth="0.6" />
              <line x1="1280" y1="582" x2="1280" y2="650" strokeWidth="0.6" />
              <line x1="1340" y1="585" x2="1340" y2="650" strokeWidth="0.6" />
              <line x1="1400" y1="595" x2="1400" y2="650" strokeWidth="0.6" />
              <line x1="1460" y1="618" x2="1460" y2="650" strokeWidth="0.6" />

              {/* Water level lines underneath */}
              <path d="M 1140 710 Q 1160 707 1180 710 T 1220 710 T 1260 710 T 1300 710 T 1340 710 T 1380 710" strokeWidth="0.6" opacity="0.3" />
              <path d="M 1150 720 Q 1170 717 1190 720 T 1230 720 T 1270 720 T 1310 720 T 1350 720 T 1390 720" strokeWidth="0.4" strokeDasharray="3,3" opacity="0.2" />

              {/* Dimension label for bridge (Color writings) */}
              <g stroke="none" fill="none">
                <text x="1270" y="685" fill="#FF5E00" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold" opacity="0.85">BRIDGE SPAN L = 47.00 m</text>
              </g>

              {/* Orange node points */}
              <circle cx="1265" cy="580" r="3.5" fill="#FF5E00" stroke="#FF5E00" opacity="0.85" />
              <circle cx="1030" cy="650" r="4.5" fill="#FF5E00" stroke="#FF5E00" opacity="0.85" />
              <circle cx="1500" cy="650" r="4.5" fill="#FF5E00" stroke="#FF5E00" opacity="0.85" />
            </g>
          </svg>
        </div>
      </div>

      <div className={`${SITE_CONTAINER} relative z-10 w-full py-32 md:py-40`}>
        <div className="max-w-xl md:max-w-[65%]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-orange-600">Building with purpose</p>
          <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#1a2744] md:text-6xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Building <span className="text-orange-500">dreams</span>
            <span className="mt-2 block">creating</span>
            <span className="mt-2 block text-orange-500">reality</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 md:text-base font-medium">
            From concept to completion, we craft high-performing spaces that feel refined, functional, and truly yours.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </Link>
            <Link to="/our-work" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600 backdrop-blur-sm">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 backdrop-blur-md shadow-lg">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          250+ projects delivered
        </div>
      </div>
    </section>
  )
}

