const readline = require('readline');

// Configura o readline para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal que calcula e exibe as quantidades necessárias para a festa
function calcularQuantidadeFesta(numConvidados) {
    // Calcular a quantidade de carne
    let quantidadeCarne = numConvidados * 300; // em gramas
    quantidadeCarne += quantidadeCarne * 0.06; // Adiciona 6% a mais
    let quantidadeCarneKg = quantidadeCarne / 1000; // Converte para quilogramas

    // Calcular a quantidade de refrigerante
    let quantidadeRefrigerante = numConvidados * 3;
    quantidadeRefrigerante += 9; // Adiciona 9 latas extras

    // Calcular a quantidade de docinhos
    let quantidadeDocinhos = numConvidados;

    // Exibir os resultados
    console.log(`Quantidade de carne a ser comprada: ${quantidadeCarneKg.toFixed(2)} kg`);
    console.log(`Quantidade de refrigerante a ser comprado: ${quantidadeRefrigerante} latas`);
    console.log(`Quantidade de docinhos a ser oferecido: ${quantidadeDocinhos}`);
}

// Solicita o número de convidados ao usuário
rl.question('Informe o número de convidados: ', (input) => {
    let numConvidados = parseInt(input, 10);
    if (isNaN(numConvidados) || numConvidados <= 0) {
        console.log('Número de convidados inválido. Por favor, insira um número positivo.');
    } else {
        calcularQuantidadeFesta(numConvidados);
    }
    rl.close();
});