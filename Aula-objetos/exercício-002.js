const entrada = require('readline-sync');

class pessoa {
    constructor(nome, idade, profissão){
        this.nome = nome
        this.idade = idade
        this.profissão = profissão
    }

    info(){
        console.log(`Nome.: ${this.nome}.`);
        console.log(`Idade.: ${this.idade}`);
        console.log(`Profissão.: ${this.profissão}`);
        console.log('===============================');
    }
}

let pessoa1 = new pessoa('Luiz', 30, 'Biólogo');
let pessoa2 = new pessoa('Henrique', 25, 'Professor');
let pessoa3 = new pessoa('Linhares', 22, 'Vagabundo');

pessoa1.info()

