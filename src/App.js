import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import ContactUsSection from "./components/ContactUsSection";
import Location from "./components/LocationMap";
import Footer from "./components/Footer";
import LeaveAndLicense from "./pages/LeaveAndLicense";
import PowerOfAttorney from "./pages/PowerOfAttorney";
import Kararnama from "./pages/KararnamaPage";
import AgreementForSale from "./pages/AgreementForSale";
import SaleDeedLandingPage from "./pages/SalesDeedLandingPage";
import ReleaseDeed from "./pages/ReleaseDeed";


// Import other service pages

const App = () => {
  return (
    <Router>
    
      <main className="pt-20">
        <Routes>
          
        <Route path="/" element={
              <>
                <Header />
                <HeroSection />
                <ServicesSection />
                <AboutUsSection />
                <ContactUsSection />
                <Location />
              </>
            } />
          
          {/* Add other service routes */}
        </Routes>
        <Routes>
        <Route path="/leave-and-license" element={<LeaveAndLicense />} />
        <Route path="/power-of-attorney" element={<PowerOfAttorney />} />
        <Route path="/kararnama" element={<Kararnama />} />
        <Route path="/agreement-for-sale" element={<AgreementForSale />} />
        <Route path="/sale-deed" element={<SaleDeedLandingPage />} />
        <Route path="/release-deed" element={<ReleaseDeed />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
