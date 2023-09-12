/* Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

*/


// function elemento(array, elementoBuscado) {
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === elementoBuscado){
//             return i
//         } 
//     }
//     return -1
// }

// let meuArray = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]; 
// let numeroProcurado = 20;
// let indiceEncontrado = elemento(meuArray, numeroProcurado); 

// if(indiceEncontrado !== -1){
//     console.log("O indicide do valor " + numeroProcurado + " na lista é: " + indiceEncontrado);
// } else {
//     console.log("O valor procurado " + numeroProcurado + " não está na lista.");
// }


/* Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do aluno.
*/
const entrada = require('readline-sync');


/* 
let nomeAluno = entrada.question('Digite seu nome: '); 
let nota1 = Number(entrada.question('Digite a primeira nota: ')); 
let nota2 = Number(entrada.question('Digite a segunda nota: '));
let nota3 = Number(entrada.question('Digite a terceira nota: '));

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

console.log("A média do aluno foi: " + media(nota1, nota2, nota3)); */



/* Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é bissexto. Um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.


let ano = Number(entrada.question('Digite um ano: ')); 

if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0))
    console.log(`${ano} é ano bissexto.`); 
else
    console.log(`${ano} não é ano bissexto.`); 

*/



/* 3. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o estado destino do produto e o programa retorne o preço final do produto acrescido do imposto correspondente ao estado onde será vendido. O programa deve mostrar uma mensagem de erro caso o estado fornecido não esteja na lista de estados válidos. 


let valor = parseFloat(entrada.question('Digite o valor da compra: '));   //Tentar implementar um while para caso insira um valor incorreto
console.log('Os estados disponiveis são: MG, SP, RJ E MS.');
let estado = entrada.question('Digite o estado de destino: ');

function acrescentar(valor, local){
    if(local == 'MG'){
        return (valor + valor * (7/100)); 
    } else if(local == 'SP'){
        return (valor + valor * (12/100));
    } else if(local == 'RJ'){
        return (valor + valor * (15/100)); 
    } else if(local == 'MS'){
        return (valor + valor * (8/100));
    }
}
console.log("O valor final acrescentando o imposto do estado escolhdo é: " + acrescentar(valor, estado)); 

*/

/* 4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. Faça três versões desse programa, cada uma usando uma estrutura de repetição diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este programa? Por que? 
*/

// let numeros = 50; 

// function somaDosPares(x) {
//     let soma = 0;
//     for (let i = 0; i <= x; i += 2) soma += i
//     return soma;
// }
//  console.log(somaDosPares(numeros)); 

// let soma = 0; 
// let contador = 0;
// let i = 1;

// while (true) {
//     if (i % 2 == 0) {
//         soma += i
//         contador++
//     }
//     if (contador >= 3) {
//         break;
//     }
//     i++
// }
// console.log(soma); 


// var carros = [
//     { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621 },
//     { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621 }
//   ]
  
//   var total = 0

//   for(var i = 0; i < carros.length; i++) {
//     total += carros[i].preco
// }
// for(const carro of carros) {
//     total += carro.preco
// }

const aluno = {
    nome: 'Luiz',
    sobrenome: 'Linhares',
    nota1: 10,
    nota2: 9,
    nota3: 8
}
const aluno2 = {
    nome: 'Henrique',
    sobrenome: 'Silva',
    nota1: 10,
    nota2: 9,
    nota3: 8
}

const alunos = {...aluno,...aluno2}; 

for (const dado in aluno2) {
   console.log(dado + ':' + aluno2[dado]);
}


let notas = [10, 8, 9, 8, 9]; 

for (const n of notas) {
    console.log('Primeira nota: ' + notas[0]);
}