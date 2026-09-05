export type FaqItem = { q: string; a: string }

/**
 * Public FAQ. Mirrors the topics the assistant answers, written out at the
 * length a search engine and a considering client both want. Also emitted as
 * FAQPage structured data, so the wording here is what may appear in results.
 */
export const FAQS: FaqItem[] = [
  {
    q: "How much does it cost to build a house in Midnapur?",
    a: "Cost depends on built-up area, structural specification and finish level, so we do not quote a blanket per-square-foot rate. After a free site visit we issue a fully itemised quotation naming every material grade, and that figure is fixed for the duration of the contract — no revised estimates halfway through the build.",
  },
  {
    q: "How long does a project take from start to handover?",
    a: "A typical independent home runs 10 to 14 months from sanction to handover. Interior fit-outs alone take 6 to 10 weeks. Your completion date is written into the contract, and we report progress weekly with site photographs so you always know which of the 19 steps your build is on.",
  },
  {
    q: "Do you handle municipal approvals and sanction drawings?",
    a: "Yes. We prepare sanction-ready architectural and structural drawings and file them with the relevant municipality or panchayat on your behalf. It is step 7 of our documented process — you are not left queuing at a government office.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Midnapur, Paschim Midnapur, and work throughout the district including Kharagpur, Ghatal, Salboni, Debra, Belda and Jhargram. We also take projects elsewhere in West Bengal and across India. Site visits within Paschim Midnapur are free of charge.",
  },
  {
    q: "What materials and quality standards do you use?",
    a: "ISI-grade cement and certified TMT steel only, with third-party testing on structural material. Every grade is named in your quotation so nothing can be quietly substituted on site, and each project is supervised by our own qualified engineers rather than a subcontracted crew.",
  },
  {
    q: "Can you take on only the design, without the construction?",
    a: "Yes. We accept design-only commissions covering site planning, working drawings, 3D elevations and sanction documentation, even if you intend to build with another contractor. Equally, we take on construction against drawings prepared elsewhere.",
  },
  {
    q: "How is payment structured, and do you help with home loans?",
    a: "Payment is staged against completed milestones rather than a large advance, and the schedule is shared before anything is signed. We can also provide the documentation and certified progress reports your bank needs to release a home-loan disbursement.",
  },
  {
    q: "Do you renovate existing buildings?",
    a: "Yes, including structural retrofits and full-property makeovers. We assess the existing frame first and tell you honestly what can be retained and what must be rebuilt — we will not pretend a tired structure is sound simply to win the work.",
  },
  {
    q: "What happens if the project runs late?",
    a: "The handover date goes into the contract, and progress is reported weekly so slippage is visible early rather than at the end. If something genuinely outside our control shifts the programme, you hear it from us as soon as we know, with a revised plan.",
  },
  {
    q: "Is there a warranty after handover?",
    a: "Structural work carries a written warranty, and we close out snags after handover rather than disappearing once the final payment clears. Clients several years past completion still come back to us for maintenance and extensions.",
  },
]
