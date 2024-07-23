import logo from "../assets/logo.jpg";

import { useContext, useRef } from "react";
import { CartContext } from "../store/shoppingcart-context";

import CartModal from "./CartModal.jsx";
import Modal from './Modal.jsx'
export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  function handleCartOpenClick() {
    modal.current.showModal();
  }
  return (
    <>
      <CartModal ref={modal}/>
      
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="Restaurant logo." />
          <h1>Food Shopping Cart</h1>
        </div>
        <button className="text-button" onClick={handleCartOpenClick}>
          Cart ({items.length})
        </button>
      </header>
    </>
  );
}
