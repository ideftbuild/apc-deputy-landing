import { useState } from "react";
import { Eye, Target, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Vision() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section id="vision-mission" className="py-12 md:py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Vision
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
                ? "opacity-100"
                : "transition-all duration-300 opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div>
                  <p className="md:text-xl text-gray-700 leading-relaxed">
                    I aim to strengthen the administrative backbone of the APC
                    Party through efficient coordination, inclusive
                    participation, youth empowerment, and the digital
                    transformation of party secretariat functions, ensuring the
                    APC remains Sierra Leone’s leading political movement now
                    and in the future
                  </p>
                </div>
              </div>

              {/* Vision Pillars */}
              <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-auto-rows:1fr] mt-12">
                <ScrollReveal animationType="fadeLeft" animateOnce={false}>
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300 h-full">
                    <img
                      src="/img/administration_img.webp"
                      alt="Digital Governance"
                      className="w-full h-auto object-cover mb-4 rounded-md"
                    />
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <ChevronRight className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Digital Governance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Building an efficient and disciplined party structure
                      through clear communication and modern administrative
                      systems.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animationType="scale" animateOnce={false}>
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300 h-full">
                    <img
                      src="/img/inclusion_img.jpg"
                      alt="Inclusive Participation"
                      className="w-full h-auto object-cover mb-4 rounded-md"
                    />
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <ChevronRight className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Inclusive Participation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Encouraging active engagement from all members, especially
                      women and grassroots communities, to ensure everyone’s
                      voice is heard.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animationType="fadeRight" animateOnce={false}>
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300 h-full">
                    <img
                      src="/img/youth_empowerment_img.jpg"
                      alt="Youth Empowerment"
                      className="w-full h-auto object-cover mb-4 rounded-md"
                    />
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <ChevronRight className="text-red-500 w-6 h-6 md:w-10 md:h-10" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Youth Empowerment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Investing in the next generation of party leaders through
                      mentorship, training, and opportunity.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Mission Content */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "mission"
                ? "opacity-100"
                : "transition-all duration-300 opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div>
                  <p className="md:text-xl text-gray-700 leading-relaxed">
                    I’m on a mission to build a more connected, modern, and
                    people-driven APC that serves every member with integrity
                    and purpose.
                  </p>
                </div>
              </div>

              {/* Mission Actions */}
              <div className="grid gap-6 mt-12">
                <ScrollReveal animateOnce={false}>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Serve with Excellence
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To serve as a dependable, disciplined, and proactive
                        deputy to the National Secretary General, ensuring that
                        all secretarial duties are executed with excellence and
                        timeliness.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animateOnce={false}>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Strengthen Communication
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To build stronger communication links between party
                        leadership and the grassroots, especially among youth
                        and women.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animateOnce={false}>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Modernize Party Operations
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To modernize the internal operations of the party
                        through digital systems, record-keeping, and streamlined
                        information management.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animateOnce={false}>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Grow a People-Driven Party
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To help grow the APC as a people-driven party that
                        listens, adapts, and leads with integrity.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Be part of the change. Together, we can build a stronger,
            people-driven APC.
          </p>
          <a
            href="#"
            className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
