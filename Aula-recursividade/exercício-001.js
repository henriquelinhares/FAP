const entrada = require('readline-sync'); 

/* function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        return numero * fatorial(numero-1); 
    }
}
const numero = entrada.question('Digite um número: '); 
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`); */


//Exercício função recusrsiva

/* function somaRecursiva(n){
    if (n === 1) {
        return 1; 
    } else {
        return n + somaRecursiva(n - 1); 
    }
}
console.log(somaRecursiva(5)); */

function fibonacci(n){
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(-1) + fibonacci(-2); 
    }
}
console.log(fibonacci(5));