// src/components/Header.tsx
/**
 * Header Component
 * Displays the candidate's name, the position they are running for, and their campaign slogan.
 * It is designed to be sticky to keep key information visible while scrolling.
 */
window.Header = function Header() {

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center">
        {/* Slogan */}
        <p className="text-md text-red-600 font-bold">ALM na we move!</p>
      </div>
    </header>
  );
}
