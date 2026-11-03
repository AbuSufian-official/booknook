
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    id: 1,
    subtitle: "WELCOME TO BOOKNOOK",
    title: "Discover Your Next Favorite Book",
    description:
      "Explore a world of knowledge, stories, and imagination. Find your next favorite book and start your reading journey today.",
  },
  {
    id: 2,
    subtitle: "READ MORE, LEARN MORE",
    title: "Every Book Opens a New World",
    description:
      "Discover inspiring stories and valuable knowledge that help you learn, grow, and explore new ideas.",
  },
  {
    id: 3,
    subtitle: "YOUR READING JOURNEY",
    title: "Find. Borrow. Enjoy Reading.",
    description:
      "Discover amazing books, borrow your favorites, and enjoy the wonderful experience of reading.",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#027cd4] via-[#168edc] to-[#b9e4ff]">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-auto">
            <div className="flex min-h-[450px] w-full flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[520px] sm:px-12 lg:min-h-[600px]">

              <span className="rounded-full border border-white/40 bg-white/15 px-5 py-2 text-xs font-bold tracking-[3px] text-white">
                {slide.subtitle}
              </span>

              <h1 className="mt-7 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-50 sm:text-lg sm:leading-8">
                {slide.description}
              </p>

              <Link
                href="/books"
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#027cd4] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:text-base"
              >
                Browse Books <span>→</span>
              </Link>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
