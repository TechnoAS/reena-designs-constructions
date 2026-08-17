import Nav from "./Nav"
import Footer from "./Footer"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  )
}
