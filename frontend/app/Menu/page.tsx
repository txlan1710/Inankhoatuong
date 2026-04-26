import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Menu_Content";
import ContactFloat from '../components/ContactFloat';
import { Nunito } from "next/font/google";
import type { Metadata } from "next";


const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In Menu Đẹp Giá Rẻ Tại Cà Mau | In Ấn Khôi Tường",
  description:
    "Dịch vụ in menu đẹp, giá rẻ tại Cà Mau. Nhận thiết kế và in menu ép plastic, menu bìa cứng, menu quán ăn, cafe, trà sữa chuyên nghiệp.",
  keywords: [
    "in menu Cà Mau",
    "in menu quán ăn",
    "in menu cafe",
    "menu ép plastic",
    "menu bìa cứng",
    "in menu giá rẻ",
  ],
  openGraph: {
    title: "In Menu Đẹp Và Rẻ Tại Cà Mau",
    description:
      "Chuyên in menu quán ăn, cafe, trà sữa tại Cà Mau. Thiết kế đẹp, in nhanh, giá rẻ.",
    url: "https://inankhoatuong.vn/in-menu",
    siteName: "In Ấn Khôi Tường",
    images: [
      {
        url: "/imgs/Menu/Menu01.svg",
        width: 1200,
        height: 630,
        alt: "In menu đẹp tại Cà Mau",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};
export default function Introduction() {
  return (
    <div className={`min-h-screen bg-secondary ${nunito.className}`}>
      <Header />
      <Content />
      <Footer />
      <ContactFloat />
    </div>
  );
}