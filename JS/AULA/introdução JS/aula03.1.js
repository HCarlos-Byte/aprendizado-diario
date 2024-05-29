const nota1 = 9.5;
const nota2 = 8;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

console.log('A nota do Aluno no trimeste foi ' + media.toFixed(2));

if (media < 5) {
    console.log('Você foi reprovado!');
}if (media >= 5 && media <= 7) {
    console.log('Você está de recuperação!');
}else {
    console.log('Você foi aprovado parabens!');
}