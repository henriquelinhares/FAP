/* Uma lista vinculada é uma estrutura de dados linear semelhante a um array. No entanto, ao contrário dos arrays, os elementos não são armazenados em um local da memória ou índice. Em vez disso, cada elemento é um objeto separado, que contém um ponteiro ou um link para o próximo objeto dessa lista. 

Cada elemento (comumente chamado de nó) contém dois itens: os dados armazenados e um link para o próximo nó. Os dados podem ser qualquer tipo de dados válido.

*/


/* 
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.
*/


//Exemplo de criação de lista encadeada: 


class No{
    constructor(Nome,Idade){
        this.Nome = Nome;
        this.Idade = Idade;
        this.proximo = null;
    }
}

class ListaLigada{
    constructor(){
        this.cabeca = null;
    }

    adicionarNo(Nome,Idade){
        const novoNo = new No(Nome,Idade);

        if(this.cabeca == null){
            this.cabeca = novoNo;
        }else
        {
            let noAtual = this.cabeca
            while(noAtual.proximo !== null)
            {
               noAtual = noAtual.proximo;
            }
            noAtual.proximo = novoNo;
        }
        
    }

}


const listaLigada = new ListaLigada();

listaLigada.adicionarNo("Matheus", 23);
listaLigada.adicionarNo("Humberto", 18);
listaLigada.adicionarNo("Deborah", 28);
listaLigada.adicionarNo("Juliane", 26);

console.log(listaLigada);
    