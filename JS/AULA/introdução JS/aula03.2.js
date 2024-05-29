const peso = 40.6;
const altura = 1.68;
const imc = peso / Math.pow(altura,2);

console.log('O seu IMC é de ' + imc.toFixed(2));

if (imc < 18.5){
    console.log('Abaixo do Peso!')
}
else if (imc >= 18.5 && imc <25) {
    console.log('Peso normal.')
}
else if (imc >=25 && imc < 30) {
    console.log('Acima do Peso.')
}
else if (imc >=30 && imc <40) {
    console.log('Obeso!')
}
else {
    console.log('Obesidade Grave!')
}