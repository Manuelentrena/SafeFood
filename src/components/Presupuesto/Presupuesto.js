import React, { useState } from "react";
import "./presupuesto.css";

const Presupuesto = ({ setCredito, setRestante }) => {
  // Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [error, setError] = useState(false);

  //Funcion createPresupuesto
  const addPresupuesto = (e) => {
    setPresupuesto(parseInt(e.target.value, 10));
  };

  //submit del presupuesto
  const createPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (presupuesto < 1 || isNaN(presupuesto)) {
      setError(true);
      return;
    }

    setError(false);
    setCredito(presupuesto);
    setRestante(presupuesto);
  };

  return (
    <form className="presupuesto" onSubmit={createPresupuesto}>
      <div className="presupuest__header">Tu presupuesto</div>
      <div className="presupuesto__body">
        <input
          className="presupuesto__input"
          type="number"
          placeholder="Introduce tu presupuesto"
          onChange={addPresupuesto}
          required
        ></input>
        <button className="presupuesto__button" type="submit">
          Crear
        </button>
      </div>
      {error ? <p className="error">Presupuesto no Válido</p> : null}
    </form>
  );
};

export default Presupuesto;
