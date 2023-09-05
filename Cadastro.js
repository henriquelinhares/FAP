const entrada= require('readline-sync');


let loop = true; 
while (loop) {
console.log('=== CADASTRO DE ALUNOS ===');
console.log('========== MENU ==========');
console.log('0 - Sair do programa.');
console.log('1 - Listar todos os alunos.'); 

let opcao = entrada.questionInt('Escolha uma opcao: ');
switch (opcao) {
    case 0:
        console.log('Você saiu do programa.');
        break;
    case 1:
        console.log('Essa é a lista de todos os alunos: ');
    default:
        console.log('Opcao inválida.');
        break;
}
} 


