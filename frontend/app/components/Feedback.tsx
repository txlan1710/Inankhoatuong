"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1500;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count.toLocaleString()}</div>;
}

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
        "Công ty của tôi luôn tin tưởng vào dịch vụ in ấn của Khoa Tường với công nghệ hiện đại và đội ngũ nhân viên chuyên nghiệp.",
    },
    {
      name: "Tuấn",
      role: "Trưởng phòng",
      img: "/avt_customer/avatar-dep-6.jpg",
      feedback:
        "Hình ảnh rõ nét, màu không bị lệch khi in. Chất lượng đúng như đã cam kết.",
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
        "Luôn an tâm về tiến độ giao hàng. Đội ngũ tư vấn rất nhiệt tình.",
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
    <section >
      <section className="pb-8">
      <div className="bg-gradient-to-r from-[#184e86] to-[#60a5fa] text-white py-10"> 
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/30"> 
        <div className="py-4"> 
          <h3 className="text-3xl md:text-4xl font-bold">
            <Counter target={1200} />
          </h3>
          <p className="text-sm mt-2">KHÁCH HÀNG LỚN - NHỎ</p> 
        </div> 
        <div className="py-4"> 
          <h3 className="text-3xl md:text-4xl font-bold">
            <Counter target={320} />
          </h3>
          <p className="text-sm mt-2">MẪU MÃ ĐẸP VÀ HỢP TREND</p> 
        </div> 
        <div className="py-4"> 
          <h3 className="text-3xl md:text-4xl font-bold">
            <Counter target={7} />
          </h3>
          <p className="text-sm mt-2">KINH NGHIỆM THIẾT KẾ & IN ẤN</p> 
        </div> 
      </div>
      </div>
      </section >
      {/* TITLE */}
      <section className="py-8 md:py-12 bg-gray-100">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-[#184e86]">
        ĐÁNH GIÁ KHÁCH HÀNG
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-1 md:-left-6 z-10 bg-white shadow w-8 h-8 md:w-10 md:h-10 rounded-full"
        >
          ←
        </button>

        {/* CARDS */}
        <div className="flex justify-center gap-3 md:gap-6 w-full px-2 md:px-4">

          {visible.map((item, index) => {
            const isCenter = index === 1;

            return (
              <div
                key={index}
                className={`
                  relative rounded-2xl text-center transition-all duration-500
                  
                  /* MOBILE: chỉ hiện card giữa */
                  ${index !== 1 ? "hidden sm:block" : ""}

                  ${
                    isCenter
                      ? "bg-white p-5 md:p-8 scale-100 md:scale-110 shadow-xl md:shadow-2xl z-10"
                      : "bg-white/70 p-4 md:p-6 scale-95 opacity-70 blur-[1px]"
                  }
                `}
                style={{
                  width: isCenter
                    ? "260px"
                    : "220px",
                }}
              >
                {/* Quote */}
                <div className={`text-2xl md:text-3xl absolute top-3 left-3 ${
                  isCenter ? "text-orange-500" : "text-orange-300"
                }`}>
                  “
                </div>

                {/* Avatar */}
                <img
                  src={item.img}
                  className={`mx-auto mb-3 md:mb-4 object-cover rounded-full border-4 
                  ${
                    isCenter
                      ? "w-16 h-16 md:w-20 md:h-20 border-orange-500"
                      : "w-14 h-14 md:w-16 md:h-16 border-orange-300"
                  }`}
                />

                {/* Name */}
                <p className={`font-bold uppercase mb-1 md:mb-2 text-sm md:text-base ${
                  isCenter ? "text-black" : "text-gray-500"
                }`}>
                  {item.name}
                </p>

                {/* Feedback */}
                <p className={`text-xs md:text-sm mb-2 md:mb-3 line-clamp-4 ${
                  isCenter ? "text-gray-700" : "text-gray-400"
                }`}>
                  {item.feedback}
                </p>

                {/* Role */}
                <p className="text-[10px] md:text-xs text-gray-400">
                  {item.role}
                </p>
              </div>
            );
          })}

        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-1 md:-right-6 z-10 bg-white shadow w-8 h-8 md:w-10 md:h-10 rounded-full"
        >
          →
        </button>
      </div>
    </section>
    </section>
  );
}