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
*/

   // let carro = {  // carro é o objeto.
   // marca: 'ford',  //Marca, modelo e cor são as propriedades do objeto. 
   // modelo: 'fiesta', //Ford, fiesta e prata são as caracteristicas do objeto. 
   // cor: 'prata',
   // }

   // for (propriedade in carro) {
   //  console.log(propriedade); //Será impresso apenas as propriedades do objeto carro. 
   // }
   // for (propriedade in carro) {
   //    console.log(carro[propriedade]);//Será impresso as "caracteristicas" de cada propriedade do objeto carro.
   //   }
   // for (propriedade in carro) {
   //    console.log(propriedade + ' : ' + carro[propriedade]);//Será impresso as propriedades do objeto carro e as "caracteristicas" de cada propriedade do objeto carro.
   //   }


   //O for…of nós podemos utilizar para percorrer objetos iteráveis como Maps, Sets e Vetores de forma simples e eficaz. Exemplo: 

   let carros = [ 'fiesta', 'onix', 'fusca', 'saveiro' ];

   for (let carro of carros) {
    console.log(carro); //Neste caso teremos o valor de cada indice. 
   }
   
   //Também é possível exibir o índice referente a cada item usando o método entries()da seguinte forma:

   for (let [index, carro] of carros.entries()) {
      console.log(index, carro); 
  }
