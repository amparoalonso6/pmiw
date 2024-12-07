// Amparo Alonso
// Luana De Nicolay
// https://youtu.be/OJgnmwbfJsw?feature=shared
// Disculpe que el video va atrasado.

let objJuego, sonido, imagenes = [];


function preload() {
  for ( let i=0; i<10; i++) {
    imagenes [i] = loadImage("data/imagen"+i+".png");
  }
  sonido = loadSound('data/policia.mp3');
}

function setup() {
  createCanvas (640, 480);
  objJuego = new Juego();
}

function draw() {
  objJuego.mostrar();
}

function mousePressed() {
  objJuego.controlBotones();
}

function keyPressed() {
  objJuego.controlTeclas();
}
