import React from "react";
import Item from "../Item/Item";
import "./list.css";

const List = () => {
  const isProducts = true;
  return (
    <div className="list">
      <h2 className="list__listado">Listado de Productos</h2>
      <div className="list__body">
        {isProducts ? (
          <>
            <Item />
            <Item />
            <Item />
            <Item />
          </>
        ) : null}
      </div>
      <div className="list__footer">
        <p className="list__totaldesc">Total</p>
        <div className="list__total">
          <p className="list__precio">15€</p>
        </div>
      </div>
    </div>
  );
};

export default List;
