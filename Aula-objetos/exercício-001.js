/* Aula sobre objetos. 

Um objeto JavaScript é um tipo de dados não primitivo que permite armazenar várias coleções de dados.

O que são objetos em javascript? Os objetos em js têm propriedades assosciadas. Ex: livro tem um título, autor e disponibilidade. 

Os objetos também têm métodos associados a eles. ex: 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects

https://blog.debugeverything.com/pt/como-acessar-propriedades-em-objetos/


Sintaxe de objeto: 

    const nomeObjeto = {
        chave1: valor1,
        chave2: valor2
    }
*/
// Exemplo

    // const pessoa = {
    //     nome: 'Luiz',
    //     idade: 30
    // }
    // console.log('A nome do aluno é: ' + pessoa.nome);

// Também podemos criar um objeto em uma única linha. 

    const alunos = {nome: 'Alice', idade: 27, profissão: 'Bióloga'}
    console.log('O nome da aluna é: ' + alunos.nome);
    console.log(alunos.nome + ' tem ' + alunos.idade + ' anos e sua profissão é ' + alunos.profissão);

// Em JavaScript, os pares "chave: valor" são chamados de propriedades.
// Para acessar uma propriedade usamos a notação por ponto e por colchetes.
// nomeObjeto.propriedade ou nomeObjeto['propriedade']

    // const pessoa1 = {  Luiz e idade são propriedades. 
    // nome: 'Luiz', 
    // idade: 30
    // }
// console.log(pessoa1.nome); pessoa1.nome para acessar a propriedade nome de pessoa1
// console.log(pessoa1['nome']);

    const professor = {
        nome: 'Henrique',
        materia: 'Biologia',
        horário: ' a partir das 08:00 horas.'
    }
    console.log('O nome do professor é: ' + professor.nome);
    console.log('O professor ' + professor.nome + ' ensina ' + professor['materia'] + professor['horário']);

// Um objeto também pode conter outro objeto. Exemplo: 

    const aluno = {
        nome: 'Henrique',
        idade: 22,
        notas: {
            ciência: 10,
            matemática: 9,
        },
    }
    console.log(aluno.notas);

 // Um objeto também pode conter uma função. Exemplo: 
 
    const pessoa2 = {
        nome:'Amelia',
        idade: 35, 
        saudadação: function(){console.log('Olá, pessoa.');} //função em objeto é um método.
    }
    console.log(pessoa2.saudadação()); //Acessando o método. 

// Para acessar uma propriedade de um objeto de dentro de um método do mesmo objeto, precisamos usar a palavra-chave-this. Exemplo: 

    const casa = {
        endereço: 'Rua Amelia',
        numero: 22,
        referencia: function(){console.log('A rua é: ' + this.endereço);}
    }
    console.log(casa.referencia()); 

// A função dentro de um objeto pode acessar sua váriavels de maneira semelhante a uma função normal. Exemplo:

    const animal = { 
        nome:'Luck',
        idade: 12,
        observação: function(){
        let raça = 'viralata';
        console.log('O nome é ' + this.nome + ' e sua raça é ' + raça)},
    }
    console.log(animal.observação());

// Também temos função construtora para criar objetos. Exemplo: 

    function usuario(){ //função construtora
        this.nome = 'Luiz',
        this.idade = '30'
    }
    //cria um objeto
    const usuario1 = new usuario(); //New é uma palavra chave 
    const usuario2 = new usuario();

    console.log(usuario1.nome); //acessando propriedades
    console.log(usuario2.idade);

// Quando a palavra this é usada em uma função construtora, refere-se ao objeto quando o objeto é criado. Portanto, quando um objeto acessa as propriedades, ele pode acessar diretamente a propriedade como pessoa1.nome


// Parâmetros de uma função construtora. 

function pessoa(nome_pessoa, idade_pessoa, genero_pessoa){ //parêmetros recebidos.
    this.nome = nome_pessoa,
    this.idade = idade_pessoa,  //atribuindo valores de parametros ao objeto de chamada
    this.genero = genero_pessoa,
    this.saudar = function(){
        return ('Oi ' + this.nome);
    }
}
const pessoa1 = new pessoa('Luiz', 23, 'masculino');  //Argumentos passados
const pessoa3 = new pessoa('Henrique', 25, 'masculino'); 

console.log(pessoa1.idade);
console.log(pessoa3.nome);  

// Objeto literal geralmente é usado para criar um único objeto, já a função construtora é útil se você deseja criar vários objetos. 

//Cada objeto criado a partir da função construtora é único. Você pode ter as mesmas propriedades da função construtora ou adicionar uma nova propriedade a um objeto específico. 

// No entanto, se um objeto for criado como literal e se uma variável for definida com esse valor de objeto, quaisquer alterações no valor da variável irá alterar o objeto original.

const eu = {
    nome: 'Luiz'
}
console.log(eu.nome); //Luiz

let ela = eu; 
    ela.nome = 'Alice' //Altera o nome do objeto original
    
console.log(eu.nome); //Alice


//Adicionando propriedades e métodos em um objeto. 

function outraPessoa(){
    this.nome = 'João',
    this.idade = 25
}

let outrapessoa1 = new outraPessoa();
let outraPessoa2 = new outraPessoa();

outrapessoa1.genero = 'masculino'; //Adicionando propriedade ao objeto outraPessoa1
outrapessoa1.alerta = function(){
    console.log('Olá.');  //Adicionando métodos ao objeto outraPessoa1
}

outrapessoa1.alerta(); //Olá
outraPessoa2.alerta(); // Erro! outraPessoa2 não possui método. 

