const entrada = require('readline-sync');

//Aula 2. Repetições.

// As estruturas de repetição são: while, for, for…in e for…of.

/* Estrutura de repetição com váriavel de controle for. 
   A estrutura de repetição for no JavaScript segue o mesmo princípio que o while, porém este recurso é mais utilizado quando se 
   sabe o número de iterações da repetição, como ao percorrer um vetor, por exemplo. 

   A sintaxe de for:
   A sintaxe funciona com a inicialização, que seria a variavel; Depois uum teste lógico; Por fim o incremento.
   for(let i = 0; i < 11; i++){
    console.log("5 x " + i + " = " + 5*i);
}
*/

//Exemplo: 

for(let i = 0; i < 11; i++){
   console.log("5 x " + i + " = " + 5*i);
}


/* Utilizando for…in e for…of:

   No JavaScript, nós temos mais duas variações da utilização do for, o for…in e for…of.

   O for…in é utilizado para percorrer as propriedades de um objeto, por exemplo:
   let carro = {
   marca: 'ford',
   modelo: 'fiesta',
   cor: 'prata',
   }

   for (propriedade in carro) {
    console.log(propriedade);
   }
*/