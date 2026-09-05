/**
 * Single source of truth for the company's name, address and phone (NAP),
 * social profiles and canonical origin.
 *
 * These details were previously repeated across Footer, Contact, the assistant
 * knowledge base and index.html — nine copies of the same phone number, which
 * is exactly how a business ends up publishing a number it no longer answers.
 * Local SEO also penalises inconsistent NAP, so it has to come from one place.
 */

export const SITE = {
  name: "Reena Designs & Constructions",
  /** Canonical origin, no trailing slash. Override per deploy with VITE_SITE_URL. */
  origin: (import.meta.env.VITE_SITE_URL || "https://reenabuild.com").replace(/\/+$/, ""),
  email: "info@reenabuild.com",
  phones: ["+91 98765 43210", "+91 98765 43211"],
  /** E.164 for tel: links — no spaces, no punctuation. */
  phoneHref: "tel:+919876543210",
  hours: "Mon – Sat · 9:30 AM – 7:00 PM",
  address: {
    street: "Midnapur",
    locality: "Midnapur",
    region: "Paschim Midnapur, West Bengal",
    postalCode: "721101",
    country: "IN",
  },
  /** Rendered as one block wherever the full address is shown. */
  addressLines: "Midnapur, Paschim Midnapur\nWest Bengal 721101, India",
} as const

/**
 * Social profiles.
 *
 * `url` is deliberately empty until a real profile exists: an anchor with
 * `href="#"` is a dead link that pushes a bare `#` onto the router's history,
 * and search engines read it as a broken outbound link. Renderers filter on
 * `url`, so an unset profile simply does not appear. Fill one in and it shows
 * up — no other change needed.
 */
export const SOCIAL_LINKS: { label: string; url: string }[] = [
  { label: "Facebook", url: "" },
  { label: "Instagram", url: "" },
  { label: "LinkedIn", url: "" },
  { label: "YouTube", url: "" },
]

/** Only the profiles that have actually been published. */
export const ACTIVE_SOCIAL_LINKS = SOCIAL_LINKS.filter((s) => s.url !== "")
