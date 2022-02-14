const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let rectX = 0;
let rectY = 0;
let rect2X = 600;
let rect2Y = -150;


gameLoop();
setSize();
function setSize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

function gameLoop(timeStamp) {
    update();
    draw();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    rectX += 1;
    rectY += 1;
    rect2X += 1;
    rect2Y += 1;
}

function draw() {
    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100);
    context.fillRect(rect2X, rect2Y, 150, 100);
}