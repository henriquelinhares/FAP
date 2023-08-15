const entrada = require('readline-sync');


/* Funções. 
    As funções são execultadas assim que são chamadas ou em decorrência de um evento.
    Um função pode receber parâmetos e retornar um resultado. 
    Todas as funções podem ter chamada, parêmetro(s), ação(os) e retorno.

    Estrutura de código de uma função: function ação(parametros){}
*/

    exemplo: 
       function parimp(res) {
            if (res % 2 == 0) {
                return "par"
            } else {
                return "impar"
            }
        }
    let res = entrada.question("Digite um número: ")
    
    console.log(parimp(res));
