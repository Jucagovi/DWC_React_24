import "./App.css";
import Contenedor from "./componentes/solucion_207/Contenedor.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/UT03/rutas/Inicio.jsx";
import AcercaDe from "./componentes/UT03/rutas/AcercaDe.jsx";
import Error from "./componentes/UT03/rutas/Error.jsx";

/******************** Rutas en React con react-router-dom
 * Componentes implicados
 *
 *  · BrowserRoute  ->  captura el funcinnamiento del Location Object (BOM)
 *                      y previene el funcionamiento por defecto.
 *  · Routes        ->  genera un árbol de rutas y dibuja componentes.
 *  · Route         ->  representa una ruta de ese árbol de rutas.
 *  · Link          ->  sustituye a la etiqueta <a>.
 *  · Outlet        ->  indica el destino de rutas anidadas.
 *
 * Hooks implicados
 *
 *  · useNavigate   -> permite utilizar el History Object (BOM).
 *  · useParams     -> permite gestionar parámetros en las rutas.
 *
 */

function App() {
  // Variable para rutas condicionadas.
  const valorCualquiera = true;
  return (
    <>
      <BrowserRouter>
        <h1>¡Bienvenido/a a React!</h1>
        <Contenedor>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/acerca-de' element={<AcercaDe />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Contenedor>
      </BrowserRouter>
    </>
  );
}

export default App;
