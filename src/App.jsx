import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  // aca va lo logica del componente

  return (
    // aca puedo agregar algo de logica pero no es tan comun usarla aqui
    <main className="container my-5">
    {/* aca va el maquetado del HTML */}
      <h1> Hola mundo </h1>
      <Informacion></Informacion>
    </main>
  );
}

export default App;
