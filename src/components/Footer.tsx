// src/components/Footer.tsx
import React from "react";
import { APP_CONSTANTS } from "../constants";

/**
 * Footer Component
 * Displays final information such as the candidate's name, the election date,
 * and a concluding tagline. It serves as the closing element of the landing page.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <h3 className="text-2xl font-bold text-red-500">
          {APP_CONSTANTS.candidateName.full}
        </h3>

        <p className="text-gray-400 mt-2">
          Election Date: <span className="font-semibold">March 2026</span>
        </p>

        <p className="text-gray-500 mt-4 text-sm">
          Together, We Build a Stronger APC.
        </p>

        <div className="mt-6 border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
