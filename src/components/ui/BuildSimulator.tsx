import { useCallback, useEffect, useRef, useState } from "react"
import { Play, Pause, ChevronLeft, ChevronRight, RotateCcw, Check } from "lucide-react"
import BuildScene from "./BuildScene"
import { STAGES, PHASE_META } from "@/data/buildStages"

const TOTAL = STAGES.length
const TICK = 2600

/**
 * Interactive build simulator.
 *
 * Replaces the earlier step list, which named the nineteen steps without ever
 * showing what happens in them. Here the drawing *is* the explanation: the plot
 * is surveyed, the design is ghosted in, the foundation goes down, the frame
 * rises behind scaffolding, services thread through the walls, the shell is
 * finished and furnished, and the keys are handed over — with the crane leaving
 * when its work is done.
 */
export default function BuildSimulator() {
  const [step, setStep] = useState(1)
  const [playing, setPlaying] = useState(true)
  const timer = useRef<number | null>(null)

  const stage = STAGES[step - 1]
  const phase = PHASE_META[stage.phase - 1]
  const pct = Math.round((step / TOTAL) * 100)

  // Never autoplay for visitors who have asked for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false)
  }, [])

  useEffect(() => {
    if (!playing) return
    timer.current = window.setInterval(() => setStep((s) => (s >= TOTAL ? 1 : s + 1)), TICK)
    return () => {
      if (timer.current !== null) clearInterval(timer.current)
    }
  }, [playing])

  // Any manual move takes over from the autoplay.
  const goTo = useCallback((n: number) => {
    setPlaying(false)
    setStep(Math.min(Math.max(n, 1), TOTAL))
  }, [])

  return (
    <div
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goTo(step + 1)
        if (e.key === "ArrowLeft") goTo(step - 1)
      }}
      tabIndex={0}
      role="group"
      aria-label="Interactive build process"
    >
      <div className="grid lg:grid-cols-[1.35fr_1fr]">
        {/* ── Scene ──────────────────────────────────────────── */}
        <div className="relative border-b border-slate-200 p-5 lg:border-b-0 lg:border-r lg:p-7">
          <BuildScene step={step} />

          {/* Phase badge over the drawing */}
          <div className="pointer-events-none absolute left-8 top-8 flex items-center gap-2">
            <span
              className="montserrat font-800 rounded-lg px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white bg-brand"
            >
              {phase.tag}
            </span>
            <span className="montserrat font-700 rounded-lg bg-white/85 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-600 backdrop-blur-sm">
              {phase.name}
            </span>
          </div>
        </div>

        {/* ── Readout ────────────────────────────────────────── */}
        <div className="flex flex-col p-7 lg:p-9">
          <div className="flex items-baseline gap-2">
            <span className="montserrat font-900 text-5xl leading-none text-brand">
              {String(step).padStart(2, "0")}
            </span>
            <span className="montserrat font-700 text-sm text-slate-300">/ {TOTAL}</span>
          </div>

          <h3 className="montserrat font-800 mt-4 text-xl leading-snug text-navy" aria-live="polite">
            {stage.label}
          </h3>

          <p className="mt-3 text-[13.5px] leading-7 text-slate-500">{stage.blurb}</p>

          <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50/70 p-4">
            <div className="montserrat font-800 mb-1.5 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-orange-600">
              <Check size={12} strokeWidth={3} aria-hidden="true" />
              What you get
            </div>
            <p className="text-[13px] leading-relaxed text-slate-600">{stage.gain}</p>
          </div>

          {/* Progress */}
          <div className="mt-7">
            <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span>Project completion</span>
              <span style={{ color: "#FF5E00" }}>{pct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{ width: `${pct}%`, background: "linear-gradient(90deg,#FF8A3D,#FF5E00)" }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause the build" : "Play the build"}
              className="montserrat font-700 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[12px] text-white transition hover:opacity-90"
              style={{ background: "#1a2744" }}
            >
              {playing ? <Pause size={13} strokeWidth={2.4} /> : <Play size={13} strokeWidth={2.4} />}
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              disabled={step === 1}
              aria-label="Previous step"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:text-orange-600 disabled:opacity-35"
            >
              <ChevronLeft size={15} strokeWidth={2.4} />
            </button>
            <button
              type="button"
              onClick={() => goTo(step + 1)}
              disabled={step === TOTAL}
              aria-label="Next step"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:text-orange-600 disabled:opacity-35"
            >
              <ChevronRight size={15} strokeWidth={2.4} />
            </button>
            <button
              type="button"
              onClick={() => {
                setStep(1)
                setPlaying(true)
              }}
              aria-label="Restart from step one"
              className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:text-orange-600"
            >
              <RotateCcw size={14} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Scrubber: all 19 steps, grouped by phase ─────────── */}
      <div className="border-t border-slate-200 bg-slate-50/70 px-5 py-5 lg:px-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {PHASE_META.map((p) => {
            const steps = STAGES.filter((s) => s.phase === p.n)
            const done = steps.filter((s) => s.n < step).length
            const active = stage.phase === p.n
            return (
              <div key={p.n} className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`montserrat font-800 text-[9.5px] uppercase tracking-[0.16em] transition-colors ${
                      active ? "text-orange-600" : "text-slate-400"
                    }`}
                  >
                    {p.tag} · {p.name}
                  </span>
                  <span className="text-[9.5px] font-semibold text-slate-300">
                    {done}/{steps.length}
                  </span>
                </div>
                <div className="flex gap-1">
                  {steps.map((s) => {
                    const passed = s.n < step
                    const current = s.n === step
                    return (
                      <button
                        key={s.n}
                        type="button"
                        onClick={() => goTo(s.n)}
                        title={`${String(s.n).padStart(2, "0")} · ${s.label}`}
                        aria-label={`Go to step ${s.n}: ${s.label}`}
                        aria-current={current}
                        className="group relative h-1.5 flex-1 rounded-full transition-all duration-300"
                        style={{
                          background: current ? "#FF5E00" : passed ? "#FFB380" : "#e2e8f0",
                          transform: current ? "scaleY(1.9)" : undefined,
                        }}
                      >
                        <span className="montserrat font-700 pointer-events-none absolute -top-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
                          {s.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
