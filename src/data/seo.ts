/**
 * Keywords, service areas and structured-data builders.
 *
 * Everything a search engine reads *about* a page — as opposed to the copy on
 * it — is defined here so the wording stays consistent across the head tags,
 * the JSON-LD and the on-page "areas we serve" block. A local-search site loses
 * ranking when the same business describes itself three different ways.
 *
 * On keywords: `<meta name="keywords">` has not been a Google ranking factor
 * for years, and nothing here is written expecting it to be. The value of
 * keeping the list is that it forces the page's actual target terms to be
 * written down, which is what the title, description, headings and body copy
 * are then checked against. Bing and several AI crawlers do still read it.
 */

/**
 * Towns and cities the company actually takes work in.
 *
 * These drive both the `areaServed` graph and the on-page service-area block.
 * "Construction company in Kharagpur" is a far cheaper term to rank for than
 * "construction company in West Bengal", and a page that names the town is the
 * only thing that can rank for it. Do not pad this list with places the
 * company will not travel to — a service area that cannot be served is the
 * kind of thing that earns a manual action, and it wastes the visit anyway.
 */
export const SERVICE_AREAS = [
  { name: "Midnapur", note: "Head office — Paschim Midnapur" },
  { name: "Kharagpur", note: "Residential & commercial builds" },
  { name: "Ghatal", note: "Homes, renovation & interiors" },
  { name: "Chandrakona", note: "Independent house construction" },
  { name: "Garhbeta", note: "Turnkey building projects" },
  { name: "Salboni", note: "Civil construction & RCC work" },
  { name: "Keshpur", note: "Home construction & remodelling" },
  { name: "Debra", note: "Residential construction" },
  { name: "Daspur", note: "Interiors & renovation" },
  { name: "Sabang", note: "Independent homes" },
  { name: "Pingla", note: "Building construction" },
  { name: "Narayangarh", note: "Homes & shop interiors" },
  { name: "Belda", note: "Construction & 3D elevation" },
  { name: "Dantan", note: "Residential builds" },
  { name: "Jhargram", note: "Construction & architecture" },
  { name: "Tamluk", note: "Purba Midnapur projects" },
  { name: "Haldia", note: "Commercial & industrial interiors" },
  { name: "Bankura", note: "Building construction" },
  { name: "Kolkata", note: "Interior design & fit-out" },
  { name: "Howrah", note: "Commercial interiors" },
] as const

/** Just the place names, for `areaServed` and keyword strings. */
export const SERVICE_AREA_NAMES = SERVICE_AREAS.map((a) => a.name)

/**
 * The eight disciplines, in the wording used on /services.
 *
 * Duplicated as data (rather than imported from the page) so the JSON-LD can
 * be built without pulling a route chunk into the entry bundle.
 */
export const SERVICE_CATALOG = [
  {
    name: "Residential Construction",
    description:
      "Independent houses, duplexes and apartment blocks built to approved drawings with certified TMT steel and graded cement at every stage.",
    slug: "/services",
  },
  {
    name: "Commercial Construction",
    description:
      "Offices, showrooms, shops and retail shells delivered on commercial timelines with minimal disruption to trading.",
    slug: "/services",
  },
  {
    name: "Architectural Design",
    description:
      "Site-responsive planning, 2D working drawings and sanction-ready municipal documentation prepared in-house by licensed architects.",
    slug: "/services",
  },
  {
    name: "Structural Engineering",
    description:
      "Load calculations, RCC detailing and seismic-compliant framing signed off by qualified structural engineers.",
    slug: "/services",
  },
  {
    name: "Renovation & Remodeling",
    description:
      "Structural retrofits, floor additions and full-property makeovers that modernise ageing buildings without touching their integrity.",
    slug: "/our-work/renovation",
  },
  {
    name: "Interior Design",
    description:
      "Residential and commercial interiors — modular kitchens, wardrobes, false ceilings, lighting and joinery resolved in 3D before execution.",
    slug: "/our-work/interior/residential",
  },
  {
    name: "Exterior Design & 3D Elevation",
    description:
      "Front elevations, facade treatments, 3D elevation rendering and landscaping that give the building its street presence.",
    slug: "/our-work/3d-design",
  },
  {
    name: "Turnkey Construction",
    description:
      "Design to handover under a single contract — one team, one timeline, one fixed cost, with the completion date written in.",
    slug: "/services",
  },
] as const

/**
 * Per-route target terms.
 *
 * Each entry is what the page is genuinely trying to win, in descending order
 * of intent. Local modifiers come first because "construction company in
 * Midnapur" converts and "construction company" does not — a firm this size is
 * never going to outrank a national contractor on the head term, and does not
 * need to.
 */
