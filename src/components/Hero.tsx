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
      const opacity = Math.max(1 - (scrollPosition / windowHeight), 0);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    
  return (
    <section id="hero" className="flex justify-center text-black sticky top-0 sticky z-10" style={{ opacity: scrollOpacity}}>
      <div className="flex flex-col-reverse md:flex-row items-center">
      
        <img src="img/placeholder_bg.webp" alt="Hero image showing unity" className="md:w-1/2 md:h-screen"/>


        <div className="md:w-2/3 flex flex-col items-center jusmt-4 justify-center md:text-left w-[86%] md:w-[80%]">
          <h2 className="text-5xl md:text-8xl font-extrabold leading-tight mb-8 text-center">
            Change We Deserve 
          </h2>

          <p>A new generation driving unity and progress</p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 mt-4 bg-white text-red-600 font-semibold rounded-full shadow hover:bg-red-600 hover:text-white transition"
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
