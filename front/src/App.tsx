import React from 'react';
import ProdutoListar from './components/samples/ProdutoListarTeste';
import ComponenteExemplo from './components/samples/ComponenteExemplo';
import ConsultarCep from './components/samples/ConsultarCep';
import ProdutoLista from './components/pages/produto/ProdutoLista';
import ProdutoCadastro from './components/pages/produto/ProdutoCadastro';

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
