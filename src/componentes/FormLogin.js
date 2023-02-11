import React from 'react'
import '../estilos.css';


function FormLogin() {

  return (
    <>
      <div id="divlogin" className="container-fluid bd-gray">
        <form className="row">
          <h3 class="text-center">Login</h3>

          <div id="form1" class="col-sm-3" >
            <div class="row">

              <div class="col-sm-12 form-group">
                <input class="form-control" id="login" name="login" placeholder="Login" type="text" required />
              </div>

              <div class="col-sm-12 form-group">
                <input class="form-control" id="senha" name="senha" placeholder="Senha" type="text" required />
              </div>
              
                <div class="col-sm-8 form-group">
                <button class="btn btn-primary btn-block">Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div >
    </>
  );
}

export default FormLogin;
