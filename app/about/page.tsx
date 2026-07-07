import AboutUs from "../Pages/Aboutus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Reena Designs & Constructions",
  description:
    "Learn about Reena Designs & Constructions — 15+ years of premium residential and commercial construction, interior design, and trusted project delivery.",
};

export default function AboutPage() {
  return <AboutUs />;
}
