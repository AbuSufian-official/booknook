"use client"

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { BookOpen, ArrowRight, Library, Sparkles } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

function BannerSlider() {
  // 3 Slides data with beautiful background images
  const slides = [
    {
      id: 1,
      badge: "Welcome to BookNook",
      title: "Discover Thousands of Books in One Place",
      description:
        "Explore our growing collection of novels, science, history, and classics. Find your next great read today.",
      buttonText: "Browse Books",
      buttonLink: "/books",
      icon: BookOpen,
      stat: "1,500+ Books Available",
      bgImage:
        "https://png.pngtree.com/background/20250125/original/pngtree-stack-of-books-in-a-library-with-sunlight-streaming-through-the-picture-image_15776652.jpg",
    },
    {
      id: 2,
      badge: "Simple & Free Lending",
      title: "Borrow for a Few Days & Return Anytime",
      description:
        "Borrow your favorite books with one click. Enjoy reading at your pace and return whenever you are done.",
      buttonText: "Browse Books",
      buttonLink: "/books",
      icon: Library,
      stat: "Instant Borrowing",
      bgImage:
        "https://t3.ftcdn.net/jpg/18/75/21/12/360_F_1875211292_gsi9GcLjTz9f4wuKSouirgPgSvosfrui.jpg",
    },
    {
      id: 3,
      badge: "Community Bookshelf",
      title: "Add New Books & Share with Readers",
      description:
        "Have books sitting on your shelf? Add them to the library so fellow readers in the community can enjoy them.",
      buttonText: "Browse Books",
      buttonLink: "/books",
      icon: Sparkles,
      stat: "Join Community",
      bgImage:
        "https://lisalarter.com/wp-content/uploads/2022/03/How-to-write-a-book.jpg",
    },
  ]

  return (
    <section className="w-full py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          style={{
            "--swiper-theme-color": "#027cd4",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.6",
            "--swiper-navigation-color": "#ffffff",
            "--swiper-navigation-size": "24px",
          }}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          {slides.map((slide) => {
            const IconComponent = slide.icon

            return (
              <SwiperSlide key={slide.id}>
                {/* Slide Background Image */}
                <div
                  className="relative min-h-[420px] md:min-h-[500px] flex items-center bg-cover bg-center px-6 sm:px-12 md:px-16 py-12"
                  style={{ backgroundImage: `url('${slide.bgImage}')` }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70" />

                  {/* Slide Content */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
                    
                    {/* Left: Text & CTA */}
                    <div className="md:col-span-8 text-left space-y-4 sm:space-y-6">
                      
                      {/* Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/20">
                        <IconComponent size={14} className="text-[#38a2f5]" />
                        {slide.badge}
                      </span>

                      {/* Title */}
                      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        {slide.title}
                      </h1>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>

                      {/* Browse Books Button */}
                      <div>
                        <Link
                          href={slide.buttonLink}
                          className="inline-flex items-center gap-2 bg-[#027cd4] hover:bg-[#0269b3] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          <span>{slide.buttonText}</span>
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Glass Card with Brand Color Accent */}
                    <div className="hidden md:flex md:col-span-4 justify-center">
                      <div className="w-56 h-72 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
                        <div className="space-y-3 relative z-10">
                          <div className="w-12 h-12 rounded-xl bg-[#027cd4] flex items-center justify-center shadow-md">
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                            BookNook Library
                          </p>
                          <h3 className="text-lg font-bold leading-snug">
                            {slide.badge}
                          </h3>
                        </div>

                        <div className="pt-4 border-t border-white/20 relative z-10">
                          <span className="text-xs font-medium text-white/90">
                            {slide.stat}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default BannerSlider
