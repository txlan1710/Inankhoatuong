const reasons = [
  'Công nghệ in hiện đại, chất lượng cao.',
  'Giao hàng nhanh, phục vụ 24/7.',
  'Giá cả cạnh tranh, tư vấn miễn phí.',
  'Chuyên biệt cho ngành thủy sản.',
];

export default function WhyChooseUs() {
  return (
    <section className="py-6 md:py-10 px-3 md:px-6 bg-secondary max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-center text-[#184e86] text-dark mb-4 md:mb-5">Lý Do Chọn Chúng Tôi</h2>
      <img src="/imgs/RIDER 03.svg" className="mx-auto w-full md:w-[90%] h-auto"></img>
    </section>
  );
}