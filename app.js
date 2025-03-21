let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo da Adivinhação';

let subtitulo = document.querySelector('p');
subtitulo.innerHTML = 'Escolha um número de 1 e 100';

exibirTextoNaTela('h1' ,'Jogo de Adivinhação');
exibirTextoNaTela('p' , ' Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log('Apertou o botão');
}
