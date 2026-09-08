/**
 * JSON-LD builders.
 *
 * Structured data is the one part of a page a search engine reads without
 * having to interpret anything, and it is what makes a result eligible for the
 * richer treatments — the sitelinks under a homepage result, the expandable
 * FAQ rows, the breadcrumb trail in place of a raw URL, the knowledge panel
 * that ties this domain to the company's social profiles.
 *
 * Everything here hangs off one `@id` graph rather than repeating the
 * organisation on every page:
 *
 *   {origin}/#organization  — the company (GeneralContractor)
 *   {origin}/#website       — the site itself
 *   {origin}/#localbusiness — the physical office
 *   {origin}{path}/#webpage — the page being viewed
 *
 * A page-level node then references the organisation by `@id` instead of
 * restating it, which is what tells Google these are one entity across
 * eighteen URLs rather than eighteen unrelated businesses.
 *
 * Nothing here may state a fact the site cannot back up. `aggregateRating` is
 * deliberately absent for the same reason it was removed from index.html: the
 * testimonials are marketing copy, not collected reviews, and fake rating
 * markup risks a manual action against the whole domain. Add it — with real
 * `review` items beside it — once reviews are genuinely being collected.
 */
import { SITE, ACTIVE_SOCIAL_LINKS } from "./siteInfo"
import { SERVICE_AREA_NAMES, SERVICE_CATALOG } from "./seo"

type Json = Record<string, unknown>

const abs = (path: string) => `${SITE.origin}${path}`

export const ORG_ID = `${SITE.origin}/#organization`
export const WEBSITE_ID = `${SITE.origin}/#website`
export const LOCALBUSINESS_ID = `${SITE.origin}/#localbusiness`

/** The postal address, shared by the organisation and the office. */
const postalAddress: Json = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
}

/**
 * Places served, as `Place` nodes rather than bare strings.
 *
 * `areaServed` supersedes the older `serviceArea` property, and naming each
 * town individually is what lets a "construction company in Kharagpur" query
 * resolve to this business at all — a single "West Bengal" entry does not.
 */
const areaServed: Json[] = SERVICE_AREA_NAMES.map((name) => ({
  "@type": "Place",
  name,
  address: {
    "@type": "PostalAddress",
    addressLocality: name,
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
}))

/** The eight disciplines as an offer catalogue, so each is its own entity. */
const hasOfferCatalog: Json = {
  "@type": "OfferCatalog",
  name: "Construction, Architecture & Interior Design Services",
  itemListElement: SERVICE_CATALOG.map((service, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      "@id": `${abs(service.slug)}#service-${i + 1}`,
      name: service.name,
      description: service.description,
      serviceType: service.name,
      provider: { "@id": ORG_ID },
      areaServed,
      url: abs(service.slug),
    },
  })),
}

/**
 * The company.
 *
 * `GeneralContractor` rather than the generic `LocalBusiness`: it is a
 * recognised subtype, and a more specific type is always read more confidently
 * than a broad one. `sameAs` is what connects this domain to the Facebook,
 * Instagram, LinkedIn and YouTube profiles — without it Google has no reason
 * to believe the four accounts and the site are the same organisation, and the
 * knowledge panel never forms.
 */
export function organizationSchema(): Json {
  return {
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: ["Reena Designs", "Reena Constructions", "Reena Designs and Constructions"],
    url: `${SITE.origin}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.origin}/#logo`,
      url: abs(SITE.logoPath),
      caption: SITE.name,
    },
    image: abs(SITE.ogImagePath),
    description:
      "Design-led building construction, architectural design, structural engineering, interior design, renovation and turnkey project delivery. Based in Midnapur, Paschim Midnapur, West Bengal, serving Kharagpur, Ghatal, Jhargram, Tamluk, Kolkata and clients across India.",
    slogan: "Design to handover, under one contract.",
    foundingDate: SITE.foundingYear,
    email: SITE.email,
    telephone: SITE.phones[0].replace(/\s+/g, ""),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI, Cheque",
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapUrl,
    areaServed,
    /** Topics the business is authoritative on — read by AI answer surfaces. */
    knowsAbout: [
      "Building construction",
      "Residential construction",
      "Commercial construction",
      "Architectural design",
      "Structural engineering",
      "RCC construction",
      "Interior design",
      "Modular kitchen design",
      "3D elevation design",
      "Home renovation",
      "Turnkey project delivery",
      "Municipal building approvals in West Bengal",
    ],
    hasOfferCatalog,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE.phones[0].replace(/\s+/g, ""),
        email: SITE.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: SITE.phones[1].replace(/\s+/g, ""),
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: ACTIVE_SOCIAL_LINKS.map((s) => s.url),
  }
}

