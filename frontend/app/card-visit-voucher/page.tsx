import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/VoucherNameCard_Content";

import { Nunito } from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inankhoatuong.vn"),

  title: "In Voucher & Name Card Cà Mau | Giá rẻ, thiết kế đẹp, lấy nhanh",

  description:
    "Dịch vụ in voucher, name card tại Cà Mau. Thiết kế chuyên nghiệp, in nhanh, giá rẻ. Phù hợp quán ăn, spa, doanh nghiệp. Giao hàng tận nơi.",

  keywords: [
    "in voucher Cà Mau",
    "in name card Cà Mau",
    "in card visit Cà Mau",
    "in voucher giá rẻ",
    "in danh thiếp Cà Mau",
    "in card nhanh Cà Mau",
  ],

  alternates: {
    canonical: "https://inankhoatuong.vn/in-voucher-namecard-ca-mau",
  },

  openGraph: {
    title: "In Voucher & Name Card Cà Mau – Thiết kế đẹp, giá tốt",
    description:
      "Chuyên in voucher, name card tại Cà Mau. Sắc nét, chuyên nghiệp, giao nhanh.",
    url: "https://inankhoatuong.vn/in-voucher-namecard-ca-mau",
    siteName: "In Ấn Khoa Tường",

    images: [
      {
        url: "/imgProduct/Card/namecard-vourcher-inankhoatuong-01.jpg",
        width: 1200,
        height: 630,
        alt: "In voucher và name card tại Cà Mau",
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
