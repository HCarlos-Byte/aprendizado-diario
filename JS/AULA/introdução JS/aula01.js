
const precoCombustivel = 5.75;
const gastoCombustivel = 9.20;
const distanciaEmKm = 200;

const gastoCombustivelViagem = distanciaEmKm/gastoCombustivel;

const valorViajem = gastoCombustivelViagem*precoCombustivel;

console.log('Foi gasto um total de R$' + valorViajem.toFixed(2));
