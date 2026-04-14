  import Link from "next/link";
const categories = [
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/09/CARRD-04-scaled.png', hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Decal_Rider'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Khayxop' },
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/09/CARRD-04-scaled.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Decal_Rider'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Khayxop' },
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/09/CARRD-04-scaled.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Decal_Rider'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Khayxop' },
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/09/CARRD-04-scaled.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Decal_Rider'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Khayxop' },
    { name: 'Decal - Rider thủy sản', desc: 'In decal chống nước cho bao bì thủy sản.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/09/CARRD-04-scaled.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Decal_Rider'},
    { name: 'Khay Xốp', desc: 'Khay xốp đựng thủy sản an toàn.', img: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png',hoverImg: 'https://innhanhtphcm.com/wp-content/uploads/2025/03/In-Card-Giay-My-Thuat-Co-Van-Moc3.png', link: '/Khayxop' },
    // { name: 'Băng Keo', desc: 'Băng keo dán tem, bao bì.', img: '/ProductCategories/Bangkeo01.svg', link: '/Bangkeo' },
    // { name: 'In Túi PA/PE', desc: 'In túi PE, PA chất lượng cho thủy sản và nhiều ngành nghề khác.', img: '/ProductCategories/InTui01.svg', link: '/PA_PE' },
    // { name: 'Decal - Tem Nhãn', desc: 'In tem nhãn đa dạng mẫu mã - bền màu', img: '/ProductCategories/Decal01.svg', link: '/Decal_AV' },
    // { name: 'In Bạt & In Decal Khổ Lớn ', desc: 'In bạt và decal khổ lớn sắc nét và màu sắc chuẩn.', img: '/ProductCategories/InBac01.svg', link: '/InBac' },
    // { name: 'Menu', desc: 'Thiết kế menu đẹp cho quán.', img: '/ProductCategories/Menu01.svg', link: '/Menu' },
  ];
  const images = [
  { name: 'Tem01', img: '/imgProduct/TemTron/1.svg'},
  { name: 'Tem02', img: '/imgProduct/TemTron/2.svg'},
  { name: 'Tem03', img: '/imgProduct/TemTron/3.svg'},
  { name: 'Tem04', img: '/imgProduct/TemTron/4.svg'},
  { name: 'Tem05', img: '/imgProduct/TemTron/5.svg'},
  { name: 'Tem06', img: '/imgProduct/TemTron/6.svg'},
  { name: 'Tem07', img: '/imgProduct/TemTron/7.svg'},
  { name: 'Tem08', img: '/imgProduct/TemTron/8.svg'},
  { name: 'Tem09', img: '/imgProduct/TemTron/9.svg'},
  { name: 'Tem10', img: '/imgProduct/TemTron/10.svg'},
  { name: 'Tem11', img: '/imgProduct/TemTron/11.svg'},
  { name: 'Tem12', img: '/imgProduct/TemTron/12.svg'},
  { name: 'Tem13', img: '/imgProduct/TemTron/13.svg'},
  { name: 'Tem14', img: '/imgProduct/TemTron/14.svg'},
  { name: 'Tem15', img: '/imgProduct/TemTron/15.svg'},
  { name: 'Tem16', img: '/imgProduct/TemTron/16.svg'},
  { name: 'Tem17', img: '/imgProduct/TemTron/17.svg'},
  { name: 'Tem18', img: '/imgProduct/TemTron/18.svg'},
  { name: 'Tem19', img: '/imgProduct/TemTron/19.svg'},
  { name: 'Tem20', img: '/imgProduct/TemTron/20.svg'},
];


