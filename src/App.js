import React from 'react'
import './estilos.css';
import Header from './componentes/Header'
import FormViagem from './componentes/FormViagem'
import TxtHome from './componentes/TxtHome'

import Footer from './componentes/Footer'

function App() {
  return (
    <>

      <Header />
      <main id="mainhome" className="container-fluid bd-gray">
          <div className="row">
            <div id="txt.home" class="col-sm-12" >
              <div class="row">
              <div class="col-sm-7">
                    <TxtHome />
                  </div>
                  
                  <div class="col-sm-5 ">
                    <FormViagem />
                  </div>
                  
                  <div>
                </div>
              </div>
            </div>
          </div>
      </main>
      <Footer />

    </>
  );
}

export default App;
