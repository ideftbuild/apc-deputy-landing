// src/components/About.tsx

/**
 * About Component
 * Provides a detailed overview of the candidate's background, including their biography,
 * education, legal expertise, leadership roles, and key achievements.
 */
export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-6 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center place-items-center">
          <img
            src="img/about_img.webp"
            alt="About"
            className="w-30 h-30 sm:w-32 sm:h-32 md:w-80 md:h-80 rounded-full object-cover mx-auto"
          />
          <div>
            <p className="text-gray-700 leading-relaxed">
              From my earliest days, I have been driven by a passion for justice
              and a deep-seated belief in the power of community. My journey
              into law and politics was fueled by a desire to serve the people
              of Sierra Leone and to build a more equitable and prosperous
              future for all, especially the youth.
            </p>
            <div className="mx-auto text-center mt-6 mb-6">
              <a href="#" className="w-max border-b mt-4 hover:text-gray-800">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
