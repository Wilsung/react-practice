import { useContext } from "react";
import CartContext from "../store/CartContextProvider";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart({ items, totalPrice }) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  function handleClose(){
    userProgressCtx.hideCart();
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleClose : null}>
      <h2>Your Cart</h2>
      {cartCtx.items.length > 0 && (
        <ul>
          {cartCtx.items.map((item) => {
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
      <p className="modal-actions">
        <button className="text-button" onClick={userProgressCtx.hideCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className="button" onClick={userProgressCtx.showCheckout}>
            Checkout
          </button>
        )}
      </p>
    </Modal>
  );
}
