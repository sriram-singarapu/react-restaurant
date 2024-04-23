import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);

  let quantity = 0;
  cartContext.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
