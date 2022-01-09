import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/ContactPage";
import FoodMenu from "./components/FoodMenu";

function App() {
  return (
    <div className="flec flex-col justify-around">
      <div className="min-h-screen">
        <BrowserRouter>
          <Navbar />
          <div id="modal-root" className=".modal-root"></div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu" element={<FoodMenu />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
}

export default App;
