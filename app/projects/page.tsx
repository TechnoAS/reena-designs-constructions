"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineArrowRight, HiOutlineFilter } from "react-icons/hi";

const categories = ["All", "Residential", "Commercial", "Interiors"];

const projectsList = [
  {
    id: 1,
    title: "The Grandeur Villa",
    category: "Residential",
    location: "Koramangala, Bangalore",
    area: "4,500 Sq. Ft.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    color: "from-amber-500/10 to-[#FF5F1F]/10",
  },
  {
    id: 2,
    title: "Apex Corporate Tower",
    category: "Commercial",
    location: "Whitefield, Bangalore",
    area: "35,000 Sq. Ft.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    id: 3,
    title: "Minimalist Japandi Penthouse",
    category: "Interiors",
    location: "Indiranagar, Bangalore",
    area: "2,800 Sq. Ft.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    color: "from-rose-500/10 to-orange-500/10",
  },
  {
    id: 4,
    title: "Serene Heights Residence",
    category: "Residential",
    location: "HSR Layout, Bangalore",
    area: "3,200 Sq. Ft.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: 5,
    title: "Neo-Classical Office Space",
    category: "Interiors",
    location: "MG Road, Bangalore",
    area: "6,000 Sq. Ft.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: 6,
    title: "Nexus Retail Plaza",
    category: "Commercial",
    location: "Electronic City, Bangalore",
    area: "18,000 Sq. Ft.",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555637138-afc8f244c7a9?auto=format&fit=crop&q=80&w=800",
    color: "from-cyan-500/10 to-sky-500/10",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsList.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-light">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5F1F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FF5F1F] tracking-[0.25em] uppercase text-xs font-semibold mb-3">
            Our Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight mb-4">
            Featured Projects &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF5F1F] font-normal">
              Landmarks
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Explore our curated gallery of architectural masterworks, premium residential constructions, and high-end luxury interiors.
          </p>
        </div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="text-xs text-gray-400 mr-2 flex items-center gap-1 font-medium uppercase tracking-wider">
            <HiOutlineFilter className="w-4 h-4 text-[#FF5F1F]" /> Filter By:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gray-900 text-white shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between"
            >
              {/* Image Container with Fallback/Overlay */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback background color if image fails to load offline
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-100">
                  <span className="text-[10px] font-semibold tracking-wider text-[#FF5F1F] uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-2 group-hover:text-[#FF5F1F] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                    <HiOutlineLocationMarker className="w-4 h-4 text-[#FF5F1F] shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="border-t border-gray-50 pt-4 flex items-center justify-between text-xs text-gray-500">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Area</span>
                    <span className="font-medium text-gray-700">{project.area}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Year</span>
                    <span className="font-medium text-gray-700">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-3">Interested in a similar development?</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s build your dream property together. Reach out to schedule a consultation with our planning and construction management teams.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-xs font-semibold text-white hover:bg-[#FF5F1F] transition-colors duration-300 shadow-md group cursor-pointer"
          >
            Start Your Project
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
