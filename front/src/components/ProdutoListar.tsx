import { useEffect, useState } from "react";
import { Produto } from "../interfaces/Produto";

function ProdutoListar() {
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
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });

    return (
        <div>
            <h1>Listar Produtos</h1>
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
                            <td>{new Date(produto.criadoEm).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );      
}

export default ProdutoListar;