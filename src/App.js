import "./App.css";
import BlogSection from "./components/BlogSection/BlogSection";
import BookingForm from "./components/BookingForm/BookingForm";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Locations from "./components/Locations/Locations";
import Newsletter from "./components/Newsletter/Newsletter";
import ProtectionBanner from "./components/ProtectionBanner/ProtectionBanner";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <BookingForm />
      <Hero />
      <Locations />
      <Features />
      <ProtectionBanner />
      <Reviews />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
