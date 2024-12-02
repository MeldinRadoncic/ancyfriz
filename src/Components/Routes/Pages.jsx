import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "../Pages/HomePage/LandingPage.jsx";
import AboutUs from "../Pages/AboutPage/AboutPage.jsx"; 
import ServicesPage from "../Pages/ServicesPage/ServicesPage.jsx";

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
            {/* <Route path='/anidaimamovic' element={<AnidaImamovic />} /> */}

    </Routes>
  );
};

export default Pages;
