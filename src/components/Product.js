import { useContext, useEffect, useState } from "react";
import ShopCard from "./Products";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/Context";

const API_URL = "https://fakestoreapi.com/products";

const Product = () => {
  const [products, setProducts] = useState([]);

  const handleClick = (data) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === data.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          id: data.id,
          title: data.title,
          price: data.price,
          category: data.category,
          rating: data.rating.rate,
          image: data.image,
          quantity: 1,
        },
      ]);
    }
  };

  const shop_cart = async (title) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    shop_cart();
  }, []);
  const { cart, setCart } = useContext(Cartcontext);

  console.log(cart);

  return (
    <>
      <Link to="/Cart">GO TO CART</Link>
      <div className="productContainer">
        {products.map((product) => (
          <ShopCard
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
