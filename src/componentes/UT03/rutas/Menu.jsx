import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    // ¿Estilo a los enlaces?
    <>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/login'>Login</Link>
        <Link to='/acerca-de'>Acerca de</Link>
      </nav>
    </>
  );
};

export default Menu;
