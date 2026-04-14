import Header from './components/Header';
import Banner from './components/Banner';
import ProductCategories from './components/ProductCategories';
import ContactFloat from './components/ContactFloat';
import WhyChooseUs from './components/WhyChooseUs';
import Content from './components/Content';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <Banner />
      <ProductCategories />
      <Feedback />
      <WhyChooseUs />
      <ContactForm />
      <Content />
      
      <Footer />
      <ContactFloat />

    </div>
  );
}