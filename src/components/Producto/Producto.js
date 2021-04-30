import React, { useState, useEffect } from "react";
import "./producto.css";

const Producto = ({ credito }) => {
  /* Valida el error */
  const isError = false;
  const [disabled, setDisabled] = useState("disabled");

  useEffect(() => {
    credito > 0 ? setDisabled("") : setDisabled("disabled");
  }, [credito]);

  return (
    <div className="producto">
      <h2 className="producto__title">Crear Producto</h2>
      <form className="producto__form">
        <fieldset className="producto__disabled" disabled={disabled}>
          <div className="producto__campo">
            <label className="producto__label">Nombre</label>
            <input
              className="producto__input"
              name="nombre"
              required
              placeholder="Nombre..."
            ></input>
          </div>

          <div className="producto__campo">
            <label className="producto__label">Unidades</label>
            <input
              type="number"
              className="producto__input"
              name="unidades"
              min="1"
              required
              placeholder="Unidades..."
            ></input>
          </div>

          <div className="producto__campo">
            <label className="producto__label">Precio</label>
            <input
              className="producto__input"
              name="precio"
              type="number"
              required
              placeholder="Precio..."
            ></input>
          </div>

          <button className="producto__button" type="submit">
            Añadir
          </button>

          {isError ? (
            <p className="error">Todos los campos son obligatorios</p>
          ) : null}
        </fieldset>
      </form>
    </div>
  );
};

export default Producto;
