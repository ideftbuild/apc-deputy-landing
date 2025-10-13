// src/components/Donation.tsx
import React from 'react';
import { APP_CONSTANTS } from '../constants';

/**
 * Donation Component
 * A clear and prominent call-to-action section for campaign contributions.
 * It features a large, visually appealing button to guide supporters.
 */
export default function Donation() {
  return (
    <section id="donate" className="bg-red-700 text-white py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Support the Movement
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Your generous contribution fuels our campaign, powers our grassroots outreach, and brings us one step closer to victory. Together, we can build a stronger APC for a better Sierra Leone.
        </p>
        <a
          href={APP_CONSTANTS.donateLink}
          className="bg-white text-red-600 font-bold text-xl py-4 px-12 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 shadow-2xl inline-block"
          aria-label="Donate to the campaign"
        >
          Contribute Now
        </a>
      </div>
    </section>
  );
};
