import type { ReactNode } from "react"

/**
 * The building, drawn at whichever of the 19 stages is currently selected.
 *
 * Every element declares the stage range it exists in, so the scene is a pure
 * function of `step`: bare plot → survey → ghosted design → sanction → materials
 * → foundation → frame → services → finishes → furnished → keys.
 *
 * This is the mechanism the step list only named. A reader watching the walls
 * close in and the crane leave understands the sequence in a way nineteen
 * captions cannot convey.
 */

const GROUND = 384

/** Shows its children only while `step` is within [from, until]. */
function L({
  step,
  from,
  until,
  children,
}: {
  step: number
  from: number
  until?: number
  children: ReactNode
}) {
  const on = step >= from && (until === undefined || step <= until)
  return <g className={`bs-layer${on ? " is-on" : ""}`}>{children}</g>
}

export default function BuildScene({ step }: { step: number }) {
  return (
    <svg
      viewBox="0 0 720 460"
      role="img"
      aria-label={`Construction progress at step ${step} of 19`}
      className="h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2f7" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <linearGradient id="bs-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eef1f6" />
        </linearGradient>
        <linearGradient id="bs-roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2b3f68" />
          <stop offset="100%" stopColor="#1a2744" />
        </linearGradient>
        <linearGradient id="bs-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCF9E" />
          <stop offset="100%" stopColor="#FF9A4D" />
        </linearGradient>
      </defs>

      <rect width="720" height="460" fill="url(#bs-sky)" rx="16" />

      {/* Drafting grid — always present, this is a drawing board */}
      <g opacity="0.5">
        {Array.from({ length: 17 }, (_, i) => (
          <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="460" stroke="#1a2744" strokeWidth="0.4" opacity="0.07" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 46} x2="720" y2={i * 46} stroke="#1a2744" strokeWidth="0.4" opacity="0.07" />
        ))}
      </g>

      {/* ── Sun (handover) ────────────────────────────────────── */}
      <L step={step} from={19}>
        <circle cx="618" cy="74" r="24" fill="url(#bs-glow)" opacity="0.9" />
        <g stroke="#FF9A4D" strokeWidth="2" strokeLinecap="round" opacity="0.7">
          <path d="M618 34v-12M618 126v12M578 74h-12M658 74h12M590 46l-8-8M646 102l8 8M646 46l8-8M590 102l-8 8" />
        </g>
      </L>

      {/* ── Ground ───────────────────────────────────────────── */}
      <line x1="24" y1={GROUND} x2="696" y2={GROUND} stroke="#1a2744" strokeWidth="2" opacity="0.55" />
      <g stroke="#1a2744" strokeWidth="0.8" opacity="0.28">
        {Array.from({ length: 34 }, (_, i) => (
          <line key={i} x1={32 + i * 20} y1={GROUND} x2={22 + i * 20} y2={GROUND + 10} />
        ))}
      </g>

      {/* ── 1. Plot boundary ─────────────────────────────────── */}
      <L step={step} from={1}>
        <path
          d={`M96 ${GROUND} l40 -34 h448 l40 34`}
          stroke="#1a2744"
          strokeWidth="1.2"
          strokeDasharray="7 6"
          opacity="0.35"
        />
      </L>

      {/* ── 2. Survey ────────────────────────────────────────── */}
      <L step={step} from={2} until={9}>
        <g stroke="#FF5E00" strokeWidth="1.6" opacity="0.85">
          <path d="M150 384v-22M570 384v-22M360 350v-14" />
          <circle cx="150" cy="358" r="3.5" fill="#FF5E00" />
          <circle cx="570" cy="358" r="3.5" fill="#FF5E00" />
        </g>
        {/* Dumpy level on a tripod */}
        <g stroke="#1a2744" strokeWidth="1.6" opacity="0.55">
          <path d="M646 384l10-30M666 384l-10-30M656 354v-6" />
          <rect x="644" y="336" width="24" height="12" rx="2" fill="#fff" />
        </g>
      </L>

      {/* ── 3. Plot dimensions ───────────────────────────────── */}
      <L step={step} from={3} until={9}>
        <g stroke="#1a2744" strokeWidth="0.9" opacity="0.5">
          <path d="M150 404h420M150 398v12M570 398v12" />
        </g>
        <text x="360" y="422" fill="#FF5E00" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          17.00 m
        </text>
      </L>

      {/* ── 4–9. Ghosted design ──────────────────────────────── */}
      <L step={step} from={4} until={10}>
        <g stroke="#1a2744" strokeWidth="1.4" strokeDasharray="6 5" opacity="0.45">
          <path d={`M228 ${GROUND}v-176h264v176`} />
          <path d="M208 208l152 -84 152 84" strokeLinejoin="round" />
        </g>
      </L>

      {/* ── 5. Structural grid ───────────────────────────────── */}
      <L step={step} from={5} until={10}>
        <g stroke="#FF5E00" strokeWidth="1.1" strokeDasharray="5 5" opacity="0.6">
          <path d={`M256 ${GROUND}v-176M464 ${GROUND}v-176M228 268h264`} />
        </g>
      </L>

      {/* ── 6. Ghost openings ────────────────────────────────── */}
      <L step={step} from={6} until={10}>
        <g stroke="#1a2744" strokeWidth="1.1" strokeDasharray="4 4" opacity="0.4">
          <rect x="272" y="234" width="60" height="46" />
          <rect x="388" y="234" width="60" height="46" />
          <rect x="336" y="312" width="48" height="72" />
        </g>
      </L>

      {/* ── 7. Sanction stamp ────────────────────────────────── */}
      <L step={step} from={7} until={10}>
        <g transform="rotate(-8 566 168)">
          <rect x="506" y="140" width="120" height="52" rx="8" fill="none" stroke="#16a34a" strokeWidth="2.4" opacity="0.85" />
          <text x="566" y="164" fill="#16a34a" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle" opacity="0.9">
            SANCTIONED
          </text>
          <text x="566" y="180" fill="#16a34a" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.7">
            MUNICIPALITY
          </text>
        </g>
      </L>

      {/* ── 8. Fixed cost tag ────────────────────────────────── */}
      <L step={step} from={8} until={10}>
        <g>
          <rect x="70" y="150" width="128" height="46" rx="8" fill="#1a2744" opacity="0.92" />
          <text x="134" y="169" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.65">
            FIXED CONTRACT
          </text>
          <text x="134" y="185" fill="#FF5E00" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            ITEMISED ✓
          </text>
        </g>
      </L>

      {/* ── 9. Materials on site ─────────────────────────────── */}
      <L step={step} from={9} until={15}>
        <g>
          {/* Brick stack */}
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={78 + c * 22 + (r % 2 ? 6 : 0)}
                y={GROUND - 12 - r * 11}
                width="20"
                height="9"
                rx="1.5"
                fill="#c2703f"
                opacity="0.75"
              />
            )),
          )}
          {/* Sand pile */}
          <path d={`M176 ${GROUND}l30 -30 30 30z`} fill="#d9c9a3" opacity="0.85" />
          {/* Cement bags */}
          <rect x="600" y={GROUND - 22} width="30" height="22" rx="3" fill="#94a3b8" opacity="0.8" />
          <rect x="634" y={GROUND - 16} width="30" height="16" rx="3" fill="#94a3b8" opacity="0.65" />
        </g>
      </L>

      {/* ── 10. Foundation ───────────────────────────────────── */}
      <L step={step} from={10}>
        <g>
          <rect x="238" y={GROUND} width="46" height="26" rx="2" fill="#94a3b8" opacity="0.45" />
          <rect x="436" y={GROUND} width="46" height="26" rx="2" fill="#94a3b8" opacity="0.45" />
          <rect x="222" y={GROUND - 10} width="276" height="10" rx="2" fill="#64748b" opacity="0.5" />
        </g>
      </L>

      {/* ── 11–14. Frame under construction ──────────────────── */}
      <L step={step} from={11} until={14}>
        <g>
          <rect x="228" y="208" width="264" height={GROUND - 218} fill="url(#bs-wall)" opacity="0.75" />
          <g stroke="#1a2744" strokeWidth="1.4" opacity="0.5">
            <path d={`M256 ${GROUND - 10}v-166M464 ${GROUND - 10}v-166M228 268h264M228 208h264`} />
          </g>
          {/* Scaffolding */}
          <g stroke="#FF5E00" strokeWidth="1.3" opacity="0.55">
            <path d="M212 200v184M504 200v184M212 248h292M212 306h292M212 364h292" />
            <path d="M212 200l292 48M504 200l-292 48" strokeWidth="0.6" opacity="0.4" />
          </g>
        </g>
      </L>

      {/* Roof structure appears with the frame, solid from 15 */}
      <L step={step} from={11} until={14}>
        <path d="M208 208l152 -84 152 84" stroke="#1a2744" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
      </L>

      {/* ── 12. Electrical ───────────────────────────────────── */}
      <L step={step} from={12}>
        <g stroke="#f59e0b" strokeWidth="1.6" opacity={step >= 15 ? 0.22 : 0.9} strokeLinecap="round">
          <path d="M272 372v-40l24-14v-30h40" fill="none" />
          <path d="M448 372v-56l-26-16" fill="none" />
          <circle cx="336" cy="288" r="3.5" fill="#f59e0b" stroke="none" />
          <circle cx="422" cy="300" r="3.5" fill="#f59e0b" stroke="none" />
        </g>
      </L>

      {/* ── 13. Plumbing ─────────────────────────────────────── */}
      <L step={step} from={13}>
        <g stroke="#0ea5e9" strokeWidth="2" opacity={step >= 15 ? 0.22 : 0.9} strokeLinecap="round">
          <path d="M300 384v-52h-28" fill="none" />
          <path d="M420 384v-64h30" fill="none" />
        </g>
      </L>

      {/* ── 14. Flooring ─────────────────────────────────────── */}
      <L step={step} from={14}>
        <g stroke="#1a2744" strokeWidth="0.7" opacity="0.3">
          <path d="M228 374h264M228 364h264" />
          <path d="M272 364v20M316 364v20M360 364v20M404 364v20M448 364v20" />
        </g>
      </L>

      {/* ── 15+. Finished shell ──────────────────────────────── */}
      <L step={step} from={15}>
        <g>
          <rect x="228" y="208" width="264" height={GROUND - 218} fill="url(#bs-wall)" />
          <rect x="228" y="208" width="264" height={GROUND - 218} fill="none" stroke="#1a2744" strokeWidth="1.6" opacity="0.55" />
          <path d="M208 208l152 -84 152 84z" fill="url(#bs-roof)" />
          <path d="M208 208l152 -84 152 84" stroke="#1a2744" strokeWidth="2" strokeLinejoin="round" opacity="0.7" />
          <rect x="196" y="204" width="328" height="10" rx="3" fill="#1a2744" opacity="0.85" />
          {/* Windows */}
          <rect x="272" y="234" width="60" height="46" rx="3" fill="#cfe0f2" stroke="#1a2744" strokeWidth="1.4" opacity="0.95" />
          <rect x="388" y="234" width="60" height="46" rx="3" fill="#cfe0f2" stroke="#1a2744" strokeWidth="1.4" opacity="0.95" />
          <path d="M302 234v46M272 257h60M418 234v46M388 257h60" stroke="#1a2744" strokeWidth="0.9" opacity="0.5" />
          {/* Door */}
          <rect x="336" y="312" width="48" height="72" rx="3" fill="#8a5a35" stroke="#1a2744" strokeWidth="1.4" opacity="0.95" />
          <circle cx="374" cy="350" r="2.6" fill="#f8fafc" />
          {/* Chimney */}
          <rect x="446" y="150" width="20" height="34" rx="2" fill="#1a2744" opacity="0.8" />
        </g>
      </L>

      {/* ── 16. Interiors — lit windows and joinery ──────────── */}
      <L step={step} from={16}>
        <g>
          <rect x="274" y="236" width="56" height="42" rx="2" fill="url(#bs-glow)" opacity="0.75" />
          <rect x="390" y="236" width="56" height="42" rx="2" fill="url(#bs-glow)" opacity="0.75" />
          <path d="M302 236v42M274 257h56M418 236v42M390 257h56" stroke="#1a2744" strokeWidth="0.9" opacity="0.35" />
        </g>
      </L>

      {/* ── 17. Furniture, planting and path ─────────────────── */}
      <L step={step} from={17}>
        <g>
          {/* Planters */}
          <path d="M508 384v-16" stroke="#5b7c4d" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="508" cy="358" r="14" fill="#5b7c4d" opacity="0.75" />
          <path d="M196 384v-14" stroke="#5b7c4d" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="196" cy="360" r="12" fill="#5b7c4d" opacity="0.65" />
          {/* Entry path */}
          <path d={`M336 ${GROUND}l-26 30h124l-26 -30z`} fill="#cbd5e1" opacity="0.6" />
          <path d="M322 398h76M312 410h96" stroke="#94a3b8" strokeWidth="1" opacity="0.7" />
        </g>
      </L>

      {/* ── 18. Snag inspection ──────────────────────────────── */}
      <L step={step} from={18} until={18}>
        <g>
          {[
            [302, 214],
            [418, 214],
            [360, 300],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="13" fill="#16a34a" opacity="0.92" />
              <path d={`M${cx - 6} ${cy}l4 5 8 -10`} stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          ))}
        </g>
      </L>

      {/* ── 19. Handover ─────────────────────────────────────── */}
      <L step={step} from={19}>
        <g>
          {/* Key */}
          <g transform="translate(548 268)">
            <circle cx="0" cy="0" r="11" fill="none" stroke="#FF5E00" strokeWidth="3.4" />
            <path d="M9 6l26 26M26 26l8 -8M32 32l7 -7" stroke="#FF5E00" strokeWidth="3.4" strokeLinecap="round" />
          </g>
          <rect x="522" y="322" width="122" height="34" rx="17" fill="#16a34a" opacity="0.95" />
          <text x="583" y="344" fill="#ffffff" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            HANDED OVER
          </text>
        </g>
      </L>

      {/* ── Tower crane — up only while the structure is going up ─ */}
      <L step={step} from={10} until={14}>
        <g stroke="#1a2744" strokeWidth="1.6" opacity="0.6">
          <path d="M566 384V116M590 384V116" />
          <path
            d={Array.from({ length: 8 }, (_, i) => `M566 ${132 + i * 32}L590 ${164 + i * 32}M590 ${132 + i * 32}L566 ${164 + i * 32}`).join("")}
            strokeWidth="0.7"
            opacity="0.6"
          />
          <path d="M470 104h216M470 120h216" />
          <path d="M578 104V88" />
          <rect x="470" y="120" width="26" height="18" fill="#fff" />
          <path d="M628 120v56" strokeDasharray="4 4" strokeWidth="1" />
          <rect x="612" y="176" width="32" height="10" rx="2" fill="#fff" />
        </g>
      </L>
    </svg>
  )
}
