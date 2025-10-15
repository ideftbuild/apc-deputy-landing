// src/components/CoreValues.tsx

/**
 * Core Values Component
 * Displays the candidate's guiding principles in a clean, grid-based layout.
 * Each value is presented with an icon and a brief description to be easily digestible.
 */
const values = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 md:h-8 md:w-8 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Integrity",
    description:
      "Upholding the highest standards of honesty and accountability in every action and decision.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 md:h-8 md:w-8 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Innovation",
    description:
      "Embracing technology and modern strategies to build a more efficient and effective party.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 md:h-8 md:w-8 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="m16 16l2-11l-4 4l-2-5l-2 5l-4-4l2 11m0 0l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16z" />
          <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
        </g>
      </svg>
    ),
    title: "Leadership",
    description:
      "Leading by example with a commitment to listen, serve, and unite our community.",
  },
];

export default function CoreValues() {
  return (
    <section id="core-values" className="py-6 md:py-8">
      <div className="mx-auto px-4 flex flex-wrap md:flex-nowrap md:flex-row justify-center gap-6 md:gap-10 md:w-[60%] place-items-center">
        {values.map((value) => (
          <div
            key={value.title}
            className="relative group w-[120px] h-[120px] md:w-[140px] md:h-[140px] md:p-8 p-4 rounded-full shadow-md hover:shadow-xl bg-white"
          >
            <div className="flex justify-center mt-2 md:mb-2">{value.icon}</div>
            <h3 className="font-bold text-gray-800 text-center">
              {value.title}
            </h3>
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full
                          hidden group-hover:block w-64 rounded-lg bg-gray-900 text-[#f5f5f5]
                          shadow-xl px-4 py-3 text-sm pointer-events-none
                          after:content-[''] after:absolute after:top-full after:left-1/2
                          after:-translate-x-1/2 after:border-8 after:border-transparent
                          after:border-t-gray-900"
            >
              {value.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
