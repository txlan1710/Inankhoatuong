const reasons = [
  'Công nghệ in hiện đại, chất lượng cao.',
  'Giao hàng nhanh, phục vụ 24/7.',
  'Giá cả cạnh tranh, tư vấn miễn phí.',
  'Chuyên biệt cho ngành thủy sản.',
];

export default function WhyChooseUs() {
  return (
    <section >
      {/* Commitment */}
      <section className="bg-[#184e86] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-16 text-center">
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            Cam kết của chúng tôi
          </h2>

          <p className="max-w-2xl md:max-w-3xl mx-auto 
            text-base md:text-lg 
            text-white/90 
            leading-relaxed md:leading-7">
            
            <strong>Khoa Tường Cà Mau</strong> cam kết cung cấp sản phẩm đúng{" "}
            <strong>CHẤT LƯỢNG – ĐÚNG SỐ LƯỢNG – ĐÚNG TIẾN ĐỘ</strong> đồng hành
            lâu dài cùng sự phát triển của khách hàng.
            
          </p>

        </div>
      </section>
      {/* ===== TITLE ===== */}
      <section className="py-6 md:py-10 bg-secondary max-w-7xl mx-auto px-3 md:px-0">
      <div className="text-center py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#184e86]">
          LÝ DO CHỌN CHÚNG TÔI
        </h2>
        <div className="w-16 h-1 bg-[#184e86] mx-auto mt-3"></div>
      </div>
      <img src="/imgs/RIDER 03.svg" className="mx-auto w-full md:w-[100%] h-auto"></img>
      </section>
    </section>
  );
}