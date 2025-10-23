import { Calendar, MapPin, Clock, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "parallax";

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  animationType: AnimationType;
}

/**
 * Events Section Component
 * Showcases upcoming campaign events and memories from past events
 */
export default function Events() {
  // Upcoming events - easily scalable
  const [showThumbnail, setShowThumbnail] = useState(true);

  const upcomingEvents: Event[] = [
    {
      title: "21 days national campaign tour",
      date: "November 2025",
      location: "Sierra Leone",
      description:
        "Traveling across Sierra Leone to meet communities, share our vision, and rally support for a stronger, people-driven APC.",
      animationType: "fadeLeft",
    },
    {
      title:
        "A visit to Nigeria to meet with Former President Ernest Bai Koroma",
      date: "November 2025",
      location: "Nigeria",
      description:
        "Engaging with respected leaders to exchange insights and strengthen international connections for the party.",
      animationType: "scale",
    },
    {
      title: "Follow up of the Lower level elections",
      date: "November 2025",
      location: "Sierra Leone",
      description:
        "Continuing engagement with local party activities and supporters",
      animationType: "fadeRight",
    },
  ];

  // Past event memories
  const memories = [
    {
      type: "image",
      src: "/img/group_photo_1.webp",
      caption: "Declaration at Masingbe Town in Tonkolili District",
    },
    {
      type: "image",
      src: "/img/group_photo_2.webp",
      caption:
        "Campaign tour and engagement with delegates at Mange Bureh in Port Loko District",
    },
    {
      type: "video",
      thumbnail: "/img/video_1_thumbnail.webp",
      src: "/videos/video_1.mp4",
      caption:
        "Engaging and sharing my aspiration with the youth of Lungi, Kaffu Bullom Chiefdom",
    },
    {
      type: "image",
      src: "/img/group_photo_3.webp",
      caption: "Meeting Constituency Executives at Mange Bureh",
    },
  ];

  return (
    <section id="events" className="px-6 py-12 md:py-24 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto mt-6">
        <h2 className="text-3xl mx-auto text-center md:text-start md:text-4xl font-bold text-gray-700 mb-8 w-[90%] md:w-fit">
          Events
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl">
          Discover the heart of our campaign through real moments with
          communities, where we empower youth and work to build a stronger,
          people-driven APC. Explore the stories that inspire change and join us
          in shaping the future.
        </p>
        {/* Upcoming Events - Prominent */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-red-600"></div>
            Upcoming Events
          </h3>

          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-auto-rows:1fr]">
            {upcomingEvents.map((event, idx) => (
              <ScrollReveal
                animationType={event.animationType}
                animateOnce={false}
                key={idx}
              >
                <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    {/*<div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>{event.time}</span>
                    </div>*/}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {event.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Past Event Memories - Compact Scrollable */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-red-600"></div>
            Moments of Impact
          </h3>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {memories.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-64 snap-start group cursor-pointer"
              >
                <div className="relative h-40 rounded-lg overflow-hidden bg-[#f5f5f5]">
                  {item.type === "video" && !showThumbnail && (
                    <video controls autoPlay controlsList="nodownload">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                  <img
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.caption}
                    className={`
                      ${item.type === "video" && !showThumbnail ? "hidden" : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}
                    `}
                  />
                  {item.type === "video" && showThumbnail && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div
                        onClick={() => setShowThumbnail(false)}
                        className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center"
                      >
                        <Play
                          className="w-6 h-6 text-white ml-0.5"
                          fill="white"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
