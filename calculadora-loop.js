/* Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve 
ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem 
“Essa opção não existe” e voltar ao menu de opções. Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor,
 um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá 
 parar. É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 
*/

const entrada= require('readline-sync');

let numero = Number(entrada.question('Informe o valor da operação que deseja. 1: soma; 2: subtração; 3: multiplicação; 4: divisão; ou 0: para sair. '));

while (numero > 4) {
    console.log('Opção inválida. Tente novamente. ');
    numero = Number(entrada.question('Informe o valor da operação que deseja. 1: soma; 2: subtração; 3: multiplicação; 4: divisão; ou 0: para sair. '));
}
while (numero != 0) {
    var numero1 = Number(entrada.question('Digite o primeiro valor: '));
    var numero2 = Number(entrada.question('Digite o segundo valor: ')); 

    if (numero == 1) {
        console.log('O resultado da soma é: ' + (numero1+numero2));
    } else if (numero == 2) {
        console.log('O resultado da subtração é: ' + (numero1-numero2));
    } else if (numero == 3) {
        console.log('O resultado da multiplicação é: ' + (numero1*numero2));
    } else if (numero == 4) {
        console.log('O resultado da divisão é: ' + (numero1/numero2));
    } else {
        console.log('Até a próxima.');
    }
    numero = Number(entrada.question('Informe o valor da operação que deseja. 1: soma; 2: subtração; 3: multiplicação; 4: divisão; ou 0: para sair. '));
}
