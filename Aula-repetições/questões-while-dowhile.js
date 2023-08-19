const entrada = require('readline-sync');

//Crie um laço while que irá iterar enquanto n for menor ou igual a 5.

let n = Number(entrada.question('Digite um número inteiro: '));
while (n <= 5) {
    console.log('Passo ' + n);
    n++
}

//Criando o vetor e acessando as informações 

let nota = entrada.question('Digite uma nota entre 0 e 10: ');
   

    