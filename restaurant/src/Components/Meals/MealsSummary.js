import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Basic Food Order App</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals.
      </p>
      <p>
        From mouthwatering curries to aromatic biryanis, our menu showcases
        classic favorites as well as unique specialties. Whether you're a fan of
        vegetarian delights or crave flavorful meat dishes, we have something to
        satisfy every palate.
      </p>
    </section>
  );
};

export default MealsSummary;
