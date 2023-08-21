const entrada= require('readline-sync');

/* Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos 
para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.*/

console.log("Contagem regressiva!"); 
let contador = 30;
while (contador > 0) {
    console.log(`${contador} segundos restantes.`);
    contador--
}
console.log('BUM!');