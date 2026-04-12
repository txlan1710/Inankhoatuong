"use client"
import { useEffect, useState } from "react";

const images = [
  "/imgs/CTY/KhoaTuong01.svg",
  "/imgs/CTY/KhoaTuong02.svg",
  "/imgs/CTY/KhoaTuong03.svg",
  "/imgs/CTY/KhoaTuong04.svg",
  "/imgs/CTY/KhoaTuong05.svg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[500px] h-[200px] md:h-[300px] overflow-hidden rounded-2xl mx-auto">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-opacity duration-700"
        alt="Khoa Tuong"
      />
    </div>
  );
}