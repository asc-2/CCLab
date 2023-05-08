let numStripes = 480;
let numStripesBox = 288;
let stripeWidth = 5;
let patternWidth = 20;
let pg;

function setup() {
  let canvas = createCanvas(2400, 1200);
// createCanvas(600,200);
  canvas.parent("container");

  pg = createGraphics(width, height);

  let clearButton = createButton('Clear Drawing');
  clearButton.position(2.75*width/10, 0.63*height);
  clearButton.mousePressed(clearDrawing);
}

function draw() {
  for (let x = 0; x < numStripes; x++) {
    let xPos = x * stripeWidth;
    let colorValue = map(x, 0, numStripes, 20, 255);
    noStroke();
    fill(colorValue);
    rect(xPos, 0, stripeWidth, height);
  }



  if (mouseIsPressed) {
    pg.stroke(255);
    pg.strokeWeight(200);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
  }

  image(pg, 0, 0);
  
    for (let x = 0; x < numStripesBox; x++) {
    let xPos = x * stripeWidth;
    fill(255 / 2);
    rect(xPos + width / 5, 3 * height / 7, stripeWidth, height / 7);
  }
}

function clearDrawing() {
  pg.clear();
}