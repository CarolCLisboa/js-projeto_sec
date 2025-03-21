<<<<<<< HEAD
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo da Adivinhação';

let subtitulo = document.querySelector('p');
subtitulo.innerHTML = 'Escolha um número de 1 e 100';

exibirTextoNaTela('h1' ,'Jogo de Adivinhação');
exibirTextoNaTela('p' , ' Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
=======
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
>>>>>>> ed78fcbe0f71bbd87459d9d06682a62e04fd8bfb
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log('Apertou o botão');
}
<<<<<<< HEAD
=======

//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>
>>>>>>> ed78fcbe0f71bbd87459d9d06682a62e04fd8bfb
