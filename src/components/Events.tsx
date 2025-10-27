import { Calendar, MapPin, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
  // Track playing state for each video individually
  const [playingVideos, setPlayingVideos] = useState<{
    [key: number]: boolean;
  }>({});

  // Reference to Swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

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
  const memories: Array<{
    type: "image" | "video";
    src: string;
    thumbnail?: string;
    caption: string;
  }> = [
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

  // Handle video play - pause swiper autoplay
  const handleVideoPlay = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  // Handle video end - resume swiper autoplay
  const handleVideoEnd = (index: number) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: false }));
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  // Handle slide change - stop any playing videos and resume autoplay
  const handleSlideChange = () => {
    setPlayingVideos({});
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section id="events" className="px-6 py-12 md:py-24 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto mt-6">
        <h2 className="text-3xl mx-auto text-center md:text-start md:text-4xl font-bold text-gray-700 mb-8 w-[90%] md:w-fit">
          Events
        </h2>

        <p className="text-gray-600 mb-10 max-w-5xl">
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
          <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              className="rounded-2xl"
            >
              {memories.map((memory, index) => (
                <SwiperSlide key={index} className="group">
                  <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                    {memory.type === "video" && playingVideos[index] ? (
                      <video
                        controls
                        controlsList="nodownload"
                        className="w-full h-full object-cover"
                        onEnded={() => handleVideoEnd(index)}
                        onPause={() => handleVideoEnd(index)}
                        autoPlay
                      >
                        <source src={memory.src} type="video/mp4" />
                      </video>
                    ) : (
                      <>
                        <img
                          src={
                            memory.type === "video"
                              ? memory.thumbnail
                              : memory.src
                          }
                          alt={memory.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {memory.type === "video" && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                            <button
                              onClick={() => handleVideoPlay(index)}
                              className="w-16 h-16 bg-red-600/90 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                              aria-label="Play video"
                            >
                              <Play
                                className="w-8 h-8 text-white ml-1"
                                fill="white"
                              />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-700 text-center px-4">
                    {memory.caption}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
