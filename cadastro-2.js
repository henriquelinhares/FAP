const entrada = require('readline-sync');

let gerador = 2;

const funcionario1 = {
    matricula: 1,
    nome:'Luiz',
    idade: 29,
    função: 'Estudante'
}
const funcionario2 = {
    matricula: 2,
    nome: 'Alice',
    idade: 27,
    função:'Analista de laboratório'
}

const funcionarios = [funcionario1, funcionario2];

let loop = true;

while (loop) {
    console.log('===============MENU==============');
    console.log('0: para sair.');
    console.log('1: Acessar dados dos funcionarios.');
    console.log('2: Buscas funcionário.'); 
    console.log('3: Adicionar novo funcionário.');
    console.log('4: Modificar funcionário.');
    console.log('5: Excluir funcionário.');
    console.log('=======================================');
    let opcao = entrada.questionInt("Escolha uma opção. ");

    switch (opcao) {
        case 0:
            console.log('Programa encerrado. Até logo.');
            loop = false;
            break;
        case 1:
            for (const iterator of funcionarios) {
                console.log('Matricula: ' + iterator.matricula);
                console.log('nome: ' + iterator.nome);
                console.log('idade: ' + iterator.idade);
                console.log('Função: ' + iterator.função);
            } 
            break 
            readline.keyInPause();
           
        case 2:
            let matricula = entrada.questionInt('Digite a matricula do funcionário: ');
            for (const iterator of funcionarios) {
                if(iterator.matricula === matricula){
                console.log('Matricula: ' + iterator.matricula);
                console.log('Nome: ' + iterator.nome);
                console.log('Idade: ' + iterator.idade);
                console.log('Função: ' + iterator.função);
                }
            }
            break
            readline.keyInPause();
        case 3: 
            let NovoNome = entrada.question('Digite o nome do funcionário: ');
            let NovaIdade = entrada.questionInt('Digie a idade do funcionário: ');
            let NovaFuncao = entrada.question('Digite a função do funcionário: ');

            const funcionário = {
                matricula: ++gerador,
                nome: NovoNome,
                idade: NovaIdade,
                função: NovaFuncao,
            };
            funcionarios.push(funcionário)
            console.log('===================================');
            console.log('Funcionário cadastrado com sucesso.'); 
            break
            readline.keyInPause();
        case 4:
            let ModificarFuncionario = entrada.questionInt('Digite a matricula do funcionário que deseja alterar: ');
            for (const iterator of funcionarios) {
                if(iterator.matricula === ModificarFuncionario){
                 iterator.nome = entrada.question('Informe o nome do funcionário: ');
                 iterator.idade = entrada.question('Informa a idade do funcionário: ');
                 iterator.função = entrada.question('Infrme a função do funcionário: ');
                }
            }
            console.log('=========================================================');
            console.log('Dados alterados com sucesso.');
            break
            readline.keyInPause();
        case 5:
            let excluir = entrada.questionInt('Infome a matricula do funcionário que deseja escoluir: ');
            for (const iterator of funcionarios){
                if(iterator.matricula === excluir){
                funcionarios.splice(funcionarios.indexOf(iterator), 1)
                }
            }
            console.log('=================================');
            console.log('Funcionário excluído com sucesso.');
            break
        default:
            break;
    }
}




