/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/

const entrada= require('readline-sync');

const candidatos = {
    candidato_1: 0,
    candidato_2: 0,
    candidato_3: 0,
    branco: 0
}
let voto = entrada.question('Digite o numero do seu eleitor: ');

function eleicao(candidato1, candidato2, candidato3, branco) {
   for(candidatos; voto == 1; candidato1++);
   for(candidatos; voto == 2; candidato2++);
   for(candidatos; voto == 3; candidato3++);
   for(branco; voto == branco; branco++);
}
 console.log(eleicao());



