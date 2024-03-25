import React, { useContext } from "react";
import "./Card.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cardItems, food_list, removeFromCart, getTotalCardAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItems[item._id] > 0) {
            return (
              <div>
                <div className="card-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>$ {item.price * cardItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
        <div className="cart-promocode">
          <div className="">
            <p>If you have a promo code enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
