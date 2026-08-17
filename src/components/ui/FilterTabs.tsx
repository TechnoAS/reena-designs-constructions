interface FilterTabsProps {
  tabs: readonly string[]
  active: string
  onSelect: (tab: string) => void
}

export default function FilterTabs({ tabs, active, onSelect }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onSelect(t)}
          className="montserrat font-600 text-sm px-5 py-2 rounded-full transition-all"
          style={active === t
            ? { background: "#1a2744", color: "#fff" }
            : { background: "#fff", color: "#555", border: "1.5px solid #ddd" }
          }
        >
          {t}
        </button>
      ))}
    </div>
  )
}
