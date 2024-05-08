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
    name: "Hyderabadi Dum Biryani",
    description: "Fragrant rice layered with marinated meat and spices",
    price: 350,
  },
  {
    id: "m3",
    name: "Paneer Butter Masala",
    description: "Soft paneer cubes in a rich tomato-based gravy",
    price: 220,
  },
  {
    id: "m4",
    name: "Andhra Chicken Curry",
    description: "Spicy chicken curry with red chilies and garlic",
    price: 280,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
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
