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
      className="flex justify-center text-black top-0 sticky z-10 h-screen"
      style={{ opacity: scrollOpacity }}
    >
      <div className="absolute inset-0 bg-gray-100/94"></div>
      <div className="relative z-50 flex flex-col lg:flex-row items-center lg:gap-6 justify-center w-full px-6 md:px-12 lg:px-24 pt-20 md:pt-24 lg:mt-[9%]">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-3">
            Change We Deserve
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 lg:pl-2">
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
        </div>

        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[70vh] mt-6 lg:mt-0">
          <img
            src="img/client_image.webp"
            alt="Hero image showing unity"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
