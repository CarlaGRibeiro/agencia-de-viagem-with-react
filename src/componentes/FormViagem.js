import React from 'react'
import '../estilos.css';


function FormViagem() {
  return (
    <>
      <form>
        <div class="col-md-6 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
          <div class="form-wrap">
            <div class="tab">

              <div class="tab-content">
                <div class="tab-content-inner active" data-content="signup">
                  <h3>Agende sua viagem</h3>
                  <form action="#">
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label for="fullname">Seu Nome</label>
                        <input type="text" id="fullname" class="form-control" placeholder="Nome completo" />
                      </div>
                      <div class="col-md-12">
                        <label for="email">Seu E-mail</label>
                        <input type="text" id="email" class="form-control" placeholder="E-mail" />
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label for="Embarque">Origem do embarque</label>
                        <select name="#" id="embarque" class="form-control">
                          <option value="">Selecione</option>
                          <option value="">Rio de Janeiro</option>
                          <option value="">São Paulo</option>
                          <option value="">Brasília</option>
                          <option value="">Nova York</option>
                          <option value="">Paris</option>
                          <option value="">Canadá</option>
                        </select>
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label for="destination">Destinos</label>
                        <select name="#" id="destination" class="form-control">
                          <option value="">Selecione</option>
                          <option value="">Rio de Janeiro</option>
                          <option value="">São Paulo</option>
                          <option value="">Brasília</option>
                          <option value="">Nova York</option>
                          <option value="">Paris</option>
                          <option value="">Canadá</option>
                        </select>
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <label for="date-start">Data da viagem</label>
                        <input type="date" id="date-start" class="form-control" />
                      </div>
                                           
                      <div id="botoes-form" class="row form-group">
                        <div class="col-md-6">
                          <input type="submit" class="btn btn-primary btn-block" value="Submit" />

                        </div>
                        <div class="col-md-6">
                          <input type="reset" class="btn btn-primary btn-block" value="Cancelar" />

                        </div>
                      </div>
                    </div>
                  </form>
                </div>


              </div>
            </div>
          </div>
        </div>

      </form>

    </>
  );
}

export default FormViagem;
