"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const slides = [
  { img: "/banner/Banner-DecalRiderThuySan.png", link: "/decal-tem-nhan" },
  { img: "/banner/Banner-Tui.png", link: "/in-tui-pa-pe-tui-hot-xoai" },
  { img: "/banner/Banner-Decal.png", link: "/decal-tem-nhan" },
  { img: "/banner/Banner-BangKeo.png", link: "/bang-keo" },
  { img: "/banner/Banner-KhayXop.png", link: "/khay-xop" },
  { img: "/banner/Banner-Bat.png", link: "/in-bac" },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  // ✅ loading state
  const [loading, setLoading] = useState(true);

  // ✅ swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // ✅ preload toàn bộ ảnh (giúp chuyển slide mượt)
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.img;
    });
  }, []);

  const nextSlide = () => {
    setLoading(true); // reset loading
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setLoading(true); // reset loading
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full relative">
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[650px]"
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={() => {
          const distance = touchStart - touchEnd;
          if (distance > 50) nextSlide();
          if (distance < -50) prevSlide();
        }}
      >
        {/* ✅ loading overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse rounded-lg z-10">
            <span className="text-sm text-gray-500">Loading...</span>
          </div>
        )}

        <Link href={slides[index].link || "#"}>
          <Image
            src={slides[index].img}
            alt="banner"
            fill
            priority={index === 0}
            sizes="100vw"
            onLoadingComplete={() => setLoading(false)}
            className={`object-contain rounded-lg transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
      </div>

      {/* DOTS mobile */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setLoading(true);
              setIndex(i);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-[#184e86] w-4" : "bg-[#184e86]/40"
            }`}
          />
        ))}
      </div>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2
        text-white bg-black/30 hover:bg-black/50
        backdrop-blur-sm rounded-full p-3
        transition duration-300 hover:text-yellow-400 active:scale-90"
      >
        <FaChevronRight className="text-4xl" />
      </button>

      {/* PREV */}
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