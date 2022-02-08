import React from 'react'
import '../estilos.css';

function FormCadastro() {
  return (
    <>
    <div id="divform" className="container-fluid bd-gray">
<form className="row"> 
      <h3 class="text-center">Cadastro</h3>
      
      <div id= "form" class="col-sm-8" >
              <div  class="row">
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                </div>
               
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="sobrenome" name="sobrenome" placeholder="Sobrenome" type="text" required/>
                </div>
                <br/>
                <br/>
            
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="email" name="email" placeholder="Email" type="text" required/>
                </div>
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="cpf" name="cpf" placeholder="C.P.F." type="text" required/>
                </div>
                <br/>
                <br/>

                <div class="col-sm-6 form-group">
                  <input class="form-control" id="endereço" name="endereço" placeholder="Endereço" type="text" required/>
                </div>
                <div class="col-sm-2 form-group">
                  <input class="form-control" id="numero" name="numero" placeholder="Numero" type="text" required/>
                </div>
                <div class="col-sm-4 form-group">
                  <input class="form-control" id="complemento" name="complemento" placeholder="Complemento" type="text" required/>
                </div>
                <br/>
                <br/>

                <div class="col-sm-6 form-group">
                  <input class="form-control" id="bairro" name="bairro" placeholder="Bairro" type="text" required/>
                </div>
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="cidade" name="cidade" placeholder="Município/Cidade" type="text" required/>
                </div>
                <br/>
                <br/>

                <div class="col-sm-6 form-group">
                  <input class="form-control" id="estado" name="estado" placeholder="Estado" type="text" required/>
                </div>
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="pais" name="pais" placeholder="País" type="text" required/>
                </div>
                <br/>
                <br/>
              <div>
                <div id="central" class="col-sm-6 form-group">
                  <input class="form-control" id="senha" name="senha" placeholder="Cadastre sua senha." type="text" required/>
                </div>
                <br/>
                <br/>

                <div class="col-sm-8 form-group">
                <button >Enviar</button>   
                </div> 
                </div>
              </div>

              
      </div>   
      
    </form>
    </div>
    </>
  );
}

export default FormCadastro;
