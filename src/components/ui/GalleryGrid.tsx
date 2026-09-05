import ProjectCard from "./ProjectCard"

export default function GalleryGrid({ images, title }: { images: string[]; title: string }) {
  const label = title.toLowerCase()

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
      {images.map((img, i) => (
        <ProjectCard
          key={img}
          img={img}
          /* Descriptive alt text rather than "Gallery 4" — it is what a search
             engine and a screen reader both index this image by. */
          alt={`${label} project ${i + 1} by Reena Designs & Constructions, Midnapur`}
          height={220}
          priority={i < 3}
        />
      ))}
    </div>
  )
}
