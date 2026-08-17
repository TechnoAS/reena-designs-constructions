import ProjectCard from "./ProjectCard"

export default function GalleryGrid({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {images.map((img, i) => (
        <ProjectCard key={i} img={img} alt={`${title} ${i + 1}`} height={220} />
      ))}
    </div>
  )
}
