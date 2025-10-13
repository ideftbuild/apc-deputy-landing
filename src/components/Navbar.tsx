
// src/components/Navbar.tsx
import React from 'react';
import { APP_CONSTANTS } from '../constants';
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
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-green-200 hover:border-b hover:border-black font-medium"
          >
            About
          </a>
          <a
            href="#vision-mission"
            className="text-green-200 hover:border-b hover:border-black font-medium transition-colors"
          >
            Vision & Mission
          </a>
          <a
            href="#contact"
            className="text-green-200 hover:border-b hover:border-black font-medium transition-colors"
          >
            Contact
          </a>
          <a
            href={APP_CONSTANTS.donateLink}
            className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Donate
          </a>
        </div>

        {/* Mobile: Donate Button + Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <a
            href={APP_CONSTANTS.donateLink}
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Donate
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-red-600 focus:outline-none focus:text-red-600"
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

      {isMenuOpen && (
        <div className="absolute md:hidden shadow-sm bg-white border-t border-gray-400">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 hover:bg-gray-100 hover:bg-opacity-10 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              About
            </a>
            <a
              href="#vision-mission"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 hover:bg-gray-100 hover:bg-opacity-10 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              Vision & Mission
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 hover:bg-gray-100 hover:bg-pacity-10 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};