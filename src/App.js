import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Presupuesto from "./components/Presupuesto/Presupuesto";
import Producto from "./components/Producto/Producto";
import Panel from "./components/Panel/Panel";
import List from "./components/List/List";

function App() {
  //State del presupuesto y el restante
  const [productos, setProductos] = useState([]);
  const [credito, setCredito] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gasto, setGasto] = useState(0);

  /* Cada vez que cambio productos */
  useEffect(() => {
    /* if (productos.length > 0) { */
    /* Actualizamos Gasto*/
    setGasto(
      productos.reduce((acumulador, producto) => {
        return acumulador + producto.unidades * producto.precio;
      }, 0)
    );
    /* Actualizamos Restante*/
    setRestante(credito - gasto);
    /*     } */
  }, [productos, credito, gasto]);

  /* Funcion para agragar nuevo producto */
  const addProductoToList = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  /* Borrar producto */
  const borrarProducto = (id) => {
    const nuevaListaProductos = productos.filter(
      (producto) => producto.id !== id
    );
    setProductos([...nuevaListaProductos]);
  };

  return (
    <>
      <Header />
      <Hero />
      <Presupuesto
        setCredito={setCredito}
        setRestante={setRestante}
        gasto={gasto}
      />
      <Producto
        credito={credito}
        addProductoToList={addProductoToList}
        gasto={gasto}
      />
      <List
        productos={productos}
        gasto={gasto}
        borrarProducto={borrarProducto}
      />
      <Panel credito={credito} restante={restante} />
    </>
  );
}

export default App;
