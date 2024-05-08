import { useContext } from "react";
import { CartContext } from "../store/shoppingcart-context";




export default function Meal({ id, image, name, price, description }) {
  const { addMealToCart } = useContext(CartContext);
  return (
    <article className="meal-item">
      <div>
        <img src={`https://storage.googleapis.com/reduxpractice-55a4e.appspot.com/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={() => addMealToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
