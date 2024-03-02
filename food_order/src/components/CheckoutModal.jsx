import { useState, useEffect } from "react";
import { CartContext } from "../store/shoppingcart-context";
import Input from "./Input";

export default function CheckoutModal({ totalPrice, items }) {
  const [error, setError] = useState();
  function handleFormSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }
  async function handleSubmit(e) {
    const fd = new FormData(e.target);
    const customer = Object.fromEntries(fd.entries());

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify({
          order: {
            items: items,
            customer
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to update user data.");
      }
      return resData;
    } catch (error) {
      setError({ message: error || "Failed to submit order." });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalPrice}</p>

      <Input id="name" label="Full Name" type="text" name="name" />
      <Input id="email" label="E-Mail Address" type="email" name="email" />
      <Input id="street" label="Street" type="text" name="street" />
      <Input
        id="postal-code"
        label="Postal Code"
        type="postal-code"
        name="postal-code"
      >
        <div className="control">
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text"/>
        </div>
      </Input>
      <p className="modal-actions">
      <button className="text-button">
        Close
      </button>
      <button className="button" type="submit">Submit Order</button>
      </p>

    </form>
  );
}
// export default CheckoutModal;
