import React, { useEffect, useState } from "react";
import "./panel.css";

const Panel = ({ credito, restante }) => {
  const [oculto, setOculto] = useState("oculto");
  const [color, setColor] = useState("verde");
  useEffect(() => {
    /* debugger; */
    /* Calculamos si mostrar el panel o no */
    credito !== 0 ? setOculto("") : setOculto("oculto");
    /* calculamos el color del restante */

    const porcentaje = (restante * 100) / credito;
    if (porcentaje <= 100) {
      setColor("verde");
    }
    if (porcentaje < 50) {
      setColor("naranja");
    }
    if (porcentaje < 25) {
      setColor("rojo");
    }
  }, [credito, restante]);

  return (
    <div className={"panel " + oculto}>
      <div className="panel__bloque">
        <p className="panel__title">Gastar:</p>
        <p className="panel__result verde">{credito}€</p>
      </div>
      <div className="panel__bloque">
        <p className="panel__title">Restante: </p>
        <p className={"panel__result " + color}>{restante}€</p>
      </div>
    </div>
  );
};

export default Panel;
