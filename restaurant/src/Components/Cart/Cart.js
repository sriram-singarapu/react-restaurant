import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const { items, removeItem, addItem } = cartContext;

  // Helper function to group items by id and calculate total quantity
  const groupItems = (items) => {
    const groupedItemsMap = new Map();
    items.forEach((item) => {
      const quantity = parseInt(item.quantity); // Convert quantity to a number
      if (groupedItemsMap.has(item.id)) {
        const existingItem = groupedItemsMap.get(item.id);
        existingItem.quantity += quantity;
      } else {
        groupedItemsMap.set(item.id, { ...item, quantity });
      }
    });
    return Array.from(groupedItemsMap.values());
  };

  // Helper function to calculate total amount
  const calculateTotalAmount = (groupedItems) => {
    let totalAmount = 0;
    groupedItems.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  const groupedItems = groupItems(items);

  const cartItemRemoveHandler = (groupedItem) => {
    removeItem(groupedItem); // Call removeItem method from context
  };

  const cartItemAddHandler = (groupedItem) => {
    const { id, name, price } = groupedItem;
    addItem({
      id,
      name,
      price,
      quantity: 1, // Assuming adding 1 quantity per click
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {groupedItems.map((groupedItem) => (
        <li key={groupedItem.id}>
          <CartItem
            name={groupedItem.name}
            quantity={groupedItem.quantity}
            price={groupedItem.price}
            onRemove={() => cartItemRemoveHandler(groupedItem)}
            onAdd={() => cartItemAddHandler(groupedItem)}
          />
        </li>
      ))}
    </ul>
  );

  // Calculate total amount
  const totalAmount = calculateTotalAmount(groupedItems);

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
