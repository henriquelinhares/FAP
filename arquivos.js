/* Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
*/

let nomes = ['Alice', 'Henrique', 'Luiz', 'Maria', 'Pedro', 'Marta', 'João', 'Amelia', 'Eva', 'Luiza'];
for (let pos = 0; pos < nomes.length; pos++){
    console.log(nomes[pos]);
}

let idades = [27, 30, 62, 60, 10, 15, 5, 55, 3, 7]; 
for(let dep = 0; dep < idades.length; dep++){
    console.log(idades[dep]);
}

let coresFavoritas = ['azul', 'vermelho', 'preto', 'verde', 'roxo', 'branco', 'amarelo', 'rosa', 'lilas', 'cinza'];
for(let depois = 0; depois < coresFavoritas.length; depois++){
    console.log(coresFavoritas[depois]);
}

idades.splice(3, 1, 62); //Alterando o elemento na terceira posição(indice) para 62. 
coresFavoritas.splice(9, 1, 'azul') // Alterando o elemento da ultima posição(indice) para azul. 

console.log(nomes, idades, coresFavoritas); 
