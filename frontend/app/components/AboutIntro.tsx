import ImageSlider from "./ImageSlider";
import ProductCategories from "./ProductCategories";

export default function Partners() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* Intro */}
      <section className="py-10 bg-secondary max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#184e86] mb-4">
              Công ty TNHH SX & TM <br />Khoa Tường Cà Mau
            </h2>
              
            <p className="leading-7 text-gray-700 mb-4 text-sm md:text-base">
              <strong>Khoa Tường </strong>
              là đơn vị uy tín chuyên cung cấp giải pháp in ấn tem nhãn, decal,
              barcode và vật tư đóng gói cho ngành thủy sản tại Cà Mau và các tỉnh
              lân cận.
            </p>

            <p className="leading-7 text-gray-700 text-sm md:text-base">
              Với kinh nghiệm thực tế và sự am hiểu sâu về môi trường đông lạnh,
              chúng tôi không ngừng đầu tư công nghệ, nâng cao chất lượng sản phẩm
              nhằm mang đến giá trị bền vững cho khách hàng.
            </p>

          </div>

          <ImageSlider />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-secondary max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-center md:text-left">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184e86] mb-2">
              SỨ MỆNH
            </h2>
            <p className="text-sm md:text-base leading-7">
              Mang đến cho khách hàng những sản phẩm tem nhãn, decal, băng keo,
              dây đai và khay xốp đạt tiêu chuẩn, phù hợp môi trường đông lạnh,
              góp phần nâng cao giá trị thương hiệu và hiệu quả kinh doanh của
              doanh nghiệp.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184e86] mb-2">
              TẦM NHÌN
            </h2>
            <p className="text-sm md:text-base leading-7">
              Trở thành doanh nghiệp cung cấp tem nhãn và vật tư đóng gói thủy
              sản hàng đầu tại Cà Mau, được khách hàng tin tưởng lựa chọn nhờ
              chất lượng ổn định và dịch vụ chuyên nghiệp.
            </p>
          </div>

        </div>
      </section>

      <ProductCategories />

      {/* Commitment */}
      <section className="bg-[#184e86] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Cam kết của chúng tôi
          </h2>

          <p className="max-w-3xl mx-auto text-sm md:text-lg text-white/90 leading-7 leading-relaxed">
            <strong>Khoa Tường Cà Mau</strong> cam kết cung cấp sản phẩm đúng{" "}
            <strong>CHẤT LƯỢNG – ĐÚNG SỐ LƯỢNG – ĐÚNG TIẾN ĐỘ</strong> đồng hành
            lâu dài cùng sự phát triển của khách hàng.
          </p>
        </div>
      </section>

    </main>
  );
}