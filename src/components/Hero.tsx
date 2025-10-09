// src/components/Hero.tsx

/**
 * Hero Component
 * Features a prominent candidate image placeholder, a compelling introduction,
 * and a clear call-to-action button to engage visitors immediately.
 */
window.Hero = function Hero() {
  return (
    <section id="hero" className="text-white h-screen flex justify-center">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center">

        <div className="md:w-2/3 flex flex-col items-center justify-center md:text-left w-[86%] md:w-[80%]">
          <h2 className="text-5xl md:text-8xl font-extrabold leading-tight mb-8 text-center">
            The Change We’ve Been Waiting For
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center">
           A new generation of leadership ready to drive innovation, inclusion, and progress.
          </p>

          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow hover:bg-red-600 hover:text-white transition"
          >
            Discover My Journey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
