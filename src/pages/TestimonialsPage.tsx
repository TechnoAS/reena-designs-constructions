import PageWrapper from "@/components/layout/PageWrapper"
import Seo from "@/components/Seo"
import PageHeader from "@/components/ui/PageHeader"
import StarRating from "@/components/ui/StarRating"
import { SITE_CONTAINER } from "@/components/layout/constants"

const reviews = [
  { name: "Rajesh Mehta", role: "Homeowner", rating: 5, text: "Reena Designs & Constructions delivered our dream home on time with excellent quality. The team was professional and transparent throughout the entire process." },
  { name: "Priya Dutta", role: "Business Owner", rating: 5, text: "Outstanding craftsmanship and professional team. Our office renovation was completed flawlessly. Highly satisfied with the quality of work." },
  { name: "Amit Banerjee", role: "Property Developer", rating: 5, text: "Transparent communication throughout the project. The 3D designs matched perfectly with the final outcome. Will definitely work with them again." },
  { name: "Sunita Ghosh", role: "Homeowner", rating: 5, text: "The interior design team understood our brief perfectly. Our home looks exactly like we envisioned — beautiful and functional." },
  { name: "Vikram Sharma", role: "Corporate Client", rating: 5, text: "We have partnered with Reena on three commercial projects. Each time delivered with zero structural issues and on schedule." },
  { name: "Anita Roy", role: "Homeowner", rating: 5, text: "The renovation of our 20-year-old home was done with great care. They preserved the heritage elements while modernizing the interiors." },
]

export default function TestimonialsPage() {
  return (
    <PageWrapper>
      <Seo
        title="Client Testimonials — What Our Clients Say"
        description="Homeowners, business owners and developers on working with Reena Designs & Constructions: transparency, on-time handover and the quality of the finished build."
      />
      <PageHeader
        title="CLIENT TESTIMONIALS"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Client Testimonials" }]}
      />
      <div className={`${SITE_CONTAINER} py-12`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="svc-card p-6 flex flex-col gap-3">
              <StarRating rating={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed italic">"{r.text}"</p>
              <div>
                <div className="montserrat font-700 text-sm text-navy">— {r.name}</div>
                <div className="text-xs text-brand">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
