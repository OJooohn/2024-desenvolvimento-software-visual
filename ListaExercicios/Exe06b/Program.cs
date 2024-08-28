// 1 - Criar um vetor de valores inteiros
// 2 - Percorrer o vetor com o laço
// 3 - Gerar um valor aleatório em C#
// 4 - Ordenar o vetor usando Bubble Sort

int tamanho = 100;
int[] array = new int[tamanho];
Random rand = new Random();

// Criação e impressão do vetor desordenado
Console.Write("Vetor desordenado:\n");
for(int i = 0; i < array.Length - 1; i++){
    array[i] = rand.Next(1000);
    Console.Write("[" + array[i].ToString("000") + "]");
    if((i+1) % 25 == 0){
        Console.WriteLine();
    }
}

Array.Sort(array);

// Impressão do vetor ordenado
Console.Write("\nVetor ordenado:\n");
for(int i = 0; i < array.Length; i++){
    Console.Write("[" + array[i].ToString("000") + "]");
    if((i+1) % 25 == 0){
        Console.WriteLine();
    }
}