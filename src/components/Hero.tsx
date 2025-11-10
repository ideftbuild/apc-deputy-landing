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
      className="flex text-black top-0 sticky z-10 h-screen overflow-hidden flex-col justify-end"
      style={{ opacity: scrollOpacity }}
    >
      <div className="flex flex-col justify-end xl:flex-row relative z-50 w-full h-[80%]">
        <div className="flex flex-col justify-center xl:justify-end xl:px-12 pb-2 xl:pb-22 text-center xl:text-left h-1/2 xl:w-full xl:h-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-3">
            Change We Deserve
          </h1>
          <p className="text-base md:text-lg lg:text-xl lg:pl-2 mb-4 md:mb-2">
            A new generation driving unity and progress
          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow hover:bg-red-600 transition w-fit mx-auto xl:mx-0"
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

        <img
          src="/img/apc_bg_logo.png"
          className="hidden md:block absolute inset-0 top-3/4 left-1/2 xl:top-2/3 xl:left-1 xl:translate-x-0 translate-x-[-50%] h-[50%] md:translate-y-[-50%]"
        />
        {/* Image Container - Always at bottom */}
        <div className="flex flex-col justify-end h-1/2 xl:w-full xl:h-full px-6 md:px-0">
          <img
            src="img/client_image.webp"
            alt="Hero image showing unity"
            className="w-auto h-full max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
