export default function ContactInfo() {
  return (
    <section className="">
  {/* ===== TITLE ===== */}
        <div className="max-w-7xl mx-auto">
        <div className="text-center py-6 md:py-10">
            <h2 className="text-xl md:text-4xl font-bold text-[#184e86]">
            LIÊN HỆ TƯ VẤN
            </h2>
            <div className="w-12 md:w-16 h-1 bg-[#184e86] mx-auto mt-2 md:mt-3"></div>
        </div>

        {/* ===== LIST CONTACT ===== */}
        <div className="grid grid-cols-2 gap-2 md:gap-4">
            <a href='https://zalo.me/0941027800'>
            <div className="flex items-center gap-2 md:gap-4 bg-[#184e86] text-white p-2 md:p-6 rounded-xl shadow-md">
            
            <img
                src="/avt_customer/BichLan.jpg"
                className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
            />
            <div className="min-w-0">
                <b className="text-sm md:text-2xl">Bích Lan</b>
                <p className="text-xs md:text-2xl break-all">0911.828.978</p>
            </div>
            
            </div>
            </a>

            {/* CARD 2 */}
            <a href='https://zalo.me/0948133600'>
            <div className="flex items-center gap-2 md:gap-4 bg-[#184e86] text-white p-2 md:p-6 rounded-xl shadow-md">
            
            <img
                src="/avt_customer/HuuNghia.jpg"
                className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
            />
            <div className="min-w-0">
                <b className="text-sm md:text-2xl">Lê Nghĩa</b>
                <p className="text-xs md:text-2xl break-all">0948.133.600</p>
            </div>
            </div>
            </a>
        </div>
        

        <div className="grid grid-cols-2 gap-2 md:gap-4 py-3 md:py-4">
            
            {/* CARD 3 */}<a href='https://zalo.me/0941027800'>
            <div className="flex items-center gap-2 md:gap-4 bg-[#fcb700] text-white p-2 md:p-6 rounded-xl shadow-md">
            
            <img
                src="/avt_customer/LanTa.jpg"
                className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
            />
            <div className="min-w-0">
                <b className="text-sm md:text-2xl">Xuân Lan</b>
                <p className="text-xs md:text-2xl break-all">0941.027.800</p>
            </div>
            </div>
            </a>

            {/* CARD 4 */}
            <a href='https://zalo.me/0989859415'>
            <div className="flex items-center gap-2 md:gap-4 bg-[#fcb700] text-white p-2 md:p-6 rounded-xl shadow-md">
            
            <img
                src="/avt_customer/ThuanTran.jpg"
                className="w-14 h-14 md:w-36 md:h-36 rounded-full object-cover"
            />
            <div className="min-w-0">
                <b className="text-sm md:text-2xl">Thuận Trần</b>
                <p className="text-xs md:text-2xl break-all">0989.859.415</p>
            </div>
            </div>
            </a>
        </div>
        </div>
        </section>
  );
}