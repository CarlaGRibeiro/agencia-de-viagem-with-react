import React from 'react'
import { Link } from 'react-router-dom'
import mapamundi2 from '../componentes/img/mapamundi2.jpg'

function Header() {
  return (
    <>

      <header id="header" className="container-fluid bd-gray">

        <img id="topo" src={mapamundi2} />
        <h1>Tardis Company</h1>
        <div className="container-fluid bd-gray">

          <div className="row-1">
            <div className="col-sm-2 ">
             <Link to="/">Home</Link> 
            </div>

            <div className="col-sm-2 ">
              <Link to="/login">Login</Link>
            </div>

            <div className="col-sm-2 ">
              <Link to="/cadastro">Cadastro</Link>
            </div>

            <div className="col-sm-2 ">
              <Link to="/contato">Contato</Link>
            </div>

            <div className="col-sm-2 ">
              <Link to="/destinos">Destinos</Link>
            </div>
          </div>
        </div>
      </header>



    </>
  );
}

export default Header;
