import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "../Pages/HomePage/LandingPage.jsx";
import AboutUs from "../Pages/AboutPage/AboutPage.jsx"; 
import ServicesPage from "../Pages/ServicesPage/ServicesPage.jsx";
import GalleryPage from "../Pages/GalleryPage/GalleryPage.jsx";
import AnidaPage from "../Pages/AnidaPage/AnidaPage.jsx"
import ContactPage from "../Pages/ContactPage/ContactPage.jsx";
import PrivacyPolicyPage from "../Pages/PrivacyPolicy/PrivacyPolicyPage.jsx";

// This is the main component that will be used to render all the pages of the website.
const Pages = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route path='/onama' element={<AboutUs />} />
      <Route path='/usluge' element={<ServicesPage />} />
      <Route path='/galerija' element={<GalleryPage />} />
            <Route path='/anidaimamovic' element={<AnidaPage />}/> 
            <Route path='/kontakt' element={<ContactPage />}/> 
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />}/>

    </Routes>
  );
};

export default Pages;
