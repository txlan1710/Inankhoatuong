import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/HopGiay_Content";

import { Nunito } from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In Hộp Giấy Cà Mau – Thiết Kế & In Bao Bì Giá Rẻ, Chuyên Nghiệp",
  
  description:
    "In hộp giấy tại Cà Mau giá rẻ, thiết kế đẹp, in nhanh. Nhận in hộp mỹ phẩm, hộp quà, hộp sản phẩm theo yêu cầu. Cam kết chất lượng, màu sắc chuẩn, giao hàng nhanh.",

  keywords: [
    "in hộp giấy Cà Mau",
    "in hộp giấy giá rẻ",
    "in bao bì sản phẩm",
    "in hộp mỹ phẩm",
    "in hộp quà",
    "in hộp giấy theo yêu cầu",
    "in ấn Khoa Tường",
    "in hộp"
  ],

  openGraph: {
    title: "In Hộp Giấy Cà Mau – Thiết Kế Bao Bì Chuyên Nghiệp",
    description:
      "Dịch vụ in hộp giấy tại Cà Mau, nhận thiết kế và in theo yêu cầu. Hộp đẹp, chắc chắn, nâng tầm thương hiệu sản phẩm.",
    url: "https://inankhoatuong.vn/in-hop-giay",
    siteName: "In Ấn Khoa Tường",
    images: [
      {
        url: "/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "In hộp giấy Cà Mau",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  alternates: {
    canonical: "https://inankhoatuong.vn/in-hop-giay",
  },
};

export default function Introduction() {
  return (
    <div className={`min-h-screen bg-secondary ${nunito.className}`}>
          <Header />
          <Content />
          <Footer />
     </div>
  );
}
