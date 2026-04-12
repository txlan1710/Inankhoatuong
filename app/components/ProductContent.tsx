'use client'

import Link from "next/link";

const categories = [
  { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: '/imgProduct/8.svg', hoverImg: '/imgProduct/9.svg', link: '/Decal_Rider'},
  { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: '/imgProduct/2.svg', hoverImg: '/imgProduct/3.svg', link: '/Khayxop'},
  { name: 'Băng Keo', desc: 'Băng keo dán tem, bao bì.', img: '/imgProduct/4.svg', hoverImg: '/imgProduct/5.svg', link: '/Bangkeo'},
  { name: 'In Túi PA/PE', desc: 'In túi PE, PA chất lượng.', img: '/imgProduct/6.svg', hoverImg: '/imgProduct/7.svg', link: '/PA_PE'},
  { name: 'Decal - Tem Nhãn', desc: 'In tem nhãn đa dạng mẫu mã - bền màu', img: '/imgProduct/TemTron/1.svg', hoverImg: '/imgProduct/TemTron/hoverImg/Tem-T2.svg', link: '/Decal_AV'},
  { name: 'In Bạt & In Decal Khổ Lớn', desc: 'In Bạt & In Decal Khổ Lớn.', img: '/imgProduct/12.svg', hoverImg: '/imgProduct/13.svg', link: '/InBac'},
  { name: 'In Menu', desc: 'Thiết kế menu đẹp cho quán.', img: '/imgProduct/10.svg', hoverImg: '/imgProduct/11.svg', link: '/Menu'},
];

export default function ProductCategories() {
  return (
    <section className="py-6 md:py-10 bg-secondary max-w-7xl mx-auto px-3 md:px-0">

      {/* TITLE */}
      <div className="text-center py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#184e86]">
          SẢN PHẨM
        </h2>
        <div className="w-16 h-1 bg-[#184e86] mx-auto mt-3"></div>
      </div>

      {/* GRID 4 CỘT */}
      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4   // 👉 desktop luôn 4 cột
        gap-4 md:gap-6
      ">

        {categories.map((cat, index) => (
          <Link key={index} href={cat.link}>
            <div className="group relative bg-white p-3 md:p-4 rounded-lg shadow-md text-center hover:shadow-xl transition overflow-hidden cursor-pointer">

              {/* IMAGE */}
              <div className="relative">
                {/* ảnh mặc định */}
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full aspect-square object-cover rounded transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* ảnh hover */}
                <img
                  src={cat.hoverImg}
                  alt={cat.name}
                  className="w-full aspect-square object-cover rounded absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-105"
                />

                {/* overlay */}
                <div className="
                  absolute bottom-0 left-0 w-full
                  bg-[#184e86]/90 text-white text-center py-2 font-semibold
                  opacity-0 translate-y-full
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                ">
                  XEM NHANH
                </div>
              </div>

              {/* TEXT */}
              <p className="mt-3 px-2 font-bold text-[#184e86] text-sm md:text-base">
                {cat.name}
              </p>

              <p className="text-xs md:text-sm text-gray-600">
                {cat.desc}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}