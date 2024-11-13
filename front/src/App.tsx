import React from 'react';
import ComponenteExemplo from './components/samples/ComponenteExemplo';
import ProdutoLista from './components/pages/produto/ProdutoLista';
import ProdutoCadastro from './components/pages/produto/ProdutoCadastro';
import ConsultarCep from './components/pages/cep/ConsultarCep';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Navbar.css';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav id="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/pages/produto/listar">Listar Produtos</Link>
            </li>

            <li>
              <Link to="/pages/produto/cadastrar">Cadastrar Produtos</Link>
            </li>

            <li>
              <Link to="/pages/endereco/consultar">Consultar Endereço</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/pages/produto/listar' element={<ProdutoLista/>}/>
          <Route path='/pages/produto/cadastrar' element={<ProdutoCadastro/>}/>
          <Route path='/pages/endereco/consultar' element={<ConsultarCep/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
