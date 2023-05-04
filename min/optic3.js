let numRows = 20;
let numCols = 20;
let squareSize = 45;
let offset = 0.5;
let drawRectangle = false;


function setup() {

    let canvas = createCanvas(1200, 600);
    canvas.parent("container");

    let drawButton = createButton('Expose Illusion');
    drawButton.position(4*width/7, 1.14*height);  
    drawButton.mousePressed(() => drawRectangle = !drawRectangle);

}

function draw() {
  background(220);
    
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let x = col * squareSize * 2 + (row % 2 === 0 ? 0 : squareSize * offset);
      let y = row * squareSize;
    //   stroke(255);
      drawSquare(x, y, squareSize);
    }
  }

  if (drawRectangle) {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          let x = col * squareSize * 2 + (row % 2 === 0 ? 0 : squareSize * offset);
          let y = row * squareSize;
        //   noStroke();
            fill(255,10);
            stroke(0);
            rect(0, y+height/10, width,squareSize  )
            
        }
      }
  }


  push();
  noStroke();

  fill(0);
  // rect(0,0,width/6,height)
  // rect(5*width/6,0,width/6,height)
  rect(0,0,width,height/10)
  rect(0,9*height/10,width,height/10)
  fill(255, 255);
  textSize(40);
  textAlign(CENTER);
  text("SLANTED LINES ON THE WALL",width/2,height/20)
  text("BUT SOMETHING FEELS OFF...",width/2,19.5*height/20)
  pop();
}



function drawSquare(x, y, size) {
      fill(0);
  noStroke();
  rect(x, y+height/10, size, size);

  strokeWeight(5);
  stroke(255);
  // line(x, y + size / 2, x + size, y + size / 2);
    stroke(80);

  line(0, y+height/10, width, y+height/10);

//   function toggleDrawRectangle() {
//     drawRectangle = !drawRectangle;
//   }
  
}