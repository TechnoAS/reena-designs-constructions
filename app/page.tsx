export default function Home() {
  return (
    <main>
      {/* Hero Section — the navbar overlays this */}
      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm font-light mb-4">
            Architecture &amp; Interior Design
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
            Building Dreams,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Designing Futures
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
            Premium residential and commercial construction with world-class
            interior design — tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-light text-black hover:bg-amber-300 transition-colors duration-300"
            >
              View Our Work
            </a>
            <a
              href="/contact"
              className="rounded-full border border-gray-300 bg-gray-100 backdrop-blur-sm px-8 py-3.5 text-sm font-light text-gray-900 hover:bg-gray-200 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Spacer so scroll effect is visible */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-lg">Scroll up to see the transparent navbar effect</p>
      </section>
    </main>
  );
}
