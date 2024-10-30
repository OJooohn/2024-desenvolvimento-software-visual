import React from 'react';
import ProdutoListar from './components/ProdutoListar';
import ComponenteExemplo from './components/ComponenteExemplo';
import ConsultarCep from './components/ConsultarCep';

function App() {
  return (
    <div>
      <h1>Projeto em React!</h1>
      <ComponenteExemplo/>
      <ConsultarCep/>
      <ProdutoListar/>
    </div>
  );
}

export default App;
