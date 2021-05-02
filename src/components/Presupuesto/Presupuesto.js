import React, { useState } from "react";
import "./presupuesto.css";

const Presupuesto = ({ setCredito, setRestante, gasto }) => {
  // Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  //Funcion createPresupuesto
  const addPresupuesto = (e) => {
    setPresupuesto(parseInt(e.target.value, 10));
  };

  //submit del presupuesto
  const createPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (presupuesto < gasto || isNaN(presupuesto) || presupuesto === 0) {
      setError(true);
      return;
    }

    setError(false);
    /* Mostramos mensaje de exito */
    setExito(true);
    /* Lo quitamos a los */
    setTimeout(() => {
      setExito(false);
    }, 3000);

    setCredito(presupuesto);
    setRestante(presupuesto - gasto);
  };

  return (
    <form className="presupuesto" onSubmit={createPresupuesto}>
      <div className="presupuest__header">Tu presupuesto</div>
      <div className="presupuesto__body">
        <input
          className="presupuesto__input"
          type="number"
          placeholder="Cantidad.."
          onChange={addPresupuesto}
          required
        ></input>
        <button className="presupuesto__button" type="submit">
          Crear
        </button>
      </div>
      {error ? <p className="error">Presupuesto no Válido</p> : null}
      {exito ? <p className="exito">Presupuesto agregado</p> : null}
    </form>
  );
};

export default Presupuesto;
