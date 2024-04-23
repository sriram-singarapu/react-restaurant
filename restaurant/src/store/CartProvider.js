import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex((item) => item.id === id); // Find index by item id

      if (index !== -1) {
        updatedItems[index].quantity -= 1; // Reduce quantity by 1

        if (updatedItems[index].quantity === 0) {
          updatedItems.splice(index, 1); // Remove item if quantity becomes zero
        }
      }

      return updatedItems;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
