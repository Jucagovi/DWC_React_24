const Discente = (props) => {
  // Desestructuración de parámetros.
  const { nombre, apellidos, curso, children } = props;
  return (
    <>
      <div>
        {/* <p>Apellidos, Nombre</p>
        <p>Curso matrícula</p>
        <p>Módulos matrícula</p> */}
        <p>
          {apellidos}, {nombre}
        </p>
        <p>{curso}</p>
        <p>{children}</p>
      </div>
    </>
  );
};

export default Discente;
