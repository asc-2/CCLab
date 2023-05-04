let squareSize = 20;
let numSquares = 80;
let deleteCircles = false;

function setup() {

    let canvas = createCanvas(1200, 600);
    canvas.parent("container");

    let drawButton = createButton('Expose Illusion');
    drawButton.position(4*width/7, 1.15*height);
    drawButton.mousePressed(() => deleteCircles = !deleteCircles);

}

function draw() {
  background(255);
  for (let row = 0; row < numSquares; row++) {
    for (let col = 0; col < numSquares; col++) {
      noStroke();
      if ((row + col) % 2 === 0) {
        fill(105, 200);
      } else {
        fill(0, 200);
      }
      rect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
  }
  stroke(0);
  let centerX = width / 2;
  let centerY = height / 2;

  drawEbbinghaus(centerX + 220, centerY, 60, 30, 8);
  drawEbbinghaus(centerX - 140, centerY, 60, 120, 6);

  if(deleteCircles==true){
    fill("red");
    rectMode(CENTER);
    rect(centerX+40, centerY-32, 420, 5);
    rect(centerX+40, centerY+32, 420, 5);

  }
}

function drawEbbinghaus(centerX, centerY, centerCircleSize, surroundingCircleSize, circleNum) {
  let numSurroundingCircles = circleNum;
  let angleBetweenCircles = 360 / numSurroundingCircles;
  let distance = centerCircleSize + surroundingCircleSize;

  // Draw the center circle
  fill("orange");
  ellipse(centerX, centerY, centerCircleSize, centerCircleSize);

  // Draw surrounding circles
  let circleAlpha = 255;
  if(deleteCircles == true){
    circleAlpha = 100;
  }
  for (let i = 0; i < numSurroundingCircles; i++) {
    let angle = radians(i * angleBetweenCircles);
    let x = centerX + cos(angle) * distance/(1.3 + (circleNum%6/6));
    let y = centerY + sin(angle) * distance/(1.3 + (circleNum%6/6));

    fill(189,189,255, circleAlpha);
    ellipse(x, y, surroundingCircleSize, surroundingCircleSize);
  }

}
