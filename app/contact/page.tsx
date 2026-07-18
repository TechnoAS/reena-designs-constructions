import ContactComponent from "../Components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Reena Designs & Constructions",
  description:
    "Get in touch with Reena Designs & Constructions. Contact us for premium residential and commercial construction, architecture, and interior design consultations.",
};

export default function ContactPage() {
  return <ContactComponent />;
}
