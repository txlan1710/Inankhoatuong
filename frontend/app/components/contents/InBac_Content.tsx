
 const images = [
  { name: 'Mẫu 01', img: '/imgProduct/Standee/1.svg'},
  { name: 'Mẫu 02', img: '/imgProduct/Standee/2.svg'},
  { name: 'Mẫu 03', img: '/imgProduct/Standee/3.svg'},
  { name: 'Mẫu 04', img: '/imgProduct/Standee/4.svg'},
  { name: 'Mẫu 05', img: '/imgProduct/Standee/5.svg'},
  { name: 'Mẫu 06', img: '/imgProduct/Standee/6.svg'},
  { name: 'Mẫu 07', img: '/imgProduct/Standee/7.svg'},
  { name: 'Mẫu 08', img: '/imgProduct/Standee/8.svg'},
  { name: 'Mẫu 09', img: '/imgProduct/Standee/9.svg'},
  { name: 'Mẫu 11', img: '/imgProduct/Standee/11.svg'},
  { name: 'Mẫu 12', img: '/imgProduct/Standee/12.svg'},
  { name: 'Mẫu 13', img: '/imgProduct/Standee/13.svg'},
  { name: 'Mẫu 14', img: '/imgProduct/Standee/14.svg'},
];


export default function InBatDecal() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">

        {/* TITLE */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#184e86] mb-4 md:mb-6 leading-snug">
          In Bạt & In Decal Khổ Lớn Tại Cà Mau – 
          In Nhanh, Chất Lượng Cao
        </h1>

        {/* INTRO */}
        <p className="indent-4 md:indent-8 text-sm md:text-base leading-relaxed mb-4">
          Bạn đang cần in bạt quảng cáo hoặc in decal khổ lớn tại Cà Mau để làm
          bảng hiệu, banner, băng rôn, poster hoặc trang trí cửa hàng? Chúng tôi
          cung cấp dịch vụ in bạt Hiflex, in bạt 2 da và in decal quảng cáo khổ
          lớn với giá thành cạnh tranh, hình ảnh sắc nét và độ bền cao.
        </p>

        <p className="indent-4 md:indent-8 text-sm md:text-base leading-relaxed mb-5">
          Với hệ thống máy in kỹ thuật số hiện đại, chúng tôi nhận in ấn quảng
          cáo cho nhiều lĩnh vực như cửa hàng, quán ăn, quán cà phê, shop thời
          trang, siêu thị, sự kiện khai trương và các chương trình quảng cáo.
          Sản phẩm sau khi in có màu sắc tươi sáng, hình ảnh rõ nét, phù hợp
          sử dụng trong nhà và ngoài trời.
        </p>

        <img
          src="/imgs/InBac/Inbac01.svg"
          alt="in bạt quảng cáo"
          className="w-full md:w-[70%] mx-auto mb-6"
        />

        {/* SECTION 1 */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#184e86] mb-3 md:mb-4">
            1. Dịch Vụ In Bạt Quảng Cáo Tại Cà Mau
          </h2>

          <p className="indent-4 md:indent-8 text-sm md:text-base mb-4 leading-relaxed">
            In bạt quảng cáo là một trong những giải pháp marketing được nhiều
            doanh nghiệp và cửa hàng lựa chọn nhờ chi phí thấp nhưng hiệu quả
            cao. Bạt quảng cáo thường được sử dụng để làm:
          </p>

          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>Bảng hiệu cửa hàng</li>
            <li>Băng rôn quảng cáo</li>
            <li>Banner khuyến mãi</li>
            <li>Backdrop sự kiện</li>
            <li>Pano quảng cáo ngoài trời</li>
          </ul>

          <p className="indent-4 md:indent-8 mt-4 text-sm md:text-base">
            Chúng tôi cung cấp nhiều chất liệu bạt in quảng cáo chất lượng cao,
            phù hợp với từng nhu cầu sử dụng khác nhau.
          </p>
        </section>

        <img
          src="/imgs/InBac/Inbac02.svg"
          alt="banner quảng cáo"
          className="w-full md:w-[90%] mx-auto mb-6"
        />

        {/* SECTION 2 */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#184e86] mb-3 md:mb-4">
            2. Các Loại Bạt Quảng Cáo Phổ Biến
          </h2>

          <div className="mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-2">2.1 Bạt Hiflex</h3>

            <p className="indent-4 md:indent-8 text-sm md:text-base mb-3">
              Bạt Hiflex là chất liệu in ấn phổ biến nhất trong ngành quảng cáo.
              Loại bạt này được làm từ nhựa PVC, có màu trắng sữa và khả năng
              in khổ lớn.
            </p>

            <p className="font-semibold mb-2 text-sm md:text-base">Ưu điểm của bạt Hiflex</p>

            <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
              <li>Giá thành rẻ, tiết kiệm chi phí quảng cáo</li>
              <li>Hình ảnh in rõ nét, màu sắc đẹp</li>
              <li>In được khổ lớn cho bảng hiệu ngoài trời</li>
              <li>Chống thấm nước, chịu được nắng mưa</li>
              <li>Chất liệu dẻo dai, độ bền cao</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-2">2.2 Bạt 2 Da</h3>

            <p className="indent-4 md:indent-8 text-sm md:text-base mb-3">
              Bạt 2 da là loại bạt cao cấp hơn so với bạt Hiflex thông thường.
              Loại bạt này có cấu trúc hai lớp nhựa ép lại với độ dày khoảng
              0.3mm – 0.36mm.
            </p>

            <p className="font-semibold mb-2 text-sm md:text-base">Ưu điểm của bạt 2 da</p>

            <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
              <li>Độ bền cao hơn bạt thông thường</li>
              <li>Hình ảnh in sắc nét</li>
              <li>Ít bị rách hoặc giãn khi căng bạt</li>
              <li>Phù hợp bảng hiệu kích thước lớn</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              2.3 Backlit Film (Film Hộp Đèn)
            </h3>

            <p className="indent-4 md:indent-8 text-sm md:text-base mb-3">
              Backlit Film là loại vật liệu chuyên dùng để in hộp đèn quảng cáo.
              Khi có ánh sáng từ phía sau chiếu xuyên qua, hình ảnh sẽ trở nên
              nổi bật và thu hút hơn.
            </p>

            <p className="font-semibold mb-2 text-sm md:text-base">Ưu điểm</p>

            <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
              <li>Hiệu ứng ánh sáng đẹp</li>
              <li>Hình ảnh nổi bật vào ban đêm</li>
              <li>Phù hợp bảng hiệu LED và hộp đèn</li>
            </ul>
          </div>
        </section>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full md:w-[70%] border border-gray-300 mx-auto text-xs md:text-base">
            
            <thead className="bg-[#184e86] text-white">
              <tr>
            <th className="border p-2 md:p-3 whitespace-nowrap">STT</th>
            <th className="border p-2 md:p-3 whitespace-nowrap">Tên Hàng</th>
            <th className="border p-2 md:p-3 whitespace-nowrap">Đơn giá</th>
            <th className="border p-2 md:p-3 whitespace-nowrap">Cán Màng</th>
          </tr>
        </thead>

        <tbody className="text-[#184e86]">
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2 whitespace-nowrap">Hiflex - dày: 0.32mm</td>
            <td className="border p-2 text-center whitespace-nowrap">50.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">2</td>
            <td className="border p-2">Bạt 2 da - dày: 0.3mm khổ dưới 3.2m</td>
            <td className="border p-2 text-center">57.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">3</td>
            <td className="border p-2">Bạt 2 da - dày: 0.36mm khổ 3.2m -5m</td>
            <td className="border p-2 text-center">65.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">4</td>
            <td className="border p-2">Decal trong và decal sữa, PP</td>
            <td className="border p-2 text-center">70.000/m2</td>
            <td className="border p-2 text-center">85.000/m2</td>
          </tr>

          <tr>
            <td className="border p-2 text-center">5</td>
            <td className="border p-2">Decal HongYong</td>
            <td className="border p-2 text-center">85.000/m2</td>
            <td className="border p-2 text-center">100.000/m2</td>
          </tr>

          <tr>
            <td className="border p-2 text-center">6</td>
            <td className="border p-2">Decal trong cán decal sữa</td>
            <td className="border p-2 text-center">100.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">7</td>
            <td className="border p-2">
              Decal trong và decal sữa cắt bế thành phẩm
            </td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2 text-center">140.000/m2</td>
          </tr>

          <tr>
            <td className="border p-2 text-center">8</td>
            <td className="border p-2">Decal siêu trong (trong như kính)</td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2 text-center">140.000/m2</td>
          </tr>

          <tr>
            <td className="border p-2 text-center">9</td>
            <td className="border p-2">Decal lưới</td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">10</td>
            <td className="border p-2">Vải Silk</td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">11</td>
            <td className="border p-2">Tem máy KTS</td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2 text-center">115.000/m2</td>
          </tr>

          {/* Dòng IN UV */}
          <tr className="bg-yellow-300 font-semibold text-center">
            <td colSpan={4} className="border p-2">
              IN UV
            </td>
          </tr>

          <tr>
            <td className="border p-2 text-center">12</td>
            <td className="border p-2">Decal Ovijet</td>
            <td className="border p-2 text-center">100.000/m2</td>
            <td className="border p-2 text-center">115.000/m2</td>
          </tr>

          <tr>
            <td className="border p-2 text-center">13</td>
            <td className="border p-2">Decal Hongyong</td>
            <td className="border p-2 text-center">110.000/m2</td>
            <td className="border p-2 text-center">125.000/m2</td>
          </tr>

          <tr>
            <td className="border p-2 text-center">14</td>
            <td className="border p-2">Decal lưới in UV</td>
            <td className="border p-2 text-center">140.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">15</td>
            <td className="border p-2">Backlit film in UV</td>
            <td className="border p-2 text-center">140.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">16</td>
            <td className="border p-2">Canvas in UV</td>
            <td className="border p-2 text-center">140.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">17</td>
            <td className="border p-2">Bạt xám in UV</td>
            <td className="border p-2 text-center">100.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">18</td>
            <td className="border p-2">Bạt không gân in UV</td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">19</td>
            <td className="border p-2">Bạt không gân UV xuyên đèn</td>
            <td className="border p-2 text-center">140.000/m2</td>
            <td className="border p-2"></td>
          </tr>

          <tr>
            <td className="border p-2 text-center">20</td>
            <td className="border p-2">
              Bạt lưng đen cao cấp in UV không xuyên
            </td>
            <td className="border p-2 text-center">120.000/m2</td>
            <td className="border p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
        

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#184e86] mb-4">
            6. Cam Kết Dịch Vụ
          </h2>

          <p className="indent-8 mb-4">
            Khi sử dụng dịch vụ in bạt và in decal khổ lớn tại Cà Mau,
            chúng tôi cam kết mang đến sản phẩm chất lượng và dịch vụ
            chuyên nghiệp.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>In nhanh, có thể lấy trong ngày</li>
            <li>Hình ảnh sắc nét, màu sắc chuẩn</li>
            <li>Giá thành cạnh tranh</li>
            <li>Hỗ trợ thiết kế miễn phí</li>
            <li>Thi công tận nơi tại Cà Mau</li>
          </ul>
        </section>
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
        {/* CONTACT */}
      <section className="">
  {/* ===== TITLE ===== */}
  <div className="text-center py-6 md:py-10">
    <h2 className="text-xl md:text-4xl font-bold text-[#184e86]">
      LIÊN HỆ TƯ VẤN
    </h2>
    <div className="w-12 md:w-16 h-1 bg-[#184e86] mx-auto mt-2 md:mt-3"></div>
  </div>

  {/* ===== LIST CONTACT ===== */}
  <div className="grid grid-cols-2 gap-2 md:gap-4">

    <div className="flex items-center gap-2 md:gap-4 bg-[#184e86] text-white p-2 md:p-6 rounded-xl shadow-md">
      <img
        src="/avt_customer/avatar-dep-6.jpg"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Bích Lan</b>
        <p className="text-xs md:text-2xl break-all">0911 828 978</p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flex items-center gap-2 md:gap-4 bg-[#184e86] text-white p-2 md:p-6 rounded-xl shadow-md">
      <img
        src="/avt_customer/avt2.webp"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Lê Nghĩa</b>
        <p className="text-xs md:text-2xl break-all">0948 133 600</p>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-2 md:gap-4 py-3 md:py-4">
    
    {/* CARD 3 */}
    <div className="flex items-center gap-2 md:gap-4 bg-[#fcb700] text-white p-2 md:p-6 rounded-xl shadow-md">
      <img
        src="/avt_customer/LanTa.jpg"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Xuân Lan</b>
        <p className="text-xs md:text-2xl break-all">0941 027 800</p>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="flex items-center gap-2 md:gap-4 bg-[#fcb700] text-white p-2 md:p-6 rounded-xl shadow-md">
      <img
        src="/avt_customer/avt2.webp"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Thuận Trần</b>
        <p className="text-xs md:text-2xl break-all">0948 133 600</p>
      </div>
    </div>
  </div>
</section>


      </div>
    </main>
  );
}