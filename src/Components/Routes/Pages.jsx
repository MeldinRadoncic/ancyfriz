import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "../Pages/HomePage/LandingPage.jsx";

// This is the main component that will be used to render all the pages of the website.
const Pages = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
      {/* <Route path='/onama' element={<AboutUs />} /> */}
    </Routes>
  );
};

export default Pages;
