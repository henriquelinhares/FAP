const entrada = require('readline-sync');

//https://www.javascriptprogressivo.net/2018/12/Lista-Exercicios-Lacos-Loopings-WHILE-FOR.html

/* 1: Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
*/

// while (true) {
//     let nota = entrada.questionInt('Digite um valor entre 0 e 10: ');
//     if (nota < 0 || nota > 10) {
//         console.log('Valor inválido. Tente novamente.');
//     } else{
//         console.log('O valor digitado foi: ' + nota);
//         break //para encerrar o loop
//     }
// }

/* 2: Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

// while (true) {
//     let nomeUsuario = entrada.question('Digite seu nome de usuário: ').toUpperCase(); 
//     let senhaUsuario = entrada.question('Digite sua senha: ').toUpperCase();
//         if (nomeUsuario === senhaUsuario) {
//             console.log('Escolha uma senha diferente do nome de usuário.');
//         }else{
//             console.log('Usuário e senha registrados com sucesso.');
//             break
//         }
// }


/* 3: Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';

*/

// let nome = entrada.question('Digite seu nome: '); 
//     for (let cont = 3; nome.length < cont ; nome = entrada.question('Digite seu nome: ')){
//         console.log('Seu nome precisa ter mais de três caracteres.');
//     }
//     console.log(`Olá, ${nome}. Seu nome foi registrado.`);
    
// let idade = entrada.questionInt('Digite sua idade: ');
//     for(cont = 150; idade > cont || idade < 0; idade = entrada.questionInt('Digite sua idade: ')){
//         console.log('Sua idade precisa estar entre 0 e 150.');
//     } 
//     console.log(`Pronto, ${nome}. Sua idade, ${idade} anos, foi registrada.`);
    
// let salario = entrada.questionFloat('Informe seu salario: '); 
//     for (let cont = 0; salario.length < cont || salario == null;salario = entrada.questionFloat('Informe seu salario: ')){
//         console.log('Sário inválido. Digite novamente.');
//     } 
//     console.log(`Salario, ${salario} Reais, registrado.`);

// let sexo = entrada.question('Digite seu sexo. M ou F: ').toUpperCase();
//     for (; sexo != 'M' && sexo != 'F'; sexo = entrada.question('Digite seu sexo. M ou F: ').toUpperCase()){
//     console.log('Opção invalida.');
//     } if (sexo == 'M') {
//     console.log(`Pronto, ${nome}. Registramos que você é so sexo masculino.`);
//     } else{
//     console.log(`Pronto, ${nome}. Registramos que você é do dexo feminino.`);
//     }

// console.log('===Escolha seu estado civil==');
// console.log('C: para casado; S: para solteiro; V: para viuvo; D: para divorciado.');

// let estadoCivil = entrada.question('Digite seu estado civil: ').toUpperCase();
//     for(; estadoCivil != 'C' && estadoCivil != 'S' && estadoCivil != 'V' && estadoCivil != 'D'; estadoCivil = entrada.question('Digite seu estado civil: ').toUpperCase()){
//         console.log('Opção inválida.');
//     } if(estadoCivil === 'C'){
//          console.log(`Seu registro como casado(a) foi realizado.`);
//     } else if(estadoCivil === 'S'){
//          console.log('Seu registro como solteiro(a) foi realizado.');
//     } else if(estadoCivil === 'D'){
//          console.log('Seu registro como divorciado(a) foi realizado');
//     } else if(estadoCivil === 'V'){
//         console.log('Seu registro como viuvo(a) foi realizqado.');
//     } 
   
// console.log('Fim do cadastro.');



/* 4: Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. */

// let populacaoA = 80000;
// let populacaoB = 200000;
// let taxaCrescimentoA = 0.03;
// let taxaCrescimentoB = 0.015;
// let anos = 0;

// while (populacaoA < populacaoB) {
//   populacaoA += populacaoA * taxaCrescimentoA;
//   populacaoB += populacaoB * taxaCrescimentoB;
//   anos++;
// }

// console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

/* 5: Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação. */

// let populacaoA = entrada.questionFloat('Informa o valor total da população de um cidade: ');
// let populacaoB = entrada.question('Informa o valor total da população de outra cidade: ');
// let taxaCrescimentoA = entrada.questionFloat('Informe o valor da taxa de crescimento da primeira cidade: ');
// let taxaCrescimentoB = entrada.questionFloat('Informe o valor da taxa de crescimento da segunda cidade: ');
// let anos = 0;

// while (populacaoA < populacaoB) {
//   populacaoA += populacaoA * taxaCrescimentoA;
//   populacaoB += populacaoB * taxaCrescimentoB;
//   anos++;
// }
// console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);


/*6: Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro. */


// for(let cont = 1; cont <= 20; cont++){
//     console.log(cont);
// } 

/*ara modificar o programa e exibir os números um ao lado do outro, você pode concatenar os números em uma string e usar a função console.log() para exibir a string completa. Veja o exemplo abaixo: */

// let numeros = "";
// for (let i = 1; i <= 20; i++) {
//   numeros += i + " ";
// }
// console.log(numeros); 


/* 7: Faça um programa que leia 5 números e informe o maior número. */

const numeros = [4, 6, 3, 2, 8];
for (const n of numeros) {
    console.log(n);
}

