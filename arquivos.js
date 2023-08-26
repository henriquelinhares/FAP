
/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

const entrada= require('readline-sync');

let nomeCompleto = entrada.question('Digite seu nome completo: ');
let anoNascimento = Number(entrada.question('Digite o ano do seu nascimento: '));
let ano = 2022; 

while (anoNascimento < 1992 || anoNascimento > 2021) {
    console.log('O ano inserido é inválido. Digite novamente. ');
    anoNascimento = Number(entrada.question('Digite o ano do seu nascimento: '));
} 
console.log(`Olá, ${nomeCompleto}.` + ' Você tem ou competará ' + Number(anoNascimento - ano) + ' anos este ano.');         
   
