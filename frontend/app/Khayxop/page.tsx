import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Khayxop_Content";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inankhoatuong.vn"),

  title: "Khay xốp đựng thực phẩm tại Cà Mau | Giá sỉ, giao nhanh",

  description:
    "Chuyên cung cấp khay xốp đựng thực phẩm tại Cà Mau giá sỉ. Khay xốp trắng, đen, nhiều kích thước, phù hợp đóng gói thịt, cá, rau củ, giao nhanh.",

  keywords: [
    "khay xốp Cà Mau",
    "khay xốp đựng thực phẩm",
    "khay xốp giá sỉ",
    "khay xốp đóng gói",
    "khay xốp thủy sản",
  ],

  alternates: {
    canonical: "https://inankhoatuong.vn/khay-xop",
  },

  openGraph: {
    title: "Khay xốp giá sỉ tại Cà Mau",
    description:
      "Cung cấp khay xốp đựng thực phẩm, thủy sản chất lượng cao, giá rẻ tại Cà Mau.",
    url: "https://inankhoatuong.vn/khay-xop",
    siteName: "In Ấn Khôi Tường",

    images: [
      {
        url: "/imgs/KhayXop/og-khayxop.jpg", // 👉 bạn tạo file này
        width: 1200,
        height: 630,
        alt: "Khay xốp đựng thực phẩm tại Cà Mau",
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
    </div>
  );
}