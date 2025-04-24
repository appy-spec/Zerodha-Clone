import React, { useState } from "react";
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

function App() {
  let [hideNavFooter, setHideNavFooter] = useState(false);

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
      {!hideNavFooter && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "64px",
            backgroundColor: "#fff",
            zIndex: 1000,
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Navbar />
        </div>
      )}

      <div
        style={{
          paddingTop: hideNavFooter ? "0px" : "64px",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignupParent />} />
          <Route path="/login" element={<LoginParent />} />
          <Route
            path="/mystocks"
            element={<DashboardPage func={setHideNavFooter} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!hideNavFooter && <Footer />}
    </BrowserRouter>
  );
}

export default App;
