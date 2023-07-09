import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === itemIndex) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return { ...cartItem };
      });

      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const onRemoveFromCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity -= 1;

      if (updatedCart[itemIndex].quantity === 0) {
        updatedCart.splice(itemIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Cartcontext.Provider
      value={{ setCart, cart, onAddToCart, onRemoveFromCart, totalPrice }}
    >
      {props.children}
    </Cartcontext.Provider>
  );
};
