//Objetos Materiais:

//Carro

Atributos: cor, modelo, ano
Métodos: acelerar(), frear(), ligar()
Exemplo:

const carro = {
  cor: 'vermelho',
  modelo: 'Ferrari',
  ano: 2021,
  acelerar: function() {
    console.log('Acelerando o carro...');
  },
  frear: function() {
    console.log('Freando o carro...');
  },
  ligar: function() {
    console.log('Ligando o carro...');
  }
};
carro.acelerar(); // Acelerando o carro...
carro.frear(); // Freando o carro...
carro.ligar(); // Ligando o carro...

//Televisão

Atributos: marca, tamanho, resolucao
Métodos: ligar(), desligar(), trocarCanal()
Exemplo:

const televisao = {
  marca: 'Samsung',
  tamanho: '55 polegadas',
  resolucao: '4K',
  ligar: function() {
    console.log('Ligando a televisão...');
  },
  desligar: function() {
    console.log('Desligando a televisão...');
  },
  trocarCanal: function() {
    console.log('Trocando o canal...');
  }
};
televisao.ligar(); // Ligando a televisão...
televisao.trocarCanal(); // Trocando o canal...
televisao.desligar(); // Desligando a televisão...

//Objetos Abstratos:

//Conta Bancária

Atributos: número, titular, saldo
Métodos: depositar(valor), sacar(valor), consultarSaldo()
Exemplo:

const contaBancaria = {
  número: '123456',
  titular: 'João',
  saldo: 1000,
  depositar: function(valor) {
    this.saldo += valor;
    console.log(`Depositando R$${valor} na conta...`);
  },
  sacar: function(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Sacando R$${valor} da conta...`);
    } else {
      console.log('Saldo insuficiente.');
    }
  },
  consultarSaldo: function() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
};
contaBancaria.depositar(500); // Depositando R$500 na conta...
contaBancaria.sacar(200); // Sacando R$200 da conta...
contaBancaria.consultarSaldo(); // Saldo atual: R$1300

//Livro

Atributos: título, autor, anoPublicacao
Métodos: abrir(), fechar(), ler()
Exemplo:

const livro = {
  título: 'A Menina que Roubava Livros',
  autor: 'Markus Zusak',
  anoPublicacao: 2005,
  abrir: function() {
    console.log('Abrindo o livro...');
  },
  fechar: function() {
    console.log('Fechando o livro...');
  },
  ler: function() {
    console.log('Lendo o livro...');
  }
};
livro.abrir(); // Abrindo o livro...
livro.ler(); // Lendo o livro...
livro.fechar(); // Fechando o livro...