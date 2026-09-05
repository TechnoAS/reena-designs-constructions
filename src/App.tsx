import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import ScrollToTop from "./components/layout/ScrollToTop"
import Home from "./pages/Home"
import GalleryPage from "./pages/GalleryPage"
import {
  exteriorImgs,
  archImgs,
  d3Imgs,
  renoImgs,
  beforeAfterImgs,
} from "./data/galleryData"

/**
 * Every route except the homepage is split out of the main bundle.
 *
 * All twelve pages used to be static imports, so a visitor landing on "/"
 * downloaded the interiors lightbox, the build simulator, the 404 artwork and
 * the assistant's entire knowledge base before the hero could paint. Home
 * stays eager because it is the overwhelmingly common entry point and lazily
 * loading it would only add a round trip.
 */
const About = lazy(() => import("./pages/About"))
const Services = lazy(() => import("./pages/Services"))
const OurWork = lazy(() => import("./pages/OurWork"))
const ProjectsSuccessful = lazy(() => import("./pages/ProjectsSuccessful"))
const ProjectsOngoing = lazy(() => import("./pages/ProjectsOngoing"))
const InteriorResidential = lazy(() => import("./pages/InteriorResidential"))
const InteriorCommercial = lazy(() => import("./pages/InteriorCommercial"))
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"))
const Contact = lazy(() => import("./pages/Contact"))
const Faq = lazy(() => import("./pages/Faq"))
const Privacy = lazy(() => import("./pages/Privacy"))
const Cookies = lazy(() => import("./pages/Cookies"))
const NotFound = lazy(() => import("./pages/NotFound"))

/**
 * Floating chrome, also split out.
 *
 * Neither is needed to render or read a page: the banner appears 1.2s in, and
 * the assistant carries a 300-line knowledge base that only matters once
 * someone opens it. Keeping them in the entry chunk meant every visitor
 * downloaded all of it before the hero could paint.
 */
const ChatBot = lazy(() => import("./components/ui/ChatBot"))
const CookieBanner = lazy(() => import("./components/layout/CookieBanner"))

/** Holds the viewport height while a route chunk arrives, so the footer does
 *  not jump up the page and back down again. */
function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-brand" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

/** The six galleries differ only by title, crumbs and image set. */
const GALLERIES = [
  { path: "/our-work/exterior", title: "EXTERIOR DESIGN", crumb: "Exterior Design", images: exteriorImgs },
  { path: "/our-work/architecture", title: "ARCHITECTURE GALLERY", crumb: "Architecture Gallery", images: archImgs },
  { path: "/our-work/3d-design", title: "3D DESIGN & ELEVATION", crumb: "3D Design & Elevation", images: d3Imgs },
  { path: "/our-work/renovation", title: "RENOVATION PROJECTS", crumb: "Renovation Projects", images: renoImgs },
  { path: "/our-work/before-after", title: "BEFORE & AFTER GALLERY", crumb: "Before & After Gallery", images: beforeAfterImgs },
]

export default function App() {
  return (
    <>
      {/* Every navigation starts at the top of the new page. */}
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-work/projects" element={<Navigate to="/our-work/projects/successful" replace />} />
          <Route path="/our-work/projects/successful" element={<ProjectsSuccessful />} />
          <Route path="/our-work/projects/ongoing" element={<ProjectsOngoing />} />
          <Route path="/our-work/interior" element={<Navigate to="/our-work/interior/residential" replace />} />
          <Route path="/our-work/interior/residential" element={<InteriorResidential />} />
          <Route path="/our-work/interior/commercial" element={<InteriorCommercial />} />

          {GALLERIES.map(({ path, title, crumb, images }) => (
            <Route
              key={path}
              path={path}
              element={
                <GalleryPage
                  title={title}
                  crumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: crumb },
                  ]}
                  images={images}
                />
              }
            />
          ))}

          <Route path="/our-work/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* Mounted outside <Routes> so they survive navigation and stay pinned
          to the viewport on every page. `null` fallback: there is nothing
          useful to show in the corner while these load. */}
      <Suspense fallback={null}>
        <ChatBot />
        <CookieBanner />
      </Suspense>
    </>
  )
}
