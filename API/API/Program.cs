// MINIMAL APIs

// import de Java
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

builder.Services.AddCors(options =>
    options.AddPolicy("Acesso Total",
        configs => configs
            .AllowAnyOrigin()  // Corrigido aqui
            .AllowAnyHeader()
            .AllowAnyMethod())
);

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
app.MapGet("/api/produto/listar", ([FromServices] AppDataContext ctx) =>
{
    // ctx.Produtos.Count()
    if (ctx.Produtos.Any()) {
        return Results.Ok(ctx.Produtos.ToList());
    }
    return Results.NotFound();
});

//GET: /api/produto/buscar/{id}
app.MapGet("/api/produto/buscar/{id}", ([FromRoute] string id, [FromServices] AppDataContext ctx) =>
{
    // Expressão lambda em C# =>

    // Buscar produto por outra propriedade, retornando um objeto
    // Produto? produto = ctx.Produtos.FirstOrDefault(x => x.Nome == "Variável com o nome do produto");

    // Buscar produtos por certa propriedade, retornando uma lista
    // List<Produto> lista = ctx.Produtos.Where(x => x.Quantidade > 10).ToList();

    // Padrao de busca, primary key, retorna um objeto
    Produto? produto = ctx.Produtos.Find(id);

    if (produto == null) {
        return Results.NotFound();
    }
    return Results.Ok(produto);
});

//POST: /api/produto/cadastrar/param_nome
app.MapPost("/api/produto/cadastrar", ([FromBody] Produto produto, [FromServices] AppDataContext ctx) =>
{
    produtos.Add(produto);
    // banco -> tabela -> operacao

    ctx.Produtos.Add(produto);
    ctx.SaveChangesAsync();

    return Results.Created("", produto);
});

//DELETE: /api/produto/deletar/{id}
app.MapDelete("/api/produto/deletar/{id}", ([FromRoute] string id, [FromServices] AppDataContext ctx) =>
{
    Produto? produto = ctx.Produtos.Find(id);
    if (produto == null) {
        return Results.NotFound();
    }

    ctx.Produtos.Remove(produto);
    ctx.SaveChangesAsync();

    return Results.Ok(produto);
});

//PUT: /api/produto/alterar/{id}
app.MapPut("/api/produto/alterar/{id}", ([FromRoute] string id, [FromBody] Produto produtoAlterado, [FromServices] AppDataContext ctx) =>
{
    Produto? produto = ctx.Produtos.Find(id);

    if (produto == null) {
        return Results.NotFound();
    }

    produto.Nome = produtoAlterado.Nome;
    produto.Quantidade = produtoAlterado.Quantidade;
    produto.Preco = produtoAlterado.Preco;
    produto.Descricao = produtoAlterado.Descricao;

    ctx.Produtos.Update(produto);
    ctx.SaveChangesAsync();

    return Results.Ok(produto);
});

app.UseCors("Acesso Total");
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