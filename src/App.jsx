import React from "react";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landingPage/home/HomePage";
import ProductPage from "./landingPage/products/ProductPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import AboutPage from "./landingPage/about/AboutPage";
import SignupParent from "./landingPage/signup/SignupParent";
import LoginParent from "./landingPage/login/LoginParent";
import NotFound from "./landingPage/NotFound";

import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import DashboardPage from "./landingPage/DashBoardPage";

import { useAuth } from "./landingPage/AuthContext";

function App() {
  
  let{navbarFooter}=useAuth();
  
  useEffect(() => {
    const handleMessage = (event) => {
      
      if (event.data?.type === "REDIRECT_HOME") {

        window.location.href = "/"; 
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);

  }, []);

  return (
    <BrowserRouter>
      {!navbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupParent />} />
        <Route path="/login" element={<LoginParent />} />
        <Route path="/mystocks/:id" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!navbarFooter && <Footer />}
    </BrowserRouter>
  );
}

export default App;
