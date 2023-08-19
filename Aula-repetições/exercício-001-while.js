const entrada = require('readline-sync');

//Aula 1. Repetições. 

/* As estruturas de repetição são: while, for, for…in e for…of.

   while: Podemos utilizar a estrutura de repetição while caso seja necessário repetir um bloco de comandos por N vezes.
   Sempre que tivemos a palavra while, devemos ler como enquanto. while = enquanto.

   Junto ao while, também temos o do-while. O do-while tem o mesmo conceito que o while com uma única diferença, 
   a condição é verificada após os comandos do bloco serem executados, ou seja, mesmo que a condição seja falsa, é garantia 
   que o bloco será executado ao menos uma vez. 
*/

//Exemplo while: 
let i = entrada.question('Digite um número: ')
/*Abaixo temos a sintaxe do while. Chamamos o while e entre parenteses colocamos a condição. Dentro do bloco imprimimos o
que desejamos que seja feito com a váriavel recebida, no caso a váriavel i. */
while(i < 11){ 
    console.log('5 x ' + i + ' = ' + 5*i);
    i++; // Aqui a váriavel i é igual a i = i + 1. 
}

//Exemplo do-while: 
let contador = 0;
//Abaixo temos a sintaxe do do-while. 
do{
	console.log("O contador vale: " + contador);
	contador++;
}while(contador == 1)

