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
  whatsappNumber: "+91 98765 43210",
  whatsappHref: "https://wa.me/919876543210?text=Hello%20Reena%20Designs%2C%20I%20would%20like%20to%20inquire%20about%20a%20construction%20or%20interior%20project.",
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
  /**
   * Office coordinates, for `geo` in the LocalBusiness graph and the
   * geo.position / ICBM meta tags.
   *
   * Google does not rank a business by these — proximity is computed from the
   * verified Business Profile — but they disambiguate "Midnapur" (which is
   * also spelt Midnapore and Medinipur, and shares a name with nothing else
   * nearby) for every other crawler that reads the page. Replace with the
   * exact office pin once the Business Profile is claimed.
   */
  geo: { lat: 22.4257, lng: 87.3199 },
  /** Deep link to the office pin. Swap for the Business Profile short link
   *  (g.page/…) as soon as the listing is verified — that link is what ties
   *  the site and the profile together for Google. */
  mapUrl: "https://www.google.com/maps/search/?api=1&query=22.4257,87.3199",
  /** Year the practice started, for `foundingDate`. */
  foundingYear: "2010",
  /** Absolute paths, resolved against `origin` where schema needs a URL. */
  logoPath: "/apple-touch-icon.png",
  ogImagePath: "/og-image.png",
} as const

/**
 * Social profiles.
 */
export const SOCIAL_LINKS: { label: string; url: string }[] = [
  { label: "Facebook", url: "https://facebook.com/reenadesigns" },
  { label: "Instagram", url: "https://instagram.com/reenadesigns" },
  { label: "LinkedIn", url: "https://linkedin.com/company/reena-designs-constructions" },
  { label: "YouTube", url: "https://youtube.com/@reenadesigns" },
]

/** Only the profiles that have actually been published. */
export const ACTIVE_SOCIAL_LINKS = SOCIAL_LINKS.filter((s) => s.url !== "")
