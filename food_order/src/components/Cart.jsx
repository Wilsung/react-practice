import { useContext } from "react";
import { CartContext } from "../store/shoppingcart-context";

export default function Cart({items, totalPrice}) {
  const { updateCartMealQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      {items.length > 0 && (
        <ul>
          {items.map((item) => {
            const formattedPrice = item.price.toFixed(2);
            return (
              <li key={item.id} className="cart-item">
                <div>
                  <p>
                    {item.name} - {item.quantity} x ${formattedPrice}
                  </p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateCartMealQuantity(item.id, -1)}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => updateCartMealQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="cart-total">${totalPrice}</p>
    </div>
  );
}
