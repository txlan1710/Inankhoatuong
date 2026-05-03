import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Pa_Pe_Content";
import ContactFloat from '../components/ContactFloat';
import { Nunito } from "next/font/google";
import type { Metadata } from "next";


const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In Lụa Trên Túi Theo Yêu Cầu Tại Cà Mau | In Ấn Khôi Tường",
  description:
    "Dịch vụ in lụa trên túi PE, PA, túi nilon tại Cà Mau. In logo, thương hiệu sắc nét, giá rẻ, hỗ trợ thiết kế miễn phí.",
  keywords: [
    "in túi nilon Cà Mau",
    "in túi PE PA",
    "in lụa trên túi",
    "in túi hột xoài",
    "in bao bì thủy sản",
    "in túi giá rẻ",
  ],
  openGraph: {
    title: "In Lụa Trên Túi Theo Yêu Cầu",
    description:
      "Chuyên in túi nilon, túi PE/PA, túi hột xoài tại Cà Mau. In nhanh, giá rẻ, hỗ trợ thiết kế.",
    url: "https://inankhoatuong.vn/in-tui",
    siteName: "In Ấn Khôi Tường",
    images: [
      {
        url: "/imgs/Túi/TuiXoai05.jpg",
        width: 1200,
        height: 630,
        alt: "In lụa trên túi tại Cà Mau",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://inankhoatuong.vn/in-tui",
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