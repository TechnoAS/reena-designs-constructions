"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineArrowRight,
} from "react-icons/hi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Architectural Design", href: "/services#architecture" },
  { label: "Residential Construction", href: "/services#residential" },
  { label: "Commercial Construction", href: "/services#commercial" },
  { label: "Premium Interior Design", href: "/services#interiors" },
  { label: "3D Visualization", href: "/services#3d-walkthrough" },
  { label: "Landscape Planning", href: "/services#landscape" },
];

const socialLinks = [
  { icon: <FaInstagram className="w-4 h-4" />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaFacebookF className="w-4 h-4" />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedinIn className="w-4 h-4" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaPinterestP className="w-4 h-4" />, href: "https://pinterest.com", label: "Pinterest" },
  { icon: <FaXTwitter className="w-4 h-4" />, href: "https://twitter.com", label: "X (Twitter)" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-gray-950 text-gray-400 font-light border-t border-gray-900 overflow-hidden z-10">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF5F1F]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-amber-400/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group w-max">
                <span className="text-2xl font-light tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400">
                  Reena
                </span>
                <span className="text-xs font-light text-gray-500 tracking-widest uppercase mt-1">
                  Designs &amp; Constructions
                </span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Crafting luxury spaces and premium architectural designs since 2009. We blend client-first vision with structural engineering to build dreams that stand the test of time.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-3 max-w-sm">
              <h4 className="text-white text-sm font-medium tracking-wide uppercase">
                Subscribe to our Newsletter
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stay updated with the latest in modern architecture, interior design trends, and our featured projects.
              </p>
              <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900/60 border border-gray-800 rounded-full px-5 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#FF5F1F]/50 transition-colors duration-300 pr-12"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 bg-[#FF5F1F] hover:bg-[#e65519] text-white p-2 rounded-full transition-all duration-300 group"
                >
                  <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-500 animate-fade-in">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-medium tracking-wide uppercase border-l-2 border-[#FF5F1F] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-medium tracking-wide uppercase border-l-2 border-[#FF5F1F] pl-3">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((svc) => (
                <li key={svc.label}>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-medium tracking-wide uppercase border-l-2 border-[#FF5F1F] pl-3">
              Office Details
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="w-5 h-5 text-[#FF5F1F] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  1st Floor, Royal Plaza, Sector 4, Bangalore, Karnataka — 560034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 text-[#FF5F1F] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="w-5 h-5 text-[#FF5F1F] shrink-0" />
                <a href="mailto:contact@reenadesigns.com" className="hover:text-white transition-colors duration-300">
                  contact@reenadesigns.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineClock className="w-5 h-5 text-[#FF5F1F] shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 9:00 AM - 6:00 PM <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-900 w-full mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Reena Designs &amp; Constructions. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 text-gray-500 flex items-center justify-center hover:bg-[#FF5F1F] hover:text-white hover:border-[#FF5F1F] transition-all duration-300 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-600">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
