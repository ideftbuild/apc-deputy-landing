// src/components/VisionMission.tsx

/**
 * Vision & Mission Component
 * Clearly articulates the candidate's forward-looking vision for the party
 * and the specific, actionable mission they pledge to undertake.
 */
window.VisionMission = function VisionMission() {
  return (
    <section id="vision-mission" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Vision & Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Statement */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              My Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To build a revitalized, unified, and forward-thinking APC party where every member, from the grassroots to the national level, feels valued, heard, and empowered. I envision a secretariat that is a model of efficiency, transparency, and innovation, fully equipped to support our journey to victory in 2026 and beyond.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              My Mission
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
              <li>
                To modernize our party's administrative functions by leveraging technology for seamless record-keeping and communication.
              </li>
              <li>
                To serve as an accessible bridge between the party leadership and our diverse membership, ensuring a constant flow of ideas and feedback.
              </li>
              <li>
                To champion the inclusion of youth and women in all party structures and decision-making processes.
              </li>
              <li>
                To uphold the party's constitution with integrity, ensuring fairness, discipline, and due process for all members.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};