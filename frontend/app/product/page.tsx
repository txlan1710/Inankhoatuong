import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductContent from "../components/ProductContent"
import ContactFloat from '../components/ContactFloat';

export default function Product() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <ProductContent />
      <Footer />
      <ContactFloat />
    </div>
  );
}