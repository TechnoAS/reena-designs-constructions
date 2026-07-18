"use client";

import React, { useState, FormEvent } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineChatAlt,
} from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiOutlinePhone className="w-6 h-6 text-[#FF5F1F]" />,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Sat from 9am to 6pm",
      href: "tel:+919876543210",
    },
    {
      icon: <HiOutlineMail className="w-6 h-6 text-[#FF5F1F]" />,
      title: "Email Us",
      details: "contact@reenadesigns.com",
      description: "We'll respond within 24 hours",
      href: "mailto:contact@reenadesigns.com",
    },
    {
      icon: <HiOutlineLocationMarker className="w-6 h-6 text-[#FF5F1F]" />,
      title: "Visit Our Office",
      details: "Royal Plaza, Sector 4, Bangalore",
      description: "1st Floor, Sector 4, Karnataka 560034",
      href: "https://maps.google.com",
    },
    {
      icon: <HiOutlineClock className="w-6 h-6 text-[#FF5F1F]" />,
      title: "Working Hours",
      details: "Mon - Sat: 9 AM - 6 PM",
      description: "Sunday: Closed",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-light">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5F1F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FF5F1F] tracking-[0.25em] uppercase text-xs font-semibold mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight mb-4">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF5F1F] font-normal">
              Exceptional
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Have a project in mind, or want to discuss a design vision? Reach out to us, and our team of experts will guide you through every step.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-normal text-gray-900 mb-6 flex items-center gap-2">
              <HiOutlineChatAlt className="w-6 h-6 text-[#FF5F1F]" /> Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-amber-400/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-900 text-sm mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base text-gray-700 hover:text-[#FF5F1F] transition-colors font-medium block"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <span className="text-base text-gray-700 font-medium block">
                          {info.details}
                        </span>
                      )}
                      <p className="text-xs text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Styled Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 h-64 shadow-inner group">
              <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-6 text-center z-10 transition-all duration-300 group-hover:bg-gray-50">
                <HiOutlineLocationMarker className="w-10 h-10 text-[#FF5F1F] mb-3 animate-bounce" />
                <span className="font-normal text-gray-800 text-sm">Our Main Office</span>
                <span className="text-xs text-gray-500 max-w-xs mt-1">
                  1st Floor, Royal Plaza, Sector 4, Bangalore, Karnataka — 560034
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-white bg-gray-900 px-4 py-2 rounded-full hover:bg-[#FF5F1F] transition-colors duration-300"
                >
                  View on Google Maps <HiOutlineArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-sm">
            <h3 className="text-xl font-normal text-gray-900 mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Interest Area */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="">Select a service</option>
                    <option value="architecture">Architectural Design</option>
                    <option value="construction">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="interiors">Premium Interior Design</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, timeline, or any questions you have..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white hover:bg-[#FF5F1F] active:bg-[#e65519] transition-colors duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {/* Success / Error Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-sm text-emerald-800 text-center animate-fade-in">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-sm text-rose-800 text-center animate-fade-in">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
