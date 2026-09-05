import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"
import { SITE } from "@/data/siteInfo"

/**
 * Privacy notice.
 *
 * Written to describe what this site actually does rather than generic
 * boilerplate — it collects an enquiry form and nothing else. Have it reviewed
 * before launch, and update it the moment analytics, a CRM or any third-party
 * script is added.
 */
const SECTIONS = [
  {
    heading: "Who we are",
    body: [
      `${SITE.name} is a construction and design company based at ${SITE.address.street}, ${SITE.address.region} ${SITE.address.postalCode}, India. For any question about this notice or about information we hold, contact us at ${SITE.email} or ${SITE.phones[0]}.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "The enquiry form on our Contact page asks for your name, email address, phone number, project type and your message. These are the only personal details this website collects, and you choose what to put in them.",
      "We do not run advertising trackers, and we do not sell, rent or share your details with any third party for marketing.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "Solely to answer your enquiry: to reply, to arrange a site visit, and to prepare a quotation if you ask for one. If you become a client, the same details are used to administer your project.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that do not become projects are kept for up to two years, so we can pick up the conversation if you come back to us, and then deleted. Project records are kept for as long as we are required to retain contract and tax documentation.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You can ask us what we hold about you, ask for it to be corrected, or ask us to delete it. Email ${SITE.email} and we will respond within 30 days.`,
    ],
  },
  {
    heading: "Third parties",
    body: [
      "Two external services are used to display this site: Google Fonts serves the typeface, and Unsplash serves some gallery photographs. Loading either means your browser makes a request to them, and they will see your IP address. Neither is used to identify you here.",
      "Nothing else on this site sends your information anywhere.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this notice changes, the revised version will be published on this page with a new date below.",
    ],
  },
]

export default function Privacy() {
  return (
    <PageWrapper>
      <Seo
        title="Privacy Policy"
        description={`How ${SITE.name} handles the information you send through this website: what is collected, why, how long it is kept, and how to have it removed.`}
      />
      <PageHeader title="PRIVACY POLICY" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <div className={`${SITE_CONTAINER} py-14`}>
        <div className="max-w-2xl">
          <p className="mb-10 text-sm leading-7 text-slate-500">
            This notice explains what happens to the information you send us through this website.
            It is short because the site does very little with your data.
          </p>

          <div className="flex flex-col gap-9">
            {SECTIONS.map(({ heading, body }) => (
              <section key={heading}>
                <h2 className="montserrat font-800 mb-3 text-sm tracking-wider uppercase text-navy">
                  {heading}
                </h2>
                {body.map((para) => (
                  <p key={para} className="mb-3 text-sm leading-7 text-slate-500 last:mb-0">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-hairline pt-6 text-xs text-slate-400">
            Last updated {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}
