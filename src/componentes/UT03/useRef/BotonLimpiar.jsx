import React from "react";

const BotonLimpiar = (props) => {
  // Se desestructura el objeto props.
  const { referencia1, referencia2 } = props;

  // Se utilizan las referencias para limpiar las clases.
  const limpiarClases = () => {
    /* referencia1.current.classList.remove("rojo");
    referencia2.current.classList.remove("rojo");
    referencia1.current.classList.remove("azul");
    referencia2.current.classList.remove("azul"); */
    // ¿Alguna forma mejor de hacer esto? (operador lógico AND).
    referencia1.current.classList.remove(referencia1.current.classList);
  };
  return (
    <>
      <button
        onClick={() => {
          limpiarClases();
        }}
      >
        Limpiar clases
      </button>
    </>
  );
};

export default BotonLimpiar;
