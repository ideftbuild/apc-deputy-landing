// src/components/Donation.tsx
import { HandHeart } from "lucide-react";
import { APP_CONSTANTS } from "../constants";

/**
 * Donation Component
 * A clear and prominent call-to-action section for campaign contributions.
 * It features a large, visually appealing button to guide supporters.
 */
export default function Donation() {
  return (
    <section
      id="donate"
      className="py-16 md:py-20 flex flex-col justify-center items-center z-20 sticky"
    >
      <div className="mx-auto px-6 w-[90%] md:w-[60%]">
        {/*<HandHeart className="w-12 h-12 text-pink-500 mx-auto" />*/}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-12">
          Support the Movement
        </h2>

        <div className="text-center p-2 text-gray-700">
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Your generous contribution fuels our campaign, powers our grassroots
            outreach, and brings us one step closer to victory. Together, we can
            build a stronger APC for a better Sierra Leone.
          </p>
          <a
            href={APP_CONSTANTS.donateLink}
            className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-200"
            aria-label="Contribute to the campaign"
          >
            Contribute Now
            <HandHeart className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
