import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutIntro from "../components/AboutIntro"

export default function Introduction() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <AboutIntro />
      <Footer />
    </div>
  );
}