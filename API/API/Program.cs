// MINIMAL APIs

// import de Java
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Produto> produtos =
[
    new Produto() { Nome = "Notebook", Preco = 5000, Quantidade = 54 },
    new Produto() { Nome = "Desktop", Preco = 3500, Quantidade = 150 },
    new Produto() { Nome = "Monitor", Preco = 1200, Quantidade = 15 },
    new Produto() { Nome = "Caixa de Som", Preco = 650, Quantidade = 70 },
];

// EndPoints - Funcionalidades
// Request - Configurar a URL e o método/verbo HTTP
// Response - Retornar os dados (json/xml) e o código de status HTTP
app.MapGet("/", () => "API de Produtos");

//GET: /api/produto/listar
app.MapGet("/api/produto/listar", () =>
{
    if (produtos.Count > 0) {
        return Results.Ok(produtos);
    }
    return Results.NotFound();
});

//GET: /api/produto/buscar/{id}
app.MapGet("/api/produto/buscar/{id}", ([FromRoute] string id) =>
{
    Produto? produto = produtos.Find(x => x.Id == id);
    if (produto == null) {
        return Results.NotFound();
    }
    return Results.Ok(produto);
});

//POST: /api/produto/cadastrar/param_nome
app.MapPost("/api/produto/cadastrar", ([FromBody] Produto produto) =>
{
    produtos.Add(produto);
    return Results.Created("", produto);
});

//DELETE: /api/produto/deletar/{id}
app.MapDelete("/api/produto/deletar/{id}", ([FromRoute] string id) =>
{
    Produto? produto = produtos.Find(x => x.Id == id);
    if (produto == null) {
        return Results.NotFound();
    }
    produtos.Remove(produto);
    return Results.Ok(produto);
});

//PUT: /api/produto/alterar/{id}
app.MapPut("/api/produto/alterar/{id}", ([FromRoute] string id, [FromBody] Produto produtoAlterado) =>
{
    Produto? produto = produtos.Find(x => x.Id == id);
    if (produto == null) {
        return Results.NotFound();
    }
    produto.Nome = produtoAlterado.Nome;
    produto.Quantidade = produtoAlterado.Quantidade;
    produto.Preco = produtoAlterado.Preco;
    return Results.Ok(produto);
});

app.Run();

// --------------------------------------------------------------------

// ANOTAÇÕES
// Testar as APIs
// - Rest Client - Extensão do VS Code
// - Postman
// - Insomnia

// Para instalar a os pacotes é necessario ir para o diretório do PROJETO, não da SOLUÇÃO

// Criar uma funcionalidade para receber informações
// - Receber informações pela URL da requisição
// - receber informações pelo corpo da requisição
// - Guardar as informações em uma lista

//             Métodos HTTP
// Create   ->    Post
// Retrieve ->    Get
// Update   ->    Put / Patch
// Delete   ->    Delete 

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