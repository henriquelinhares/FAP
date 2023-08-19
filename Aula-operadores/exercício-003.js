/* Operadores lógicos. 

    Temos três operadores lógicos. São eles: ! && || 

        ! significa negação. Ele é tratado como operador unario e só tem um operando. Uma expressão que seja true
        ou false.  

        && Quer dizer conjunção. Ou chamamos de "e" lógico. Ele é um operador binário, então teremos dois valores
        lógicos para dar o resultado de uma expressão.

        || É a disjunção. Também é o nosso "ou" lógico. Também é um operador binário que teremos dois valores
        lógicos para o resultado da expressão. 


        Exemplos: var a = 5; 
                  var b = 8; 
                  var c = a > b && b % 2 == 0; Aqui temos três tipos de operadores na mesma expressão. Então 
                  primeiro será feito os operadores aritméticos, depois os relacionais e por fim os lógicos.

                OBS: Se em uma expressão tivermos um && um || e um !, a ordem de execução vai ser: 
                    Primeiro ! negação. 
                    Segundo && conjunção.
                    Terceiro || Desjunção.

*/

var idade; 
idade >= 15 && idade <= 17;  // A idade está entre 15 e 17? 

var estado; 
estado == 'RJ' || estado == 'SP';  // O estado é RJ ou SP? 

var salario;
salario > 1500 && sexo != 'M'; // Ganha mais de 1500 e é uma mulher? 


/* Ordem de precedência dentro de uma expressão: 

Primeiro: Operadores aritméticos. 
Segundo: Operadores relacionais. 
Terceiro: Operadores lógicos. 

*/


// Operado Ternário; 

/* O Operador ternário é formado por ? e : dentro de uma mesma expressão. E ele se chama ternário porque tem 
três partes. 

Exemplo:   teste ? true : false 
        var media = 5,5; 
            media > 7?'Aprovado':'Reprovado'
*/

var a = 8; 
var b = a / 2 == 4? 5:9;

console.log(b);