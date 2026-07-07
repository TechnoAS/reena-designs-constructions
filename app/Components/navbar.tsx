"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
                : "bg-transparent"
                }`}
        >
            <div className="relative mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-light tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-amber-500">
                        Reena
                    </span>
                    <span className="hidden sm:inline text-sm font-light text-gray-500 tracking-widest uppercase">
                        Designs &amp; Constructions
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-btn transition-all duration-300 group-hover:w-3/4 rounded-full" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button (Desktop) */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex relative text-sm font-light text-gray-900 px-2 py-1 transition-all duration-300 hover:font-medium hover:bg-btn hover:text-white hover:px-4 hover:py-2 group"
                >
                    Let&apos;s Talk !
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] w-[120%] bg-btn transition-all duration-300 group-hover:opacity-0" />
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col gap-1.5 p-2 group"
                >
                    <span
                        className={`block h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-6 pb-6 pt-2">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 text-gray-700 hover:text-amber-500 text-base font-light transition-colors duration-300 border-b border-gray-100"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-4 block text-center rounded-full bg-amber-400 px-5 py-3 text-sm font-light text-black hover:bg-amber-300 transition-colors duration-300"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