export const PAGE_KEYWORDS: Record<string, string[]> = {
  "/": [
    "construction company in Midnapur",
    "best construction company in Medinipur",
    "building contractors in Paschim Midnapur",
    "civil contractors Midnapore West Bengal",
    "house construction company near me",
    "turnkey construction company West Bengal",
    "interior designer in Midnapur",
    "architect in Midnapur",
    "home construction cost in West Bengal",
    "residential construction Kharagpur",
  ],
  "/about": [
    "about Reena Designs & Constructions",
    "construction company Midnapur since 2010",
    "licensed civil engineers Paschim Midnapur",
    "experienced building contractors West Bengal",
    "architecture and construction firm Medinipur",
    "trusted home builders Midnapore",
  ],
  "/services": [
    "construction services in Midnapur",
    "residential construction contractor Midnapur",
    "commercial construction company West Bengal",
    "architectural design services Medinipur",
    "structural engineering consultant Midnapur",
    "renovation and remodeling contractor Midnapur",
    "interior design services Paschim Midnapur",
    "3D elevation design West Bengal",
    "turnkey construction contractor India",
    "RCC contractor Midnapore",
  ],
  "/whats-included": [
    "house construction cost breakdown West Bengal",
    "construction material rates Midnapur",
    "what is included in construction quotation",
    "cement sand TMT bar grades for house construction",
    "labour cost for house construction in India",
    "itemised construction estimate Midnapur",
    "construction cost per square foot West Bengal",
  ],
  "/our-work": [
    "construction projects in Midnapur",
    "completed building projects Paschim Midnapur",
    "construction company portfolio West Bengal",
    "house design gallery Midnapore",
    "interior design portfolio Midnapur",
  ],
  "/our-work/projects/successful": [
    "completed construction projects Midnapur",
    "finished house construction Paschim Midnapur",
    "delivered building projects West Bengal",
  ],
  "/our-work/projects/ongoing": [
    "ongoing construction projects Midnapur",
    "current building sites Paschim Midnapur",
    "live construction projects West Bengal",
  ],
  "/our-work/interior/residential": [
    "residential interior designer in Midnapur",
    "home interior design Paschim Midnapur",
    "modular kitchen Midnapur",
    "bedroom and wardrobe design Medinipur",
    "flat interior design Kharagpur",
    "pooja room design West Bengal",
    "false ceiling and lighting design Midnapore",
  ],
  "/our-work/interior/commercial": [
    "commercial interior designer Midnapur",
    "office interior design West Bengal",
    "shop and showroom interior Kharagpur",
    "restaurant interior designer Medinipur",
    "hotel interior design West Bengal",
    "retail fit-out contractor Midnapur",
  ],
  "/our-work/exterior": [
    "exterior design Midnapur",
    "house front elevation design West Bengal",
    "facade design contractor Medinipur",
    "modern house exterior India",
  ],
  "/our-work/architecture": [
    "architecture firm in Midnapur",
    "architectural design gallery West Bengal",
    "house plan design Paschim Midnapur",
    "sanction drawing architect Medinipur",
  ],
  "/our-work/3d-design": [
    "3D elevation design Midnapur",
    "3D house design West Bengal",
    "front elevation 3D rendering India",
    "3D exterior visualisation Medinipur",
  ],
  "/our-work/renovation": [
    "home renovation contractor Midnapur",
    "house remodeling West Bengal",
    "building renovation Paschim Midnapur",
    "old house renovation cost India",
  ],
  "/our-work/before-after": [
    "house renovation before and after West Bengal",
    "home makeover Midnapur",
    "renovation transformation Medinipur",
  ],
  "/our-work/testimonials": [
    "Reena Designs & Constructions reviews",
    "construction company reviews Midnapur",
    "client testimonials builders West Bengal",
    "best rated contractor Paschim Midnapur",
  ],
  "/contact": [
    "contact construction company Midnapur",
    "free site visit construction Paschim Midnapur",
    "construction quote Midnapore",
    "building contractor phone number Midnapur",
    "civil contractor near me West Bengal",
  ],
  "/faq": [
    "house construction cost in Midnapur",
    "how long does house construction take India",
    "municipal building approval West Bengal",
    "construction payment stages India",
    "construction warranty India",
    "questions to ask a building contractor",
  ],
}

/** Comma-joined keyword string for the `keywords` meta tag. */
export function keywordsFor(pathname: string): string | undefined {
  const list = PAGE_KEYWORDS[pathname]
  return list?.join(", ")
}
