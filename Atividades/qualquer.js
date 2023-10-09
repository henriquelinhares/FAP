const entrada= require('readline-sync');

let numero1 = entrada.questionInt("Digite um número: ");
let numero2 = entrada.questionInt("Digite outro número: ");

function somar(params) {
    (numero1 + numero2)
}

console.log('O resultado da soma é: ' + somar);