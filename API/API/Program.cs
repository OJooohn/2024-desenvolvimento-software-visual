// Testar as APIs
// - Rest Client - Extensão do VS Code
// - Postman
// - Insomnia
// MINIMAL APIs

// API retornar dados -> GET
// API recebendo dados -> POST

// import de Java
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Produto> produtos = new List<Produto>();
// produtos.Add(new Produto(){
//     Nome = "Notebook",
//     Preco = 5000,
//     Quantidade = 54
// });
// produtos.Add(new Produto(){
//     Nome = "Desktop",
//     Preco = 3500,
//     Quantidade = 150
// });
// produtos.Add(new Produto(){
//     Nome = "Monitor",
//     Preco = 1200,
//     Quantidade = 15
// });
// produtos.Add(new Produto(){
//     Nome = "Caixa de Som",
//     Preco = 650,
//     Quantidade = 70
// });

// EndPoints - Funcionalidades
// Request - Configurar a URL e o método/verbo HTTP
// Response - Retornar os dados (json/xml) e o status
app.MapGet("/", () => "API de Produtos");

// GET: /produto/listar
app.MapGet("/produto/listar", () => 
{
    // produtos.Any
    // retorna True (not empty) or False (empty)
    // Outra maneira é contar quantos elementos existem
    if(produtos.Count > 0)
        return Results.Ok(produtos);
    
    return Results.NotFound();
});

app.MapGet("/produto/buscar/{nome}",
(string nome) => {
    foreach(Produto produtoCadastrado in produtos){
        if(produtoCadastrado.Nome == nome)
            return Results.Ok(produtoCadastrado);
    }
    return Results.NotFound();
});

// POST: /produto/cadastrar
// "/produto/cadastrar/{nome}/{preco}/{quantidade}"
// ruim passar informações pela URL
app.MapPost("/produto/cadastrar/",
([FromBody] Produto produto) => {
    // Adicionando dentro da lista
    produtos.Add(produto);
    return Results.Created("", produto);
});

// Criar uma funcionalidade para receber informações
// - Receber informações pela URL da requisição
// - receber informações pelo corpo da requisição
// - Guardar as informações em uma lista

//             Métodos HTTP
// Create   ->    Post
// Retrieve ->    Get
// Update   ->    Put / Patch
// Delete   ->    Delete 

app.Run();

// C# - Utilização dos gets e sets
// Produto produto = new Produto(){
//     Nome = "",
//     Preco = 5,
//     Quantidade = 0
// };

// Produto produto = new Produto(); awo :D eow
// produto.Preco = 5;
// Console.WriteLine("Preço: " + produto.Preco);

// JAVA - Utilização dos gets e sets
// Produto produto = new Produto();
// produto.setPreco(5);
// Console.WriteLine("Preço: " + produto.getPreco());