
// src/components/Navbar.tsx

/**
 * Navbar Component
 * Displays the top navigation bar with the candidate name, primary links,
 * and a responsive mobile menu toggle.
 */

window.Navbar = function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-8 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="md:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
              {APP_CONSTANTS.candidateName.short}
            </a>
          </div>

          {/* Right: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#vision-mission"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Vision & Mission
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
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
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
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
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              About
            </a>
            <a
              href="#vision-mission"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              Vision & Mission
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};