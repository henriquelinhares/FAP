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
var numero = numeros.indexOf(25); //Pesquisar sobre indexOF
if(numero > -1){
    console.log("Este número já pode existir na lista");
} else {
    console.log("Este número não existe na lista.");
}

console.log(numeros.indexOf());

const numerosDois = [1, 2, 3, 4, 5]; 
const numerosTreis = [1, 2, 3, 4, 5]; 
const numerosConcatenados = [numerosDois.concat(numerosTreis)]; //Pesquisar sobre o metodo concat

console.log(numerosConcatenados);


const numerosQuatro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
function buscarNumerosPares (value) { //usado o método filter para filtrar os números pares. 
    if (value % 2 == 0) 
    return value;
}
var numerosPares = numerosQuatro.filter(buscarNumerosPares);

console.log(numerosPares);

/* https://blog.betrybe.com/javascript/javascript-filter/ */ 


const ordemCrescente = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
ordemCrescente.sort((a, b) => a - b);  /*Para classificar um array de números em ordem numérica, 
você precisa passar para o método sort() uma função de comparação personalizada que compara dois 
números.*/

console.log(ordemCrescente);

/* https://ricardo-reis.medium.com/o-método-sort-do-array-javascript-482576734e0a#:~:text=Para%20classificar%20um%20array%20de,scores%20numericamente%20em%20ordem%20crescente.
*/

const frutas2 = ["maçã", "banana", "laranja", "uva", "manga"];
 
console.log(frutas2.indexOf("laranja"));


