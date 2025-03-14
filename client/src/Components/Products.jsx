import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import rose1 from "../assets/Rose.svg";
import rose2 from "../assets/Rose2.svg";
import rose3 from "../assets/Rose3.svg";
import "../styles/products.scss";

const products = [
  {
    id: 1,
    imgSrc: rose1,
    name: "Air Bedroom Plant",
    price: 450,
  },
  {
    id: 2,
    imgSrc: rose2,
    name: "Air Show Plant",
    price: 450,
  },
  {
    id: 3,
    imgSrc: rose3,
    name: "Air Bedroom Plant",
    price: 450,
  },
];

export default function Products() {
  return (
    <section className="Products">
      <h1 className="text-center">
        Our Products
        <div></div>
        <div></div>
      </h1>
      <div className="product-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imgSrc} alt={product.name} />
            <Heart className="heart-icon" />
            <h2>{product.name}</h2>
            <div className="price">
              <h1>₹{product.price.toFixed(2)}</h1>
              <ShoppingBag className="cart-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
