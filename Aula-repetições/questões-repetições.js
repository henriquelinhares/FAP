const entrada = require('readline-sync');

/* 1ª questão. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até 
que o usuário informe um valor válido.
*/

let nota = Number(entrada.question('Digite uma nota entre 0 e 10: ')); 
while (nota > 10) {
    console.log('Valor inválido. Digite novamente. ')
    nota = entrada.question('Digite uma nota entre 0 e 10: ') // Para repetir a solicitação até um valor válido, repetimos aqui a atrubuição completa da variavel nota.
} if (nota < 10) { //Nem precisaria usar if, podemos colocar apenas o console.log direto. 
    console.log("Obrigado por atribuir a nota " + nota);
} 

/*2ª questão. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações. 
*/

let nomeUsuario = entrada.question('Digite seu nome de usuário: ').toUpperCase(); 
let senha = entrada.question('Digite sua senha: ').toUpperCase();

while (nomeUsuario === senha) {
    console.log("Erro. A senha não pode ser igual ao nome de usuário. Faça o login novamente.");
    nomeUsuario = entrada.question('Digite seu nome de usuário: ').toUpperCase();
    senha = entrada.question('Digite sua senha: ').toUpperCase();
} console.log("Login realizado. Obrigado.");



   

    