import React, { useEffect, useState } from "react";
import "./panel.css";

const Panel = ({ credito, restante }) => {
  const [oculto, setOculto] = useState("oculto");

  useEffect(() => {
    credito !== 0 ? setOculto("") : setOculto("oculto");
  }, [credito]);

  return (
    <div className={"panel " + oculto}>
      <div className="panel__bloque">
        <p className="panel__title">Presupuesto:</p>
        <p className="panel__result verde">{credito}€</p>
      </div>
      <div className="panel__bloque">
        <p className="panel__title">Restante: </p>
        <p className="panel__result naranja">{restante}€</p>
      </div>
    </div>
  );
};

export default Panel;
