import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Rider_Content";
import ContactFloat from '../components/ContactFloat';
import { Nunito } from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In Decal Thủy Sản & Rider Tại Cà Mau | In Ấn Khôi Tường",
  description:
    "Chuyên in decal thủy sản, tem nhãn đông lạnh, rider tại Cà Mau. Chống nước, chịu lạnh, bám dính tốt, in nhanh, giá rẻ.",
  keywords: [
    "in decal thủy sản Cà Mau",
    "in tem đông lạnh",
    "in decal chống nước",
    "in rider thủy sản",
    "in tem nhãn sản phẩm",
    "in decal giá rẻ",
  ],
  openGraph: {
    title: "In Decal – Rider Thủy Sản Chất Lượng Tại Cà Mau",
    description:
      "In tem nhãn thủy sản, decal chống nước, chịu lạnh, rider chuyên nghiệp tại Cà Mau.",
    url: "https://inankhoatuong.vn/decal-thuy-san",
    siteName: "In Ấn Khôi Tường",
    images: [
      {
        url: "/imgs/imgsp.jpg",
        width: 1200,
        height: 630,
        alt: "Decal thủy sản tại Cà Mau",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://inankhoatuong.vn/decal-thuy-san",
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