import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

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
        <div>
            <h1>Lista de Produtos!</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Criado Em</th>
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
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProdutoLista;