import React from "react";

function ProductCard({ name, price, inStock, image }) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={image} alt={name} className="product-image" />
      </div>

      <h2>{name}</h2>
      <p className="price">${price}</p>

      <span className={inStock ? "stock in-stock" : "stock out-stock"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;