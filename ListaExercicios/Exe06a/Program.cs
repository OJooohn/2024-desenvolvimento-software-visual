// 1 - Criar um vetor de valores inteiros
// 2 - Percorrer o vetor com o laço
// 3 - Gerar um valor aleatório em C#
// 4 - Ordenar o vetor usando Bubble Sort

int tamanho = 1000;
int[] array = new int[tamanho];
Random rand = new Random();

// Criação e impressão do vetor desordenado
Console.Write("Vetor desordenado:\n");
for(int i = 0; i < array.Length - 1; i++){
    array[i] = rand.Next(tamanho);
    Console.Write("[" + array[i].ToString("000") + "]");
    if((i+1) % 25 == 0){
        Console.WriteLine();
    }
}

// - visualgo.net
/*
bool troca = true;
while(troca){
    troca = false;
    for(int i = 0; i < array.Length - 1; i++){
        if(array[i] > array[i + 1]){
            troca = true;
            int aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
        }
    }
}
*/

// Professor
bool troca;
do {
    troca = false;
    for(int i = 0; i < array.Length - 1; i++){
        if(array[i] > array[i + 1]){
            troca = true;
            int aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
        }
    }
} while(troca);


// Impressão do vetor ordenado
Console.Write("\nVetor ordenado:\n");
for(int i = 0; i < array.Length; i++){
    Console.Write("[" + array[i].ToString("000") + "]");
    if((i+1) % 25 == 0){
        Console.WriteLine();
    }
}