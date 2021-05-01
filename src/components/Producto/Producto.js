import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./producto.css";

const Producto = ({ credito, addProductoToList, gasto }) => {
  /* Estado del formulario */
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  /* Para habilitar el formulario */
  const [disabled, setDisabled] = useState("disabled");
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    unidades: "",
  });

  useEffect(() => {
    credito > 0 ? setDisabled("") : setDisabled("disabled");
  }, [credito]);

  const addInfoProducto = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };

  /* Extraemos valores del form */
  const { nombre, unidades, precio } = nuevoProducto;

  /* Una vez pulsamos en añadir añadir el producto al estado global */
  const addList = (e) => {
    e.preventDefault();
    /* Validamos campos */
    if (
      nombre.trim() === "" ||
      unidades.trim() <= 0 ||
      precio.trim() <= 0 ||
      credito - (gasto + unidades * precio) < 0
    ) {
      setError(true);
      return;
    }

    setError(false);
    /* Asignamos un ID */
    nuevoProducto.id = uuidv4();
    /* Añadimos producto */
    addProductoToList(nuevoProducto);
    /* Reiniciamos formulario */
    setNuevoProducto({
      nombre: "",
      precio: "",
      unidades: "",
    });
    /* Mostramos mensaje de exito */
    setExito(true);
    /* Lo quitamos a los */
    setTimeout(() => {
      setExito(false);
    }, 3000);
  };

  return (
    <div className="producto">
      <h2 className="producto__title">Crear Producto</h2>
      <form className="producto__form" onSubmit={addList}>
        <fieldset className="producto__disabled" disabled={disabled}>
          <div className="producto__campo">
            <label className="producto__label">Nombre</label>
            <input
              className="producto__input"
              name="nombre"
              required
              placeholder="Nombre..."
              onChange={addInfoProducto}
              value={nombre}
            ></input>
          </div>

          <div className="producto__campo">
            <label className="producto__label">Unidades</label>
            <input
              type="number"
              className="producto__input"
              name="unidades"
              required
              placeholder="Unidades..."
              onChange={addInfoProducto}
              value={unidades}
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
              onChange={addInfoProducto}
              value={precio}
            ></input>
          </div>

          <button className="producto__button" type="submit">
            Añadir
          </button>

          {error ? (
            <p className="error">
              Unids o Precio mayor de cero. Limite alcanzado
            </p>
          ) : null}

          {exito ? <p className="exito">Producto agregado a la cesta</p> : null}
        </fieldset>
      </form>
    </div>
  );
};

export default Producto;
