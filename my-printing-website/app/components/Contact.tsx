"use client";

import { useState } from "react";

export default function LienHe() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
      });

    } catch (error) {
      alert("Lỗi kết nối server");
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

            <div className="mt-4 rounded-xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Cà Mau&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[200px] md:h-[250px] border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-sm">

            <div className="space-y-3 md:space-y-4">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Họ và tên (*)"
                className="w-full border-b outline-none py-2 text-sm md:text-base bg-transparent focus:border-[#184e86]"
              />

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Điện thoại (*)"
                className="w-full border-b outline-none py-2 text-sm md:text-base bg-transparent focus:border-[#184e86]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email (*)"
                className="w-full border-b outline-none py-2 text-sm md:text-base bg-transparent focus:border-[#184e86]"
              />

              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Địa chỉ"
                className="w-full border-b outline-none py-2 text-sm md:text-base bg-transparent focus:border-[#184e86]"
              />

              <button
                onClick={handleSubmit}
                className="bg-[#184e86] hover:bg-[#123a66] text-white px-5 md:px-6 py-2 text-sm md:text-base rounded-md mt-2 w-full md:w-auto"
              >
                GỬI
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}