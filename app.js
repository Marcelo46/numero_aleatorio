alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100.');

    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute > numeroSecreto) {
            // alert('O número secreto era ' + numeroSecreto + ' mas você escolheu ' + chute + ' :('); Concatenando mais de uma variável.
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }
}
let palavreTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavreTentativa}. :)`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas. :)`);
// }
// else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa. :)`);
// }