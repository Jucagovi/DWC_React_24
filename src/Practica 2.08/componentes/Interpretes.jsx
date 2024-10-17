import React from "react";
import Interprete from "./Interprete.jsx";
import { generarUuidAleatorio } from "../bibliotecas/funciones.js";

const Interpretes = (props) => {
  const { interpretes } = props;
  return (
    <>
      <div id='interpretes'>
        {interpretes.length
          ? interpretes.map((valor, indice) => {
              /* Le paso a <Interprete> el objeto al completo. */
              return <Interprete key={generarUuidAleatorio()} datos={valor} />;
              /* Como el array no contiene identificador, 
              genero de forma aleatoria uno para pasarlo a key.
              Valdría el índice del array, pero si se utiliza 
              dos veces en un mismo componente se repiten los identificaodes. */
            })
          : `No se han encontrado intérpretes.`}
      </div>
    </>
  );
};

export default Interpretes;
