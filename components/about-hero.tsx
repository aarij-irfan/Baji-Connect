export default function AboutHero() {
  return (
    <section className="relative min-h-[500px] h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">About Us</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Empowering women. Connecting caregivers. Transforming communities.
          </p>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "70px" }}
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

