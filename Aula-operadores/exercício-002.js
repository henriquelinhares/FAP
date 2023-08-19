// Aula de operadores segunda parte

/* Operadores relacionais. 

        Os operadores relacionais são: > < >= <= == !=
        Os resultados das expressões utilizando os operadores relacionais sempre resultam em valores boolean,
        ou seja True/verdadeiro ou False/falso. 
            
            5 > 2 = True
            7 < 4 = False
            8 >= 8 = True
            9 <= 7 = False
            5 == 5 = True
            4 != 4 = False
*/
var a = 8; 
var b = 15; 
var c = a > b;

console.log(c);

    /* Se em alguma expressão tiver operadores relacionais e os aritméticos, primeiro será resolvido 
    o aritmetico. 
        Exemplo: var a = 8; 
                 var b = 4; 
                 var c = a > b + 4; Aqui primeiro b vai ser comado a 4 para depois verificar se a é maior.
                     c = false  
 */
var d = 8; 
var e = 4; 
var f = a > b + 4; 

console.log(f);


/* Operador de identidade 

Exemplo: 5 == 5 = True
     5 == '5' = True Aqui também é verdadeiro porque o sinal de == não testa o tipo. Temos o valor 5 em inteiro
     e temos o valor '5' em string. Ele análisa os valores, mesmo que sejam valores de tipos diferentes.
     
     Aí onde entra o operador de igualdade restrita (===)

     Exemplo: 5 === '5' = False. Aqui será analisado se os valores são identicos, ou seja, se possuem o mesmo
     valor e o mesmo tipo. 

     Também podemos verificar se os valores são diferentes usando o desigual restrito. 

     Exemplo: 5 !== '5'; 

*/
    var g = 5 == 5; 
    var h = 5 == '5';
    var i = 5 === '5'

    console.log(g, h, i);