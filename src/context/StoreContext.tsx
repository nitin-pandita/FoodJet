import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});

  const addToCart = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCardAmount = () => {
    let total = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        let itemInfo = food_list.find((food) => food._id === item);
        total += itemInfo?.price * cardItems[item];
      }
    }
    return total
  };

  const contextValue = {
    food_list,
    cardItems, // Corrected from cardItem to cardItems
    setCardItems,
    addToCart,
    removeFromCart,
    getTotalCardAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
