// src/components/Footer.tsx
import { APP_CONSTANTS } from "../constants";

/**
 * Footer Component
 * Displays final information such as the candidate's name, the election date,
 * and a concluding tagline. It serves as the closing element of the landing page.
 */
export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] relative z-10">
      <div className="container mx-auto px-6 pt-12 pb-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-300">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {APP_CONSTANTS.candidateName.full}
              </h3>
              <p className="text-gray-700 text-sm">
                APC National Deputy Secretary General • March 2026
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-lg font-semibold text-red-600 mb-1">
                Vote for Progress
              </p>
              <p className="text-gray-700 text-sm">
                Together, We Build a Stronger APC
              </p>
            </div>
          </div>

          <div className="pt-6 text-center text-sm text-gray-500">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              {APP_CONSTANTS.candidateName.full}. All Rights Reserved.
            </p>
            <p className="mt-2">
              Created by{" "}
              <a
                href="https://www.gabete.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                gabete.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
