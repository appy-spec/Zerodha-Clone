import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./landingPage/home/HomePage";
import ProductPage from "./landingPage/products/ProductPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import AboutPage from "./landingPage/about/AboutPage";
import SignupParent from "./landingPage/signup/SignupParent";
import LoginParent from "./landingPage/login/LoginParent";
import NotFound from "./landingPage/NotFound";

import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';

function App() {
  
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path="/signup" element={<SignupParent/>}/>
      <Route path="/login"  element={<LoginParent/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App;
