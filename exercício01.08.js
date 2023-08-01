/* Arrays. 
    Arrays é um tipo de estrutura de dados. 
*/

/*let sorvetes = ["morango", "uva", "baunilha", "piatache", "manga", "flocos"]; 
    sorvetes[sorvetes.length] = "chocolate"
    sorvetes.splice(3,1);
    delete sorvetes[sorvetes.length - 1];

console.log(sorvetes.splice(3,1));
console.log(sorvetes);*/

const meuArray = [10, 20, 30, 40, 50];
let segundoElemneto = meuArray[2];

console.log(segundoElemneto);

const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log(frutas.length);

frutas[frutas.length] = "pera";
frutas.splice(0,1); 

console.log(frutas);


const numeros = [10, 20, 30, 40, 50]; 
var numero = numeros.indexOf(25);
if(numero > -1){
    console.log("Este número já pode existir na lista");
} else {
    console.log("Este número não existe na lista.");
}

console.log(numeros.indexOf());

const numerosDois = [1, 2, 3, 4, 5]; 
const numerosTreis = [1, 2, 3, 4, 5]; 
const numerosConcatenados = [numerosDois.concat(numerosTreis)]; 

console.log(numerosConcatenados);


const numerosQuatro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const numerosPares = []; 

console.log(numerosPares);


