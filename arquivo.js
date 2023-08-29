/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/

const entrada= require('readline-sync');

let fulano = 0;
let sicrano = 0;
let beltrano = 0;
let nulo = 0;
let branco = 0;

let voto = Number(entrada.question('Veja o candidato e escolha um. candidato Fulano: 1; candidato Sicrano: 2; Candidato Beltrano: 3; Em Branco: 4; Para encerrar a votacao: 5. Digite o seu voto: '));

while (isNaN(voto)) {
    console.log("Você escolheu uma opção inválida.");
    voto = Number(entrada.question('Veja o candidato e escolha um. candidato Fulano: 1; candidato Sicrano: 2; Candidato Beltrano: 3; Em Branco: 4; Para encerrar a votacao: 5. Digite o seu voto: '));
} 
while (voto != 5) {
    if (voto == 1) {
        fulano = fulano + 1
    } else if (voto ==2 ){
        sicrano = sicrano + 1
    } else if(voto == 3){
        beltrano = beltrano + 1
    } else if (voto == 4) {
        branco = branco + 1
    } else if(voto != 1 || voto != 2 || voto != 3 || voto != 4 || voto != 5){
        nulo = nulo + 1
    } 
    voto = Number(entrada.question('Veja o candidato e escolha um. candidato Fulano: 1; candidato Sicrano: 2; Candidato Beltrano: 3; Em Branco: 4; Para encerrar a votacao: 5. Digite o seu voto: '));
}
if(voto == 5){
    console.log('Votação encerrada.');
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    console.log("O vencedor teve: " + getMaxOfArray([fulano, beltrano, sicrano, branco, nulo]) + ' votos.');
}


