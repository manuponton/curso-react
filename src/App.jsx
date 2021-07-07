import './App.css';
import Hola from './components/Hola.jsx';
import Contador from "./components/Contador";
import Listado from "./components/Listado";
import Temperatura from "./components/Temperatura";
import Formulario from "./components/Formulario";
function App() {
  return (
    <div className="App mt-5">
        <h1>Titulo del primer proyecto</h1>
        {/*<Hola></Hola>*/}
        {/*<Contador></Contador>*/}
        {/*<Contador></Contador>*/}
        {/*<Contador></Contador>*/}
        {/*<Contador></Contador>*/}
        {/*<Listado></Listado>*/}
        <Temperatura></Temperatura>
        <Formulario></Formulario>
    </div>
  );
}

export default App;
