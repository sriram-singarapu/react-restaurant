import classes from "./CartItem.module.css";
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const handleRemoveItem = () => {
    cartContext.removeItem(props.id); // Call removeItem method from context
  };
  const handleAddItem = () => {
    // Call onAdd handler with item details
    props.onAdd();
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={handleRemoveItem}>−</button>
        <button onClick={handleAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
