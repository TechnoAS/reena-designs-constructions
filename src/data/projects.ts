import { unsplash } from "./images"

/**
 * The two project listings.
 *
 * Kept as data, outside the page components, so the route table can emit each
 * project as an `ItemList` entry in the prerendered HTML — the towns these were
 * built in are local queries the site has no other page for.
 */

const CROP = { w: 640, h: 480 }
const IMG = (id: string) => unsplash(id, CROP)

export const SUCCESSFUL_PROJECTS = [
  { name: "Sunrise Villa", location: "Midnapur, West Bengal", type: "Residential", area: "3200 Sq.ft", completed: "Jan 2024", tag: "Residential", img: IMG("photo-1613490493576-7fde63acd811") },
  { name: "Greenfield Apartment", location: "Kharagpur, West Bengal", type: "Residential", area: "2500 Sq.ft", completed: "Jan 2024", tag: "Residential", img: IMG("photo-1567943183748-3a7542120c90") },
  { name: "Metro Plaza", location: "Midnapur, West Bengal", type: "Commercial", area: "8500 Sq.ft", completed: "Jan 2024", tag: "Commercial", img: IMG("photo-1783705094622-f2c01a9787b5") },
  { name: "The Prestige Tower", location: "Kharagpur, West Bengal", type: "Commercial", area: "12000 Sq.ft", completed: "Mar 2024", tag: "Commercial", img: IMG("photo-1760246964044-1384f71665b9") },
  { name: "Serene Heights", location: "Ghatal, West Bengal", type: "Residential", area: "4100 Sq.ft", completed: "Feb 2024", tag: "Residential", img: IMG("photo-1706164971309-fb4785fe6ceb") },
  { name: "Luxe Living Room", location: "Midnapur, West Bengal", type: "Interior", area: "1200 Sq.ft", completed: "Apr 2024", tag: "Interior", img: IMG("photo-1646987916641-1f3c8992daa2") },
  { name: "Heritage Bungalow", location: "Belda, West Bengal", type: "Residential", area: "5500 Sq.ft", completed: "May 2024", tag: "Renovation", img: IMG("photo-1479839672679-a46483c0e7c8") },
  { name: "Skyline Office", location: "Kharagpur, West Bengal", type: "Commercial", area: "6200 Sq.ft", completed: "Jun 2024", tag: "Commercial", img: IMG("photo-1488972685288-c3fd157d7c7a") },
  { name: "Golden Gate Villa", location: "Jhargram, West Bengal", type: "Renovation", area: "3800 Sq.ft", completed: "Jul 2024", tag: "Renovation", img: IMG("photo-1518005020951-eccb494ad742") },
] as const

/**
 * Live sites.
 *
 * These handover dates are the one piece of content on the site that goes
 * stale on its own — every entry previously read "Expected: Aug 2024", two
 * years in the past, which reads worse than showing nothing at all. Review
 * this list whenever a project completes or a programme moves.
 */
export const ONGOING_PROJECTS = [
  { name: "Horizon Heights", location: "Midnapur, West Bengal", type: "Residential", progress: 65, expected: "Nov 2026", tag: "Residential", img: IMG("photo-1488972685288-c3fd157d7c7a") },
  { name: "Blue Pearl Villa", location: "Ghatal, West Bengal", type: "Residential", progress: 40, expected: "Nov 2026", tag: "Residential", img: IMG("photo-1479839672679-a46483c0e7c8") },
  { name: "Central Business Hub", location: "Kharagpur, West Bengal", type: "Commercial", progress: 30, expected: "Nov 2026", tag: "Commercial", img: IMG("photo-1783705094622-f2c01a9787b5") },
  { name: "Lakewood Residency", location: "Midnapur, West Bengal", type: "Residential", progress: 55, expected: "Jan 2027", tag: "Residential", img: IMG("photo-1613490493576-7fde63acd811") },
  { name: "Pinnacle Towers", location: "Kharagpur, West Bengal", type: "Commercial", progress: 20, expected: "Jan 2027", tag: "Commercial", img: IMG("photo-1760246964044-1384f71665b9") },
  { name: "Palm Crest Bungalow", location: "Salboni, West Bengal", type: "Residential", progress: 10, expected: "Mar 2027", tag: "Residential", img: IMG("photo-1706164971309-fb4785fe6ceb") },
] as const
