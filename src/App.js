import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Presupuesto from "./components/Presupuesto/Presupuesto";
import Producto from "./components/Producto/Producto";
import Panel from "./components/Panel/Panel";
import List from "./components/List/List";

function App() {
  /* Productos y presupuesto en localstorage */
  let productosInitials = JSON.parse(localStorage.getItem("productos"));
  if (!productosInitials) {
    productosInitials = [];
  }

  let presupuestoInitial = JSON.parse(localStorage.getItem("presupuesto"));
  if (!presupuestoInitial) {
    presupuestoInitial = 0;
  }

  //State del presupuesto y el restante
  const [productos, setProductos] = useState(productosInitials);
  const [credito, setCredito] = useState(presupuestoInitial);
  const [restante, setRestante] = useState(0);
  const [gasto, setGasto] = useState(0);

  /* Cada vez que cambio productos */
  useEffect(() => {
    /* Actualizamos Gasto*/
    setGasto(
      productos.reduce((acumulador, producto) => {
        return acumulador + producto.unidades * producto.precio;
      }, 0)
    );
    /* Actualizamos Restante*/
    setRestante(credito - gasto);
    /* Administrar LocalStorage a través de useEffect*/
    localStorage.setItem("presupuesto", JSON.stringify(credito));
    localStorage.setItem("productos", JSON.stringify(productos));
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
