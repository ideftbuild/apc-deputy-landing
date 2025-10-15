// src/components/VisionMission.tsx
import { Pin } from "lucide-react";
/**
 * Vision & Mission Component
 * Clearly articulates the candidate's forward-looking vision for the party
 * and the specific, actionable mission they pledge to undertake.
 */
export default function VisionMission() {
  return (
    <section id="vision-mission" className="px-6 py-16 md:px-20">
      <div className="mx-auto rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Vision & Mission
        </h2>
        <div className="vision-mission-bg flex flex-col items-center gap-6 rounded-lg">
          <div className="pt-12 px-6 flex flex-col items-center">
            <h3
              className="text-xl font-semibold text-gray-900 mb-6 text-center
                   border-b-2 border-gray-600 pb-2 inline-block bg-white/90 px-4 rounded"
            >
              Vision
            </h3>
            <div className="flex flex-col items-center w-full md:max-w-4xl bg-gray-50 rounded-2xl p-10 border border-gray-100">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                <Pin className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700  mb-6">
                To build a revitalized, unified, and forward-thinking APC party
                where every member, from the grassroots to the national level,
                feels valued, heard, and empowered. I envision a secretariat
                that is a model of efficiency, transparency, and innovation,
                fully equipped to support our journey to victory in 2026 and
                beyond.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <h3
                className="text-xl font-semibold text-gray-900 mb-6 text-center
                     border-b-2 border-gray-600 pb-2 inline-block bg-white/90 px-4 rounded"
              >
                Mission
              </h3>
            </div>

            <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 text-gray-700 space-y-3">
              <li className="rounded-md bg-white shadow-md p-4 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Pin className="w-5 h-5 text-red-600" />
                </div>
                <p>
                  To modernize our party's administrative functions by
                  leveraging technology for seamless record-keeping and
                  communication.
                </p>
              </li>
              <li className="rounded-md bg-white shadow-md p-4 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Pin className="w-5 h-5 text-red-600" />
                </div>
                <p>
                  To serve as an accessible bridge between the party leadership
                  and our diverse membership, ensuring a constant flow of ideas
                  and feedback.
                </p>
              </li>
              <li className="rounded-md bg-white shadow-md p-4 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Pin className="w-5 h-5 text-red-600" />
                </div>
                <p>
                  To champion the inclusion of youth and women in all party
                  structures and decision-making processes.
                </p>
              </li>
              <li className="rounded-md bg-white shadow-md p-4 flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Pin className="w-5 h-5 text-red-600" />
                </div>
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
