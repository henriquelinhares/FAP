const entrada = require('readline-sync');

//Aula 1. Repetições. 

/* As estruturas de repetição são: while, for, for…in e for…of.

   while: Podemos utilizar a estrutura de repetição while caso seja necessário repetir um bloco de comandos por N vezes.
   Sempre que tivemos a palavra while, devemos ler como enquanto. while = enquanto.
*/

//Exemplo while: 
let i = entrada.question('Digite um número: ')
/*Abaixo temos a estrutura de montagem do while. Chamamos o while e entre parenteses colocamos a condição. Dentro do bloco imprimimos o
que desejamos que seja feito com a váriavel recebida, no caso a váriavel i. */
while(i < 11){ 
    console.log('5 x ' + i + ' = ' + 5*i);
    i++; // Aqui a váriavel i é igual a i = i + 1. 
}