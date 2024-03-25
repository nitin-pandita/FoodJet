import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({setShowLoginPopup}) => {
  const [menu, setMenu] = useState("contact-us");
  const {getTotalCardAmount} = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to='/'><img src="/img/swiggy.png" alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
        href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
        href="#app-download"
          onClick={() => setMenu("mobile")}
          className={menu == "mobile" ? "active" : ""}
        >
          Mobile
        </a>
        <a
        href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu == "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        {/* search icons */}
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search_icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCardAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLoginPopup(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
