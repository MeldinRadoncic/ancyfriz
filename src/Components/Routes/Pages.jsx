import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "../Home/LandingPage.jsx";

// This is the main component that will be used to render all the pages of the website.
const Pages = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
    </Routes>
  );
};

export default Pages;
