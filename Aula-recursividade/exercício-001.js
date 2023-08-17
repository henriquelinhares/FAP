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

/* function fibonacci(n){
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(-1) + fibonacci(-2); 
    }
}
console.log(fibonacci(5)); */

let num = Number(entrada.question("Digite um número: "));

/*function somat(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x + somat(x - 1);
    }
    
}
console.log(somat(num));*/


function fibonacci(n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci (n-1) + fibonacci(n-2);
    }
} 
console.log(fibonacci(fib));

let fib = entrada.question('Digite um número: '); 