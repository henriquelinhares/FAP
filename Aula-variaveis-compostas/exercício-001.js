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
    A.sort()
*/

let num = [5, 8, 2, 9, 3]
    num[5] = 4;
    num.push(7);

console.log(`Nosso vetor é o: ${num}`);
console.log(`Nosso vetor em ordem é o: ${num.sort()}`);
console.log(`O tamanho da nossa variavel é: ${num.length}`);
console.log(`O nosso elemnto na segunda posição é 0: ${num[2]}`);
