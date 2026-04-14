import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#E9EDF0] text-secondary py-5 md:py-10 px-2 md:px-8">
      <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-7xl mx-auto">
        
        {/* CỘT 1 */}
        <div>
          <h3 className="font-semibold text-xs md:text-lg mb-1">THÔNG TIN</h3>
          <div className="w-8 md:w-12 h-[2px] md:h-[3px] bg-black mb-2"></div>

          <h3 className="text-[10px] md:text-lg font-bold mb-2 md:mb-4 leading-tight">
            CTY TNHH SX & TM KHOA TƯỜNG CÀ MAU
          </h3>

          <ul className="space-y-1 text-[10px] md:text-base leading-tight">
            <li>☎ 0948 133 600</li>
            <li className="truncate">📬 lenghiabaobi@gmail.com</li>
            <li className="leading-tight">
              📌 26B Huỳnh Thúc Kháng, Cà Mau
            </li>
          </ul>

          <ul className="pt-2 md:pt-5 text-[10px] md:text-base">
            <li><strong>Giờ:</strong></li>
            <li>07:00 - 17:00</li>
          </ul>
        </div>

        {/* CỘT 2 */}
        <div>
          <h3 className="font-semibold text-xs md:text-lg mb-1">DANH MỤC</h3>
          <div className="w-8 md:w-12 h-[2px] md:h-[3px] bg-black mb-2"></div>

          <ul className="space-y-1 text-[10px] md:text-base">
            <li><a href="/Decal_Rider" className="hover:text-[#3dbeb3]">Decal</a></li>
            <li><a href="/Khayxop" className="hover:text-[#3dbeb3]">Khay xốp</a></li>
            <li><a href="/Bangkeo" className="hover:text-[#3dbeb3]">Túi PA PE</a></li>
            <li><a href="/PA_PE" className="hover:text-[#3dbeb3]">Tem nhãn</a></li>
            <li><a href="/InBac" className="hover:text-[#3dbeb3]">In bạt</a></li>
            <li><a href="/Menu" className="hover:text-[#3dbeb3]">Menu</a></li>
          </ul>
        </div>

        {/* CỘT 3 */}
        <div>
          <h3 className="font-semibold text-xs md:text-lg mb-1">KẾT NỐI</h3>
          <div className="w-8 md:w-12 h-[2px] md:h-[3px] bg-black mb-2"></div>

          <div className="flex items-center gap-2">
            <a href="mailto:lenghiabaobi@gmail.com">
              <SiGmail size={16} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584416163439">
              <FaFacebook size={16} />
            </a>
          </div>

          <div className="w-full h-[120px] md:h-[300px] rounded overflow-hidden mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8067288493157!2d105.1517394!3d9.1719001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a149000aa8863b%3A0x29c7ebb32c2061e0!2zQ8OUTkcgVFkgVE5ISCBTWCAmIFRNIEtIT0EgVMaw4bucTkc!5e0!3m2!1svi!2s!4v1775529391655!5m2!1svi!2s"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </footer>
  );
}