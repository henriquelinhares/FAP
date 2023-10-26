class retangulo{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
get area(){
    return this.calculoArea()
}
calculoArea() {
    return this.altura * this.largura
}
}

let ret = new retangulo(10, 10)
console.log(ret.area);