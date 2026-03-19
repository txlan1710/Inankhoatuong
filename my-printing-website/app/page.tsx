import Header from './components/Header';
import Banner from './components/Banner';
import ProductCategories from './components/ProductCategories';
import ContactFloat from './components/ContactFloat';
import WhyChooseUs from './components/WhyChooseUs';
import Content from './components/Content';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <Banner />
      <ProductCategories />
      <WhyChooseUs />
      <Content />
      <Footer />
      <ContactFloat />

    </div>
  );
}