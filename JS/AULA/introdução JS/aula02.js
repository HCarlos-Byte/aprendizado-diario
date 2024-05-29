
const precoEtanol = 4.30
const precoGasolina = 5.75

const tipoDeCombustivel = 'Etanol';
const distanciaEmKm = 200
if (tipoDeCombustivel === 'Gasolina') {
    const kmPorGasolina = 9.20
    const autonomia = distanciaEmKm / kmPorGasolina
    const valorGasto = autonomia * precoGasolina

    console.log ('Você Gastou um total de R$' + valorGasto.toFixed(2));
} else if (tipoDeCombustivel === 'Etanol') {
    const kmPorEtanol = 11.4
    const autonomia = distanciaEmKm / kmPorEtanol
    const valorGasto = autonomia * precoEtanol

    console.log('Você Gastou um total de R$' + valorGasto.toFixed(2));

} else {
    console.log('O tipo de combustivel é invalido!');
}
