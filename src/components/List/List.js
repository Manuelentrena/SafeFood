import React from "react";
import Item from "../Item/Item";
import "./list.css";

const List = ({ productos, gasto, borrarProducto }) => {
  return (
    <div className="list">
      <h2 className="list__listado">Listado de Productos</h2>
      <div className="list__body">
        {productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              producto={producto}
              borrarProducto={borrarProducto}
            />
          );
        })}
      </div>
      <div className="list__footer">
        <p className="list__totaldesc">Total</p>
        <div className="list__total">
          <p className="list__precio">{gasto}€</p>
        </div>
      </div>
    </div>
  );
};

export default List;
