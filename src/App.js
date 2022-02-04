import './App.css';
import { Link } from 'react-router-dom'
function App() {
  return (
    <header>
      <h1>Aqui é a home</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/destinos">Destinos</Link>
    </header>
  );
}

export default App;
