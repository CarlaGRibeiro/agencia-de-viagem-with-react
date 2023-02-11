import React from 'react'
import '../estilos.css';


function FormContato() {
  return (
    <>
      <div id="divform" className="container-fluid bd-gray">
        <form className="row">

          <h3 class="text-center">Contato</h3>

          <div id="form" class="col-sm-6" >
            <div class="row">
              <div class="col-sm-6 form-group">
                <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
              </div>

              <div class="col-sm-6 form-group">
                <input class="form-control" id="email" name="email" placeholder="E-mail" type="text" required />
              </div>

              <div class="col-sm-12 form-group">
                <label class="sr-only" for="mensagem">Mensagem</label>
                <textarea name="mensagem" id="mensagem" cols="100" rows="7" class="form-control" placeholder="Digite aqui sua mensagem" />
              </div>

              <div class="col-sm-8 form-group">
              <button class="btn btn-primary btn-block">Enviar</button>
            </div> 
            </div>

            

          </div>
        </form>
      </div>
    </>
  );
}

export default FormContato;
