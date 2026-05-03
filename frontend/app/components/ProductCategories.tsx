  'use client'

  import { useState } from "react";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import Link from "next/link";
  import Image from "next/image";


  const categories = [
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', altImg:'ảnh-decal-rider-thủy-sản', img: '/imgProduct/8.WebP', hoverImg: '/imgProduct/9.WebP', link: '/decal-tem-nhan-thuy-san'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: '/imgProduct/2.WebP', altImg:'ảnh-khay-xốp', hoverImg: '/imgProduct/3.WebP', link: '/khay_xop'},
    { name: 'Băng Keo', desc: 'Băng keo dán tem, bao bì.', img: '/imgProduct/4.WebP', altImg:'ảnh-băng-keo', hoverImg: '/imgProduct/5.WebP', link: '/bang_keo'},
    { name: 'In Túi PA/PE', desc: 'In túi PE, PA chất lượng.', img: '/imgProduct/6.WebP', altImg:'ảnh-túi-pa-pe', hoverImg: '/imgProduct/7.WebP', link: '/in-tui-pa-pe-tui-hot-xoai'},
    { name: 'Decal - Tem Nhãn', desc: 'In tem nhãn đa dạng mẫu mã - bền màu', altImg:'ảnh-tem-nhãn-ăn-vặt', img: '/imgProduct/img01.WebP', hoverImg: '/imgProduct/Tem-T2.WebP', link: '/decal-tem-nhan'},
    { name: 'In Bạt & In Decal Khổ Lớn', desc: 'In Bạt & In Decal Khổ Lớn.', altImg:'ảnh-bạt-decal-khổ-lớn', img: '/imgProduct/12.WebP', hoverImg: '/imgProduct/13.WebP', link: '/in-bac'},
    { name: 'In Menu', desc: 'Thiết kế menu đẹp cho quán.', altImg:'ảnh-menu-quán-nước', img: '/imgProduct/10.WebP', hoverImg: '/imgProduct/11.WebP', link: '/menu'},
    { name: 'In Catalogue', desc: 'In catalogue chuyên nghiệp, thiết kế đẹp, giá tốt tại Cà Mau.', altImg:'ảnh-catalogue-đẹp', img: '/imgProduct/Catalogue-01.jpg', hoverImg: '/imgProduct/In-Catalogue-04.png', link: '/catalogue'},
    { name: 'In Hộp', desc: 'In hộp giấy theo yêu cầu, hộp mỹ phẩm, hộp quà tặng cao cấp.', altImg:'ảnh-hộp-giấy-in-theo-yêu-cầu', img: '/imgProduct/Mau-hop-02.WebP', hoverImg: '/imgProduct/Mau-hop-03.WebP', link: '/hop_giay'},
    { name: 'In Voucher & Namecard', desc: 'In voucher và name card đẹp, sắc nét, lấy nhanh tại Cà Mau.', altImg:'ảnh-voucher-namecard', img: '/imgProduct/Card-Visit-01.WebP', hoverImg: '/imgProduct/Card-Visit-03.WebP', link: '/card'},
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 flex- ">

            {visibleItems.map((cat, index) => (
               <Link key={index} href={cat.link}>
                <div className="group relative bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-md 
  text-center hover:shadow-xl transition overflow-hidden cursor-pointer
  flex flex-col h-full">

                  {/* IMAGE */}
                  <div className="relative">
                  {/* ảnh mặc định */}
                  <Image
                    width={300}
                    height={300}
                    alt={cat.altImg}
                    src={cat.img}

                    className="w-full aspect-square object-cover rounded transition duration-300 group-hover:opacity-0"
                  />

                  {/* ảnh hover */}
                  <Image
                    width={300}
                    height={300}
                    src={cat.hoverImg}
                    alt={cat.altImg}
                    className="w-full aspect-square object-cover rounded absolute top-0 left-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </div>

                  {/* TEXT */}
                  <div className="flex flex-col flex-1 justify-between">
                    
                    {/* tên */}
                    <p className="mt-2 md:mt-3 px-1 font-bold text-[#184e86] 
                      text-xs sm:text-sm md:text-base line-clamp-2 min-h-[40px] hover:text-yellow-400 transition-colors duration-300">
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