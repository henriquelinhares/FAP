/* Aula sobre objetos. 

O que são objetos em javascript? Os objetos em js têm propriedades assosciadas. Ex: livro tem um tótulo, autor e disponibilidade. 
Os objetos também têm métodos associados a eles. ex: 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects

https://blog.debugeverything.com/pt/como-acessar-propriedades-em-objetos/

*/

//Sintaxe de objeto


let pessoa = {
    nome: 'João',
};

let usuario = {
    idade: 20
}
console.log("A idade do usuário é: " + usuario.idade);


let produto = {
    preço: 50
}
console.log(" O produto vale: " + produto.preço)

produto.preço = 70 // Comando para alterar o valor de uma propriedade do objeto.

console.log("Agora o produto vale: " + produto.preço); 


let contato = {
    email: 'linhares.luiz8@gmail.com',
    nome: 'Luiz'
}
console.log("O nome da pessoa é: " + contato.nome + " e o seu email é: " + contato.email);

delete contato.email // Comando para remover uma pripriedade do objeto. 

console.log("O nome da pessoa é: " + contato.nome + " e o seu email é: " + contato.email);


let cliente = {
    endereço: null // Podemo utilizar null como valor quando a propriedade for receber um valor externo. 
}

console.log('O endereço do cliente é: ' + cliente.endereço);

cliente.endereço = "Rua A, 123" // Serve para dar valor a uma propriedade de um objeto. Pesquisar outras formas. 

console.log('O endereço do cliente é: ' + cliente.endereço);


let empresa ={
    departamentos: ["Saúde", "segurança", "educação"] // Maneira de colocar mais de um valor na propriedade do objeto. 
}
console.log(empresa.departamentos[0]); // Maneira de imprimir o primeiro valor da propriedade departamentos. 


let aluno = {
    notas: [85, 90, 78]
}
aluno.notas[1] = 95 // Alterando um dos valores da propriedade usando o indice de identificação do valor(1). 

console.log("A primeira nota do aluno foi: " + aluno.notas[0]);


let dados = {
    valores: [10, 20, 30]
}
delete dados.valores[1]

console.log(dados.valores);


let qualquer = {
    livro: 'Titulo',
    autor: 'Maria'
}