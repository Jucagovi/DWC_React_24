import React, { useRef } from "react";

const NUmerocis2 = () => {
  const refe = useRef(null);

  const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const anadirNumerico = (referencia) => {
    referencia.current.innerHTML += `<li>Número: ${obtenerNumeroAleatorio()}.</li>`;
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            anadirNumerico(refe);
          }}
        >
          Añadir numerico
        </button>
        <ol ref={refe}></ol>
      </div>
    </>
  );
};

export default NUmerocis2;
