const entrada= require('readline-sync');

const aluno1 = {
    matricula: 1, 
    nome:'Alice Linhares',
    notas:[10, 9, 8.5],
}
const aluno2 = {
    matricula: 2,
    nome:'Luiz Henrique',
    notas:[8, 8.5, 9],
}
const aluno3 = {
    matricula: 3,
    nome:'Pedro Costa',
    notas:[8, 7.5, 9],
}

// const alunos = [aluno1, aluno2, aluno3];

console.log(alunos);

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
        break
    default:
        console.log('Opcao inválida.');
        break;
}
} 


