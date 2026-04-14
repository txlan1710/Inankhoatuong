import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Contact";
import ContactFloat from '../components/ContactFloat';
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

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