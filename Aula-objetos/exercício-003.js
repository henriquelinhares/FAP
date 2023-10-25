
//Herança

class carro {// classe pai
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false 
        this.velocidade = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
    info(){
        console.log('Nome.: ' + this.nome);
        console.log('Portas.: ' + this.portas);
        console.log('cor.: ' + this.cor);
        console.log('Ligado: ' + this.ligado);
        console.log('Velocidade.: ' + this.velocidade);
    }
}

class Militar extends carro { //Extendes é utilizado para definir que éssa classe é uma herança e vai herdar tudo da classe carro. 
    constructor(nome, portas, blindagem, munição){ //construtor da classe filho
        super(nome, portas)// Serve para invocar atributos da classe pai
        this.blindagem = blindagem
        this.munição = munição
        this.setCor = 'Verde'
    }
    atirar = function(){
        if(this.munição > 0){
            this.munição--
        }
    }
}

const c1 = new carro('Normal', 2);
console.log(c1.info());
c1.ligar()
c1.setCor('Vermelho')
console.log(c1.info());


const c2 = new Militar('Lutator', 4, 100, 50)
c1.ligar()
console.log(c2);