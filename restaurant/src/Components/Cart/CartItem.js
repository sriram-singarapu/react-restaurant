import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const handleRemoveItem = () => {
    cartContext.removeItem(props.id);
  };

  const handleAddItem = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    };
    cartContext.addItem(item);
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
