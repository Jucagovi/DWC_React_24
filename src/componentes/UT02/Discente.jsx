function Discente(props) {
  // Desestructuración de parámetros.
  return (
    <>
      <div>
        <p>Apellidos, Nombre</p>
        <p>Curso matrícula</p>
        <p>Módulos matrícula</p>
        {/* <p>
          {props.apellidos}, {props.nombre}
        </p>
        <p>{props.curso}</p>
        <p>{props.children}</p> */}
      </div>
    </>
  );
}

export default Discente;
