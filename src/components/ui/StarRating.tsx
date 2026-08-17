export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FF5E00"><path d="M8 1.5l2 4.5L15 7l-3.5 3.4.8 5L8 13l-4.3 2.4.8-5L1 7l5-.5L8 1.5z"/></svg>
      ))}
    </div>
  )
}
