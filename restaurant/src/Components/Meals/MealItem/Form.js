import Input from "../../UI/Input";
import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <from className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </from>
  );
};

export default Form;
