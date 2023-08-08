import { FiSearch } from "react-icons/fi";
import './styles.css'
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CPF</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..."></input>
        <button className="buttonSearch">
          <FiSearch size={25} color ='FFF'/>
        </button>
      </div>

    </div>
  );
}

export default App;
