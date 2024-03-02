import { forwardRef, useImperativeHandle, useState, useContext } from "react";
import { CartContext } from "../store/shoppingcart-context";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import CheckoutModal from "./CheckoutModal";

const CartModal = forwardRef(function CartModal(props, ref) {
  const { items } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );
  const formattedTotalPrice = totalPrice.toFixed(2);

  const [checkoutClicked, setCheckoutClicked] = useState(false);

  function handleCheckout() {
    setCheckoutClicked(true);
  }

  function handleClosed(){
    setCheckoutClicked(false);
  }

  


  return createPortal(
    <dialog className="modal" ref={ref} onClose={handleClosed}>
      {!checkoutClicked ? (
        <div>
          <h2>Your Cart</h2>
          <Cart items={items} totalPrice={formattedTotalPrice}/>
          <form method="dialog" className="modal-actions">
            <button className="text-button">Close</button>
            <button className="button" onClick={handleCheckout}>
              Checkout
            </button>
          </form>
        </div>
      ) : (
        <CheckoutModal totalPrice={formattedTotalPrice} items={items}/>
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
