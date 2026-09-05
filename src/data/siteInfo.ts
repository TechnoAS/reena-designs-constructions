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
