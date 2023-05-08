  let squareSize = 40;
  let numSquares = 160;
  let deleteCircles = false;
  let circles = [];

  function setup() {
    let canvas = createCanvas(2400, 1200);
    canvas.parent("container");
    let centerX = width / 2;
    let centerY = height / 2;

    circles.push(createCircles(centerX + 500, centerY, 120, 60, 8));
    circles.push(createCircles(centerX - 350, centerY, 120, 240, 6));
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

    circles.forEach((circle) => {
      circle.update();
      drawEbbinghaus(circle.x, circle.y, circle.size, circle.surroundSize, circle.circleNum);
    });

    fill(0);
    rect(0,11*height/12,width,height/6)
    fill(30,0,255,180);
    textSize(80);
    textAlign(CENTER);
    text("ONE LOOKS BIGGER... BUT CHECK FOR YOURSELF",width/2,1*height)
  }

  function createCircles(x, y, size, surroundSize, circleNum) {
    return {
      x: x,
      y: y,
      size: size,
      surroundSize: surroundSize,
      circleNum: circleNum,
      dragging: false,
      hover: false,
      update: function() {
        this.hover = dist(mouseX, mouseY, this.x, this.y) <= this.size / 2;
        if (this.dragging) {
          this.x = mouseX;
          this.y = mouseY;
        }
      },
    };
  }

  function drawEbbinghaus(centerX, centerY, centerCircleSize, surroundCircleSize, circleNum) {
    let numSurroundCircles = circleNum;
    let angleCircles = 360 / numSurroundCircles;
    let distance = centerCircleSize + surroundCircleSize;

    fill("orange");
    ellipse(centerX, centerY, centerCircleSize, centerCircleSize);

    let circleAlpha = 255;
    if (deleteCircles == true) {
      circleAlpha = 100;
    }
    for (let i = 0; i < numSurroundCircles; i++) {
      let angle = radians(i * angleCircles);
      let x = centerX + cos(angle) * distance / (1.3 + (circleNum % 6 / 6));
      let y = centerY + sin(angle) * distance / (1.3 + (circleNum % 6 / 6));

      fill(189, 189, 255, circleAlpha);
      ellipse(x, y, surroundCircleSize, surroundCircleSize);
    }
  }

  function mousePressed() {
    circles.forEach((circle) => {
      if (circle.hover) {
        circle.dragging = true;
      }
    });
  }

  function mouseReleased() {
    circles.forEach((circle) => {
      circle.dragging = false;
    });
  }
