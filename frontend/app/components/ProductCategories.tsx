  'use client'

  import { useState } from "react";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import Link from "next/link";


  const categories = [
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: '/imgProduct/8.svg', hoverImg: '/imgProduct/9.svg', link: '/Decal_Rider'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: '/imgProduct/2.svg', hoverImg: '/imgProduct/3.svg', link: '/Khayxop'},
    { name: 'Băng Keo', desc: 'Băng keo dán tem, bao bì.', img: '/imgProduct/4.svg', hoverImg: '/imgProduct/5.svg', link: '/Bangkeo'},
    { name: 'In Túi PA/PE', desc: 'In túi PE, PA chất lượng.', img: '/imgProduct/6.svg', hoverImg: '/imgProduct/7.svg', link: '/PA_PE'},
    { name: 'Decal - Tem Nhãn', desc: 'In tem nhãn đa dạng mẫu mã - bền màu', img: '/imgProduct/TemTron/1.svg', hoverImg: '/imgProduct/TemTron/hoverImg/Tem-T2.svg', link: '/Decal_AV'},
    { name: 'In Bạt & In Decal Khổ Lớn', desc: 'In Bạt & In Decal Khổ Lớn.', img: '/imgProduct/12.svg', hoverImg: '/imgProduct/13.svg', link: '/InBac'},
    { name: 'In Menu', desc: 'Thiết kế menu đẹp cho quán.', img: '/imgProduct/10.svg', hoverImg: '/imgProduct/11.svg', link: '/Menu'},
    // { name: 'In Túi PA/PE', desc: 'In túi PE, PA chất lượng cho thủy sản và nhiều ngành nghề khác.', img: '/ProductCategories/InTui01.svg', link: '/PA_PE' },
    // { name: 'Decal - Tem Nhãn', desc: 'In tem nhãn đa dạng mẫu mã - bền màu', img: '/ProductCategories/Decal01.svg', link: '/Decal_AV' },
    // { name: 'In Bạt & In Decal Khổ Lớn ', desc: 'In bạt và decal khổ lớn sắc nét và màu sắc chuẩn.', img: '/ProductCategories/InBac01.svg', link: '/InBac' },
    // { name: 'Menu', desc: 'Thiết kế menu đẹp cho quán.', img: '/ProductCategories/Menu01.svg', link: '/Menu' },
  ];

  export default function ProductCategories() {

    const visibleItems = categories;

    return (
      <section className="py-6 md:py-10 bg-secondary max-w-7xl mx-auto px-3 md:px-0">
        {/* ===== TITLE ===== */}
      <div className="text-center py-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#184e86]">
          SẢN PHẨM
        </h2>
        <div className="w-16 h-1 bg-[#1 84e86] mx-auto mt-3"></div>
      </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 flex-">

            {visibleItems.map((cat, index) => (
               <Link key={index} href={cat.link}>
                <div className="group relative bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-md 
  text-center hover:shadow-xl transition overflow-hidden cursor-pointer
  flex flex-col h-full">

  {/* IMAGE */}
  <div className="relative">
    <img
      src={cat.img}
      alt={cat.name}
      className="w-full aspect-square object-cover rounded"
    />
  </div>

  {/* TEXT */}
  <div className="flex flex-col flex-1 justify-between">
    
    {/* tên */}
    <p className="mt-2 md:mt-3 px-1 font-bold text-[#184e86] 
      text-xs sm:text-sm md:text-base line-clamp-2 min-h-[40px]">
      {cat.name}
    </p>

    {/* mô tả */}
    <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 
      line-clamp-2 min-h-[32px]">
      {cat.desc}
    </p>

  </div>
</div>
              </Link>
            ))}

          </div>


        </div>

      </section>
    );
  }