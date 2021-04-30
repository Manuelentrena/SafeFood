import React from "react";
import Mujer from "../Mujer/Mujer";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <Mujer />
      <h1 className="hero__title">Tu carrito de la compra</h1>
    </div>
  );
};

export default Hero;
