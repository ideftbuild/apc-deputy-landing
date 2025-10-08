// src/components/CoreValues.tsx

/**
 * Core Values Component
 * Displays the candidate's guiding principles in a clean, grid-based layout.
 * Each value is presented with an icon and a brief description to be easily digestible.
 */

// A simple data structure for core values to keep the JSX clean.
const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Integrity & Transparency',
    description: 'Upholding the highest standards of honesty and accountability in every action and decision.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.834 9.168-4.432l.256-.512a1.75 1.75 0 013.163.872l-1.335 4.005a1.75 1.75 0 01-3.163.872l-1.335-4.005a1.75 1.75 0 013.163-.872l.256.512A4.001 4.001 0 0117 12h-1.832a4.001 4.001 0 01-2.564 1.317M12 12a3 3 0 100 6h4.832a4.001 4.001 0 013.568 2.317l.256.512a1.75 1.75 0 01-3.163.872l-1.335-4.005a1.75 1.75 0 013.163.872l-1.335 4.005a1.75 1.75 0 01-3.163.872l-.256-.512A4.001 4.001 0 0113 18h-1.832a4.001 4.001 0 01-2.564-1.317" />
      </svg>
    ),
    title: 'Inclusivity & Unity',
    description: 'Fostering a united party where every voice matters, regardless of age, gender, or background.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Youth Empowerment',
    description: 'Actively creating pathways for young people to lead and contribute to our party\'s growth.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Grassroots Connection',
    description: 'Staying deeply connected to the needs and aspirations of our members at the community level.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Innovation & Modernity',
    description: 'Embracing technology and modern strategies to build a more efficient and effective party.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
      </svg>
    ),
    title: 'Servant Leadership',
    description: 'Leading by serving the interests of our members and the people of Sierra Leone first.',
  },
];

window.CoreValues = function CoreValues() {
  return (
    <section id="core-values" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-green-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
