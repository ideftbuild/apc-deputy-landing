import { useState } from "react";
import { Eye, Target, ChevronRight } from "lucide-react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guided by purpose, driven by impact
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Eye className="w-4 h-4 md:w-8 md:h-8" />
              Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Target className="w-4 h-4 md:w-8 md:h-8" />
              Mission
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-500 ${
              activeTab === "vision"
                ? "opacity-100 translate-x-0"
                : "opacity-0 absolute inset-0 translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Eye className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="md:text-xl text-gray-700 leading-relaxed">
                    To create a Sierra Leone where every citizen, regardless of
                    background, has equal access to justice, opportunities, and
                    the resources needed to thrive. We envision a nation where
                    youth leadership drives sustainable development and where
                    integrity, innovation, and community empowerment are the
                    cornerstones of progress.
                  </p>
                </div>
              </div>

              {/* Vision Pillars */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <ChevronRight className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Equality</h4>
                  <p className="text-gray-600 text-sm">
                    Justice and opportunity for all citizens
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <ChevronRight className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Youth Leadership
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Empowering the next generation
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <ChevronRight className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Sustainable Growth
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Building a prosperous future
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Content */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "mission"
                ? "opacity-100 translate-x-0"
                : "opacity-0 absolute inset-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Target className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="md:text-xl text-gray-700 leading-relaxed">
                    To serve the people of Sierra Leone through principled
                    leadership, innovative policy-making, and unwavering
                    commitment to community development. We strive to bridge the
                    gap between aspiration and achievement by fostering
                    inclusive governance, promoting education, and creating
                    pathways for economic empowerment.
                  </p>
                </div>
              </div>

              {/* Mission Actions */}
              <div className="space-y-4 mt-12">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Advocate for Justice
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Champion policies that ensure fair treatment and equal
                      rights for all citizens
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Empower Communities
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Build strong, self-sufficient communities through
                      education and economic opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Drive Innovation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Implement forward-thinking solutions to address
                      contemporary challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Lead with Integrity
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Demonstrate transparency, accountability, and ethical
                      governance in all actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join us in building the change we deserve
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
}
