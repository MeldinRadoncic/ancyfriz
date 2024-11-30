import React, {
  useEffect,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



import "./App.css";
import Pages from "./Components/Routes/Pages";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import FooterBar from "./Components/Layout/Footer/FooterBar";

function App() {
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1-second animations
    AOS.refresh(); // Refresh for dynamic content
  }, []);

  return (
    <>
      {/* Navbar component contains the navigation links of the website. */}
      <Navbar />
      {/* Pages component contains all the routes of the website. */}
      <Pages />
      {/* Footer component contains the footer of the website. */}
      <Footer />
      {/* FooterBar component contains the footer bar of the website. */}
      <FooterBar />
    </>
  );
}

export default App;
