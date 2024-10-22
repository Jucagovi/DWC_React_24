import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Contacto from "./Contacto.jsx";
import Peliculas from "../../../Practica 2.08/componentes/Peliculas.jsx";
import Error from "./Error.jsx";
import listado from "../../../Practica 2.08/objetos/peliculas.json";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route
          path='/peliculas'
          element={<Peliculas listado={listado.peliculas} />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;
