// src/components/Header.tsx

import Navbar from "./Navbar";
import { APP_CONSTANTS } from "../constants";

/**
 * Header Component
 * Displays the candidate's name, the position they are running for, and their campaign slogan.
 * It is designed to be sticky to keep key information visible while scrolling.
 */
export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="flex justify-between px-4 lg:px-8 sm:px-6 bg-white">
        <div className="flex items-center">
          <img
            src="img/all_people_congress_logo.png"
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          <a
            href="#home"
            className="flex items-center justify-center md:text-2xl font-bold text-black"
          >
            {APP_CONSTANTS.candidateName.short}
          </a>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
