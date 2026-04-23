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

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full relative">
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[600px]"
        style={{ perspective: "1000px" }}
      >
        {slides.map((slide, i) => (
          <Link key={i} href={slide.link || "#"}>
            <Image
              src={slide.img}
              alt=""
              fill
              className={`
                absolute top-0 left-0 object-contain rounded-lg
                transition-all duration-700 ease-in-out
                ${
                  i === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-110 z-0"
                }
              `}
            />
          </Link>
        ))}
      </div>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-[#184e86]"
      >
        <FaChevronRight className="text-3xl md:text-4xl" />
      </button>

      {/* PREV */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-[#184e86]"
      >
        <FaChevronLeft className="text-3xl md:text-4xl" />
      </button>
    </section>
  );
}