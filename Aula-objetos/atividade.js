
class carro {
    constructor(marca, modelo, ano, velocidade){
       this.marca = marca,
       this.modelo = modelo,
       this.ano = ano,
       this.velocidade = velocidade
    }
    acelerar = function(){
       this.velocidade = this.velocidade + 10
    }
    info(){
        console.log('Marca do carro: ' + this.marca);
        console.log('Modelo do carro: ' + this.modelo);
        console.log('Ano do carro: ' + this.ano  );
        console.log('Velocidade do carro: ' + this.velocidade);
    }
} 

const carros = []

class carroEsportivo extends carro {
    constructor(marca, modelo, ano, velocidade){
        super(marca, modelo, ano, velocidade)
    }
    acelerar = function(){
        this.velocidade = this.velocidade + 20
    }
    desacelerar = function(){
        this.velocidade = this.velocidade - 10
    }
}

const c1 = new carro('Peugeot', '206', 2005, 140);
carros.push(c1)
console.log(carros);
c1.acelerar()
console.log(carros);

const c2 = new carroEsportivo('Peugeot', '206 GTI', 2005, 160);
carros.push(c2)
console.log(carros);
c2.acelerar()
console.log(carros);  

const c3 = new carroEsportivo('Peugeot', '208 GT', 2012, 200);
carros.push(c3)
console.log(carros);
c3.acelerar()
console.log(c3);
c3.desacelerar()
console.log(c3);
