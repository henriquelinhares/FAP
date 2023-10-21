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

    const pessoa = {
        nome: 'Luiz',
        idade: 30
    }
    console.log('A nome do aluno é: ' + pessoa.nome);

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






// let pessoa = {
//     nome: 'João',
// };

// let usuario = {
//     idade: 20
// }
// console.log("A idade do usuário é: " + usuario.idade);


// let produto = {
//     preço: 50
// }
// console.log(" O produto vale: " + produto.preço)

// produto.preço = 70 // Comando para alterar o valor de uma propriedade do objeto.

// console.log("Agora o produto vale: " + produto.preço); 


// let contato = {
//     email: 'linhares.luiz8@gmail.com',
//     nome: 'Luiz'
// }
// console.log("O nome da pessoa é: " + contato.nome + " e o seu email é: " + contato.email);

// delete contato.email // Comando para remover uma pripriedade do objeto. 

// console.log("O nome da pessoa é: " + contato.nome + " e o seu email é: " + contato.email);


// let cliente = {
//     endereço: null // Podemo utilizar null como valor quando a propriedade for receber um valor externo. 
// }

// console.log('O endereço do cliente é: ' + cliente.endereço);

// cliente.endereço = "Rua A, 123" // Serve para dar valor a uma propriedade de um objeto. Pesquisar outras formas. 

// console.log('O endereço do cliente é: ' + cliente.endereço);


// let empresa ={
//     departamentos: ["Saúde", "segurança", "educação"] // Maneira de colocar mais de um valor na propriedade do objeto. 
// }
// console.log(empresa.departamentos[0]); // Maneira de imprimir o primeiro valor da propriedade departamentos. 


// let aluno = {
//     notas: [85, 90, 78]
// }
// aluno.notas[1] = 95 // Alterando um dos valores da propriedade usando o indice de identificação do valor(1). 

// console.log("A primeira nota do aluno foi: " + aluno.notas[0]);


// let dados = {
//     valores: [10, 20, 30]
// }
// delete dados.valores[1]

// console.log(dados.valores);


// let qualquer = {
//     livro: 'Titulo',
//     autor: 'Maria'
// }