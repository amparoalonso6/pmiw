//Amparo Alonso
//Comisión 1
//Link Youtube: https://youtu.be/kp8PGSDxv9w

let lineasHorizontalesV = 5;
let lineasVerticalesV = 5;
let reset = true;
let colorLineasHorizontales;
let colorLineasVerticales;
let colorCirculos;
let colorR = 0;
let colorG = 0;
let colorB = 0;
let promedio= 0;

//lineas
let x1 = 406;
let x2 = 604; 
let y1 = 9;
let y2 = 208; 
let w = 188;
let h = 5; 
let distLineas = 40;
let ancho= 5;
let alto= 187

//circulos
let posXCirculos = 596;
let posYCirculos = 206;
let tamCirculos = 77;


let obra;
function preload () {
  obra = loadImage("data/F_25.jpg");
}

function setup() {
  createCanvas(800, 400);
  background(255);
  
  colorLineasHorizontales = color(0);
  colorLineasVerticales = color(0);
  colorCirculos = color(0);
}

function draw() {
  background(255);
  image(obra, 0, 0, 400, 400);
  strokeWeight(15);
  lineasHorizontales (lineasHorizontalesV, 9, 210);
  lineasVerticales (lineasVerticalesV, 406, 609);
  circulos (colorR, colorG, colorB, 215);


  if (reset) {
    colorR = map(mouseX, 0, width, 255, 0);
    colorG = map(mouseY, 0, height, 255, 0);
    colorB = map(mouseX + mouseY, 0, width + height, 255, 0);
  }
}
function mousePressed() {
  promedio = promedioPosMouse (mouseX, mouseY);
  print ("promedio de posiciones del mouse: " + promedio);
}

function keyPressed() { 
 
  if (key == 'r' || key == 'R') {
    reset= !reset;
    colorR = 255;
    colorG = 255;
    colorB = 255;
  }
 }
 function resetVariables() {
  lineasHorizontalesV = 5;
  lineasVerticalesV = 5;
  colorR = 0;
  colorG = 0;
  colorB = 0;
}
 
 function promedioPosMouse(x, y) {
  return (x + y) / 2;
}
