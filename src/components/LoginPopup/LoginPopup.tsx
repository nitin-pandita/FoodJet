import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLoginPopup }) => {
  const [currState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLoginPopup(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-pop-input">
          {currState == "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState == "Sign up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the term and conditions</p>
        </div>
          {currState == "Sign up" ? (
            <p>
              Already have an account ? <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </p>
          ) : (
            <p>
              Create a new Account ?<span onClick={() => setCurrentState("Sign up")}>Click Here</span>
            </p>
          )}
      </form>
    </div>
  );
};

export default LoginPopup;
