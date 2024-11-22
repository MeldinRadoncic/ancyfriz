import "./App.css";
import Pages from "./Components/Routes/Pages";
import Navbar from "./Components/Layout/Navbar/Navbar"; 

function App() {
  return (
    <>
    {/* Navbar component contains the navigation links of the website. */}
    <Navbar />
   {/* Pages component contains all the routes of the website. */}
      <Pages />
    </>
  );
}

export default App;
