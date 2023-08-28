const entrada= require('readline-sync');

/* 
As variaveis simples só conseguem armazenar um valor por vez. 

Já as variaveis compostas, devem ser capazer de armazenar vários valores em uma mesma estrutura.
Exemplo de uma variavel do tipo composta: 
    Variavel do tipo array. O A será o vetor e todo vetor é composto de elementos, e cada elemento é composto por seu valor, que serão 5 8 e 4, e cada um possui um indice, que vai se iniciar em 0. 
        let A = [5,8,4]

Caso queira adcionar mais um valor na variavel, podemos fazer das seguintes formas: 
    let A = [5,8,4]
        A[3] = 6; Aqui foi atribuido que a variavel A vai receber o valor 6 na posição 3 do indice. O java faz de forma automatica. 

Caso a intenção seja adcionar o valor na ultima posição, podemos usar o comando push(). 
    let A = [5,8,4,6]
        A.push(7); Aqui foi atribuido o valor 6 na ultima posição do indice da variavel. 

Para saber o comprimeto de um váriavel, basta utilizar o comando/atributo length: variavel.length. 
    let A = [5,8,4,6,7]
        A.length

Para colocar todos os elementos de uma variavel em ordem crescente, utilizamos o comando sort: variavel.sort()
    let A = [5,8,4,6,7]
        A.sort()
        A = [4,5,6,7,8]

Para imprimir o valor de todos os vetores na tela,  um de cada vez, sem precisar criar vários console.log, utilizamos a estrutura de repetição for:
    let A = [5,8,4,6,7]
    for(let pos = 0; pos < A.length; pos++){console.log(A[pos])}; 
    
    vejamos que foi criado uma variavel chamada pos, ela funciona como um contador. Em seguida a condição foi caso pos seja menor que o tamanho da variavel A, a estrutura repete a impressão da variavel pos acrescentando mais 1. Ficar atendo que, no console.log a variavel que for ser impressa deverá conter entre chaves a variavel contador. 

Para array e objetos, também temos uma sintaxe de for ainda mais simples para fazermops a mesma impressão anterior. 
    let A = [5,8,4,6,7]
    for(let pos in A){console.log(A[pos])} 

    vejamos que o código ficou ainda menor. Essa estruta se ler: for = para e in = em/dentro. 
    Ou seja, para cada posição na variavel A, conte pos mais 1 vez.

Para buscar valores dentro de um vetor, nós podemos utilizar o metodo indexOf(). 
    let A = [5,8,4,6,7]
    A.indexOf(4)

    Vejamos que o metodo indexOf foi utilizado para buscar o valor 4 dentro da variavel. Caso tenha o valor, vai ser retornado para nós a posição de indice/chave do valor 4, que neste exemplo é 2. 

    Caso seja solicitado um valor que não tem dentro da variavel, será retornado o valor -1 que significa que bão foi encontrado nenhuma ocorrencia do valor. 
*/


/* let num = [5, 8, 2, 9, 3]
    num[5] = 4;
    num.push(7);

console.log(`Nosso vetor é o: ${num}`);
console.log(`Nosso vetor em ordem é o: ${num.sort()}`);
console.log(`O tamanho da nossa variavel é: ${num.length}`);
console.log(`O nosso elemnto na segunda posição é 0: ${num[2]}`); */

/* Exemplificando o uso do for em variavel composta: 
let A = [5,8,4,6,7]
    A.sort()
for(let pos = 0; pos < A.length; pos++){console.log(`A posição ${pos} tem o valor: ${A[pos]}`)}; 
*/

/* Exemplificando o uso do for in em variavel composta. 

let num = [1, 2, 3, 4, 5]

for (let pos in num) {
   console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
*/

/* Exemplificando a busca de valores dentro das variaveis

let numero = [2, 4, 3, 5, 6, 7, 9]
    numero = numero.indexOf(8)
if (numero == -1) {
    console.log(`A posição do valor não foi encontrada!`);
} else {
    console.log(`A posição do valor é: ${numero}`);
} 
*/