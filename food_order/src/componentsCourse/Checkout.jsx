import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContextProvider";
import Input from "./Input";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "./hooks/useHttp";
import Error from './Error'

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading, error, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );
  function handleClose() {
    userProgressCtx.hideCheckout;
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
  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title='Failed to submit order' message={erorr}/ >}
        <p className="modal-actions">
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <button>Submit Order</button>
        </p>
      </form>
    </Modal>
  );
}
