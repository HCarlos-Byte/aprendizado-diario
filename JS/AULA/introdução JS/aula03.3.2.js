class Produto {
    valor;
    desconto

    valorDesconto(valor, desconto) {
        return valor - (desconto * valor);
    }
}
const camisa = new Produto(200, 0.1);
console.log(Produto.valorDesconto(200, 0.1));