const entrada = require('readline-sync');


/* Funções. 
    As funções são execultadas assim que são chamadas ou em decorrência de um evento. 
    Um função pode receber parâmetos e retornar um resultado. Todas as funções podem ter chamada, parêmetro(s), ação(os) e retorno. Nem toda função tem parametro ou retorno. 

    Sintaxe de uma função: function nome da função nome da função(parametros){}

    function ação(Dentro de parenteses nós teremos o que chamamos de parametros formais.) { Dentro das chaves nós teremos a ação de tudo que pode ser execultado.
        
        return res E aqui temos o comando return, que vai trazer um resultado das ações da função.
    }
    ação(algum valor) Aqui nós temos a CHAMADA para disparar a função acima, fazendo ela execultar o código que for proposto. 
    O valor dentro do parentedes da chamada é um parametro Real. 
*/

// Exemplo de uma função que verifica se um número é par ou impar. 

        let res = entrada.question("Digite um numero: ") // Aqui temos a entrada do valor que será utilizado na chamada da função.

        function parimp(n) {  //Aqui temos a função chamada parimp e n como paremetro formal. 
            if (n % 2 == 0) { //No bloco de execulção temos um ifelse para verificar se um número é par ou impar. 
                return "par" //Retorno da função caso seja um número par
            } else {
                return "impar"//Retorno da função caso seja um número impar. 
            }
        }
        console.log(parimp(res)); //Aqui temos a chamada da função mais o valor recebido na variavel res como paremetro real, valor que vai ser trabalhado dentro da função. 
        
        


    // exemplo de um função com dois paremetros.


        function soma(num=0, nume=0){//O zero pode ser colocado caso um dos paramentros não receba um valor e não dê o erro NaN.
            return num + nume
        }

        let numero1 = Number(entrada.question("Digite um numero: "))
        let numero2 = Number(entrada.question("Digite outro numero: "))
    
        console.log(soma(numero1, numero2));

    
        
        // Exemplo de função dentro de uma variavel

        let v = function multiplicar(x) {
            return x * 2
        }
        
        console.log(v(5));

        //Exemplo de função que chama ela mesma. 

        function fatorial(n) {
            if (n == 1) {
                return 1
            } else {
                return n * fatorial(n-1)
            }
        }