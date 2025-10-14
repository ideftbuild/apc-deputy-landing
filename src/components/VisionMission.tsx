// src/components/VisionMission.tsx
import { Pin } from "lucide-react";
/**
 * Vision & Mission Component
 * Clearly articulates the candidate's forward-looking vision for the party
 * and the specific, actionable mission they pledge to undertake.
 */
export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-16 md:py-24 md:px-20">
      <div className="mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Vision & Mission
        </h2>

        <div className="bg-white flex flex-col items-center gap-6 rounded-lg">
          <div className="p-8 flex flex-col items-center md:w-[80%]">
            <p className="text-gray-700 leading-relaxed md:w-[60%] md:text-center">
              To build a revitalized, unified, and forward-thinking APC party
              where every member, from the grassroots to the national level,
              feels valued, heard, and empowered. I envision a secretariat that
              is a model of efficiency, transparency, and innovation, fully
              equipped to support our journey to victory in 2026 and beyond.
            </p>
            <a
              href="#"
              className="w-max border-b mt-4 cursor-pointer hover:text-gray-800"
            >
              Read more
            </a>
          </div>

          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">My Mission</h3>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 text-gray-700 space-y-3">
              <li className="rounded-md shadow-md shadow-red-300 p-4 flex flex-col items-center gap-2">
                <Pin className="w-6 h-6 text-green-800" />
                <p>
                  To modernize our party's administrative functions by
                  leveraging technology for seamless record-keeping and
                  communication.
                </p>
              </li>
              <li className="rounded-md shadow-md shadow-red-300 p-4 flex flex-col items-center gap-2">
                <Pin className="w-6 h-6 text-blue-800" />
                <p>
                  To serve as an accessible bridge between the party leadership
                  and our diverse membership, ensuring a constant flow of ideas
                  and feedback.
                </p>
              </li>
              <li className="rounded-md shadow-md shadow-red-300 p-4 flex flex-col items-center gap-2">
                <Pin className="w-6 h-6 text-green-800" />
                <p>
                  To champion the inclusion of youth and women in all party
                  structures and decision-making processes.
                </p>
              </li>
              <li className="rounded-md shadow-md shadow-red-300 p-4 flex flex-col items-center gap-2">
                <Pin className="w-6 h-6 text-blue-800" />
                <p>
                  To uphold the party's constitution with integrity, ensuring
                  fairness, discipline, and due process for all members.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
