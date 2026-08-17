import { Link } from "react-router-dom"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "#888" }}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {item.href && i < items.length - 1
            ? <Link to={item.href} className="hover:underline" style={{ color: "#555" }}>{item.label}</Link>
            : <span style={{ color: i === items.length - 1 ? "#1a2744" : "#555", fontWeight: i === items.length - 1 ? 600 : 400 }}>{item.label}</span>
          }
        </span>
      ))}
    </nav>
  )
}
