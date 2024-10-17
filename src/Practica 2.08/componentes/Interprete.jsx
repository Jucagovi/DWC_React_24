import React from "react";

const Interprete = (props) => {
  /* Se desestructura el objeto datos, no props ya que el primero está contenido en el segundo. */
  const { imagen, nombre, biografia } = props.datos;
  return (
    <>
      <div className='interprete'>
        <div>
          <img src={imagen} alt='No se ha encontrado imagen.' />
        </div>
        <div>
          <h4>{nombre}</h4>
          <p>{biografia}</p>
        </div>
      </div>
    </>
  );
};

export default Interprete;
