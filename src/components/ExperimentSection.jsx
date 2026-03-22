import React from "react";
import ProductCard from "./ProductCard";

function ExperimentSection() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "129.99",
      inStock: true,
      image: "https://via.placeholder.com/250x180"
    },
    {
      name: "Mechanical Keyboard",
      price: "89.99",
      inStock: false,
      image: "https://via.placeholder.com/250x180"
    },
    {
      name: "Smart Watch",
      price: "199.99",
      inStock: true,
      image: "https://via.placeholder.com/250x180"
    }
  ];

  return (
    <section className="experiment-section" id="experiment31">
      <div className="section-header">
        <h1>Experiment 3.1: ProductCard Component</h1>
        <p>
          A reusable React component that displays product details dynamically
          using props with a responsive and modern card layout.
        </p>
      </div>

      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperimentSection;