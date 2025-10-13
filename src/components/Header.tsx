// src/components/Header.tsx
import React from 'react';

/**
 * Header Component
 * Displays the candidate's name, the position they are running for, and their campaign slogan.
 * It is designed to be sticky to keep key information visible while scrolling.
 */
export default function Header() {

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-1 flex justify-center">
        <p className="text-md text-red-600 font-bold">ALM na we move!</p>
      </div>
    </header>
  );
}
