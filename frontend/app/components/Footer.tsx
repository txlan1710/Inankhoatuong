import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#E9EDF0] text-secondary py-8 md:py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        <div>
          <h3 className="font-semibold text-base md:text-lg mb-1">THÔNG TIN CHUNG</h3>
          <div className="w-12 h-[3px] bg-black mb-3"></div>
          <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">CTY TNHH SX & TM KHOA TƯỜNG CÀ MAU</h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
            <li>☎ <strong>Hotline:</strong> 0948 133 600 - 0911 828 978</li>
            <li>📬 <strong>Email:</strong> lenghiabaobi@gmail.com</li>
            <li className="leading-6">📌 <strong>Địa chỉ:</strong> Số 26B, đường Huỳnh Thúc Kháng, khóm 7, Phường Hòa Thành, Tỉnh Cà Mau.</li>
          </ul>
          <ul className="space-y-1 md:space-y-2 pt-4 md:pt-5 text-sm md:text-base">
            <li><strong>Giờ làm việc:</strong></li>
            <li>Từ 07:00 đến 17:00</li>
            <li>Từ thứ 2 đến thứ CN</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base md:text-lg mb-1">DANH MỤC</h3>
          <div className="w-12 h-[3px] bg-black mb-3"></div>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
            <li><a href="/Decal_Rider" className="hover:text-[#3dbeb3]">In Decal - Rider thủy sản</a></li>
            <li><a href="/Khayxop" className="hover:text-[#3dbeb3]">Khay xốp</a></li>
            <li><a href="/Bangkeo" className="hover:text-[#3dbeb3]">In túi PA PE</a></li>
            <li><a href="/PA_PE" className="hover:text-[#3dbeb3]">Decal - Tem nhãn</a></li>
            <li><a href="/InBac" className="hover:text-[#3dbeb3]">In bạt - Decal khổ lớn</a></li>
            <li><a href="/Menu" className="hover:text-[#3dbeb3]">Menu</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base md:text-lg mb-1">KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className="w-12 h-[3px] bg-black mb-3"></div>
          <div className="flex items-center gap-3 md:gap-2">
            <a href="mailto:lenghiabaobi@gmail.com">
              <SiGmail size={22} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584416163439&locale=vi_VN">
              <FaFacebook size={22} className="md:mr-2"/>
            </a>
            <a href="mailto:lenghiabaobi@gmail.com">
              <SiGmail size={22} />
            </a>
          </div>
          <div className="w-full h-[300px] md:h-auto rounded overflow-hidden py-5">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8067288493157!2d105.1517394!3d9.1719001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a149000aa8863b%3A0x29c7ebb32c2061e0!2zQ8OUTkcgVFkgVE5ISCBTWCAmIFRNIEtIT0EgVMaw4bucTkc!5e0!3m2!1svi!2s!4v1775529391655!5m2!1svi!2s"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </footer>
  );
}