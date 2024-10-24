import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    // ¿Estilo a los enlaces?
    <>
      <nav>
        <Link className='menu-elemento' to='/'>
          Inicio
        </Link>
        <Link className='menu-elemento' to='/login'>
          Login
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca de
        </Link>
        <Link className='menu-elemento' to='/peliculas'>
          Películas
        </Link>
        <Link className='menu-elemento' to='/contacto'>
          Contacto
        </Link>
        <Link className='menu-elemento' to='/administracion'>
          Administracion
        </Link>
      </nav>
    </>
  );
};

export default Menu;
