import React, { useRef } from "react";

const Numericos = () => {
  const anadirNumerico = () => {
    referenciaFea.current.innerHTML += `<li>Número generado de forma aleatoria: ${obtenerNumeroAleatorio()}.</li>`;
  };

  const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  // Ejemplo de uso
  console.log(obtenerNumeroAleatorio());

  const referenciaFea = useRef(null);
  return (
    <>
      <div>
        <button
          onClick={() => {
            anadirNumerico();
          }}
        >
          Añadir Numerico
        </button>
        <ol ref={referenciaFea}></ol>
      </div>
    </>
  );
};

export default Numericos;
