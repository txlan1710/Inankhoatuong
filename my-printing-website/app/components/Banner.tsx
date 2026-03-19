"use client"; 
import { useEffect, useState } from "react"; 
import Image from "next/image"; 

const slides = [
  { img: "/banner/Banner-DecalRiderThuySan.svg", title: "IN ẤN NHANH", desc: "Nhanh chóng – Giá cả cạnh tranh", },
  { img: "/banner/Banner-Tui.svg", title: "IN DECAL CHẤT LƯỢNG", desc: "Sắc nét – Bền màu – Chuyên nghiệp", },
  { img: "/banner/Banner-Decal.svg", title: "IN BẠT KHỔ LỚN", desc: "Phù hợp mọi nhu cầu quảng cáo", },
  { img: "/banner/Banner-BangKeo.svg", title: "IN BẠT KHỔ LỚN", desc: "Phù hợp mọi nhu cầu quảng cáo", },
  { img: "/banner/Banner-KhayXop.svg", title: "IN BẠT KHỔ LỚN", desc: "Phù hợp mọi nhu cầu quảng cáo", },
  { img: "/banner/Banner-Bat.svg", title: "IN BẠT KHỔ LỚN", desc: "Phù hợp mọi nhu cầu quảng cáo", },
]; 

export default function HeroBanner() { 
  const [index, setIndex] = useState(0); 

  const nextSlide = () => { 
    setIndex((prev) => (prev + 1) % slides.length); 
  }; 

  const prevSlide = () => { 
    setIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1 ); 
  }; 

  return ( 
    <section className="w-full"> 
      <div className="relative w-full overflow-hidden max-w-7xl mx-auto py-4 md:py-12"> 
        
        <Image 
          src={slides[index].img} 
          alt="" 
          width={1200} 
          height={500} 
          className="w-full h-[180px] sm:h-[50px] md:h-auto object-cover rounded-lg" 
          priority 
        /> 

        <button 
          onClick={prevSlide} 
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-lg transition" 
        > 
          ‹ 
        </button> 

        <button 
          onClick={nextSlide} 
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-lg transition" 
        > 
          › 
        </button> 

        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3"> 
          {slides.map((_, i) => ( 
            <div 
              key={i} 
              onClick={() => setIndex(i)} 
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer border ${
                i === index 
                  ? "bg-[#184e86] border-[#184e86] scale-110" 
                  : "bg-white border-gray-400"
              }`} 
            ></div> 
          ))} 
        </div> 

      </div> 
    </section> 
  ); 
}