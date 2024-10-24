import React from "react";
import "./Administracion.css";
import { Link, useNavigate, Outlet } from "react-router-dom";

const Administracion = () => {
  const navegar = useNavigate();
  return (
    <>
      <h2>Panel de administración.</h2>
      <div className='administracion-navegacion'>
        <Link
          className='administracion-elementomenu'
          to='/administracion/peliculas'
        >
          Películas
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/administracion/interpretes'
        >
          Intérpretes
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/administracion/usuarios'
        >
          Usuarios/as
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <button
          onClick={() => {
            navegar("/");
          }}
        >
          Volver a inicio
        </button>
      </div>
    </>
  );
};

export default Administracion;
