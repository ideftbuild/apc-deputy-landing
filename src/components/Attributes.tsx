// src/components/Attributes.tsx

/**
 * Attributes Component
 * Highlights the candidate's key strengths and qualities in a visually engaging card grid.
 * Each card represents a specific attribute that makes the candidate suitable for the role.
 */

// Data for the attribute cards
const attributes = [
  {
    title: "Youthful Energy & Innovation",
    description:
      "Bringing fresh ideas and a dynamic approach to modernize party operations and engage the next generation of voters.",
  },
  {
    title: "Unwavering Integrity",
    description:
      "A commitment to transparency, ethical conduct, and upholding the party’s constitution without compromise.",
  },
  {
    title: "Exceptional Communicator",
    description:
      "Articulating the party’s message with clarity and passion, ensuring everyone is informed and inspired.",
  },
  {
    title: "A Bridge-Builder",
    description:
      "Connecting different generations, factions, and regions within the party to foster unity and collective strength.",
  },
  {
    title: "Tech-Savvy Leadership",
    description:
      "Leveraging modern technology to streamline administration, improve outreach, and secure our data.",
  },
  {
    title: "Grassroots Champion",
    description:
      "Deeply connected to the party base, ensuring the leadership remains grounded and responsive to member needs.",
  },
];

export default function Attributes() {
  return (
    <section id="attributes" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          What I Bring to the Table
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attributes.map((attr) => (
            <div
              key={attr.title}
              className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {attr.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {attr.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
