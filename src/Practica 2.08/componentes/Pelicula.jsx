import React from "react";
import Interpretes from "./Interpretes.jsx";

const Pelicula = (props) => {
  const { nombre, cartelera, actores, children } = props;
  return (
    <>
      <div className='pelicula'>
        <h2>{nombre}</h2>
        <div>
          <img src={cartelera}></img>
          <p className='resumen'>{children}</p>
        </div>
        <div>
          <h3>Elenco</h3>
          <div>
            <Interpretes interpretes={actores} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pelicula;
