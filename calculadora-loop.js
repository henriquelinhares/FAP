const entrada= require('readline-sync');

let numero = Number(entrada.question('Informe o valor da operação que deseja. 1: +; 2: -; 3: *; 4: /; ou 0: para sair. ')); 

while (numero > 4) {
    console.log('Opção inválida. Tente novamente. ');
    numero = Number(entrada.question('Informe o valor da operação que deseja. 1: +; 2: -; 3: *; 4: /; ou 0: para sair. '));
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
    numero = Number(entrada.question('Informe o valor da operação que deseja. 1: +; 2: -; 3: *; 4: /; ou 0: para sair. '));
}
