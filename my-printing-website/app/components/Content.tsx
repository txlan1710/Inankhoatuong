export default function Content() {
  return (
    <section className="py-6 md:py-10 bg-primary text-secondary max-w-7xl mx-auto px-3 md:px-0">
      <h2 className="text-xl md:text-3xl font-bold text-center text-[#184e86] mb-6 md:mb-10">HỆ THỐNG IN KTS CHUYÊN NGHIỆP</h2>
      <div className="w-full">
        <img
          src="/imgs/HỆ THỐNG MÁY IN FLEXO HIỆN ĐẠI.svg"
          className="w-full h-auto"
          alt=""
        />

        <div className="img_inner flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-6 mt-4 md:mt-6">
          <img src="/imgs/1.svg" className="w-[45%] md:w-auto" />
          <img src="/imgs/2.svg" className="w-[45%] md:w-auto" />
          <img src="/imgs/3.svg" className="w-[45%] md:w-auto" />
          <img src="/imgs/4.svg" className="w-[45%] md:w-auto" />
        </div>
      </div>
    </section>
  );
}