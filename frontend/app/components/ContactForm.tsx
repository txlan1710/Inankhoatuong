"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "In Tem Nhãn",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(form); 
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
        service: "In Tem Nhãn",
      });

    } catch (error) {
      alert("Lỗi kết nối server");
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#184e86] via-[#1f6fd1] to-[#38bdf8] text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-4 py-10">

        {/* LEFT - FORM */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            ĐĂNG KÝ TƯ VẤN
          </h2>

          <p className="text-base mb-3">
            Liên hệ ngay để nhận ưu đãi & tư vấn thiết kế sản phẩm ngay
          </p>

          <p className="text-base mb-1">📞 0948 133 600 - 0911 828 978</p>
          <p className="text-base mb-4">✉️ lenghiabaobi@gmail.com</p>

          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="p-3 rounded text-black bg-white outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="p-3 rounded text-black bg-white outline-none"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Điện thoại"
              className="p-3 rounded text-black bg-white outline-none"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="p-3 rounded text-black bg-white outline-none"
            >
              <option>In Tem Nhãn</option>
              <option>Khay Xốp</option>
              <option>Băng Keo</option>
              <option>In Túi</option>
              <option>In Bạt</option>
              <option>In Menu</option>
            </select>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition"
          >
            ĐĂNG KÝ NGAY
          </button>
          

          <p className="text-base mt-3">
            Xưởng in Khoa Tường là đơn vị in ấn uy tín tại Cà Mau
          </p>
        </div>

        {/* RIGHT */}
        <img
          src="/imgform.png"
          alt="form"
          className="w-full h-full object-cover rounded"
        />

      </div>

    </section>
  );
}