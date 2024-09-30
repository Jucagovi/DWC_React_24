import React, { Fragment } from "react";
import "./PrimerComponente.css";

//function PrimerComponente(props) {
const PrimerComponente = (props) => {
  const texto = "Esto es un componente de prueba.";
  const tecnologia = "";
  return (
    /* Uso de los Fragment. */
    <Fragment>
      <div id='contenedor'>
        <h1>
          ¡Hola mundo desde mi primer componente en
          <span className='tecnologia'>
            {tecnologia ? tecnologia : " React"}
          </span>
          !
        </h1>
        <h2>{texto}</h2>
      </div>
    </Fragment>
  );
};

export default PrimerComponente;
