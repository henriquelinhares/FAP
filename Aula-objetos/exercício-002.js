const entrada = require('readline-sync');

class pessoa {
    constructor(nome, idade, profissão){
        this.nome = nome
        this.idade = idade
        this.profissão = profissão
    }
    
    getNome(){
        return 'Nome.: ' + this.nome
    }
    getIdade(){
        return 'Idade.: ' + this.idade
    }
    getProfissão(){
        return 'Profissão.: ' + this.profissão
    }

    setNome(nome){
        this.nome = nome
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

console.log(pessoa1.info());
console.log(pessoa2.info());
console.log(pessoa3.info());

pessoa1.setNome('Alice');
console.log(pessoa1.getNome());
