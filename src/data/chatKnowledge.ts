/**
 * Assistant knowledge base.
 *
 * Each entry is matched by keyword against the visitor's message. See
 * `matchAnswer` for how a winner is picked — entries are scored by the length
 * of the keywords they match, so a specific phrase ("modular kitchen") beats a
 * broad one ("kitchen") no matter what order they are declared in.
 */

export type Answer = {
  id: string
  keys: string[]
  text: string
  link?: { label: string; href: string }
  /** Follow-up chips offered after this reply. */
  next?: string[]
  /** Greetings and small talk reply instantly, without the typing pause. */
  instant?: boolean
}

const CONTACT = { label: "Contact us", href: "/contact" }
const QUOTE = { label: "Get a free quote", href: "/contact" }

export const ANSWERS: Answer[] = [
  // ── Small talk ──────────────────────────────────────────────────
  {
    id: "greeting",
    keys: ["hi", "hii", "hey", "hello", "helo", "namaste", "namaskar", "good morning", "good afternoon", "good evening", "yo", "hola"],
    text: "Hello! 👋 Welcome to Reena Designs & Constructions. I can help with costs, timelines, services, materials or booking a site visit. What would you like to know?",
    next: ["What does it cost?", "How long does it take?", "What services do you offer?"],
    instant: true,
  },
  {
    id: "howareyou",
    keys: ["how are you", "how r u", "whats up", "what's up", "how do you do"],
    text: "Doing well, thank you for asking! 😊 More importantly — how can I help with your project?",
    next: ["I want to build a house", "What does it cost?", "Book a site visit"],
    instant: true,
  },
  {
    id: "thanks",
    keys: ["thank", "thanks", "thx", "thank you", "dhanyawad", "appreciate"],
    text: "You are very welcome! 🙏 If anything else comes up, just ask — or leave your number and an engineer will call you back.",
    link: CONTACT,
    instant: true,
  },
  {
    id: "bye",
    keys: ["bye", "goodbye", "see you", "cya", "later", "good night"],
    text: "Thanks for stopping by! 👋 Whenever you are ready, we offer a free site visit and a no-obligation quote. Have a great day!",
    link: QUOTE,
    instant: true,
  },
  {
    id: "identity",
    keys: ["who are you", "what are you", "your name", "are you a bot", "are you human", "robot"],
    text: "I am Reena's virtual assistant — a small helper on this site, not a human. 🤖 I can answer common questions instantly; for anything detailed, our engineers will take over.",
    link: CONTACT,
    next: ["What services do you offer?", "How long does it take?"],
    instant: true,
  },
  {
    id: "help",
    keys: ["help", "what can you do", "options", "menu", "questions"],
    text: "Happy to help! I know about: costs and payment, timelines, our services, interiors, materials and quality, approvals, warranty, site visits and our work process. Ask away, or tap a suggestion.",
    next: ["What does it cost?", "Do you handle approvals?", "What is your warranty?"],
    instant: true,
  },
  {
    id: "praise",
    keys: ["nice", "great", "awesome", "good work", "beautiful", "love it", "impressive", "wow"],
    text: "That is very kind — thank you! 😊 Our team will be glad to hear it. Would you like to see more of our completed work?",
    link: { label: "View our projects", href: "/our-work/projects/successful" },
    instant: true,
  },

  // ── Commercial ──────────────────────────────────────────────────
  {
    id: "cost",
    keys: ["price", "cost", "rate", "quote", "budget", "charge", "estimate", "per sq ft", "sq ft", "sqft", "how much", "expensive", "cheap"],
    text: "Costing depends on built-up area, structural spec and finish level. After a free site visit we give a fully itemised quote — every material grade named — and that figure is fixed for the contract. No revised estimates halfway through.",
    link: QUOTE,
    next: ["Do you offer EMI?", "What is included in the quote?", "Book a site visit"],
  },
  {
    id: "inclusions",
    keys: ["included", "inclusion", "what do i get", "cover", "scope", "exclusions"],
    text: "A turnkey quote covers design and drawings, sanction support, structure, masonry, plumbing, electrical, flooring, painting and finishing. Interiors and loose furniture are quoted separately so you can see exactly what each part costs.",
    link: { label: "See our services", href: "/services" },
    next: ["What does it cost?", "How long does it take?"],
  },
  {
    id: "payment",
    keys: ["emi", "loan", "finance", "instalment", "installment", "payment", "advance", "booking amount", "milestone", "bank"],
    text: "Payment is staged against completed milestones — never a large lump sum up front. We share the schedule before signing, and we can provide the documentation your bank needs for a home-loan disbursement.",
    link: CONTACT,
    next: ["What does it cost?", "What is included in the quote?"],
  },

  // ── Timeline ────────────────────────────────────────────────────
  {
    id: "timeline",
    keys: ["how long", "time", "duration", "deadline", "schedule", "when will", "months", "fast", "quick", "handover date"],
    text: "A typical independent home runs 10–14 months from sanction to handover; interiors alone take 6–10 weeks. Your completion date is written into the contract — 250+ projects have been handed over on that basis.",
    next: ["What if you are late?", "What is your work process?", "Book a site visit"],
  },
  {
    id: "delay",
    keys: ["late", "delay", "overrun", "penalty", "miss the date", "behind schedule"],
    text: "Delays are the main worry people bring us, so we put the date in writing and report progress weekly with site photographs. If something outside our control does shift the programme, you hear it from us early — not at the end.",
    next: ["How long does it take?", "How do you supervise sites?"],
  },
  {
    id: "process",
    keys: ["process", "step", "procedure", "how do you work", "stages", "workflow", "phases"],
    text: "We follow a documented 19-step sequence across four phases: Design & Approval, Sanction & Costing, Construction, then Finish & Handover. You always know exactly which step your build is on.",
    link: { label: "See the full process", href: "/services" },
    next: ["Do you handle approvals?", "How long does it take?"],
  },

  // ── Services ────────────────────────────────────────────────────
  {
    id: "services",
    keys: ["service", "provide", "what do you do", "what do you offer", "disciplines", "speciali"],
    text: "Eight disciplines, all in-house: building construction, architectural design, structural engineering, interior design, exterior design, renovation, remodelling and full turnkey delivery.",
    link: { label: "See all services", href: "/services" },
    next: ["What is turnkey?", "Do you do interiors?", "What does it cost?"],
  },
  {
    id: "turnkey",
    keys: ["turnkey", "end to end", "single contract", "one contract", "complete package"],
    text: "Turnkey means one contract from drawing board to keys — one team, one timeline, one fixed cost. You are not left coordinating an architect, a contractor and five vendors who each blame the others.",
    link: { label: "Turnkey delivery", href: "/services" },
    next: ["What does it cost?", "How long does it take?"],
  },
  {
    id: "interior",
    keys: ["interior", "modular kitchen", "kitchen", "bedroom", "wardrobe", "pooja", "mandir", "living room", "false ceiling", "furniture", "decor"],
    text: "We design and build residential interiors — living rooms, bedrooms, modular kitchens and pooja rooms. Everything is drawn in 3D first, then factory-finished and installed by our own carpentry and electrical teams.",
    link: { label: "View interior work", href: "/our-work/interior/residential" },
    next: ["What does it cost?", "What materials do you use?"],
  },
  {
    id: "commercial",
    keys: ["commercial", "office", "shop", "showroom", "retail", "restaurant", "warehouse", "factory", "business"],
    text: "Yes — offices, showrooms, retail and commercial shells. We work around trading hours where needed; one Kharagpur office fit-out was completed without losing a single working day for the client.",
    link: { label: "Commercial interiors", href: "/our-work/interior/commercial" },
    next: ["How long does it take?", "What does it cost?"],
  },
  {
    id: "renovation",
    keys: ["renovation", "renovate", "remodel", "repair", "old house", "retrofit", "restore", "makeover", "extension"],
    text: "A core service. We assess the existing frame first and tell you honestly what can be kept and what must be rebuilt — no pretending a tired structure is sound just to win the job.",
    link: { label: "Renovation projects", href: "/our-work/renovation" },
    next: ["What does it cost?", "How long does it take?"],
  },
  {
    id: "architecture",
    keys: ["architect", "architectural", "design only", "drawing", "blueprint", "floor plan", "plan only", "3d", "elevation", "render"],
    text: "Yes, we take design-only commissions: site-responsive planning, working drawings, 3D elevations and sanction-ready documentation — even if you build with someone else.",
    link: { label: "Architecture gallery", href: "/our-work/architecture" },
    next: ["Do you handle approvals?", "What does it cost?"],
  },
  {
    id: "newhouse",
    keys: ["build a house", "want to build", "new house", "construct", "duplex", "bungalow", "villa", "g+", "storey", "floors", "apartment", "flat"],
    text: "Wonderful — that is exactly what we do. 🏠 Send us your plot dimensions and rough requirements, and we will come back with a concept, a realistic timeline and an itemised cost.",
    link: QUOTE,
    next: ["What does it cost?", "How long does it take?", "Do you handle approvals?"],
  },

  // ── Technical ───────────────────────────────────────────────────
  {
    id: "approval",
    keys: ["approval", "sanction", "permission", "govt", "government", "municipal", "corporation", "legal", "licence", "license", "noc"],
    text: "We prepare sanction-ready drawings and handle the municipal approval process for you — step 7 of our 19-step sequence. You are not left queuing at the corporation office.",
    link: { label: "See our process", href: "/services" },
    next: ["How long does it take?", "What is your work process?"],
  },
  {
    id: "materials",
    keys: ["material", "cement", "steel", "brand", "grade", "brick", "sand", "concrete", "tmt", "quality of material"],
    text: "ISI-grade cement and certified TMT steel only, with third-party testing on structural material. Every grade is named in your quote, so nothing gets quietly substituted on site.",
    next: ["Do you give a warranty?", "How do you supervise sites?"],
  },
  {
    id: "quality",
    keys: ["quality", "supervis", "engineer", "inspection", "check", "monitor", "site visit by you", "labour", "workers", "subcontract"],
    text: "Every site is run by our own qualified engineers and crews — we do not subcontract the build and hope for the best. Quality checks happen at each stage, and you get weekly progress photographs.",
    next: ["What materials do you use?", "Do you give a warranty?"],
  },
  {
    id: "warranty",
    keys: ["warranty", "guarantee", "after sales", "maintenance", "defect", "snag", "service after"],
    text: "Structural work carries a written warranty, and we handle snags after handover rather than disappearing. One Ghatal client is eighteen months in with not a single issue resurfacing.",
    link: CONTACT,
    next: ["What materials do you use?", "Read testimonials"],
  },
  {
    id: "waterproofing",
    keys: ["waterproof", "leak", "seepage", "damp", "terrace", "roof leak", "monsoon"],
    text: "Waterproofing matters a great deal in a Bengal monsoon. We treat terraces, bathrooms and sunken slabs with membrane systems as standard — it is specified in the quote, never an afterthought.",
    next: ["What materials do you use?", "Do you give a warranty?"],
  },
  {
    id: "vastu",
    keys: ["vastu", "vaastu", "feng shui", "direction", "auspicious"],
    text: "Yes — we regularly plan homes to Vastu principles. Share your requirements or your consultant's notes and we will work them into the layout from the first draft.",
    next: ["I want to build a house", "Book a site visit"],
  },
  {
    id: "soil",
    keys: ["soil", "foundation", "piling", "bearing", "test", "survey", "land", "plot"],
    text: "For anything beyond a modest structure we recommend a soil test before foundation design — it decides between a raft, footings or piles. We arrange the testing and the structural design follows the result.",
    next: ["What is your work process?", "Book a site visit"],
  },

  // ── Company ─────────────────────────────────────────────────────
  {
    id: "area",
    keys: ["area", "location", "where are you", "which city", "midnapur", "midnapore", "medinipur", "paschim", "kharagpur", "ghatal", "jhargram", "bengal", "india", "serve", "outside", "travel"],
    text: "We are based in Midnapur, Paschim Midnapur, and work across the district — Kharagpur, Ghatal, Salboni, Debra, Belda and Jhargram — as well as taking projects elsewhere in West Bengal and across India. Site visits within Paschim Midnapur are free.",
    next: ["Book a site visit", "What does it cost?"],
  },
  {
    id: "experience",
    keys: ["experience", "how many year", "since", "established", "old is", "history", "how many project", "track record"],
    text: "15+ years and 250+ completed projects since 2010, rated 4.9/5 by over 200 clients — with a qualified engineer on every site.",
    link: { label: "Read testimonials", href: "/our-work/testimonials" },
    next: ["Can I see your work?", "What does it cost?"],
  },
  {
    id: "portfolio",
    keys: ["portfolio", "see your work", "previous", "past project", "gallery", "photos", "examples", "sample", "reference"],
    text: "Of course — our gallery covers completed and ongoing projects, residential and commercial interiors, exteriors, architecture and before-and-after renovations.",
    link: { label: "Browse our work", href: "/our-work" },
    next: ["Do you do interiors?", "Read testimonials"],
  },
  {
    id: "reviews",
    keys: ["review", "rating", "testimonial", "feedback", "reputation", "trust", "reliable", "genuine"],
    text: "We are rated 4.9/5 across 200+ clients. The testimonials on our site name the client, their role and the actual project — not anonymous praise.",
    link: { label: "Read testimonials", href: "/our-work/testimonials" },
    next: ["Can I see your work?", "Do you give a warranty?"],
  },
  {
    id: "contact",
    keys: ["contact", "call", "phone", "number", "email", "reach", "talk to", "speak", "whatsapp", "address", "office", "book", "appointment", "site visit", "consultation", "meet"],
    text: "Call +91 98765 43210, email info@reenabuild.com, or send your floor plan through the contact form. Office hours are Mon–Sat, 9:30 AM – 7:00 PM, and the first consultation is free.",
    link: CONTACT,
    next: ["What does it cost?", "Which areas do you serve?"],
  },
  {
    id: "hours",
    keys: ["office hours", "working hours", "hours", "timing", "open", "closed", "sunday", "when can i", "available"],
    text: "We are open Monday to Saturday, 9:30 AM – 7:00 PM. Site visits can be arranged outside those hours if that suits you better — just ask.",
    link: CONTACT,
    next: ["Book a site visit", "Which areas do you serve?"],
  },
  {
    id: "careers",
    keys: ["job", "career", "hiring", "vacancy", "internship", "work with you", "resume", "cv"],
    text: "We do take on engineers, site supervisors and design staff from time to time. Send your CV to info@reenabuild.com and we will keep it on file.",
    link: CONTACT,
  },
]

