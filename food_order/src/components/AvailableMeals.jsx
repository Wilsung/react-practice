import { useState, useEffect, useContext } from "react";
import { CartContext } from "../store/shoppingcart-context.jsx";
import Meals from "./Meals.jsx";

export default function AvailableMeals() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const { availableMeals, setMeals } = useContext(CartContext);

  useEffect(() => {
    async function fetchAvailableMeals() {
      setIsFetching(true);
      try {
        const response = await fetch("https://reduxpractice-55a4e-default-rtdb.firebaseio.com/available-meals.json");
        const resData = await response.json();
        setMeals(resData);
      } catch (error) {
        setError({
          message: error.message || "Failed fetching available meals.",
        });
      }
      setIsFetching(false);
    }

    fetchAvailableMeals();
  }, []);
  return (
    <Meals
      meals={availableMeals}
      isLoading={isFetching}
      loadingText="Loading meals"
      fallbackText="No meals available"
    />
  );
}
