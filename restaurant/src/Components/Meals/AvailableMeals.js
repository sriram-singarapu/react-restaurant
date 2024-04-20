import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "South Indian Fish Biryani",
    description: "Finest fish and veggies",
    price: 499,
  },
  {
    id: "m2",
    name: "Hyderabadi Biryani",
    description: "Hyderabad specialty!",
    price: 299,
  },
  {
    id: "m3",
    name: " Burger",
    description: "American, raw, meaty",
    price: 190,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
