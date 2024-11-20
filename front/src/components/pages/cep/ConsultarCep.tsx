import { useEffect, useState } from "react";
import { Cep } from "../../../models/Cep";
import './ConsultarCep.css';

function ConsultarCep() {

    // Variáveis, constantes e estados
    const [cep, setCep] = useState<Cep>();
    const [cepDigitado, setCepDigitado] = useState("");

    const [bairro, setBairro] = useState("");
    const [estado, setEstado] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [uf, setUF] = useState("");

    const [mostrarInfoCEP, setMostrarInfoCEP] = useState(false);

    useEffect(() => {
        // Função utilizada para executar algum código
        // ao abrir ou renderizar o componente
        // AXIOS biblioteca de requisições HTTP

        // console.log("O componente abriu!")

        // Irá fazer uma requisição
        // fetch("http://localhost:5014/api/produto/listar")
        //     .then(resposta => {
        //         if (!resposta.ok) 
        //             throw new Error('Erro na requisição: ' + resposta.statusText);
        //         return resposta.json();
        //     })
        //     .then(produtos => {
        //         console.log(produtos);
        //     })
        //     .catch(error => {
        //         console.error('Erro:', error);
        //     });
    });

    function digitar(e: any) {
        console.log(e.target.value);
        setCepDigitado(e.target.value);
    }

    function sairCaixaTexto(e: any) {
        // fetch("https://viacep.com.br/ws/" + cepDigitado + "/json/")
        //     .then(resposta => {
        //         if (!resposta.ok) 
        //             throw new Error('Erro na requisição: ' + resposta.statusText);

        //         // console.log(resposta)
        //         return resposta.json();
        //     })
        //     .then(cep => {
        //         // console.log(cep);

        //         setBairro(cep.bairro);
        //         setEstado(cep.estado);
        //         setLogradouro(cep.logradouro);

        //         setCep(cep);
        //     })
        //     .catch(error => {
        //         console.error('Erro:', error);
        //     });
    }

    function clicar(e: any) {
        fetch("https://viacep.com.br/ws/" + cepDigitado + "/json/")
            .then(resposta => {
                if (!resposta.ok)
                    throw new Error('Erro na requisição: ' + resposta.statusText);

                // console.log(resposta)
                return resposta.json();
            })
            .then(cep => {
                // console.log(cep);

                setBairro(cep.bairro);
                setEstado(cep.estado);
                setLogradouro(cep.logradouro);
                setLocalidade(cep.localidade);
                setUF(cep.uf);

                setCep(cep);
                setMostrarInfoCEP(true);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

    return (
        <div id="consultarCEP">
            <div id="consultarBox">
                <h1>Consultar CEP</h1>

                <input
                    type="text"
                    placeholder="Digite o CEP"
                    onChange={digitar}
                    onBlur={sairCaixaTexto} />

                <button onClick={clicar}>Consultar</button>

                {mostrarInfoCEP && (
                    <>
                        <h2>Informações do CEP</h2>
                        <p>Bairro: {bairro}</p>
                        <p>Estado: {estado}</p>
                        <p>Logradouro: {logradouro}</p>
                        <p>Localidade: {localidade}</p>
                        <p>UF: {uf}</p>
                    </>
                )}

                {/* {cep && (
                        <div>
                            <p>CEP: {cep.cep} </p>
                            <p>Logradouro: {cep.logradouro} </p>
                            <p>Bairro: {cep.bairro} </p>
                            <p>Localidade: {cep.localidade} </p>
                            <p>UF: {cep.uf} </p>
                        </div>
                    )} */}
            </div>
        </div>
    );
}

export default ConsultarCep;

// Exibir alguma informação do CEP no navegador
// Realizar a requisição para a sua API
// Resolver o problema que será mostrado no console
// Exibir a lista de produtos no navegador