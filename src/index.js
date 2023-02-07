import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App';
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Contato from './paginas/contato'
import Destinos from './paginas/destinos'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/" exact />
      <Route element={<Login />} path="/login" />
      <Route element={<Cadastro />} path="/cadastro" />
      <Route element={<Contato />} path="/contato" />
      <Route element={<Destinos />} path="/destinos" />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
