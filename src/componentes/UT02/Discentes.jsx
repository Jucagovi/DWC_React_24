import React from "react";

function Discentes() {
  const discentes = [
    {
      id: 1,
      nombre: "Feo",
      apellidos: "De verdad de la buena",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW, DES",
    },
    {
      id: 2,
      nombre: "Fea",
      apellidos: "También De verdad",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW",
    },
    {
      id: 3,
      nombre: "Horrible",
      apellidos: "De verdad",
      curso: "2DAW",
      modulos: "DWC",
    },
  ];

  return (
    <>
      <h1>Listado de discentes.</h1>
      {/* <div>
        {discentes.map((v, i, a) => {
          return (
            <Discente
              key={v.id}
              nombre={v.nombre}
              apellidos={v.apellidos}
              curso={v.curso}
            >
              {v.modulos}
            </Discente>
          );
        })}
      </div> */}
      {/* <div>
        {discentes.length
          ? discentes.map((v, i, a) => {
              return (
                <Discente
                  key={v.id}
                  nombre={v.nombre}
                  apellidos={v.apellidos}
                  curso={v.curso}
                >
                  {v.modulos}
                </Discente>
              );
            })
          : "No se han encontrado discentes."}
      </div> */}
    </>
  );
}

export default Discentes;