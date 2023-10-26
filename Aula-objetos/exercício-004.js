//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

//Métodos estáticos 

// Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe.  
// Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

//Sintaxe: static nomeMetodoStatico(){}

class pessoa{
    constructor(nome, idade){
        this.nome = 'Luiz'
        this.idade = 30
    }
    static metodoEstatico(){
        return ''
    }
}
console.log(pessoa.metodoEstatico());