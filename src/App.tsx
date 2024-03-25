import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  return (
    <>
    {
      showLoginPopup ? <LoginPopup setShowLoginPopup={setShowLoginPopup}/> : <></>
    }
      <div className="app">
        <Navbar setShowLoginPopup={setShowLoginPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
