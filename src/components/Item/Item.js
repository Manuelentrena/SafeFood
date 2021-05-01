import React from "react";
import "./item.css";

const Item = ({ producto, borrarProducto }) => {
  const { nombre, unidades, precio, id } = producto;
  return (
    <div className="item">
      <div className="item__bloque">
        <p className="item__num">{unidades}x</p>
        <p className="item__nombre">
          {nombre[0].toUpperCase() + nombre.substr(1)}
        </p>
      </div>
      <div className="item__bloque">
        <div className="item__precio">{precio}€</div>
        <button className="item__delete" onClick={() => borrarProducto(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Item;
