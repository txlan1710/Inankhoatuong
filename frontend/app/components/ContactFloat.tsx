import { FaPhoneAlt } from "react-icons/fa";

export default function ContactFloat() {
  return (
    <div className="fixed bottom-16 right-3 z-50 flex flex-col gap-3">
      
      {/* Zalo */}
      <a
        href="https://zalo.me/0948133600"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center md:animate-bounce hover:scale-110 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Zalo"
          className="w-7 h-7 md:w-8 md:h-8"
        />
      </a>
        
      {/* Phone */}
      <a
        href="tel:0948133600"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full text-[#184e86] shadow-lg flex items-center justify-center text-xl md:text-2xl md:animate-pulse hover:scale-110 transition"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
}