const entrada = require('readline-sync'); 

/* Error: É a interrupção involuntária na execução do código, normalmente como exceções.
Erros de sintaxe são um tipo de exceção que ocorre quando a sintaxe está incorreta. 

throwing an exception: Envia uma mensagem de que algo errado na execução pretendida do codigo,
pelo javascript ou pela pessoa desenvolvida com a palavra-chave throw. 

Palavras chave: Try, Catch, Finally. 

    Try: Bloco de código que pode lançar uma exceção.
    Catch: Bloco de código que será executado se uma exceção for lançada.
    Finally: Parte opcional do código que será executado após o bloco try ou após o bloco catch.
*/

// Sintaxe das exceções: 

    try {

    } catch(error){

    } finally{
        
    }




Exemplo: 
    throw 'minha-excecao'; // saída: Uncaught 'minha excecao'
    throw true; // saída: Uncaught true
    throw 42; // saída: Uncaught 42