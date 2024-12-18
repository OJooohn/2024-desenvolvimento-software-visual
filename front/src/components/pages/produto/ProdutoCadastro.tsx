import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import './ProdutoCadastro.css';

function ProdutoCadastro() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    function enviarProduto(e : any){
        
        e.preventDefault();

        const produto : Produto =  {
            nome : nome,
            descricao : descricao,
            quantidade : Number(quantidade),
            preco : Number(preco),
            categoriaId : Number(categoriaId)
        };

        fetch("http://localhost:5014/api/produto/cadastrar/",
                {
                    method : 'POST',
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(produto)
                })
            .then(resposta => {
                return resposta.json();
            })
            .then(produto => {
                // setProduto(produto);
                console.log("Produto cadastrado: ", produto);
            })
    }

    return(
        <div id="cadastrar_produto">
            <div id="cadastroBox">
                <h1>Cadastro de Produto</h1>

                <form onSubmit={enviarProduto}>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <textarea id="nome" name="nome" 
                        required
                        onChange={(e : any) => setNome(e.target.value)}></textarea>
                    </div>

                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="descricao" name="descricao"
                        required
                        onChange={(e : any) => setDescricao(e.target.value)}></textarea>
                    </div>

                    <div>
                        <label htmlFor="preco">Preço</label>
                        <input type="number" id="preco" name="preco" 
                        required
                        onChange={(e : any) => setPreco(e.target.value)}></input>
                    </div>

                    <div>
                        <label htmlFor="quantidade">Quantidade em Estoque</label>
                        <input type="number" id="quantidade" name="quantidade" 
                        required
                        onChange={(e : any) => setQuantidade(e.target.value)}></input>
                    </div>
                    
                    <div>
                        <label htmlFor="quantidade">Categorias</label>
                        <select onChange={(e : any) => setCategoriaId(e.target.value)}>
                            <option value="1">Bebidas</option>
                            <option value="2">Comidas</option>
                            <option value="3">Roupas</option>
                        </select>
                    </div>

                    <button type="submit">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    );
}

export default ProdutoCadastro;