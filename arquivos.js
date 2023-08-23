const entrada= require('readline-sync');

/* Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve 
ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem 
“Essa opção não existe” e voltar ao menu de opções. Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor,
 um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá 
 parar. É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 
*/

let valor = Number(entrada.question('Digite o número da operação que deseja. 1: +; 2: -; 3: *; 4: /; 0: sair. '));


function calculadora(n) {
    while (n == 0) {
        console.log("Até mais.");
        break
    }
    while (n < 0 || n > 4) {
    console.log("Opção inválida. Tente novamente.");
    n = Number(entrada.question('Digite o número da operação que deseja. 1: +; 2: -; 3: *; 4: /; 0: sair. '));
    }
   while (n == 1) {
    n1 = Number(entrada.question('Digite o primeiro valor: '));
    n2 = Number(entrada.question('Digite o segundo valor: '));
    console.log("O resultado é: " + (n1 + n2));
    n = Number(entrada.question('Digite o número da operação que deseja. 1: +; 2: -; 3: *; 4: /; 0: sair. '));
   }
   while (n == 2) {
    n1 = Number(entrada.question('Digite o primeiro valor: '));
    n2 = Number(entrada.question('Digite o segundo valor: '));
    console.log("O resultado é: " + (n1 - n2));
    n = Number(entrada.question('Digite o número da operação que deseja. 1: +; 2: -; 3: *; 4: /; 0: sair. '));
   }
   while (n == 3) {
    n1 = Number(entrada.question('Digite o primeiro valor: '));
    n2 = Number(entrada.question('Digite o segundo valor: '));
    console.log("O resultado é: " + (n1 * n2));
    n = Number(entrada.question('Digite o número da operação que deseja. 1: +; 2: -; 3: *; 4: /; 0: sair. '));
   }
   while (n == 4) {
    n1 = Number(entrada.question('Digite o primeiro valor: '));
    n2 = Number(entrada.question('Digite o segundo valor: '));
    console.log("O resultado é: " + (n1 / n2));
    n = Number(entrada.question('Digite o número da operação que deseja. 1: +; 2: -; 3: *; 4: /; 0: sair. '));
   }
}
console.log(calculadora(valor));

/* if (n == 1) {
    return n1 + n2
} else if (n == 2) {
    return n1 - n2
} else if (n == 3) {
    return n1 * n2
} else if (n == 4) {
    return n1 / n2
} else if (n == 0) {
    return 'Fim do programa.'

    let n1 = Number(entrada.question('Digite o primeiro valor: '));
let n2 = Number(entrada.question('Digite o segundo valor: ')); 
} */