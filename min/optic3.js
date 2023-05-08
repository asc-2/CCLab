let numSquaresN = 100;
let squaresN = [];
let numSquaresE = 100;
let squaresE = [];
let numSquaresS = 100;
let squaresS = [];
let numSquaresW = 100;
let squaresW = [];
let rot = 10;
let timer = 30;


function setup() {
    let canvas2 = createCanvas(1200, 800);
    canvas2.parent("container2");
    canvas2.id("no-margin-canvas");

  for (let i = 0; i < numSquaresN; i++) {
    squaresN.push(new ZoomingSquareN());
  }
  for (let i = 0; i < numSquaresE; i++) {
    squaresE.push(new ZoomingSquareE());
  }
  for (let i = 0; i < numSquaresS; i++) {
    squaresS.push(new ZoomingSquareS());
  }
  for (let i = 0; i < numSquaresW; i++) {
    squaresW.push(new ZoomingSquareW());
  }
}

function draw() {
  background(0);
  for (let squareN of squaresN) {
    squareN.update();
    squareN.display();
  }
  for (let squareE of squaresE) {
    squareE.update();
    squareE.display();
  }
  for (let squareS of squaresS) {
    squareS.update();
    squareS.display();
  }
  for (let squareW of squaresW) {
    squareW.update();
    squareW.display();
  }
  push();
  fill(0);
  // rect(width/12,height/2,width/6,height)
  // rect(11*width/12,height/2,width/6,height)
  rect(width/2,height/12,width,height/6)
  rect(width/2,11*height/12,width,height/6)

  fill(255, 255);


  textSize(40);
  textAlign(CENTER);
  text("STARE INTENSELY AT CENTER FOR 30 SECONDS",width/2,height/8)
  text("THEN LOOK AT AN OBJECT IN THE ROOM",width/2,19*height/20)
  fill("red")
  textSize(15);
  text(timer, width/2, 0.98*height/2, 15);
}

class ZoomingSquareN {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(-60, width+60);
    this.y = random(-height/2, 0);
    this.size = random(10, 60);
    this.color = color(random(255), random(255), random(255), 150);
    this.speed = random(3,6);
  }

  update() {
    // if(this.x > 0 || this.x < width){
    //   this.x = random(-width/2, width*1.5);
    // }

    this.x = lerp(this.x, width / 2, this.speed * 0.004);
    this.y = lerp(this.y, height / 2, this.speed * 0.004);
    this.size *= (1 - this.speed * 0.005);

    if (this.size < 1) {
      this.reset();
    }
  }

  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}

class ZoomingSquareE {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width, width*1.5);
    this.y = random(-60, height+60);
    this.size = random(10, 60);
    this.color = color(random(255), random(255), random(255), 150);
    this.speed = random(3,6);
  }

  update() {
    // if(this.x > 0 || this.x < width){
    //   this.x = random(-width/2, width*1.5);
    // }

    this.x = lerp(this.x, width / 2, this.speed * 0.004);
    this.y = lerp(this.y, height / 2, this.speed * 0.004);
    this.size *= (1 - this.speed * 0.005);

    if (this.size < 0.8) {
      this.reset();
    }
  }

  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}

class ZoomingSquareS {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(-60, width+60);
    this.y = random(height, height*1.5);
    this.size = random(10, 60);
    this.color = color(random(255), random(255), random(255), 150);
    this.speed = random(3,6);
  }

  update() {
    // if(this.x > 0 || this.x < width){
    //   this.x = random(-width/2, width*1.5);
    // }

    this.x = lerp(this.x, width / 2, this.speed * 0.004);
    this.y = lerp(this.y, height / 2, this.speed * 0.004);
    this.size *= (1 - this.speed * 0.005);

    if (this.size < 1) {
      this.reset();
    }
  }

  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}

class ZoomingSquareW {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(-width/2, 0);
    this.y = random(-60, height+60);
    this.size = random(10, 60);
    this.color = color(random(255), random(255), random(255), 150);
    this.speed = random(3,6);
  }

  update() {
    // if(this.x > 0 || this.x < width){
    //   this.x = random(-width/2, width*1.5);
    // }

    this.x = lerp(this.x, width / 2, this.speed * 0.004);
    this.y = lerp(this.y, height / 2, this.speed * 0.004);
    this.size *= (1 - this.speed * 0.005);

    if (this.size < 0.8) {
      this.reset();
    }
  }

  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}
function decreaseTimer(){
  if (timer > 0) {
    timer -= 1;
  } else {
    clearInterval(interval);
  }
}
let interval = setInterval(decreaseTimer, 1000);
