import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src='/public/img/swiggy.png' alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt cumque voluptatem dolores commodi ducimus. Nesciunt praesentium repudiandae assumenda pariatur quasi ullam dolorem!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 9149593035</li>
                <li>mr.nitinpandita@gmail.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024</p>
  </div>;
};

export default Footer;
