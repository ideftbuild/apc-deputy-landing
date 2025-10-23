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
      <div className="relative z-50 flex flex-col lg:flex-row items-center lg:gap-6 justify-center w-full md:pt-24 md:px-24">
        <div className="flex flex-col m-auto justify-center md:text-left w-[86%] lg:w-[50%] text-black p-4">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight mb-2 mt-4">
            Change We Deserve
          </h1>

          <p className="pl-2">A new generation driving unity and progress</p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 my-6 mb-8 bg-red-500 text-white font-semibold rounded-full shadow hover:bg-red-600 transition w-fit"
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
        <div className="relative w-full h-[35%] md:h-full md:w-[50%]">
          <img
            src="img/client_image.webp"
            alt="Hero image showing unity"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
