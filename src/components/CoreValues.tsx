import { motion } from "framer-motion";
import React from "react";
import {
  Shield,
  Award,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    icon: Shield,
    description: "Maintaining honesty and strong moral principles",
  },
  {
    title: "Excellence",
    icon: Award,
    description: "Striving for the highest quality in everything we do",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "Embracing creative solutions and new ideas",
  },
  {
    title: "Community",
    icon: Users,
    description: "Building strong connections and supporting each other",
  },
  {
    title: "Growth",
    icon: TrendingUp,
    description: "Continuous learning and personal development",
  },
  {
    title: "Impact",
    icon: Target,
    description: "Making meaningful change in our world",
  },
];

export default function CoreValues() {
  const [isPaused, setIsPaused] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const extendedValues = [...values, ...values, ...values];

  const handleClick = (idx) => {
    if (activeIndex === idx) {
      setActiveIndex(null);
      setIsPaused(false);
    } else {
      setActiveIndex(idx);
      setIsPaused(true);
    }
  };

  return (
    <section id="core-values" className="py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
          Guided By Our Values
        </h2>
        <p className="text-gray-600 mb-4">What drives us forward</p>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-2xl py-12 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-200 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 md:gap-8"
            animate={isPaused ? {} : { x: [0, `-${100 / 3}%`] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ willChange: "transform" }}
          >
            {extendedValues.map((value, idx) => {
              const IconComponent = value.icon;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={`${value.title}-${idx}`}
                  className="flex-shrink-0 group relative"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setActiveIndex(null);
                  }}
                  onClick={() => handleClick(idx)}
                >
                  <div
                    className={`w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-6 border-2 cursor-pointer ${isActive ? "border-red-500 shadow-xl" : "border-gray-200"} md:hover:border-red-500`}
                  >
                    <IconComponent
                      className="w-8 h-8 md:w-10 md:h-10 mb-2 text-red-500"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-bold text-gray-800 text-center text-xs md:text-sm">
                      {value.title}
                    </h3>

                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-sm rounded-lg px-4 py-3 shadow-xl w-56 text-center">
                        {value.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <div className="md:hidden absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl text-center z-20">
                      {value.description}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900" />
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 italic">
            <span className="md:hidden">
              Tap to learn more about each value
            </span>
            <span className="hidden md:inline">
              Hover to learn more about each value
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
