const entrada = require('readline-sync');

/* Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até 
que o usuário informe um valor válido.
*/

let nota = Number(entrada.question('Digite uma nota entre 0 e 10: ')); 
while (nota > 10) {
    console.log('Valor inválido. Digite novamente. ')
    nota = entrada.question('Digite uma nota entre 0 e 10: ')// Para repetir a solicitação até um valor válido, repetimos aqui a atrubuição completa da variavel nota.
} if (nota < 10) { //Nem precisaria usar if, podemos colocar apenas o console.log direto. 
    console.log("Obrigado por atribuir a nota " + nota);
} 



   

    