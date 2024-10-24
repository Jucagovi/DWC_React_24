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
import AdminPeliculas from "./submenu/AdminPeliculas.jsx";
import AdminInterpretes from "./submenu/AdminInterpretes.jsx";
import AdminUsuarios from "./submenu/AdminUsuarios.jsx";
import PeliculasListado from "./parametros/PeliculasListado.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
        <Route
          path='/peliculas'
          element={<PeliculasListado listado={listado.peliculas} />}
        />
        {/* Creación de submenús. */}
        <Route path='/administracion' element={<Administracion />}>
          <Route path='peliculas' element={<AdminPeliculas />} />
          <Route path='interpretes' element={<AdminInterpretes />} />
          <Route path='usuarios' element={<AdminUsuarios />} />
        </Route>
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
