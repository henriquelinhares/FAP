const entrada = require('readline-sync'); 

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        return n * fatorial(n-1); 
    }
}
const numero = 5; 
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);