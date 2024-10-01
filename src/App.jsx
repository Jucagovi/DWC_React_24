import "./App.css";
import Contenedor from "./componentes/solucion_207/Contenedor.jsx";
import Interprete from "./componentes/solucion_207/Interprete.jsx";

function App() {
  return (
    <>
      <Contenedor>
        <Interprete
          nombre='Feo'
          foto='https://previews.123rf.com/images/emrahavci/emrahavci2106/emrahavci210600416/170785980-hombre-feo-de-dibujos-animados-ilustraci%C3%B3n-vectorial-contornos-coloreados-y-negros.jpg'
        >
          Esta es la biografís del feo.
        </Interprete>
        <Interprete
          nombre='Horrible'
          foto='https://previews.123rf.com/images/emrahavci/emrahavci2106/emrahavci210600416/170785980-hombre-feo-de-dibujos-animados-ilustraci%C3%B3n-vectorial-contornos-coloreados-y-negros.jpg'
        >
          Esta es la biografís del horrible.
        </Interprete>
      </Contenedor>
    </>
  );
}

export default App;
