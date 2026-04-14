import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutIntro from "../components/AboutIntro"
import ContactFloat from '../components/ContactFloat';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <AboutIntro />
      <Footer />
      <ContactFloat />
    </div>
  );
}