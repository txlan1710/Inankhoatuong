"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const slides = [
  { img: "/banner/Banner-DecalRiderThuySan.svg", link: "/Decal_Rider" },
  { img: "/banner/Banner-Tui.svg", link: "/PA_PE" },
  { img: "/banner/Banner-Decal.svg", link: "" },
  { img: "/banner/Banner-BangKeo.svg", link: "/Bangkeo" },
  { img: "/banner/Banner-KhayXop.svg", link: "/Khayxop" },
  { img: "/banner/Banner-Bat.svg", link: "/InBac" },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  // ✅ swipe state phải nằm trong component
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full relative">
      {/* ✅ GẮN SWIPE VÀO ĐÂY */}
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[650px]"
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={() => {
          const distance = touchStart - touchEnd;

          if (distance > 50) nextSlide();     // vuốt trái
          if (distance < -50) prevSlide();    // vuốt phải
        }}
      >
        <Link href={slides[index].link || "#"}>
          <Image
            src={slides[index].img}
            alt="banner"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </Link>
      </div>

      {/* DOTS mobile */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-[#184e86] w-4" : "bg-[#184e86]/40"
            }`}
          />
        ))}
      </div>

      {/* NEXT (desktop only) */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2
        text-white bg-black/30 hover:bg-black/50
        backdrop-blur-sm rounded-full p-3
        transition duration-300 hover:text-yellow-400 active:scale-90"
      >
        <FaChevronRight className="text-4xl" />
      </button>

      {/* PREV (desktop only) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2
        text-white bg-black/30 hover:bg-black/50
        backdrop-blur-sm rounded-full p-3
        transition duration-300 hover:text-yellow-400 active:scale-90"
      >
        <FaChevronLeft className="text-4xl" />
      </button>
    </section>
  );
}