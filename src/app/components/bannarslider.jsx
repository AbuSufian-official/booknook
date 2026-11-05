"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper ka basic CSS. Iske bina slides ek ke upar ek dikhti hain.
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Har slide 4 second tak dikhegi, phir next slide aayegi.
const AUTOPLAY_DELAY = 4000;

// Slide change hone ka animation time (0.8 second).
const SLIDE_SPEED = 800;

// Banner slides. Minimum 3 slides rakhe gaye hain.
const slides = [
  {
    id: 1,
    subtitle: "WELCOME TO BOOKNOOK",
    title: "Discover Your Next Favorite Book",
    description:
      "Explore a world of knowledge, stories, and imagination. Find your next favorite book and start your reading journey today.",
    background: "from-[#027cd4] via-[#168edc] to-[#b9e4ff]",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    subtitle: "READ MORE, LEARN MORE",
    title: "Every Book Opens a New World",
    description:
      "Discover inspiring stories and valuable knowledge that help you learn, grow, and explore new ideas.",
    background: "from-[#4c1d95] via-[#7c3aed] to-[#c4b5fd]",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    subtitle: "YOUR READING JOURNEY",
    title: "Find. Borrow. Enjoy Reading.",
    description:
      "Discover amazing books, borrow your favorites, and enjoy the wonderful experience of reading.",
    background: "from-[#0f766e] via-[#14b8a6] to-[#99f6e4]",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        loop={true}
        speed={SLIDE_SPEED}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`relative !h-auto overflow-hidden bg-gradient-to-br ${slide.background}`}
          >
            {/* Har slide ka background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />

            {/* Black gradient overlay taake text readable rahe */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"
              aria-hidden="true"
            />

            <div className="relative z-10 flex min-h-[450px] w-full flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[520px] sm:px-12 lg:min-h-[600px]">
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
