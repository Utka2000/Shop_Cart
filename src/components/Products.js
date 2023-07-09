import React from "react";

const Products = ({ product, handleClick }) => {
  return (
    <>
      <div className="productItems">
        <h3>Product: {product.id}</h3>
      </div>
      <div>
        <h3>Rating:{product.rating.rate}</h3>
        <h3>Products Available:{product.rating.count}</h3>
      </div>
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <button onClick={() => handleClick(product)}>Add to cart</button>
      </div>
    </>
  );
};
export default Products;
