const entrada= require('readline-sync');

let numeroInteiro = entrada.question("Digite um número inteiro para saber a sua tabuada: ");
console.log(`Seu número inteiro é ${numeroInteiro}.`);

let tabuada = 1; 

while (tabuada < 11) {
    console.log(numeroInteiro + " x " + tabuada + " = " + numeroInteiro*tabuada);
    tabuada++
}




