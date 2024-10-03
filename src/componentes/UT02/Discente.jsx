const Discente = (props) => {
  // Desestructuración de parámetros.
  const { nombre, apellidos, curso, aficiones, children, comida } = props.datos;
  console.log(props.datos);
  return (
    <>
      <div>
        <p>
          {apellidos}, {nombre}
        </p>
        <p>{curso}</p>
        <p>{children}</p>
        <p>{aficiones}</p>
        <p>{comida}</p>
      </div>
    </>
  );
};

export default Discente;
