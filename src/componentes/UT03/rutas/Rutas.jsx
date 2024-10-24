import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Contacto from "./Contacto.jsx";
import AcercaDe from "./AcercaDe.jsx";
import Peliculas from "../../../Practica 2.08/componentes/Peliculas.jsx";
import Error from "./Error.jsx";
import Administracion from "./Administracion.jsx";
import listado from "../../../Practica 2.08/objetos/peliculas.json";
import PeliculaDetalle from "./parametros/PeliculaDetalle.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
        <Route
          path='/peliculas'
          element={<Peliculas listado={listado.peliculas} />}
        />
        {/* Creación de submenús. */}
        <Route path='/administracion' element={<Administracion />} />
        {/* Uso de parámetros en las rutas. */}
        <Route
          path='/pelicula-detalle/:identificador'
          element={<PeliculaDetalle listado={listado.peliculas} />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;
