"use client";

import { useState } from "react";

export default function LienHe() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "In Tem Nhãn",
  });

  // ✅ thêm state popup
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

  // ✅ luôn hiện popup
  setShowSuccess(true);

  // (tuỳ chọn) reset form luôn
  setForm({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "In Tem Nhãn",
  });

  // 👉 nếu bạn vẫn muốn gọi API thì để dưới (không ảnh hưởng UI)
  try {
    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("API lỗi (bỏ qua):", error);
  }
};

  return (
    <main className="w-full bg-white text-gray-800">

      <section className="relative h-[180px] md:h-[220px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[#184e86]/80"></div>

        <div className="relative text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Liên Hệ
          </h1>
          <p className="text-xs md:text-sm opacity-90">
            CÔNG TY TNHH IN ẤN KHOA TƯỜNG CÀ MAU
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* LEFT */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-[#184e86]">
              CÔNG TY TNHH IN ẤN KHOA TƯỜNG CÀ MAU
            </h2>

            <div className="space-y-2 text-xs md:text-sm">
              <p>📍 26B Huỳnh Thúc Kháng, TP Cà Mau</p>
              <p>📞 0948 133 600 - 0911 828 978</p>
              <p>📧 lenghiabaobi@gmail.com</p>
              <p>🌐 inankhoatuong.com</p>
            </div>

            <div className="w-full h-[120px] md:h-[300px] rounded overflow-hidden mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8067288493157!2d105.1517394!3d9.1719001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a149000aa8863b%3A0x29c7ebb32c2061e0!2zQ8OUTkcgVFkgVE5ISCBTWCAmIFRNIEtIT0EgVMaw4bucTkc!5e0!3m2!1svi!2s!4v1775529391655!5m2!1svi!2s"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-sm">
            <div className="space-y-3 md:space-y-4">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Họ và tên (*)"
                className="w-full border-b outline-none py-2 bg-transparent"
              />

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Điện thoại (*)"
                className="w-full border-b outline-none py-2 bg-transparent"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email (*)"
                className="w-full border-b outline-none py-2 bg-transparent"
              />

              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Địa chỉ"
                className="w-full border-b outline-none py-2 bg-transparent"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border-b outline-none py-2 bg-transparent"
              >
                <option>In Tem Nhãn</option>
                <option>Khay Xốp</option>
                <option>Băng Keo</option>
                <option>In Túi</option>
                <option>In Bạt</option>
                <option>In Menu</option>
              </select>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#184e86] hover:bg-[#123a66] text-white px-6 py-2 rounded-md w-full"
              >
                Liên Hệ
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ✅ POPUP */}
      {showSuccess && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowSuccess(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 text-center max-w-sm w-full mx-4"
          >
            <h3 className="text-xl font-bold text-[#184e86] mb-3">
              🎉 Thành công!
            </h3>

            <p className="text-gray-700 mb-4">
              Cảm ơn bạn đã để lại thông tin.<br />
              Chúng tôi sẽ liên hệ sớm với bạn!
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#184e86] text-white px-5 py-2 rounded"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

    </main>
  );
}