/**
 * The site.
 *
 * No `potentialAction` / SearchAction here, deliberately. The obvious thing to
 * declare is a sitelinks search box at /?q=… — but `SiteSearch` is a client-
 * side overlay that does not read a query parameter, so the URL would 404 into
 * the homepage and the markup would be describing an endpoint that does not
 * exist. (Google retired the sitelinks search box result in any case, so it
 * would buy nothing even if it worked.) Add it back only if the search is ever
 * given a real deep-linkable URL.
 */
export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE.origin}/`,
    name: SITE.name,
    description:
      "Construction, architecture and interior design company in Midnapur, Paschim Midnapur, West Bengal.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  }
}

/** The physical office, as a separate node from the company itself. */
export function localBusinessSchema(): Json {
  return {
    "@type": "GeneralContractor",
    "@id": LOCALBUSINESS_ID,
    parentOrganization: { "@id": ORG_ID },
    name: SITE.name,
    url: `${SITE.origin}/`,
    image: abs(SITE.ogImagePath),
    telephone: SITE.phones[0].replace(/\s+/g, ""),
    email: SITE.email,
    priceRange: "₹₹",
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapUrl,
    areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: ACTIVE_SOCIAL_LINKS.map((s) => s.url),
  }
}

/**
 * Wraps page-level nodes in an `@graph` alongside a reference back to the
 * organisation, so every page ships the connection without restating the
 * whole company.
 */
export function pageGraph(...nodes: Json[]): Json {
  return { "@context": "https://schema.org", "@graph": nodes }
}

type WebPageOptions = {
  path: string
  name: string
  description: string
  /** `AboutPage`, `ContactPage`, `CollectionPage`, `FAQPage`, … */
  type?: string
  /** ISO date the page's substance last changed. */
  dateModified?: string
  primaryImage?: string
}

/** The page itself, tied to the site and the organisation. */
export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  dateModified,
  primaryImage,
}: WebPageOptions): Json {
  return {
    "@type": type,
    "@id": `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
    ...(dateModified ? { dateModified } : {}),
    ...(primaryImage ? { primaryImageOfPage: { "@type": "ImageObject", url: primaryImage } } : {}),
  }
}

/**
 * One discipline, as its own `Service` entity.
 *
 * A service page that declares what it sells, who provides it and where, is
 * what lets "renovation contractor in Ghatal" match a page that never uses
 * that exact phrase in its copy.
 */
export function serviceSchema(name: string, description: string, path: string): Json {
  return {
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name,
    description,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed,
    url: abs(path),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: abs(path),
      servicePhone: SITE.phones[0].replace(/\s+/g, ""),
      serviceLocation: { "@id": LOCALBUSINESS_ID },
    },
  }
}

/** Every service at once, for the /services index. */
export function serviceCatalogSchema(path: string): Json {
  return {
    "@type": "ItemList",
    "@id": `${abs(path)}#servicelist`,
    name: "Construction, Architecture & Interior Design Services",
    numberOfItems: SERVICE_CATALOG.length,
    itemListElement: SERVICE_CATALOG.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": ORG_ID },
        areaServed,
        url: abs(service.slug),
      },
    })),
  }
}

/**
 * A gallery of photographs.
 *
 * Image results are a real share of the traffic a construction portfolio gets,
 * and an `ImageGallery` with a caption per photograph is how those images get
 * attributed back to this business rather than floating free.
 */
export function imageGallerySchema(
  path: string,
  name: string,
  description: string,
  images: { src: string; alt: string }[],
): Json {
  return {
    "@type": "ImageGallery",
    "@id": `${abs(path)}#gallery`,
    name,
    description,
    url: abs(path),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    associatedMedia: images.map(({ src, alt }) => ({
      "@type": "ImageObject",
      contentUrl: src.startsWith("http") ? src : abs(src),
      caption: alt,
      description: alt,
      creditText: SITE.name,
      creator: { "@id": ORG_ID },
    })),
  }
}

/** The service-area block rendered on the page, as an addressable list. */
export function serviceAreaSchema(path: string): Json {
  return {
    "@type": "ItemList",
    "@id": `${abs(path)}#areas`,
    name: `Areas served by ${SITE.name}`,
    numberOfItems: SERVICE_AREA_NAMES.length,
    itemListElement: SERVICE_AREA_NAMES.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Place",
        name,
        address: {
          "@type": "PostalAddress",
          addressLocality: name,
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
      },
    })),
  }
}
