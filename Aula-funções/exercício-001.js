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

    exemplo: 

        function soma(numero1=0, numero2=0){//O zero pode ser colocado caso um dos paramentros não receba um valor e não dê o erro NaN.
            return numero1+numero2
        }

        let numero1 = Number(entrada.question("Digite um número: "))
        let numero2 = Number(entrada.question("Digite outro número: "))
    
        console.log(soma(numero1, numero2));

    
        

        