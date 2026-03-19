export default function DecalRider() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* TITLE */}
        <header className="mb-4 sm:mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#184e86] leading-tight">
            In Decal – Rider Thủy Sản Chất Lượng Tại Cà Mau
          </h1>
        </header>

        {/* INTRO */}
        <section className="space-y-4 mb-6">

          <p className="text-base sm:text-lg leading-relaxed indent-4 sm:indent-8">
            Trong quá trình lưu thông từ nhà máy chế biến → kho lạnh → siêu thị →
            người tiêu dùng...
          </p>

          <figure className="flex justify-center">
            <img
              src="/imgs/imgsp.svg"
              alt="Decal thủy sản"
              className="w-full sm:w-[85%] md:w-[75%] rounded-lg object-cover"
            />
          </figure>

        </section>

        {/* IMPORTANCE */}
        <section className="mb-6 sm:mb-8">

          <h2 className="text-xl sm:text-2xl font-bold text-[#184e86] mb-3 sm:mb-4">
            1. Tầm Quan Trọng Của Decal – Rider Trong Ngành Thủy Sản
          </h2>

          <div className="space-y-4 leading-relaxed text-sm sm:text-base">

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                Cung cấp đầy đủ thông tin sản phẩm
              </h3>
              <p className="indent-4 sm:indent-8">
                Tem nhãn thể hiện các thông tin quan trọng...
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                Tăng nhận diện thương hiệu
              </h3>
              <p className="indent-4 sm:indent-8">
                Logo, màu sắc giúp sản phẩm nổi bật...
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                Chống nước – chống bong tróc
              </h3>
              <p className="indent-4 sm:indent-8">
                Decal chịu môi trường lạnh và ẩm tốt.
              </p>
            </div>

          </div>

        </section>

        {/* TYPES */}
        <section className="mb-8 sm:mb-10">

          <h2 className="text-xl sm:text-2xl font-bold text-[#184e86] mb-3 sm:mb-4">
            2. Các Loại Decal Thủy Sản Phổ Biến
          </h2>

          <p className="mb-4 indent-4 sm:indent-8 text-sm sm:text-base">
            Cà Mau là khu vực phát triển mạnh...
          </p>

          <figure className="flex justify-center mb-6">
            <img
              src="/imgs/TemThuySan01.svg"
              className="w-full sm:w-[80%] md:w-[70%] rounded-lg object-cover"
            />
          </figure>

          {/* PVC */}
          <article className="mb-6">

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Decal Nhựa PVC
            </h3>

            <p className="indent-4 sm:indent-8 mb-3 text-sm sm:text-base">
              Decal PVC có độ bền cao...
            </p>

            <figure className="flex justify-center mb-3">
              <img
                src="/imgs/Decal Nhựa PVC.svg"
                className="w-full sm:w-[80%] md:w-[65%] rounded-lg"
              />
            </figure>

            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
              <li>Chống nước tuyệt đối</li>
              <li>Không rách, không phai màu</li>
              <li>Chịu đông lạnh</li>
              <li>Bám dính tốt</li>
            </ul>

          </article>

          {/* PP */}
          <article className="mb-6">

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Decal Nhựa PP
            </h3>

            <p className="indent-4 sm:indent-8 mb-3 text-sm sm:text-base">
              Chi phí thấp hơn PVC nhưng vẫn bền.
            </p>

            <figure className="flex justify-center mb-3">
              <img
                src="/imgs/Decal Nhựa PP.svg"
                className="w-full sm:w-[80%] md:w-[65%] rounded-lg"
              />
            </figure>

          </article>

        </section>

        {/* RIDER */}
        <section className="mb-8 sm:mb-10">

          <h2 className="text-xl sm:text-2xl font-bold text-[#184e86] mb-3 sm:mb-4">
            3. Rider Thủy Sản
          </h2>

          <p className="indent-4 sm:indent-8 mb-4 text-sm sm:text-base">
            Rider là thẻ treo cung cấp thông tin sản phẩm.
          </p>

          <figure className="flex flex-col items-center gap-3 mb-4">
            <img src="/imgs/Rider02.svg" className="w-full sm:w-[70%] md:w-[55%] rounded-lg" />
            <img src="/imgs/TemThuySan02.svg" className="w-full sm:w-[70%] md:w-[55%] rounded-lg" />
          </figure>

        </section>

        {/* WHY */}
        <section className="mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-6 my-8 sm:my-10">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 className="text-lg sm:text-2xl font-semibold text-[#184e86] text-center">
              TẠI SAO NÊN CHỌN CHÚNG TÔI
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <img src="/imgs/RIDER 03.svg" className="w-full sm:w-[80%] md:w-[60%] mx-auto" />
        </section>

        {/* CONTACT */}
        <section className="mt-8 sm:mt-12 text-center bg-gray-50 p-5 sm:p-6 rounded-xl">

          <h2 className="text-xl sm:text-2xl font-bold text-[#184e86] mb-3">
            Liên Hệ Ngay Hôm Nay
          </h2>

          <p className="mb-4 text-sm sm:text-base">
            Hãy liên hệ để được tư vấn miễn phí.
          </p>
          
          <div className="space-y-1 text-base sm:text-lg">
            <p>📞 0948 133 600 - 0911 828 978</p>
            <p>📧 lenghiabaobi@gmail.com</p>
            <p>📍 26B Huỳnh Thúc Kháng, TP Cà Mau</p>
          </div>

        </section>

      </div>
    </main>
  );
}