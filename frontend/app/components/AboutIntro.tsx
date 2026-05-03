import ProductCategories from "./ProductCategories";

export default function Introduction() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* Intro */}
      <section className="py-10 bg-secondary max-w-7xl mx-auto px-4 md:px-6">
          <div className="">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-[#184e86] mb-6">
              CÔNG TY TNHH SX & TM KHOA TƯỜNG CÀ MAU
            </h1>

            <p className="leading-7 text-gray-700 mb-4 text-sm md:text-base">
              <strong>Khoa Tường Cà Mau </strong>là đơn vị chuyên cung cấp giải pháp in ấn và vật tư đóng gói 
              cho ngành thủy sản, với thế mạnh nổi bật trong lĩnh vực in <strong> decal nhựa và decal trong </strong>
              chất lượng cao. Sản phẩm của chúng tôi được thiết kế tối ưu cho môi trường đông lạnh, 
              có khả năng chịu nhiệt độ xuống đến -36°C, độ bám dính cao, không bong tróc, phù hợp 
              cho khay, túi PE, thùng hàng và các ứng dụng bảo quản thực phẩm khắt khe.
            </p>

            <p className="leading-7 text-gray-700 mb-4 text-sm md:text-base">
              Không chỉ dừng lại ở decal, chúng tôi còn cung cấp đa dạng các sản phẩm như 
              decal giấy, rider thủy sản, in túi PE - PA, khay xốp, card visit và catalogue, 
              đáp ứng trọn gói nhu cầu từ nhận diện thương hiệu đến đóng gói sản phẩm. 
              Mỗi sản phẩm đều được kiểm soát chặt chẽ từ chất liệu đến quy trình in ấn, 
              đảm bảo tính thẩm mỹ, độ bền và hiệu quả sử dụng thực tế.
            </p>

            <p className="leading-7 text-gray-700 text-sm md:text-base">
              Với kinh nghiệm thực tiễn trong ngành cùng sự am hiểu sâu sắc về điều kiện bảo quản 
              và vận chuyển thủy sản, <strong> Khoa Tường Cà Mau </strong> không ngừng đầu tư công nghệ hiện đại, cải tiến 
              quy trình sản xuất nhằm nâng cao chất lượng và tối ưu chi phí cho khách hàng. 
              Chúng tôi hướng đến việc trở thành đối tác tin cậy, đồng hành lâu dài, góp phần 
              nâng tầm giá trị thương hiệu và hiệu quả kinh doanh cho doanh nghiệp.
            </p>

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