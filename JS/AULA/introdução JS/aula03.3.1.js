const valorProduto = 200;
const condicaoPagamento = 4;
/* 1 = Debito á Vista
   2 = Dinheiro / PIX
   3 = 2x no cartão
   4 = Acima de 2x no cartão
*/
if (condicaoPagamento === 1) {
    const pagDebito = valorProduto - (0.1 * valorProduto);
    console.log('Pagando à vista no Débito o valor do produto será ' + pagDebito.toFixed(2))
}
else if ( condicaoPagamento === 2){
    const pagDinheiro = valorProduto - (0.15 * valorProduto);
    console.log('Pagando à vista no Dinheiro ou Pix o valor do produto será ' + pagDinheiro.toFixed(2))
}
else if ( condicaoPagamento === 3){
    const pagDuasVezes = valorProduto / 2;
    console.log('O produto parcelado em duas vezes vai ficar com o valor ' + pagDuasVezes.toFixed(2) + ' sem juros.');
}
else {
    const quantParcelas = 8
    const pagParcelas = (valorProduto * (0.10 * quantParcelas)) / quantParcelas;
    console.log('Parcelando o produto em ' + quantParcelas + ' o valor do produto vai ficar ' + pagParcelas.toFixed(2));
}