const entrada = require('readline-sync'); 

/* Error: É a interrupção involuntária na execução do código, normalmente como exceções.
Erros de sintaxe são um tipo de exceção que ocorre quando a sintaxe está incorreta. 

throwing an exception: Envia uma mensagem de que algo errado na execução pretendida do codigo,
pelo javascript ou pela pessoa desenvolvida com a palavra-chave throw. 

Palavras chave: Try, Catch, Finally. 

    Try: Bloco de código que pode lançar uma exceção.
    Catch: Bloco de código que será executado se uma exceção for lançada.
    Finally: Parte opcional do código que será executado após o bloco try ou após o bloco catch.
*/

// Sintaxe das exceções: 

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

// Programa que recebe string não númerica em número

try {
    let strin = Number(entrada.question('Digite um número: '))
    if (isNaN(strin) )//Necessário usar o isNaN. Estudar isso. {
        throw ('Erro. string e não número.')
    }
    console.log(`O número digitado foi: ${strin}`);
} catch (erro){
    console.log("Digite um número válido.");
}

// Programa para acessar propriedade inexistente de um objeto