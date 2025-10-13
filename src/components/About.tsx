// src/components/About.tsx
import React from 'react';
import LeadershipAchievements from './LeadershipAchievements';

/**
 * About Component
 * Provides a detailed overview of the candidate's background, including their biography,
 * education, legal expertise, leadership roles, and key achievements.
 */
export default function About() {
  return (
    <section id="about" className="relative z-20 py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <img src='img/placeholder_bg.webp' className='rounded-lg'/>
          <div>
            <p className="text-gray-700 leading-relaxed">
                From my earliest days, I have been driven by a passion for justice
                and a deep-seated belief in the power of community. My journey
                into law and politics was fueled by a desire to serve the people
                of Sierra Leone and to build a more equitable and prosperous
                future for all, especially the youth.
            </p>
            <p className='w-max border-b mx-auto mt-4'>Learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
