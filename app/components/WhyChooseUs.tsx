const reasons = [
  'Công nghệ in hiện đại, chất lượng cao.',
  'Giao hàng nhanh, phục vụ 24/7.',
  'Giá cả cạnh tranh, tư vấn miễn phí.',
  'Chuyên biệt cho ngành thủy sản.',
];

export default function WhyChooseUs() {
  return (
    <section className="py-6 md:py-10 px-3 md:px-6 bg-secondary max-w-7xl mx-auto">
      {/* ===== TITLE ===== */}
      <div className="text-center py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#184e86]">
          LÝ DO CHỌN CHÚNG TÔI
        </h2>
        <div className="w-16 h-1 bg-[#184e86] mx-auto mt-3"></div>
      </div>
      <img src="/imgs/RIDER 03.svg" className="mx-auto w-full md:w-[90%] h-auto"></img>
    </section>
  );
}