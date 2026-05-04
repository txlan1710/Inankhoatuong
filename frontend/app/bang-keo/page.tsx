import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/contents/Bangkeo_Content";

import { Nunito } from "next/font/google";
import type { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Băng Keo Giá Sỉ Tại Cà Mau | Khoa Tường - Chất Lượng Cao, Giá Tốt",
  description:
    "Chuyên cung cấp băng keo giá sỉ tại Cà Mau. Băng keo trong, đục, màu, hai mặt đa dạng quy cách. Phù hợp đóng gói thủy sản, kho vận, logistics. Liên hệ ngay để được báo giá tốt nhất!",
  keywords: [
    "băng keo Cà Mau",
    "băng keo giá sỉ Cà Mau",
    "băng keo đóng gói thủy sản",
    "băng keo trong",
    "băng keo đục",
    "băng keo màu",
    "băng keo hai mặt",
    "băng keo OPP",
    "vật tư đóng gói Cà Mau",
    "băng keo giá rẻ",
    "cung cấp băng keo số lượng lớn",
  ],
  openGraph: {
    title: "Băng Keo Giá Sỉ Tại Cà Mau | Khoa Tường",
    description:
      "Cung cấp băng keo chất lượng cao với đa dạng quy cách, màu sắc. Phù hợp cho ngành thủy sản, logistics, thương mại điện tử tại Cà Mau.",
    url: "https://inkhoatuong.com/Bangkeo",
    siteName: "CÔNG TY TNHH SX & TM KHOA TƯỜNG",
    images: [
      {
        url: "/banner/Banner-BangKeo.png",
        width: 1200,
        height: 630,
        alt: "Banner băng keo giá sỉ tại Cà Mau - Khoa Tường",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Băng Keo Giá Sỉ Tại Cà Mau | Khoa Tường",
    description:
      "Cung cấp băng keo chất lượng cao với đa dạng quy cách, màu sắc. Phù hợp cho ngành thủy sản, logistics, thương mại điện tử tại Cà Mau.",
    images: ["/banner/Banner-BangKeo.png"],
  },
  alternates: {
    canonical: "https://inkhoatuong.com/Bangkeo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Introduction() {
  return (
    <div className={`min-h-screen bg-secondary ${nunito.className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Băng Keo Giá Sỉ Tại Cà Mau",
            image: "/banner/Banner-BangKeo.png",
            description:
              "Băng keo chất lượng cao với đa dạng quy cách, màu sắc phù hợp cho đóng gói thủy sản, kho vận, logistics và thương mại điện tử.",
            brand: {
              "@type": "Brand",
              name: "Khoa Tường",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "VND",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "CÔNG TY TNHH SX & TM KHOA TƯỜNG",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cà Mau",
                  addressRegion: "Cà Mau",
                  addressCountry: "VN",
                },
              },
            },
          }),
        }}
      />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
