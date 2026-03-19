 // Placeholder
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
export default function Partners() {
  return (
    <main className="w-full bg-white text-gray-800">
      <section className="py-6 md:py-10 px-4 md:px-0 bg-secondary max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-dark text-[#184e86] mb-6 md:mb-10 text-center md:text-left">Sản phẩm</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white p-3 md:p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <img src={cat.img} alt={cat.name} className="w-full aspect-square object-cover mb-3 md:mb-4 rounded" />
            <Link href={cat.link} className="font-semibold text-dark block px-2 md:px-4 py-1 md:py-2 text-gray-800 ">
                  <h3 className="hover:text-[#184e86] hover:underline uppercase font-semibold text-sm md:text-base text-dark">{cat.name}</h3>
                </Link>         
          </div>
        ))}
      </div>
    </section>

    </main>
  );
}