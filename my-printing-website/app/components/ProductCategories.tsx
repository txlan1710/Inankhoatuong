'use client'

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";


const categories = [
  { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: '/ProductCategories/Rider01.svg', link: '/Decal_Rider'},
  { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: '/ProductCategories/KhayXop01.svg', link: '/Khayxop' },
  { name: 'Băng Keo', desc: 'Băng keo dán tem, bao bì.', img: '/ProductCategories/Bangkeo01.svg', link: '/Bangkeo' },
  { name: 'In Túi PA/PE', desc: 'In túi PE, PA chất lượng cho thủy sản và nhiều ngành nghề khác.', img: '/ProductCategories/InTui01.svg', link: '/PA_PE' },
  { name: 'Decal - Tem Nhãn', desc: 'In tem nhãn đa dạng mẫu mã - bền màu', img: '/ProductCategories/Decal01.svg', link: '/Decal_AV' },
  { name: 'In Bạt & In Decal Khổ Lớn ', desc: 'In bạt và decal khổ lớn sắc nét và màu sắc chuẩn.', img: '/ProductCategories/InBac01.svg', link: '/InBac' },
  { name: 'Menu', desc: 'Thiết kế menu đẹp cho quán.', img: '/ProductCategories/Menu01.svg', link: '/Menu' },
];

export default function ProductCategories() {

  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = categories.slice(startIndex, startIndex + 5);

  const next = () => {
    if (startIndex + 5 < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-6 md:py-10 bg-secondary max-w-7xl mx-auto px-3 md:px-0">

      <h2 className="text-xl md:text-3xl font-bold text-center text-[#184e86] mb-6 md:mb-10">
        Sản Phẩm
      </h2>

      <div className="flex items-center gap-2 md:gap-4">

        {/* Nút trái */}
        <button onClick={prev} className="p-2 md:p-3 bg-white shadow rounded-full">
          <FaChevronLeft />
        </button>

        {/* Danh sách sản phẩm */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 flex-1">

          {visibleItems.map((cat, index) => (
            <div key={index} className="bg-white p-3 md:p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">

              <img
                src={cat.img}
                alt={cat.name}
                className="w-full aspect-square object-cover mb-3 md:mb-4 rounded"
              />
              <Link href={cat.link} className="font-semibold text-dark block px-2 md:px-4 py-1 md:py-2 text-gray-800 text-sm md:text-base">
                  {cat.name}
                </Link>

              <p className="text-xs md:text-sm text-gray-600">
                {cat.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Nút phải */}
        <button onClick={next} className="p-2 md:p-3 bg-white shadow rounded-full">
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
}