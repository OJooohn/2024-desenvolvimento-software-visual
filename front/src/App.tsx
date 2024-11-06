import React from 'react';
import ComponenteExemplo from './components/samples/ComponenteExemplo';
import ProdutoLista from './components/pages/produto/ProdutoLista';
import ProdutoCadastro from './components/pages/produto/ProdutoCadastro';
import ConsultarCep from './components/pages/cep/ConsultarCep';

function App() {
  return (
    <div>
      <h1>Projeto em React!</h1>
      <ComponenteExemplo/>
      <ConsultarCep/>
      <ProdutoLista/>
      <ProdutoCadastro/>
    </div>
  );
}

export default App;
