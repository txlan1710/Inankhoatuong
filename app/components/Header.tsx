import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

export default function Header() {
  return (
    <header className="shadow-md  sticky top-0 z-50 bg-white">
      <div className="py-2 md:py-3 bg-secondary max-w-7xl mx-auto px-2 md:px-4">
        <img src="/HeaderAbout.svg" className="w-full h-auto object-contain" />
      </div>

      <div className='bg-[#184e86]'>
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center py-2 px-2 md:px-4">

          {/* Menu */}
          <nav className="flex md:flex justify-around md:space-x-6 lg:space-x-10 w-full md:w-auto text-center">
            <Link href="/" className="text-white hover:text-[#f5f107] transition-colors font-bold text-xs md:text-sm lg:text-lg">
              Trang Chủ
            </Link>

            <Link href="/product" className="text-white hover:text-[#f5f107] transition-colors font-bold text-xs md:text-sm lg:text-lg">
              Sản Phẩm
            </Link>

            <Link href="/introduction" className="text-white hover:text-[#f5f107] transition-colors font-bold text-xs md:text-sm lg:text-lg">
              Giới Thiệu
            </Link>

            <Link href="/Contacts" className="text-white hover:text-[#f5f107] transition-colors font-bold text-xs md:text-sm lg:text-lg">
              Liên Hệ
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}