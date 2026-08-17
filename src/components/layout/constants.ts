export const SITE_CONTAINER = "mx-auto w-full max-w-[1700px] px-8 sm:px-9 lg:px-14"
export const NAV_CONTAINER = "mx-auto w-full max-w-[1200px] px-8 sm:px-9 lg:px-14"

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Our Work",
    href: "/our-work",
    dropdown: [
      {
        label: "Projects",
        children: [
          { label: "Successful Projects", href: "/our-work/projects/successful" },
          { label: "Ongoing Projects", href: "/our-work/projects/ongoing" },
        ],
      },
      {
        label: "Interior Design",
        children: [
          { label: "Residential Interior", href: "/our-work/interior/residential" },
          { label: "Commercial Interior", href: "/our-work/interior/commercial" },
        ],
      },
      { label: "Exterior Design", href: "/our-work/exterior" },
      { label: "Architecture Gallery", href: "/our-work/architecture" },
      { label: "3D Design & Elevation", href: "/our-work/3d-design" },
      { label: "Renovation Projects", href: "/our-work/renovation" },
      { label: "Before & After Gallery", href: "/our-work/before-after" },
      { label: "Client Testimonials", href: "/our-work/testimonials" },
    ],
  },
]
