import { useContext } from "react";
import CartContext from "../store/CartContextProvider";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      {cartCtx.items.length > 0 && (
        <ul>
          {cartCtx.items.map((item) => {
            return (
              <li key={item.id} className="cart-item">
                <div>
                  <p>
                    {item.name} - {item.quantity} x ${currencyFormatter.format(item.price)}
                  </p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => cartCtx.removeItem(item.id)}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => cartCtx.addItem(item)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <button className="text-button" onClick={handleCloseCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className="button" onClick={handleGoToCheckout}>
            Checkout
          </button>
        )}
      </p>
    </Modal>
  );
}
