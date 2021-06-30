import './App.css';
import Hola from './components/Hola.jsx';
import Contador from "./components/Contador";
function App() {
  return (
    <div className="App">
        <h1>Titulo del primer proyecto</h1>
        <Hola></Hola>
        <Contador></Contador>
        <Contador></Contador>
        <Contador></Contador>
        <Contador></Contador>
    </div>
  );
}

export default App;
