import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Decal_Content";
import ContactFloat from '../components/ContactFloat';
import { Nunito } from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://inankhoatuong.vn"),

  title: "In tem nhãn giá rẻ tại Cà Mau | In ấn Khoa Tường",

  description:
    "Dịch vụ in tem nhãn theo yêu cầu tại Cà Mau. In decal giấy, nhựa, tem chống nước, tem bể, tem xi vàng bạc giá rẻ, giao nhanh.",

  keywords: [
    "in tem nhãn Cà Mau",
    "in decal giá rẻ",
    "tem nhãn sản phẩm",
    "in tem chống nước",
    "in decal thủy sản",
    "in tem Cà Mau",
  ],

  openGraph: {
    title: "In tem nhãn giá rẻ tại Cà Mau",
    description:
      "Chuyên in tem nhãn, decal, tem chống nước, tem sản phẩm giá rẻ tại Cà Mau.",
    url: "https://inankhoatuong.vn",
    siteName: "In Ấn Khoa Tường",

    images: [
      {
        url: "/Ten-Nhan-Ca-Mau.png", // đặt trong public
        width: 1200,
        height: 630,
        alt: "In tem nhãn tại Cà Mau",
      },
    ],

    locale: "vi_VN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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