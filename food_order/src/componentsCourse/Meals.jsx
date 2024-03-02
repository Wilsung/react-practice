import { useState, useEffect, useContext } from "react";
import CartContext from "../store/CartContextProvider";

export default function Meals() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const cartCtx = useContext(CartContext);
  const [ meals, setMeals ] = useState([])

  useEffect(() => {
    async function fetchAvailableMeals() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/meals");
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
    <>
      <ul id="meals">
        {meals.map((meal) => (
          <li key={meal.id}>
            <article className="meal-item">
              <div>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                  <h3>{meal.name}</h3>
                  <p className="meal-item-price">${meal.price}</p>
                  <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                  <button className="button" onClick={() => cartCtx.addMealToCart(meal)}>
                    Add to Cart
                  </button>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
