import { Routes, Route, Navigate } from "react-router-dom"
import ChatBot from "./components/ui/ChatBot"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import OurWork from "./pages/OurWork"
import ProjectsSuccessful from "./pages/ProjectsSuccessful"
import ProjectsOngoing from "./pages/ProjectsOngoing"
import InteriorResidential from "./pages/InteriorResidential"
import InteriorCommercial from "./pages/InteriorCommercial"
import GalleryPage from "./pages/GalleryPage"
import TestimonialsPage from "./pages/TestimonialsPage"
import Contact from "./pages/Contact"
import {
  exteriorImgs,
  archImgs,
  d3Imgs,
  renoImgs,
  beforeAfterImgs,
} from "./data/galleryData"

export default function App() {
  return (
    <>
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
      <Route
        path="/our-work/exterior"
        element={
          <GalleryPage
            title="EXTERIOR DESIGN"
            crumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Exterior Design" }]}
            images={exteriorImgs}
          />
        }
      />
      <Route
        path="/our-work/architecture"
        element={
          <GalleryPage
            title="ARCHITECTURE GALLERY"
            crumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Architecture Gallery" }]}
            images={archImgs}
          />
        }
      />
      <Route
        path="/our-work/3d-design"
        element={
          <GalleryPage
            title="3D DESIGN & ELEVATION"
            crumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "3D Design & Elevation" }]}
            images={d3Imgs}
          />
        }
      />
      <Route
        path="/our-work/renovation"
        element={
          <GalleryPage
            title="RENOVATION PROJECTS"
            crumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Renovation Projects" }]}
            images={renoImgs}
          />
        }
      />
      <Route
        path="/our-work/before-after"
        element={
          <GalleryPage
            title="BEFORE & AFTER GALLERY"
            crumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Before & After Gallery" }]}
            images={beforeAfterImgs}
          />
        }
      />
      <Route path="/our-work/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Mounted outside <Routes> so it survives navigation and stays pinned
          to the viewport on every page. */}
      <ChatBot />
    </>
  )
}
