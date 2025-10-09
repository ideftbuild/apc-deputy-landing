// src/components/About.tsx

/**
 * About Component
 * Provides a detailed overview of the candidate's background, including their biography,
 * education, legal expertise, leadership roles, and key achievements.
 */
window.About = function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-red-600 border-b-2 border-red-200 pb-2">
              My Story
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From my earliest days, I have been driven by a passion for justice
              and a deep-seated belief in the power of community. My journey
              into law and politics was fueled by a desire to serve the people
              of Sierra Leone and to build a more equitable and prosperous
              future for all, especially the youth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a dedicated member of the APC party, I have consistently worked
              at the grassroots level, connecting with members, understanding
              their challenges, and advocating for their needs. This campaign is
              a continuation of that lifelong commitment—to be a servant leader
              who is accessible, accountable, and always ready to fight for our
              collective progress.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-red-600 border-b-2 border-red-200 pb-2 mb-4">
                Education & Legal Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                My legal background provides me with the unique skills necessary
                to uphold our party's constitution, ensure administrative
                fairness, and navigate complex challenges with clarity and
                integrity. A strong party is built on a foundation of rules and
                respect for due process.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-red-600 border-b-2 border-red-200 pb-2 mb-4">
                Leadership & Key Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <strong>Youth Advocacy:</strong> Successfully championed
                  initiatives that increased youth participation in party
                  decisions by 40%.
                </li>
                <li>
                  <strong>Legal Counsel:</strong> Provided pro-bono legal
                  support to over 100 grassroots members, ensuring their rights
                  were protected.
                </li>
                <li>
                  <strong>Community Mobilization:</strong> Led voter
                  registration drives that added thousands of new, young voters
                  to the APC family.
                </li>
                <li>
                  <strong>Digital Transformation:</strong> Initiated a project
                  to digitize party membership records for improved efficiency
                  and communication.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
