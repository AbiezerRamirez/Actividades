const svg = document.querySelector('svg');
const rango = document.querySelector('#rango');
const canvas = document.getElementById("canvas");
const main = document.querySelector('main');
const contexto = canvas.getContext("2d");
const img = document.querySelector('#copo');
let tam = 5;
var idFrame = null;

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function iniciarAnimacion() {
    setSize();
    animacion();
}

function setSize() {
    canvas.height = main.clientHeight;
    canvas.width = main.clientWidth;
}

function animacion() {
    let x = numeroAleatorio(1, canvas.width);
    let y = numeroAleatorio(1, canvas.height);
    contexto.drawImage(img, x, y, tam, tam);

    idFrame = requestAnimationFrame(animacion);
}

svg.addEventListener('click', function () {
    svg.classList.toggle('nevar');

    if (svg.classList.contains('nevar')) {
        iniciarAnimacion();
    } else {
        if (idFrame) {
            cancelAnimationFrame(idFrame);
            idFrame=null;
        }
    }
});

rango.addEventListener('input', function () {
    tam = rango.value
});

document.addEventListener('DOMContentLoaded', function () {
    
    svg.classList.add('nevar');

    if (contexto) {
        iniciarAnimacion();
    }
});

document.querySelector('h1').addEventListener('click', function() {
    canvas.width = canvas.width;
});