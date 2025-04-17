import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Equipe from "./pages/Equipe";
import Galerie from "./pages/Galerie";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Horaires from "./components/Horaires";
import MapFrame from "./components/MapFrame";
import PartnerMarquee from "./components/PartnerMarquee";
import Credo from "./pages/Credo";


function App() {
  return (
    <div className="text-gray-700 bg-white min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/credo" element={<Credo />} />
        <Route path="*" element={<NotFound />} />
        {/* autres routes plus tard */}
      </Routes>
      <MapFrame />
      {/* scroll to top */}
      <ScrollToTopButton />
      <Horaires />
      <PartnerMarquee />
      <Footer />
    </div>
  );
}

export default App;
