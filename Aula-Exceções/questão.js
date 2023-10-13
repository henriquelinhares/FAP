
const entrada = require('readline-sync');

// Programa que recebe numero e tenta dividir por 0

try{
    let numero = Number(entrada.question('Digite um núemro: '))
    if(numero === 0){
        throw ('Erro. Divisão por zero.')
    } 
    let divisao = numero / 5;
    console.log(`O valor da divisão de ${numero} por 5 é: ${divisao}`);
} catch(erro){
    console.log("Digite um número diferente de zero.");
}
