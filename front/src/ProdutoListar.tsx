import { useEffect } from "react";

function ProdutoListar() {
    useEffect(() => {
        // Função utilizada para executar algum código
        // ao abrir ou renderizar o componente
        // AXIOS biblioteca de requisições HTTP

        // console.log("O componente abriu!")

        // Irá fazer uma requisição
        fetch("https://viacep.com.br/ws/81280330/json/")
            .then(resposta => {
                // console.log(resposta)
                return resposta.json();
            })
            .then(cep => {
                console.log(cep);
            })
    });

    return (
        <div>
            <h1>Primeiro Post!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat autem, porro molestiae rem possimus tenetur quia blanditiis ab velit architecto eum enim at eveniet non exercitationem, consequuntur aut quaerat?</p>
        </div>
    );    
}

export default ProdutoListar;

// Exibir alguma informação do CEP no navegador
// Realizar a requisição para a sua API
// Resolver o problema que será mostrado no console
// Exibir a lista de produtos no navegador