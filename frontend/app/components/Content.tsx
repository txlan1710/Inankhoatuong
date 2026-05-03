import Image from "next/image";

export default function Content() {
  return (
    <section className="py-6 md:py-10 bg-primary text-secondary max-w-7xl mx-auto px-3 md:px-0">
      
      {/* ===== TITLE ===== */}
      <div className="text-center py-6 md:py-10">
        <h2 className="text-xl md:text-4xl font-bold text-[#184e86]">
          HỆ THỐNG IN KTS CHUYÊN NGHIỆP
        </h2>
        <div className="w-12 md:w-16 h-1 bg-[#184e86] mx-auto mt-3"></div>
      </div>

      {/* ===== MAIN IMAGE ===== */}
      <div className="w-full">
        <Image
          width={1280}
          height={717}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
          // ❌ bỏ priority nếu không phải ảnh hero trên cùng
          src="/imgs/HỆ THỐNG MÁY IN FLEXO HIỆN ĐẠI.WebP"
          className="w-full h-auto rounded-lg"
          alt="hệ-thống-máy-in-flexo-hiện-đại-của-in-an-khoa-tuong"
        />

        {/* ===== GRID IMAGE ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-4 md:mt-6">
          
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-center items-center">
              <Image
                width={266}
                height={184}
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 266px"
                src={`/imgs/${item}.WebP`}
                alt={`Hệ-thống-máy-móc-khoa-tường-0${item}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}