"use client";

import React from "react";
import Link from "next/link";
import {
  HiOutlineOfficeBuilding,
  HiOutlineHome,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineMap,
  HiOutlinePresentationChartLine,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const servicesList = [
  {
    id: "architecture",
    icon: <HiOutlinePresentationChartLine className="w-8 h-8 text-[#FF5F1F]" />,
    title: "Architectural Design",
    description:
      "We design modern, structurally sound, and aesthetically beautiful buildings. From conceptual sketches to detailed blueprints and structural engineering, we ensure your project is built on a solid foundation.",
    features: [
      "Custom Residential & Commercial Plans",
      "Structural Engineering & Analysis",
      "Site Analysis & Feasibility Studies",
      "Building Code & Permit Approvals",
    ],
  },
  {
    id: "residential",
    icon: <HiOutlineHome className="w-8 h-8 text-[#FF5F1F]" />,
    title: "Residential Construction",
    description:
      "Your home is your sanctuary. We specialize in building premium individual villas, row houses, and luxury apartments using high-quality materials and craftsmanship.",
    features: [
      "End-to-End Home Construction",
      "Premium Villas & Custom Homes",
      "Quality Material Sourcing (ISI-Certified)",
      "Strict Multi-Stage Quality Audits",
    ],
  },
  {
    id: "commercial",
    icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-[#FF5F1F]" />,
    title: "Commercial Construction",
    description:
      "Delivering high-performance commercial buildings, office complexes, retail stores, and corporate spaces designed for safety, longevity, and efficiency.",
    features: [
      "Office Complexes & Retail Spaces",
      "Steel & Composite Structures",
      "HVAC & Electrical Integrations",
      "On-Time & On-Budget Delivery",
    ],
  },
  {
    id: "interiors",
    icon: <HiOutlineSparkles className="w-8 h-8 text-[#FF5F1F]" />,
    title: "Premium Interior Design",
    description:
      "Transforming interior spaces into functional works of art. We design customized modular kitchens, luxurious living rooms, cozy bedrooms, and corporate office interiors.",
    features: [
      "Bespoke Furniture & Fixtures",
      "Modular Kitchens & Wardrobes",
      "Lighting & Acoustic Design",
      "Color Consultations & Material Selection",
    ],
  },
  {
    id: "3d-walkthrough",
    icon: <HiOutlineCube className="w-8 h-8 text-[#FF5F1F]" />,
    title: "3D Visualization & Walkthroughs",
    description:
      "Experience your future space before the first brick is laid. Our advanced 3D renders and virtual walkthroughs help you visualize layouts, materials, and colors accurately.",
    features: [
      "Photorealistic 3D Renderings",
      "Virtual Reality (VR) Walkthroughs",
      "Exterior & Interior 3D Views",
      "Accurate Material Representation",
    ],
  },
  {
    id: "landscape",
    icon: <HiOutlineMap className="w-8 h-8 text-[#FF5F1F]" />,
    title: "Landscape Planning",
    description:
      "Integrating nature with architecture. We design beautiful outdoor gardens, terraces, lawns, and water features that enhance the beauty and sustainability of your property.",
    features: [
      "Sustainable Green Spaces",
      "Terrace & Balcony Gardens",
      "Outdoor Lighting & Hardscaping",
      "Water Feature Integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-light">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5F1F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[#FF5F1F] tracking-[0.25em] uppercase text-xs font-semibold mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF5F1F] font-normal">
              Design &amp; Construction
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            From design blueprints to final interior handovers, we deliver end-to-end services tailored to your aesthetic preferences and budget.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 rounded-3xl transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-amber-400/20 group flex flex-col justify-between"
            >
              <div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 w-max mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3 group-hover:text-[#FF5F1F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600">
                      <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-gray-900 hover:text-[#FF5F1F] transition-colors group/link mt-auto w-max"
              >
                Inquire About Service
                <HiOutlineArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gray-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-gray-900">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF5F1F]/10 rounded-full blur-[80px]" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-light mb-4">Ready to start your custom project?</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Schedule a consultation with our experienced architectural and design team today. Let&apos;s map out your vision and construct something beautiful together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#FF5F1F] hover:bg-[#e65519] px-6 py-3 text-xs font-medium text-white transition-colors duration-300 shadow-md"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-gray-800 bg-gray-900/60 backdrop-blur-sm px-6 py-3 text-xs font-light text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
