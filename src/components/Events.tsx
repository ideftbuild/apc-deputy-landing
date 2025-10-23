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
  time: string;
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
      title: "Youth Empowerment Town Hall",
      date: "November 15, 2025",
      time: "3:00 PM",
      location: "Freetown Community Center",
      description:
        "Join us for an interactive session on youth inclusion and opportunities within the APC.",
      animationType: "fadeLeft",
    },
    {
      title: "Regional Leadership Forum",
      date: "November 28, 2025",
      time: "10:00 AM",
      location: "Bo District Hall",
      description:
        "Engaging with regional coordinators to strengthen party unity and grassroots connections.",
      animationType: "fadeRight",
    },
  ];

  // Past event memories
  const memories = [
    {
      type: "image",
      src: "/img/group_photo_1.webp",
      caption: "Some text",
    },
    {
      type: "image",
      src: "/img/group_photo_2.webp",
      caption: "Some text",
    },
    {
      type: "video",
      thumbnail: "/img/video_1_thumbnail.webp",
      src: "/videos/video_1.mp4",
      caption: "Some text",
    },
    {
      type: "image",
      src: "/img/group_photo_3.webp",
      caption: "Some text",
    },
  ];

  return (
    <section id="events" className="px-6 py-16 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mx-auto text-center md:text-start md:text-4xl font-bold text-gray-700 mt-4 mb-12 w-[90%] md:w-fit">
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

          <div className="flex flex-col md:flex-row gap-4">
            {upcomingEvents.map((event, idx) => (
              <ScrollReveal
                animationType={event.animationType}
                animateOnce={false}
              >
                <div
                  key={idx}
                  className="bg-gradient-to-r from-red-100 to-red-50 p-6 md:p-8 rounded-r-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
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
                      <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center">
                        <Play
                          onClick={() => setShowThumbnail(false)}
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
