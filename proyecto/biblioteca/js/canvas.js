const canvas = document.querySelector('#canvas');
// var inicio = 200;
// var altura = 10;
// var b = true;

var x1 = 0;
var y1 = 25;
var x2 = 25;
var y2 = -25;
var x3 = 50;
var y3 = 25;

if (canvas && canvas.getContext) {
    var contexto = canvas.getContext('2d');
    // console.log('hola');
    if (contexto) {
        var idFrame = requestAnimationFrame(dibujar);
        // let gradient = contexto.createLinearGradient(0, 10, 700, 15);
        // gradient.addColorStop(0, '#b62247');
        // gradient.addColorStop(1, '#000');
        // contexto.fillStyle = gradient;
        // contexto.bezierCurveTo(0, 25, 25, -25, 50, 25);
        // contexto.bezierCurveTo(325, 275, 350, 300, 300, 300);
        // contexto.stroke();
    }
}

function dibujar() {
    contexto.bezierCurveTo(x1, y1, x2, y2, x3, y3);
    contexto.stroke();
    // contexto.fillRect(inicio, altura, 2, 5);
    // inicio += 2;
    // if (b) {
    //     altura += 1;
    //     if (altura == 30) {
    //         b = false;
    //     }
    // } else {
    //     altura -= 1;
    //     if (altura == 5) {
    //         b = true;
    //     }
    // }
    // altura == 30 ? : null;
    // if (inicio >= 500) {
        // cancelAnimationFrame(idFrame);
        // idFrame = requestAnimationFrame(borrarDibujo)
    // } else {
        // idFrame = requestAnimationFrame(dibujar);
    // }
}

function borrarDibujo() {
    // contexto.clearRect(inicio, 10, 2, 5);
    // inicio -= 2;
    // if (b) {
    //     altura += 1;
    //     if (altura == 30) {
    //         b = false;
    //     }
    // } else {
    //     altura -= 1;
    //     if (altura == 5) {
    //         b = true;
    //     }
    // }
    if (inicio <= 200) {
        cancelAnimationFrame(idFrame);
        idFrame = requestAnimationFrame(dibujar)
    } else {
        idFrame = requestAnimationFrame(borrarDibujo);
    }
}