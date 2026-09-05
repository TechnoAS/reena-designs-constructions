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
 */
const u = (id: string) => `https://images.unsplash.com/${id}?w=500&h=340&fit=crop&auto=format`

export const exteriorImgs = [
  u("photo-1479839672679-a46483c0e7c8"),
  u("photo-1567943183748-3a7542120c90"),
  u("photo-1488972685288-c3fd157d7c7a"),
  u("photo-1518005020951-eccb494ad742"),
  u("photo-1486718448742-163732cd1544"),
  u("photo-1483366774565-c783b9f70e2c"),
]

export const archImgs = [
  u("photo-1613490493576-7fde63acd811"),
  u("photo-1760246964044-1384f71665b9"),
  u("photo-1783705094622-f2c01a9787b5"),
  u("photo-1706164971302-e30c0640cc3b"),
  u("photo-1706164971309-fb4785fe6ceb"),
  u("photo-1449844908441-8829872d2607"),
]

export const d3Imgs = [
  u("photo-1503387762-592deb58ef4e"),
  u("photo-1487958449943-2429e8be8625"),
  u("photo-1494526585095-c41746248156"),
  u("photo-1545324418-cc1a3fa10c00"),
]

export const renoImgs = [
  u("photo-1646987916641-1f3c8992daa2"),
  u("photo-1648881806148-e5c51179c826"),
  u("photo-1688647063090-36f36f692d95"),
  u("photo-1497366216548-37526070297c"),
]

export const beforeAfterImgs = [
  u("photo-1523413651479-597eb2da0ad6"),
  u("photo-1556909212-d5b604d0c90d"),
  u("photo-1416339306562-f3d12fefd36f"),
  u("photo-1556911220-bff31c812dba"),
]
