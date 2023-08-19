//Tipos de dados 

//Number/número e String/palavra

const entrada= require('readline-sync'); //Necessário para receber dados pelo teclado no terminal node

let nome = entrada.question("Digite seu nome: ");  //comando para pedir alguma informação
console.log("Você se chama " + nome); // O símbolo de + serve para operação de adição e também para concatenar informações.

let numero1 = Number(entrada.question("Digite um número:"));  
let numero2 = Number(entrada.question("Digite outro número:"))
let resultado = numero1 + numero2;
console.log("A soma dos dois números é: " + resultado); 

/*Number.parsefloat serve para converter string para número. Todos os dados que entram viar comando 
  são tratados como string. Então, como o simbolo de + vai concatenar as informações em vez de somar.
  por isso é importante fazer a conversão. 

  Obs: Number.parsefloat() serve para número reais/ponto flutuante
       Number.parseInt() serve para números inteiros
       Number pode ser usado sozinho, fazendo o próprio JS se virar para saber o tipo de dado.

       Para converter um número em string, podemos utilizar dois comandos:
       String() ou .toString()
*/

let idade = 29; 
let nota = 7; 

console.log("O aluno " + nome + " tem " + idade + " anos e a sua nota foi " + nota);
//O simbolo de + fazendo todas as concatenações das informações. 

/* Para facilitar a concatenação das informações e não precisar digitar tantas vezes, podemos usar o chamado
template string usando o comando ${} dentro de `` em vez de ser dentro de "".
*/
/* exemplo de templete string */ console.log(`O aluno ${nome} com ${idade} anos tirou ${nota} na prova.`);



/* Comandos extras para tratamento de strings:
    s.length vai informar quantos caracteres a string tem.
    s.toUpperCase() vai colocar tudo em letras maiusculas. 
    s.toLowerCase() vai colocar tudo em letras minusculas.
*/
      console.log(`Seu nome tem ${nome.length} letras.`);
      console.log(`Seu nome em letras maiculas fica dessa forma ${nome.toUpperCase()}`);
      console.log(`Seu nome em letras minusculas fica dessa forma ${nome.toLowerCase()}`);

/* Formantando números 
    O comando n.toFixed() vai definir quantas casas decimais o número vai ter.
    O comando n.toFixed().replace('.', ',') vai trocar a utilização de ponto por virgula, por exemplo. 
    O comando n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) Este serve para colocar o valor na moeda Real
*/
      let salario = 1200.5
      console.log(`O sálario de ${nome} é ${salario.toFixed(2).replace('.',',')}`);