import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/destinos">Destinos</Link>
    </header>
  );
}

export default Header;
