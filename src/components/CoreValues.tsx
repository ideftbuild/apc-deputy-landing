import { useState } from "react";

import {
  ShieldCheck,
  Users,
  TrendingUp,
  HelpingHand,
  Search,
  Megaphone,
} from "lucide-react";

const values = [
  {
    title: "Loyalty",
    icon: ShieldCheck,
    description:
      " Unwavering commitment to the values, constitution, and leadership of the APC",
  },
  {
    title: "Sevice",
    icon: HelpingHand,
    description:
      "Leadership is service, and I’m committed to serving the party and the nation diligently",
  },
  {
    title: "Transparency",
    icon: Search,
    description: "Open, honest, and accountable conduct in all party affairs.",
  },
  {
    title: "Unity in Diversity",
    icon: Users,
    description:
      "Respect and inclusion of all members, regardless of age, gender, tribe, or background",
  },
  {
    title: "Progressivism",
    icon: TrendingUp,
    description:
      "Commitment to forward-thinking policies that uplift the people and promote national development.",
  },
  {
    title: "Youth Engagement",
    icon: Megaphone,
    description:
      "Belief in the power of the youth to shape Sierra Leone’s future, and the need to empower them through political inclusion.",
  },
];

export default function CoreValues() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="core-values" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Guided By Our Values
          </h2>
          <p className="text-gray-600">What drives us forward</p>
        </div>

        <div className="relative">
          <div
            onClick={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`pb-4 scrollbar-hide ${
              isHovered ? "md:overflow-visible" : "overflow-x-auto"
            }`}
          >
            <div className="flex gap-6 md:gap-8 min-w-min md:px-0 md:justify-center">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group relative flex-shrink-0 flex flex-col items-center w-28 md:w-32 snap-start"
                  >
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white shadow-md group-hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-gray-200 group-hover:border-red-500">
                      <IconComponent
                        className="w-10 h-10 md:w-12 md:h-12 text-red-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-bold text-gray-800 text-center text-sm md:text-base mt-3 whitespace-nowrap">
                      {value.title}
                    </h3>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-sm rounded-lg px-4 py-3 shadow-xl w-56 text-center">
                        {value.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
