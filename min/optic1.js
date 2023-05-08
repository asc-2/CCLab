let gridSize = 30;
let squareSize = 24;
let lineSize = 2.5;
let whiteRectangles = false;
let opl = 0;


function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent("container");
  background(255);


  let drawButton = createButton('Expose Illusion');
  drawButton.position(1.12 * width, 2.25 * height);
  drawButton.mousePressed(() => whiteRectangles = !whiteRectangles);
  fill(0, 0, 0, 80);
  rect(0, 0, width, height);



}

function draw() {
  let colorSquare = 0;
  if (whiteRectangles == true) {
      colorSquare = opl;
      opl+= 1.5;

  } else {
    colorSquare = 0;
    opl = 0;
  }

  for (let x = 0; x <= gridSize; x++) {
    for (let y = 0; y <= gridSize; y++) {
      drawBlackSquare(x * (squareSize + lineSize), y * (squareSize + lineSize), squareSize, colorSquare);
    }
  }
  for (let x = 0; x <= gridSize; x++) {
    for (let y = 0; y <= gridSize; y++) {
      drawWhiteCircle(x * (squareSize + lineSize), y * (squareSize + lineSize), lineSize * 2);
    }
  }
  push();
  fill(0);
  // rect(0,0,width/6,height)
  // rect(5*width/6,0,width/6,height)
  rect(0, 0, width, height / 6)
  rect(0, 5 * height / 6, width, height / 6)

  fill(255, 255);
  textSize(20);
  textAlign(CENTER);
  text("THERE APPEARS TO BE BLACK DOTS...", width / 2, height / 8)
  text("BUT ARE THEY REAL?", width / 2, 18 * height / 20)

}


function drawBlackSquare(x, y, size, colorSquare) {
  // let colorSquare = 0;
  // if (whiteRectangles == true) {
  //   for(let i = 0; i < 200; i+=0.001){
  //     colorSquare = i;
  //   }
  // } else {
  //   colorSquare = 0;

  // }
  fill(colorSquare);
  noStroke();
  rect(x, y + height / 6, size, size);

}

function drawWhiteCircle(x, y, size) {
  fill(255);
  noStroke();
  circle(x - 1.2, y + height / 6 - 1.3, size);
}