const entrada = require('readline-sync');

//Exercício de funções com retorno


//Criando uma função para somar. 

/* function soma(n1, n2) {
    return n1 + n2
}
let n1 = Number(entrada.question('Digite um número: '));
let n2 = Number(entrada.question('Digite outro número: '));

console.log(soma(n1, n2));


//Criando uma função para verificar número par ou impar.

function ehPar(n) {
    if (n % 2 == 0) {
        return "Este número é par!"
    } else {
        return "Este número é impar!"
    }
}
let n = entrada.question("Digite um número: ")
console.log(ehPar(n));


//Criando uma função que verificar qual o maior número

function maiorNumero(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1 + " é o maior número."
    } else if(numero2 > numero1 && numero2 > numero3){
        return numero2 + " é o maior número."
    } else if(numero3 > numero1 && numero3 > numero2){
        return numero3 + " é o maior número."
    } else{
        return "resposta inválida."
    }
} 
let numero1 = entrada.question("Digite algum número: ");
let numero2 = entrada.question('Digite outro número: ');
let numero3 = entrada.question('Digite um terceiro número: ');

console.log(maiorNumero(numero1, numero2, numero3));     */
 
//Função para realizar o calculo de IMC 

function calcularImc(peso, altura) {

    if (peso / altura**2 < 16.99) {
        return "Você está muito abaixo do peso"
    } else if(peso / altura**2 == 17 || peso / altura**2 <= 18.49){
        return "Você está abaixo do peso"
    } else if(peso / altura**2 == 18.50 || peso / altura**2 <= 24.99){
        return "Você está com o peso normal."
    } else if(peso / altura**2 == 25 || peso / altura**2 <= 29.99){
        return "Você está acima do peso."
    } else if(peso / altura**2 == 30 || peso / altura**2 <= 34.99){
        return "Você está no primeiro nivel de obesidade. Cuidado!"
    } else if(peso / altura**2 == 35 || peso / altura**2 <= 39.99){
        return "Você está no segundo nivel de obesidade. Cuidado redobrado!"
    } else {
        return "Você está no terceiro nivel de obesidade. Procure ajuda!"
    }
}

let peso = Number(entrada.question('Digite o seu peso: ').replace(',', '.'));
let altura = Number(entrada.question('Digite a sua altura: ').replace(',', '.')); 

console.log(calcularImc(peso, altura)); 

