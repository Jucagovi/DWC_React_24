import "./App.css";
import Contenedor from "./componentes/solucion_207/Contenedor.jsx";
import Menu from "./componentes/UT03/rutas/Menu.jsx";
import Rutas from "./componentes/UT03/rutas/Rutas.jsx";

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
  const valorCualquiera = false;
  return (
    <>
      <h1>¡Bienvenido/a a React!</h1>
      <Menu />
      <Contenedor>
        <Rutas />
      </Contenedor>
    </>
  );
}

export default App;

{
  /* <Route path='/' element={<Login />} />
<Route path='/acerca-de' element={<AcercaDe />} />
<Route
  path='/peliculas'
  element={<Peliculas listado={listado.peliculas} />}
/>
<Route path='/feo' element={<Contacto />} />
<Route path='*' element={<Error />} /> */
}
