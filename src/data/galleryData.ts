/**
 * Gallery imagery.
 *
 * These are Unsplash stock photographs, not this company's work. Six of them
 * previously appeared in two or three galleries at once — the same house shown
 * under Exterior Design, 3D Design *and* Before & After — which is the fastest
 * way to make a portfolio look fabricated. Every URL below is now unique.
 *
 * REPLACE THESE. A construction company's Our Work section is the single
 * highest-value page on the site, and stock photography actively works against
 * it. Add real project photographs to `src/imports` and import them here, the
 * way `interiorProjects.ts` already does — those are the company's own images
 * and are the model to follow.
 *
 * Each image now carries its own `alt`.
 *
 * The grid used to generate "exterior design project 4 by Reena Designs &
 * Constructions, Midnapur" from the index, which is the same sentence twenty
 * times with a number changed — Google Images has nothing to tell the
 * photographs apart by, and a screen reader user hears a counter rather than a
 * description. Written alt text is the only thing that puts a construction
 * portfolio into image results, and image results are a real share of the
 * traffic a firm like this gets. Describe what is actually in the frame, name
 * the building type and the place, and keep it to a sentence.
 *
 * When the stock shots are swapped for real work, rewrite the alt with the
 * actual project: "4BHK duplex at Kharagpur — completed 2025" beats any
 * generic description written here.
 */
import draftingTable from "@/imports/about-drafting-table.jpg"

export type GalleryImage = {
  src: string
  /** Describes the photograph. Never left blank — these are content, not decoration. */
  alt: string
}

const u = (id: string) => `https://images.unsplash.com/${id}?w=500&h=340&fit=crop&auto=format`

/** Keeps each entry to a src/alt pair without repeating the Unsplash helper. */
const img = (id: string, alt: string): GalleryImage => ({ src: u(id), alt })

export const exteriorImgs: GalleryImage[] = [
  img(
    "photo-1479839672679-a46483c0e7c8",
    "Contemporary two-storey house exterior with a projecting balcony and boundary wall — exterior design and construction, Midnapur",
  ),
  img(
    "photo-1567943183748-3a7542120c90",
    "White rendered independent house with a flat roof parapet and large glazed openings — residential exterior, Paschim Midnapur",
  ),
  img(
    "photo-1488972685288-c3fd157d7c7a",
    "Multi-storey apartment facade with recessed balconies and a stone-clad base — commercial exterior design, West Bengal",
  ),
  img(
    "photo-1518005020951-eccb494ad742",
    "Modern residence with a cantilevered upper floor and vertical louvre screen — front elevation design, Midnapore",
  ),
  img(
    "photo-1486718448742-163732cd1544",
    "Curved concrete facade with continuous ribbon windows — commercial building exterior, Kharagpur",
  ),
  img(
    "photo-1483366774565-c783b9f70e2c",
    "Low-rise building with a textured masonry facade and deep window reveals — exterior treatment, West Bengal",
  ),
]

export const archImgs: GalleryImage[] = [
  img(
    "photo-1613490493576-7fde63acd811",
    "Architectural composition of stacked rectilinear volumes in exposed concrete — architecture practice, Midnapur",
  ),
  img(
    "photo-1760246964044-1384f71665b9",
    "Symmetrical residential elevation with a projecting entrance canopy — architectural design, Paschim Midnapur",
  ),
  img(
    "photo-1783705094622-f2c01a9787b5",
    "Building corner detail showing the junction of glazing, parapet and cladding — working drawing detail, West Bengal",
  ),
  img(
    "photo-1706164971302-e30c0640cc3b",
    "Open double-height interior volume with a structural frame left exposed — architectural planning, Midnapore",
  ),
  img(
    "photo-1706164971309-fb4785fe6ceb",
    "Daylit circulation space with a full-height glazed wall — architectural design, West Bengal",
  ),
  img(
    "photo-1449844908441-8829872d2607",
    "Detached family house with a pitched roof and landscaped forecourt — house plan and architecture, Midnapur",
  ),
]

export const d3Imgs: GalleryImage[] = [
  // The company's own photograph rather than stock — see the note above.
  {
    src: draftingTable,
    alt: "Drafting table with a scale rule, set square and a house elevation drawing in progress — 3D elevation design studio, Midnapur",
  },
  img(
    "photo-1487958449943-2429e8be8625",
    "Rendered facade study of a white modular building against a clear sky — 3D elevation visualisation, West Bengal",
  ),
  img(
    "photo-1494526585095-c41746248156",
    "Three-dimensional massing study of a residential block with terraces — 3D house design, Paschim Midnapur",
  ),
  img(
    "photo-1545324418-cc1a3fa10c00",
    "Angular building form with a glazed corner and cantilever — 3D front elevation rendering, Midnapore",
  ),
]

export const renoImgs: GalleryImage[] = [
  img(
    "photo-1646987916641-1f3c8992daa2",
    "Interior stripped back to the structural shell during a full-property renovation — home renovation contractor, Midnapur",
  ),
  img(
    "photo-1648881806148-e5c51179c826",
    "Renovated living space with new plaster, flooring and recessed lighting — house remodelling, Paschim Midnapur",
  ),
  img(
    "photo-1688647063090-36f36f692d95",
    "Rebuilt kitchen and dining area after a structural retrofit — renovation and remodelling, West Bengal",
  ),
  img(
    "photo-1497366216548-37526070297c",
    "Refitted open-plan office after a commercial renovation — commercial remodelling, Kharagpur",
  ),
]

export const beforeAfterImgs: GalleryImage[] = [
  img(
    "photo-1523413651479-597eb2da0ad6",
    "Bare interior before work began, showing the original walls and openings — renovation before photograph, Midnapur",
  ),
  img(
    "photo-1556909212-d5b604d0c90d",
    "The same room finished, with new joinery, flooring and a fitted lighting layer — renovation after photograph, Midnapur",
  ),
  img(
    "photo-1416339306562-f3d12fefd36f",
    "Tired living room ahead of a full makeover, with dated finishes throughout — home makeover before, West Bengal",
  ),
  img(
    "photo-1556911220-bff31c812dba",
    "The completed living room after remodelling, with a new ceiling, panelling and furniture layout — home makeover after, West Bengal",
  ),
]
