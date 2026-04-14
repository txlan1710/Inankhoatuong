
"use client";
import { useState } from "react";

export default function CustomerSection() {
  const [current, setCurrent] = useState(0);

  const customers = [
    {
      name: "Chị Phương",
      role: "Chủ công ty Thủy Sản",
      img: "/avt_customer/avatar-dep-6.jpg",
      feedback:
        "In tem nhãn ở nhiều chỗ rồi, nhưng Khoa Tường là nơi đầu tiên làm đúng màu và không làm mình chờ quá lâu. Rất ổn!",
    },
    {
      name: "Trang",
      role: "Freelancer thiết kế",
      img: "/avt_customer/avatar-dep-6.jpg",
      feedback:
        "Công ty của tôi luôn tin tưởng vào dịch vụ in ấn của Khoa Tường với công nghệ hiện đại và đội ngũ nhân viên chuyên nghiệp. Mỗi sản phẩm không chỉ đẹp về hình thức mà còn mang lại hiệu quả sử dụng lâu dài.",
    },
    {
      name: "Tuấn",
      role: "Trưởng phòng",
      img: "/avt_customer/avatar-dep-6.jpg",
      feedback:
        "Hình ảnh rõ nét, màu không bị lệch khi in. Chất lượng đúng như đã cam kết. Khi đặt in ở Khoa Tường luôn làm tôi yên tâm",
    },
    {
      name: "Thảo",
      role: "Giám đốc",
      img: "/avt_customer/avatar-dep-6.jpg",
      feedback:
        "In lần đầu mà ưng liền, từ chất lượng tới cách hỗ trợ đều okela!",
    },
    {
      name: "Trâm",
      role: "Nhân viên",
      img: "/avt_customer/avatar-dep-6.jpg",
      feedback:
        "Khi đặt in ở Khoa Tường tôi luôn an tâm về tiến độ giao hàng. Đội ngũ tư vấn và thiết kế luôn rất nhiệt tình.",
    },
  ];

  const visible = [
  customers[current % customers.length],
  customers[(current + 1) % customers.length],
  customers[(current + 2) % customers.length],
];

  const next = () => {
  setCurrent((prev) => (prev + 1) % customers.length);
};

const prev = () => {
  setCurrent((prev) =>
    prev === 0 ? customers.length - 1 : prev - 1
  );
};
  return (
    <section className="py-12 bg-gray-100">

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold mb-10 text-[#184e86]">
        ĐÁNH GIÁ KHÁCH HÀNG
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute -left-6 z-10 bg-white shadow w-10 h-10 rounded-full"
        >
          ←
        </button>

        {/* CARDS */}
        <div className="flex justify-center gap-6 w-full px-4">

          {visible.map((item, index) => {
            const isCenter = index === 1;

            return (
              <div
                key={index}
                className={`relative rounded-2xl text-center transition-all duration-500
                ${
                  isCenter
                    ? "bg-white p-8 scale-110 shadow-2xl z-10"
                    : "bg-white/60 p-6 scale-95 opacity-50 blur-[1px]"
                }`}
                style={{ width: "300px" }}
              >
                {/* Quote */}
                <div
                  className={`text-3xl absolute top-4 left-4 ${
                    isCenter ? "text-orange-500" : "text-orange-300"
                  }`}
                >
                  “
                </div>

                {/* Avatar */}
                <img
                  src={item.img}
                  className={`mx-auto mb-4 object-cover rounded-full border-4 
                  ${
                    isCenter
                      ? "w-20 h-20 border-orange-500"
                      : "w-16 h-16 border-orange-300"
                  }`}
                />

                {/* Name */}
                <p
                  className={`font-bold uppercase mb-2 ${
                    isCenter ? "text-black" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </p>

                {/* Feedback */}
                <p
                  className={`text-sm mb-3 ${
                    isCenter ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {item.feedback}
                </p>

                {/* Role */}
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            );
          })}

        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute -right-6 z-10 bg-white shadow w-10 h-10 rounded-full"
        >
          →
        </button>
      </div>

    </section>
  );
}