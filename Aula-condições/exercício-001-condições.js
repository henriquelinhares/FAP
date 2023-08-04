/*Condições. 
A estrutura condicional permite avaliar uma condição e, a partir dela, executar diferentes linhas de 
código.

As condições com apenas um tipo de bloco, é chamada de condição simples.
Ja a condição com dois tipos de blocos, são chamadas de condição composta.
*/

var velocidade = 65;
if (velocidade > 60) { //Quando se utiliza apenas o if, temos uma condição simples.
    console.log(`A velocidade do seu carro é ${velocidade}km/h. Multado!`);
} else{// Utilizando if e else, temos uma condição composta. 
    console.log(`A velocidade do seu carro é ${velocidade}km/h. Dirija com cuidado!`);
}
