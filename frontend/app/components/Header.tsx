import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md  sticky top-0 z-50 bg-white">
      {/* <div className="py-2 md:py-3 bg-secondary max-w-7xl mx-auto px-2 md:px-4">
        <Image src="/HeaderAbout.svg"  width={1265} height={132} alt="demo" />
      </div> */}
      <div className="bg-gray-100 border-b">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

    {/* LEFT: Logo */}
    <div className="flex-shrink-0">
      <Image
        src="/favicon.ico"
        alt="logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>

    {/* CENTER: Company */}
    <div className="flex-1 text-center px-4">
      <h1 className="font-bold text-[#184e86] text-2xl md:text-3xl lg:text-4xl">
        CTY TNHH SX & TM KHOA TƯỜNG CÀ MAU
      </h1>

      <p className="text-gray-600 text-sm md:text-xl lg:text-2xl">
        📍 Số 26b, đường Huỳnh Thúc Kháng, khóm 7, Phường Hòa Thành, Tỉnh Cà Mau
      </p>
    </div>

    {/* RIGHT: Phone */}
    <div className="text-right hidden md:block flex-shrink-0">
      <p className="text-[#184e86] font-bold text-sm md:text-xl lg:text-2xl">
        📞 0948.133.600
      </p>
      <p className="text-[#184e86] font-bold text-sm md:text-xl lg:text-2xl">
        0911.828.978
      </p>
    </div>

  </div>
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