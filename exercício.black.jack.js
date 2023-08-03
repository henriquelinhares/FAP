const entrada= require('readline-sync');

let cartaUm
    cartaUm = Number(entrada.question("Digite um número entre 1 e 11. "));

let cartaDois;
    cartaDois = Number(entrada.question("Digite mais um número entre 1 e 11."));

let cartaTres;
    cartaTres = Number(entrada.question("Digite mais um número entre 1 e 11."));

let soma;
    soma = cartaUm + cartaDois + cartaTres; 

let cartaBancoUm;
    cartaBancoUm = Number(entrada.question("Digite um número entre 1 e 11."));

let cartaBancoDois;
    cartaBancoDois = Number(entrada.question("Digite mais um número entre 1 e 11."));

let cartaBancoTres; 
    cartaBancoTres = Number(entrada.question("Digite mais um número entre 1 e 11."));

let cartaBancoQuatro; 
    cartaBancoQuatro = Number(entrada.question("Digite mais um número entre 1 e 11."));

let soma2;
    soma2 = cartaBancoUm + cartaBancoDois + cartaBancoTres + cartaBancoQuatro; 

    if(soma > 21){
        console.log("Você perdeu.");
    } else if(soma <= 21 && soma < soma2){
        console.log("Você ganhou.");
    } else {
        console.log("Resultado final.");
    }

    console.log(`A soma das suas cartas foi: ${soma}.`);
    console.log(`A soma das cartas do banco foi: ${soma2}.`);
    


    



