interface SubNavTab {
  label: string
  href: string
  active: boolean
}

export default function SubNav({ tabs }: { tabs: SubNavTab[] }) {
  return (
    <div className="flex gap-4 mb-8 border-b pb-4" style={{ borderColor: "#e8e8e8" }}>
      {tabs.map((tab) => (
        <a
          key={tab.label}
          href={tab.href}
          className="montserrat font-700 text-sm pb-1 border-b-2 transition-colors"
          style={tab.active ? { color: "#FF5E00", borderColor: "#FF5E00" } : { color: "#888", borderColor: "transparent" }}
        >
          {tab.label}
        </a>
      ))}
    </div>
  )
}
