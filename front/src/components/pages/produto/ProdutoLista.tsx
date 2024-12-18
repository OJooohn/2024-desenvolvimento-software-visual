import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import './ProdutoLista.css';

function ProdutoLista() {
    
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        fetch("http://localhost:5014/api/produto/listar")
            .then(resposta => {
                if (!resposta.ok) 
                    throw new Error('Erro na requisição: ' + resposta.statusText);
                
                // console.log(resposta)
                return resposta.json();
            })
            .then(produtos => {
                setProdutos(produtos);
                // console.table(produtos);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });

    return(
        <div id="listarProdutos">
            <div id="divTable">
                <h1>Produtos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Criado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.criadoEm ? new Date(produto.criadoEm).toLocaleDateString() : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProdutoLista;