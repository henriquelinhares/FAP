const entrada= require('readline-sync');

let numeroInteiro = entrada.question("Digite um número inteiro para saber a sua tabuada: ");
console.log(`Seu número inteiro é ${numeroInteiro}.`);

let tabuada = 1; 

while (tabuada < 11) {
    console.log(numeroInteiro + " x " + tabuada + " = " + numeroInteiro*tabuada);
    tabuada++
}

let nota = entrada.question("Digite a primeira nota do aluno: ");
let nota2 = entrada.question("Digite a segunda nota do aluno: "); 
let media = (Number(nota) + Number(nota2)) / 2; 

if(media >= 7){
    console.log(`A nota final do aluno foi ${media}. O aluno foi aprovado.`);
}else{
    console.log(`A nota final do aluno foi ${media}. O aluno foi reprovado.`);
}


