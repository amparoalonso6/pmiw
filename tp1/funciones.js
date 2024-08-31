
function lineasHorizontales( lineasHorizontalesV,  yLeft,  yRight) {
  for (let i = 0; i < lineasHorizontalesV; i++) {
    let yL = yLeft + i * distLineas;
    rect(x1, yL, w, h);

    let yR = yRight + i * distLineas;
    rect(x2, yR, w, h);
  }
}

function lineasVerticales(lineasVerticalesV,  xLeft, xRight) {
  for (let i = 0; i < lineasVerticalesV; i++) {
    let xR = xRight + i * distLineas;
    rect(xR, y1, ancho, alto);

    let xL = xLeft + i * distLineas;
    rect(xL, y2, ancho, alto);
  }
}

function circulos( colorR, colorG, colorB, diam) {
  strokeWeight(19);
  fill(colorR, colorG, colorB);
  for (let i = 0; i < 3; i++) {
    let d = diam - i * tamCirculos;
    ellipse(posXCirculos, posYCirculos, d, d);
  }
}
