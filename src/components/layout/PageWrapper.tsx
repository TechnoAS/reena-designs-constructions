import Nav from "./Nav"
import Footer, { type FooterCTAProps } from "./Footer"
import SkipLink from "./SkipLink"

type PageWrapperProps = {
  children: React.ReactNode
  cta?: FooterCTAProps | null
  /** Kept for backward compatibility */
  overlapFooter?: boolean
}

export default function PageWrapper({ children, cta }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* First focusable element on the page, so it is the first thing Tab
          reaches. The header carries five top-level items, a ten-entry
          dropdown and a CTA — without this a keyboard or switch user tabs the
          whole lot on every one of the eighteen routes before reaching any
          content. */}
      <SkipLink />
      <Nav />
      <main id="main" className="flex-1 pt-20">
        {children}
      </main>
      <Footer cta={cta} />
    </div>
  )
}
