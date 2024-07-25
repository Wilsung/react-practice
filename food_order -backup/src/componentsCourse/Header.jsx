import logo from "../assets/logo.jpg";

import { useContext, useRef } from "react";
import CartContext from "../store/CartContextProvider";
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="Restaurant logo." />
          <h1>Food Shopping Cart</h1>
        </div>
        <button className="text-button" onClick={handleShowCart}>
          Cart ({totalCartItems})
        </button>
      </header>
    </>
  );
}