export const FALLBACK: Answer = {
  id: "fallback",
  keys: [],
  text: "I do not have a scripted answer for that one — but our engineers will. Send the question through and you will get a proper reply from a person, usually the same day.",
  link: { label: "Ask our team", href: "/contact" },
  next: ["What does it cost?", "What services do you offer?", "Book a site visit"],
}

export const OPENING_CHIPS = [
  "What does it cost?",
  "How long does it take?",
  "What services do you offer?",
  "Book a site visit",
]

/**
 * Pick the best answer for a message.
 *
 * Scoring by matched-keyword length (rather than taking the first hit) keeps a
 * broad keyword from swallowing a narrower one: "modular kitchen" outscores
 * "kitchen", and a stray "hi" inside "this" cannot win against a real topic.
 * Short keys (<= 3 chars) must match as whole words for the same reason.
 */
export function matchAnswer(input: string): Answer {
  const q = ` ${input.toLowerCase().replace(/[^\w\s']/g, " ").replace(/\s+/g, " ").trim()} `

  let best: Answer | null = null
  let bestScore = 0

  for (const a of ANSWERS) {
    let score = 0
    for (const k of a.keys) {
      const key = k.toLowerCase()
      // Phrases and very short words must sit on word boundaries; longer single
      // words match as a prefix so "cost" still catches "costing".
      const exact = key.includes(" ") || key.length <= 3
      const hit = exact ? q.includes(` ${key} `) : q.includes(key)
      if (hit) score += key.length
    }
    if (score > bestScore) {
      bestScore = score
      best = a
    }
  }

  return best ?? FALLBACK
}
