import React from "react";
import "./item.css";

const Item = () => {
  return (
    <div className="item">
      <div className="item__bloque">
        <p className="item__num">2x</p>
        <p className="item__nombre">1KG Patatas</p>
      </div>
      <div className="item__bloque">
        <div className="item__precio">3€</div>
        <button className="item__delete">X</button>
      </div>
    </div>
  );
};

export default Item;
