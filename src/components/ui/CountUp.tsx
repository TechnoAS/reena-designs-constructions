import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  /** The printed value, e.g. "250+", "100%", "2010" — only the leading digits animate. */
  value: string
  duration?: number
  className?: string
}

/**
 * Animates a stat's leading digits counting up from zero the first time it
 * scrolls into view, keeping whatever suffix followed the number ("+", "%").
 *
 * Runs once per mount via `started` — replaying the count every time a
 * visitor scrolls past it would read as broken, not delightful. Values with
 * no leading digits (there are none today, but a future stat might be
 * "TBD") render as-is rather than animating nothing.
 */
export default function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const match = value.match(/^(\d+(?:,\d{3})*)(.*)$/)
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : null
  const suffix = match ? match[2] : ""
  /* Only group into thousands ("1,963") if the source value already did —
     otherwise a plain year like "2010" would count up and land on "2,010". */
  const grouped = match ? match[1].includes(",") : false
  const format = (n: number) => (grouped ? n.toLocaleString() : String(n))
  const [display, setDisplay] = useState(target === null ? value : "0")
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(target))
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(format(Math.round(eased * target)))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {display}
      {suffix}
    </span>
  )
}