export default function Partners() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-[#184e86] mb-6 text-center">
        In Tem Nhãn Theo Yêu Cầu, Giá Rẻ Tại Cà Mau
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Trong thị trường thực phẩm hiện nay, tem nhãn không chỉ là một phần không thể
        thiếu trong việc nhận diện thương hiệu mà còn là yếu tố quan trọng để thu hút
        khách hàng. Với dịch vụ in tem nhãn của chúng tôi, bạn sẽ có được những sản
        phẩm nổi bật, chất lượng cao và giá cả hợp lý.
      </p>

      {/* IMAGE */}
      <div className="flex justify-center mb-12">
        <img src="/Chất liệu decal/img1.svg" />
      </div>

      {/* SECTION TITLE */}
      <h2 className="text-2xl font-bold text-[#184e86] mb-8 text-center">
        Các Loại Chất Liệu Tem Nhãn
      </h2>

      {/* MATERIALS */}
      <div className="space-y-12">

        {/* ITEM */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/Chất liệu decal/Decal Nhựa.svg" className="rounded-lg shadow" />

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Decal Nhựa (PVC, PP, PET)
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Chống nước, bền màu, phù hợp mỹ phẩm, đồ uống và sản phẩm đông lạnh.
              Chất liệu nhựa dẻo hoặc PVC giúp tem có khả năng bám dính chắc,
              không bị rách, không phai màu và chịu được môi trường ẩm hoặc
              nhiệt độ cao.
            </p>
          </div>
        </div>

        {/* ITEM */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Decal Giấy
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Đây là hình thức in gia công tem nhãn thông dụng nhất với 
              chi phí thấp, phù hợp cho tem sản phẩm, tem thông tin, tem giá. 
              Tem decal giấy dễ in ấn, bám mực tốt, thích hợp cho sản phẩm 
              tiêu thụ nhanh, môi trường khô ráo.
            </p>
          </div>

          <img src="/Chất liệu decal/Decal Giấy.svg" className="rounded-lg shadow" />
        </div>

        {/* ITEM */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/Chất liệu decal/Decal trong.svg" className="rounded-lg shadow" />

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Decal Trong
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Mang lại sự tinh tế và sang trọng cho các sản phẩm cao cấp.
              Thường được sử dụng cho mỹ phẩm, chai lọ hoặc các sản phẩm
              cần thiết kế tối giản.
            </p>
          </div>
        </div>

        {/* ITEM */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Tem Bể – Tem Chống Giả
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Tem bể được sử dụng nhiều trong điện tử, phụ kiện công nghệ,
              thiết bị gia dụng, mỹ phẩm và dược phẩm. Khi bóc ra tem sẽ vỡ
              giúp kiểm soát bảo hành và chống giả hiệu quả.
            </p>
          </div>

          <img src="/Chất liệu decal/Decal Bể.svg" className="rounded-lg shadow" />
        </div>

        {/* ITEM */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/Chất liệu decal/Decal xi bạc_ xi vàng.svg" className="rounded-lg shadow" />

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Decal Xi Vàng – Xi Bạc
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Tạo hiệu ứng sang trọng và nổi bật. Decal xi vàng hoặc xi bạc
              giúp sản phẩm trở nên cao cấp và thu hút ngay từ ánh nhìn đầu
              tiên của khách hàng.
            </p>
          </div>
        </div>

      </div>
      <section className="mb-2">
                <div className="flex items-center gap-6 my-10">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <h2 className="text-2xl font-bold text-[#184e86] tracking-wider py-7 text-center">
                        MẪU SẢN PHẨM
                    </h2>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                {images.map((cat, index) => (
                  <div key={index} className="bg-white p-3 md:p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                    <img src={cat.img} alt={cat.name} className="w-full aspect-square object-cover mb-3 md:mb-4 rounded" />
                    <h3 className="hover:text-[#184e86] hover:underline uppercase font-semibold text-sm md:text-base text-dark">{cat.name}</h3>
                  </div>
                  
        ))}
      </div>
                
                
        </section>
         
    <section className="">
          {/* ===== TITLE ===== */}
          <div className="text-center py-10">
            <h2 className="text-2xl md:text-4xl font-bold text-[#184e86]">
              LIÊN HỆ TƯ VẤN
            </h2>
            <div className="w-16 h-1 bg-[#184e86] mx-auto mt-3"></div>
          </div>

          {/* ===== LIST CONTACT ===== */}
          <div className="grid md:grid-cols-2 gap-4">
            

            <div className="flex items-center gap-4 bg-[#184e86] text-white p-4 md:p-6 rounded-xl shadow-md">
              <img
                src="/avt_customer/avatar-dep-6.jpg"
                className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
              />
              <div>
                <b className="text-xl md:text-2xl">Bích Lan</b>
                <p className="text-xl md:text-2xl">0911 828 978</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-4 bg-[#184e86] text-white p-4 md:p-6 rounded-xl shadow-md">
              <img
                src="/avt_customer/avt2.webp"
                className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
              />
              <div>
                <b className="text-xl md:text-2xl">Lê Nghĩa</b>
                <p className="text-xl md:text-2xl">0948 133 600</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 py-4">
            
            {/* CARD 1 */}
            <div className="flex items-center gap-4 bg-[#fcb700] text-white p-4 md:p-6 rounded-xl shadow-md">
              <img
                src="/avt_customer/LanTa.jpg"
                className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
              />
              <div>
                <b className="text-xl md:text-2xl">Xuân Lan</b>
                <p className="text-xl md:text-2xl">0941 027 800</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-4 bg-[#fcb700] text-white p-4 md:p-6 rounded-xl shadow-md">
              <img
                src="/avt_customer/avt2.webp"
                className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
              />
              <div>
                <b className="text-xl md:text-2xl">Thuận Trần</b>
                <p className="text-xl md:text-2xl">0948 133 600</p>
              </div>
            </div>
          </div>
        </section>
    </div>
    </main>
  );
}