class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto(distancia, preco){
        return distancia*this.gastoMedio*preco;

    }
}
const uno = new Carro('Fiat', 'Preto', 1/11.3);
const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calcularGasto(70,5.60));