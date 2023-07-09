import React from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/Context";
import { useContext } from "react";

const Cart = () => {
  const { cart, onRemoveFromCart, onAddToCart, totalPrice } =
    useContext(Cartcontext);

  return (
    <>
      <Link to="/">GO TO Home PAGE</Link>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <h3>{item.price}</h3>
            <button onClick={() => onRemoveFromCart(item)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => onAddToCart(item)}>+</button>
          </div>
        ))}
        <div>
          <h2>Total price:{totalPrice}</h2>
        </div>
      </div>
    </>
  );
};

export default Cart;
