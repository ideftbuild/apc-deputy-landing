// src/components/Navbar.tsx
import React from "react";
import { APP_CONSTANTS } from "../constants";

/**
 * Navbar Component
 * Displays the top navigation bar with the candidate name, primary links,
 * and a responsive mobile menu toggle.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-7xl px-1">
      <div className="relative flex justify-between items-center h-16">
        {/* Right: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-black">
          <a
            href="#about"
            className="hover:border-b hover:border-black font-medium"
          >
            About
          </a>
          <a
            href="#vision-mission"
            className="hover:border-b hover:border-black font-medium transition-colors"
          >
            Vision
          </a>

          <a
            href="#events"
            className="hover:border-b hover:border-black font-medium transition-colors"
          >
            Events
          </a>

          <a
            href="#contact"
            className="hover:border-b hover:border-black font-medium transition-colors"
          >
            Contact
          </a>
          <a
            href={APP_CONSTANTS.donateLink}
            className="bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition-colors"
          >
            Donate
          </a>
        </div>

        {/* Mobile: Donate Button + Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4 ml-auto">
          <a
            href={APP_CONSTANTS.donateLink}
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
          >
            Donate
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-red-500 focus:outline-none focus:text-red-500 p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 top-16 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50 overflow-hidden">
          <div className="py-2">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors border-l-4 border-transparent hover:border-red-600"
            >
              About
            </a>

            <a
              href="#vision-mission"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors border-l-4 border-transparent hover:border-red-600"
            >
              Vision
            </a>

            <a
              href="#events"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors border-l-4 border-transparent hover:border-red-600"
            >
              Events
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors border-l-4 border-transparent hover:border-red-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
