import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContextProvider";
import Input from "./Input";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "./hooks/useHttp";
import Error from './Error'
import { currencyFormatter } from "../util/formatting";

const requestConfig = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};


export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    "https://reduxpractice-55a4e-default-rtdb.firebaseio.com/orders.json",
    requestConfig
  );
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event){
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData,
      }
    }));
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === 'checkout'}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p className="modal-actions">
          <button className="button" onClick={handleFinish}>Okay</button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title='Failed to submit order' message={error}/ >}
        <p className="modal-actions">
          <button className="text-button" type="button" onClick={handleClose}>
            Close
          </button>
          <button className="button">Submit Order</button>
        </p>
      </form>
    </Modal>
  );
}
