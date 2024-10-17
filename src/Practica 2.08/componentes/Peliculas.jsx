import React from "react";
import Pelicula from "./Pelicula.jsx";

const Peliculas = (props) => {
  const { listado } = props;

  return (
    <>
      <div id='peliculas'>
        {listado.length
          ? listado.map((valor) => {
              return (
                <Pelicula
                  key={valor.id}
                  nombre={valor.nombre}
                  cartelera={valor.cartelera}
                  actores={valor.actores}
                  /* Todo esto se puede resumir si la pasamos directamente el objeto de esta forma: datos={valor}.
                  Eso sí, en <Pelicula> habría que descomponer props.datos y no props. 
                  Ver ejemplo en <Interpretes>.*/
                >
                  {valor.resumen}
                </Pelicula>
              );
            })
          : `No se han encontrado películas.`}
      </div>
    </>
  );
};

export default Peliculas;
