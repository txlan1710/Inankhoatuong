import Link from "next/link";

export default function VoucherNamecard() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#184e86] mb-6 text-center">
          In Voucher & Name Card Tại Cà Mau – Thiết Kế Đẹp, Giá Rẻ, Lấy Nhanh
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Trong kinh doanh hiện đại, voucher và name card không chỉ là công cụ
          quảng bá mà còn là yếu tố quan trọng giúp xây dựng hình ảnh thương hiệu
          chuyên nghiệp. Một chiếc name card ấn tượng hay một mẫu voucher được
          thiết kế tinh tế có thể giúp bạn ghi điểm ngay từ lần đầu tiếp xúc với
          khách hàng. Tại Cà Mau, dịch vụ in ấn của chúng tôi cung cấp giải pháp
          in voucher và name card chất lượng cao, giá thành hợp lý, phù hợp cho
          mọi ngành nghề từ quán ăn, spa, salon đến doanh nghiệp lớn.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center mb-12">
          <img src="/imgProduct/Card/namecard-vourcher-inankhoatuong-01.jpg" className="rounded-lg shadow" />
        </div>

        {/* SECTION TITLE */}
        <h2 className="text-2xl font-bold text-[#184e86] mb-8">
        1. Vì Sao Nên In Voucher & Name Card Chuyên Nghiệp?
        </h2>

        <div className="space-y-12">

          {/* ITEM */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/imgProduct/Card/namecard-vourcher-inankhoatuong-02.jpg" className="rounded-lg shadow" />

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Tăng Nhận Diện Thương Hiệu
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Name card là đại diện cho doanh nghiệp khi bạn gặp gỡ khách hàng
                hoặc đối tác. Một thiết kế đẹp, thông tin rõ ràng sẽ giúp khách
                hàng dễ dàng ghi nhớ thương hiệu của bạn. Trong khi đó, voucher
                đóng vai trò như một công cụ marketing hiệu quả, kích thích khách
                hàng quay lại sử dụng dịch vụ.
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Tăng Doanh Thu Hiệu Quả
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Voucher giảm giá, voucher khuyến mãi hay thẻ quà tặng giúp kích
                thích nhu cầu mua sắm và tăng tỷ lệ quay lại của khách hàng.
                Đây là chiến lược marketing đơn giản nhưng mang lại hiệu quả cao
                cho các cửa hàng, quán ăn, spa và doanh nghiệp dịch vụ tại Cà Mau.
              </p>
            </div>

            <img src="/imgProduct/Card/mau-voucher.png" className="rounded-lg shadow" />
          </div>

        </div>

        {/* SECTION */}
        <h2 className="text-2xl font-bold text-[#184e86] mt-12 mb-8">
        2. Các Loại Name Card & Voucher Phổ Biến
        </h2>

        <div className="space-y-12">

          <div className=" items-center">

            <div>
              <h3 className="text-xl font-semibold mb-1">
                Name Card Giấy Cứng Cao Cấp
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Được in trên giấy Couche, Bristol hoặc giấy mỹ thuật cao cấp,
                name card mang lại cảm giác chắc chắn, sang trọng và chuyên nghiệp.
                Phù hợp cho doanh nghiệp, công ty, cá nhân kinh doanh cần tạo ấn tượng mạnh.
              </p>
            </div>
          </div>

          <div className=" items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Voucher Giảm Giá – Khuyến Mãi
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Voucher thường được thiết kế nổi bật với màu sắc bắt mắt,
                giúp thu hút khách hàng ngay từ cái nhìn đầu tiên. Nội dung
                rõ ràng, dễ hiểu sẽ giúp tăng hiệu quả sử dụng và nâng cao
                tỷ lệ chuyển đổi.
              </p>
            </div>

          </div>

          <div className=" items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Name Card Ép Kim – Dập Nổi
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Đây là dòng name card cao cấp với hiệu ứng ép kim vàng, bạc hoặc
                dập nổi, giúp tăng tính thẩm mỹ và tạo sự khác biệt cho thương hiệu.
                Phù hợp với các ngành cao cấp như bất động sản, tài chính, mỹ phẩm.
              </p>
            </div>
          </div>

        </div>
         {/* ===== TITLE ===== */}
  <div className="text-center py-6 md:py-10">
    <h2 className="text-xl md:text-4xl font-bold text-[#184e86]">
      LIÊN HỆ TƯ VẤN
    </h2>
    <div className="w-12 md:w-16 h-1 bg-[#184e86] mx-auto mt-2 md:mt-3"></div>
  </div>

  {/* ===== LIST CONTACT ===== */}
  <div className="grid grid-cols-2 gap-2 md:gap-4">
    <a href='https://zalo.me/0911828978'>
    <div className="flex items-center gap-2 md:gap-4 bg-[#184e86] text-white p-2 md:p-6 rounded-xl shadow-md">
      
      <img
        src="/avt_customer/BichLan.jpg"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Bích Lan</b>
        <p className="text-xs md:text-2xl break-all">0911.828.978</p>
      </div>
      
    </div>
    </a>

    {/* CARD 2 */}
    <a href='https://zalo.me/0948133600'>
    <div className="flex items-center gap-2 md:gap-4 bg-[#184e86] text-white p-2 md:p-6 rounded-xl shadow-md">
      
      <img
        src="/avt_customer/HuuNghia.jpg"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Lê Nghĩa</b>
        <p className="text-xs md:text-2xl break-all">0948.133.600</p>
      </div>
    </div>
    </a>
  </div>
  

  <div className="grid grid-cols-2 gap-2 md:gap-4 py-3 md:py-4">
    
    {/* CARD 3 */}<a href='https://zalo.me/0941027800'>
    <div className="flex items-center gap-2 md:gap-4 bg-[#fcb700] text-white p-2 md:p-6 rounded-xl shadow-md">
      
      <img
        src="/avt_customer/LanTa.jpg"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Xuân Lan</b>
        <p className="text-xs md:text-2xl break-all">0941.027.800</p>
      </div>
    </div>
    </a>

    {/* CARD 4 */}
    <a href='https://zalo.me/0989859415'>
    <div className="flex items-center gap-2 md:gap-4 bg-[#fcb700] text-white p-2 md:p-6 rounded-xl shadow-md">
      
      <img
        src="/avt_customer/ThuanTran.jpg"
        className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
      />
      <div className="min-w-0">
        <b className="text-sm md:text-2xl">Thuận Trần</b>
        <p className="text-xs md:text-2xl break-all">0989.859.415</p>
      </div>
    </div>
    </a>
  </div>


      </div>
    </main>
  );
}