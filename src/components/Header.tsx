// src/components/Header.tsx
import { useState, useEffect } from "react";
import { APP_CONSTANTS } from "../constants";
import Navbar from "./Navbar";
/**
 * Header Component
 * Displays the candidate's name, the position they are running for, and their campaign slogan.
 * It is designed to be sticky to keep key information visible while scrolling.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the first viewport (100vh)
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsScrolled(scrollPosition > viewportHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center lg:px-0 pointer-events-none transition-all duration-300">
      <div
        className={`
          bg-white pointer-events-auto transition-all duration-300
          ${
            isScrolled
              ? "w-full rounded-none border-b border-gray-400"
              : "w-full lg:w-[85vw] lg:rounded-full lg:border lg:border-gray-400 lg:mt-6"
          }
        `}
      >
        <div className="flex justify-between px-4 lg:px-8 sm:px-6 text-black">
          <div className="flex items-center">
            <img
              src="img/client_logo.png"
              alt="Logo"
              className="w-8 h-8 mr-2"
            />
            <a
              href="#home"
              className="flex items-center justify-center md:text-2xl font-bold"
            >
              {APP_CONSTANTS.candidateName.short}
            </a>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
