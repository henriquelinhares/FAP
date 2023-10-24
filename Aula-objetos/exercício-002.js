const entrada = require('readline-sync');

class pessoa {
    constructor(nome, idade, profissão){
        this.nome = nome
        this.idade = idade
        this.profissão = profissão
    }
}
const médico1 = new pessoa('Luiz', 30, 'cardiologista');
const médico2 = new pessoa('Henrique', 25, 'Pediatra');

const medicos = [médico1, médico2]

console.log(medicos);

let nomeMedico = entrada.question('Digite o nome do médico: ');
let idadeMedico = entrada.question('Digite a idade do médico: ');
let profissaoMedico = entrada.question('Digite a profissão do médico: ');
const medico = new pessoa(nomeMedico, idadeMedico, profissaoMedico);
medicos.push(medico)

console.log(medicos);

