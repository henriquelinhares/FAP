const entrada= require('readline-sync');

// 1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

// let letra = entrada.question('Digite uma letra: ').toUpperCase(); 

// if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
//     console.log(`A letra ${letra} é uma vogal.`);
// } else{
//     console.log(`A letra ${letra} é uma consoante.`);
// }

/* 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado: 
    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

// let aluno = entrada.question('Digite o nome do aluno: '); 
// let nota1 = Number(entrada.question('Digite a primeira nota: ')); 
// let nota2 = Number(entrada.question('Digite a segunda nota: ')); 
// let média = (nota1 + nota2) / 2;

// if (média >= 7 && média <= 9) {
//     console.log(`O aluno ${aluno} foi aprovado. Obteve média ${média}`);
// } else if(média == 10){
//     console.log(`O aluno ${aluno} foi aprovado com dinstinção. Obteve média ${média}`);
// }else{
//     console.log(`O aluno ${aluno} foi reprovado. Obteve média ${média}`);
// }


// 3. Faça um script que leia três números inteiros e mostre o maior deles.

// let numero1 = Number(entrada.question('Digite o primeiro número: '));
// let numero2 = Number(entrada.question('Digite o segundo número: '));
// let numero3 = Number(entrada.question('Digite o terceiro número: '));

// if (numero1 > numero2 && numero1 > numero3) {
//     console.log(`O maior número é: ${numero1}.`);
// } else if(numero2 > numero1 && numero2 > numero3){
//     console.log(`O maior número é: ${numero2}.`);
// } else {
//     console.log(`O maior número é: ${numero3}.`);
// }


/* 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
*/

// let numero1 = Number(entrada.question('Digite um número inteiro: '));
// let numero2 = Number(entrada.question('Digite outro número inteiro: '));

// let aux = numero1; 

// numero1 = numero2; 
// numero2 = numero1; 

// console.log(`Antes o primeiro número era: ${aux} e o segundo número era: ${numero1}. Agora o primeiro número é: ${numero1} e o segundo número é: ${aux}.`);

/* 5. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

// let turnoEstudo = entrada.question('Digite o turno que você estuda: ').toUpperCase(); 

// if(turnoEstudo == 'MANHA'){
//     console.log('bom dia!');
// } else if(turnoEstudo == 'TARDE'){
//     console.log('Boa tarde!');
// } else if(turnoEstudo == 'NOITE'){
//     console.log('Boa noite!');
// } else{
//     console.log('Valor inválido!'); 
// }
 
/* 6. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes. Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
    informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario = parseFloat(entrada.question('Digite o valor do seu sálario: ')); 

