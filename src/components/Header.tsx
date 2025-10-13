// src/components/Header.tsx

import Navbar from "./Navbar";
import { APP_CONSTANTS } from '../constants';

/**
 * Header Component
 * Displays the candidate's name, the position they are running for, and their campaign slogan.
 * It is designed to be sticky to keep key information visible while scrolling.
 */
export default function Header() {

  return (
    <header className="shadow-sm">
      <div className="flex justify-between px-4 lg:px-8 sm:px-6 bg-green-700">
        <a href="#home" className="flex items-center justify-center md:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
          {APP_CONSTANTS.candidateName.short}
        </a>
        <Navbar />
      </div>
    </header>
  );
}
