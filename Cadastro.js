const entrada= require('readline-sync');

let geradorMatricula = 3;

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

const alunos = [aluno1, aluno2, aluno3];

// console.log(alunos); 

let loop = true; 
while (loop) {
    console.log('=== CADASTRO DE ALUNOS ===');
    console.log('========== MENU ==========');
    console.log('0 - Sair do programa.');
    console.log('1 - Listar todos os alunos.');
    console.log('2 - Cadastrar novo aluno.');
    console.log('3 - Busque um cadastro.');
    console.log('4 - Alterar um aluno.');

    let opcao = entrada.questionInt('Escolha uma opcao: ');
    switch (opcao) {
        case 0:
            console.log('Você saiu do programa.');
            loop = false;
            break;
        case 1:
            console.log('Essa é a lista de todos os alunos: ');
            for (const al of alunos) {
                if(busca === al.matricula)
                console.log(`Mat. : ${al.matricula}`);
                console.log(`Nome : ${al.nome}`);
                console.log(`Notas: ${al.notas}`);
            }
            break
        case 2: 
            let nomeAluno = entrada.question('Digite o nome do aluno: '); 
            let notasAlunos = [];
            for(let i = 0; i < 3; i++){
                notasAlunos[i] = entrada.questionFloat(`Digite a nota ${i + 1}: ` );
            }
            const aluno = {
                matricula: ++geradorMatricula,
                nome: nomeAluno,
                notas: notasAlunos,
            };
            alunos.push(aluno)
            console.log('Aluno cadastrado com sucesso.');

            break
        case 3:
            let busca = entrada.questionInt('Matricula do aluno que deseja buscar: ');
            for (const al of alunos) {
                if (al.matricula === busca) {
                    console.log(`Matricula: ${al.matricula}`);
                    console.log(`Nome : ${al.nome}`);
                    console.log(`Notas: ${al.notas}`);
                    } 
            }
            break
        case 4:
            let alterar = entrada.questionInt('Matricula do aluno que deseja alterar: ');
            for (const al of alunos) {
                if (al.matricula === alterar) {
                    console.log(``);
                }
            }
            break
        default:
            console.log('Opcao inválida.');
            break;
    }
} 


