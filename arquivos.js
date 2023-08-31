/* Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

*/


function elemento(array, elementoBuscado) {
    for (let i = 0; i < array.length; i++){
        if(array[i] === elementoBuscado){
            return i
        } 
    }
    return -1
}

let meuArray = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]; 
let numeroProcurado = 20;
let indiceEncontrado = elemento(meuArray, numeroProcurado); 

if(indiceEncontrado !== -1){
    console.log("O indicide do valor " + numeroProcurado + " na lista é: " + indiceEncontrado);
} else {
    console.log("O valor procurado " + numeroProcurado + " não está na lista.");
}