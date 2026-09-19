/**
 * Unsplash URLs, built once.
 *
 * Six files each declared their own one-line template for the same thing, and
 * every one of them requested a single fixed width — so a 360px phone
 * downloaded the same pixels as a 2560px desktop. The site is photography-led
 * and a large share of its traffic is on mobile data in Paschim Midnapur,
 * which is the worst combination for that.
 *
 * `srcSetFor` emits the same crop at several widths so the browser can pick.
 * It costs nothing extra — Unsplash resizes on their CDN from the `w`
 * parameter, so these are all URLs that already worked.
 */

const BASE = "https://images.unsplash.com"

type Crop = {
  /** Rendered width the layout is designed around. */
  w: number
  /** Rendered height, for the crop ratio. */
  h: number
  /** Unsplash quality. Omit for their default. */
  q?: number
}

/** A single URL at the given crop. */
export function unsplash(id: string, { w, h, q }: Crop): string {
  const quality = q ? `&q=${q}` : ""
  return `${BASE}/${id}?w=${w}&h=${h}&fit=crop&auto=format${quality}`
}

/**
 * The same crop at 1×, 1.5× and 2×, as a `srcSet`.
 *
 * Three steps rather than a long ladder: past 2× the returns are invisible on
 * a photograph and each entry is a URL the browser may have to consider.
 */
export function srcSetFor(id: string, { w, h, q }: Crop): string {
  return [1, 1.5, 2]
    .map((scale) => {
      const width = Math.round(w * scale)
      const height = Math.round(h * scale)
      return `${unsplash(id, { w: width, h: height, q })} ${width}w`
    })
    .join(", ")
}

/**
 * `sizes` for the card grids.
 *
 * Mirrors the grid the cards actually sit in — two columns on a phone, three
 * at `lg`, four at `xl` — so the browser can choose before layout. Without it
 * `srcSet` is guesswork and the browser assumes full viewport width, which
 * picks the largest file every time and makes things worse rather than better.
 */
export const CARD_SIZES = "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"

/** Full-bleed slides: one image across the viewport at every size. */
export const FULL_BLEED_SIZES = "100vw"
