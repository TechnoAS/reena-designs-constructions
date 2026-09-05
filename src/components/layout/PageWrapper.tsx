import Nav from "./Nav"
import Footer, { type FooterCTAProps } from "./Footer"

type PageWrapperProps = {
  children: React.ReactNode
  cta?: FooterCTAProps | null
  /** Kept for backward compatibility */
  overlapFooter?: boolean
}

export default function PageWrapper({ children, cta }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer cta={cta} />
    </div>
  )
}
