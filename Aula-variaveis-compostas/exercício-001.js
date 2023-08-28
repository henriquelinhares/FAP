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
*/

/* let num = [5, 8, 2, 9, 3]
    num[5] = 4;
    num.push(7);

console.log(`Nosso vetor é o: ${num}`);
console.log(`Nosso vetor em ordem é o: ${num.sort()}`);
console.log(`O tamanho da nossa variavel é: ${num.length}`);
console.log(`O nosso elemnto na segunda posição é 0: ${num[2]}`); */

let A = [5,8,4,6,7]
    A.sort()
for(let pos = 0; pos < A.length; pos++){console.log(A[pos])}; 


