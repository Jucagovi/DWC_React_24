import "./App.css";
import Discente from "./componentes/UT02/Discente.jsx";
import PrimerComponente from "./componentes/UT02/PrimerComponente.jsx";

function App() {
  return (
    <>
      <h1>¡Bienvenidos al mundo de React!</h1>
      <Discente nombre='Feo' apellidos='De Verdad' curso='2DAW'>
        <PrimerComponente />
      </Discente>
      <Discente nombre='mUY feO' apellidos='Cierto' curso='2DAW'>
        Hola
      </Discente>
    </>
  );
}

export default App;
