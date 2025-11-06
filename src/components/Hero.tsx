// src/components/Hero.tsx
import { useEffect, useState } from "react";

/**
 * Hero Component
 * Features a prominent candidate image placeholder, a compelling introduction,
 * and a clear call-to-action button to engage visitors immediately.
 */
export default function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate opacity based on scroll position
      // Fades out completely by the time user scrolls one viewport height
      const opacity = Math.max(1 - scrollPosition / windowHeight, 0);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="flex justify-center text-black top-0 sticky z-10 h-screen overflow-hidden"
      style={{ opacity: scrollOpacity }}
    >
      <div className="relative z-50 w-full h-full">
        {/* Text Content - Centered */}

        <div className="absolute inset-0 flex items-start justify-center px-6 md:px-12 lg:px-24 pt-38 md:p-42">
          <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2 max-w-2xl lg:mr-auto md:pt-34">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-3">
              Change We Deserve
            </h1>
            <p className="text-base md:text-lg lg:text-xl lg:pl-2 mb-4 md:mb-2">
              A new generation driving unity and progress
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow hover:bg-red-600 transition w-fit mx-auto lg:mx-0"
            >
              Discover My Journey
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <img
              src="/img/apc_bg_logo.png"
              className="hidden md:block absolute inset-0 top-3/4 left-1/2 xl:top-2/3 xl:left-1 xl:translate-x-0 translate-x-[-50%] h-[50%] md:translate-y-[-50%]"
            />
          </div>
        </div>

        {/* Image Container - Always at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center lg:justify-end lg:right-0 lg:left-auto lg:w-5/6 px-6 md:px-12 lg:px-24">
          <img
            src="img/client_image.webp"
            alt="Hero image showing unity"
            className="w-auto h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[70vh] max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
