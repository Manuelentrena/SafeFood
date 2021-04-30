import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Presupuesto from "./components/Presupuesto/Presupuesto";
import Producto from "./components/Producto/Producto";
import Panel from "./components/Panel/Panel";
import List from "./components/List/List";

function App() {
  //State del presupuesto y el restante
  const [credito, setCredito] = useState(0);
  const [restante, setRestante] = useState(0);
  return (
    <>
      <Header />
      <Hero />
      <Presupuesto setCredito={setCredito} setRestante={setRestante} />
      <Producto credito={credito} />
      <List />
      <Panel credito={credito} restante={restante} />
    </>
  );
}

export default App;
