import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCardAmount } = useContext(StoreContext);
  return (
    <form className="placeorder">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="number" placeholder="phone" />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCardAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCardAmount() === 0 ? 0 : getTotalCardAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/place-order")}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
