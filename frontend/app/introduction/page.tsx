import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutIntro from "../components/AboutIntro"
import ContactFloat from '../components/ContactFloat';
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Title nên chứa Tên Công Ty + Dịch vụ chính + Địa danh
  title: 'Khoa Tường Cà Mau | In Ấn Tem Nhãn & Vật Tư Đóng Gói Thủy Sản',
  
  // Description cần tóm tắt uy tín, cam kết và danh mục sản phẩm chính
  description: 'Công ty Khoa Tường Cà Mau chuyên cung cấp giải pháp in ấn tem nhãn, decal chống nước, khay xốp, băng keo chuyên dụng cho ngành thủy sản. Cam kết chất lượng, đúng tiến độ tại Cà Mau.',
  
  // Keywords tập trung vào uy tín thương hiệu và khu vực
  keywords: [
    'khoa tường cà mau', 
    'in ấn cà mau', 
    'tem nhãn thủy sản cà mau', 
    'vật tư đóng gói cà mau',
    'công ty in ấn khoa tường'
  ],

  // Cấu trúc OpenGraph để khi gửi link qua Zalo/Facebook sẽ hiện ảnh và mô tả đẹp
  openGraph: {
    title: 'Khoa Tường Cà Mau - Giải Pháp In Ấn & Đóng Gói Chuyên Nghiệp',
    description: 'Đơn vị uy tín chuyên decal, tem nhãn, băng keo, khay xốp cho ngành thủy sản tại Cà Mau.',
    url: 'https://inankhoatuong.vn',
    siteName: 'In Ấn Khoa Tường',
    images: [
      {
        url: 'Logo-In-An-Khoa-Tuong.png', // Bạn nên tạo 1 file ảnh thực tế xưởng hoặc logo
        width: 600,
        height: 600,
        alt: 'Công ty TNHH SX & TM Khoa Tường Cà Mau',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};
export default function Introduction() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <AboutIntro />
      <Footer />
      <ContactFloat />
    </div>
  );
}