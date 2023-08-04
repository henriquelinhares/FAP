/*Condições. 
A estrutura condicional permite avaliar uma condição e, a partir dela, executar diferentes linhas de 
código.

As condições com apenas um tipo de bloco, é chamada de condição simples.
Ja a condição com dois tipos de blocos, são chamadas de condição composta.
*/

//Condições if, else e else if

const entrada= require('readline-sync');


var velocidade = 65;
if (velocidade > 60) { //Quando se utiliza apenas o if, temos uma condição simples.
    console.log(`A velocidade do seu carro é ${velocidade}km/h. Multado!`);
} else{// Utilizando if e else, temos uma condição composta. 
    console.log(`A velocidade do seu carro é ${velocidade}km/h. Dirija com cuidado!`);
}

var pais = "Brasil";
console.log(`Vivendo em ${pais}.`);
if (pais == "Brasil" || pais == "brasil") {
    console.log("Você é brasileiro.");
}else{
    console.log("Você é estrangeiro.");
}

//Verificando se um número é positivo. 

var positivo = entrada.question("Digite um número inteiro: ")
if (positivo >= 0) {
    console.log("Este número é positivo.");
} else {
    console.log("Este número é negativo.");
} 

//Verificando se um número é par 

var par = entrada.question("Digite um número: ")
if (par % 2 == 0) {
    console.log("Este número é par.");
} else {
    console.log("Este número é impar.");
}

//Verificando se uma string é vazia

var string = entrada.question("Digite uma palavra: ")
if (string.length === 0) { //Para verificar uma string vazia usei o .length que conta os caracteres.
    console.log("String vazia.");
} else{
    console.log(`A string digitada foi ${string}.`);
}

//Verificando se um número é mais que 10

var numero = entrada.question("Digite um número: ");
if (numero <= 10) {
    console.log(`O número ${numero} não é maior que 10.`);
} else{
    console.log(`O número ${numero} é maior que 10.`);
}

//Verificando se uma váriavel é do tipo boolean

var comida = "Bolacha";
var lanche = "Bolacha";
var bebida = "Suco";
var bebida2 = "Refrigerante"
if (comida == lanche && bebida == bebida2) {
    console.log(true);
} else {
    console.log(false);
}

//Classificando um número em três categorias

var categorias = entrada.question("Digite um número: ")
if (categorias < 0) {
    console.log("Este número é negativo.");
} else if(categorias = 0){
    console.log("Este número é neutro.");
} else {
    console.log("Este número é positivo.");
}

//Verificando se um número é divisel por 2, 3 ou 5

var divisivel = entrada.question("Digite algum número: ")

if (divisivel % 2 == 0) {
    console.log("Este número é divisivel por 2.");  //REVER ESSA QUESTÃO criar função???
} else if(divisivel % 3 == 0){
    console.log("Este número é divisivel por 3.");
} else if (divisivel % 5 == 0) {
    console.log("Este número é divisivel por 5.");
}

//Verificando se variavel é boolean, numerica, string ou indefinida

var clas = entrada.question("Digite alguma coisa: "); 

if (typeof clas === "string") {
    console.log("Esta variavel é uma string.");
} else if(typeof clas === "number"){ //Lembrar que === checar o tipo de dado
    console.log("Esta variavel é numerica.");
} else if(typeof cla === "true" || typeof clas === "false"){
    console.log("Está variavel é booleana.");
} else{
    console.log("Variavel indefinida.");
}
