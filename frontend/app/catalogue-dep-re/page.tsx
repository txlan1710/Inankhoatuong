import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Catalogue_Content";
import ContactFloat from '../components/ContactFloat';
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://inankhoatuong.vn"),

  title: "In bạt & in decal khổ lớn tại Cà Mau | In nhanh, giá rẻ",

  description:
    "Dịch vụ in bạt quảng cáo, in decal khổ lớn tại Cà Mau. In Hiflex, bạt 2 da, decal PP, decal trong, in UV sắc nét, giá rẻ, lấy nhanh trong ngày.",

  keywords: [
    "in bạt Cà Mau",
    "in decal khổ lớn",
    "in banner quảng cáo",
    "in bạt Hiflex",
    "in decal giá rẻ",
  ],

  alternates: {
    canonical: "https://inankhoatuong.vn/in-bat-decal",
  },

  openGraph: {
    title: "In bạt & decal khổ lớn tại Cà                                                                                        Mau",
    description:
      "In bạt quảng cáo, decal khổ lớn giá rẻ, sắc nét, bền màu. Nhận in nhanh tại Cà Mau.",
    url: "https://inankhoatuong.vn/in-bat-decal",
    siteName: "In Ấn Khoa Tường",

    images: [
      {
        url: "/imgs/InBac/og-inbat.jpg", // 👉 tạo file này trong public
        width: 1200,
        height: 630,
        alt: "In bạt quảng cáo và decal khổ lớn tại Cà Mau",
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