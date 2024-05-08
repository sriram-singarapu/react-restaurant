import Input from "../../UI/Input";
import classes from "./Form.module.css";
import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Form = (props) => {
  const cartContext = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    const quantity = document.getElementById("amount_" + props.id).value;
    cartContext.addItem({ ...props.item, quantity: quantity });
    //console.log(cartContext.items);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>Add</button>
    </form>
  );
};

export default Form;
