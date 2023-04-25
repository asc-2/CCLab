let instanceOfTaxi;

function setup() {
    let canvas = createCanvas(600, 200);
    canvas.parent("container");
  
  
  instanceOfTaxi1 = new Taxi(random(width), random(height), random(0.3,2));
  instanceOfTaxi2 = new Taxi(random(width), random(height), random(0.3,2));
  instanceOfTaxi3 = new Taxi(random(width), random(height), random(0.3,2));
  instanceOfTaxi4 = new Taxi(random(width), random(height), random(0.3,2));
  instanceOfTaxi5 = new Taxi(random(width), random(height), random(0.3,2));
  
  
}

function draw() {
  
  background(90, 120, 250);
  
  instanceOfTaxi1.display();
  instanceOfTaxi1.update();
  instanceOfTaxi2.display();
  instanceOfTaxi2.update();
  instanceOfTaxi3.display();
  instanceOfTaxi3.update();
  instanceOfTaxi4.display();
  instanceOfTaxi4.update();
  instanceOfTaxi5.display();
  instanceOfTaxi5.update();

}

class Taxi{
  constructor(startX, startY, s){
    this.x = startX
    this.y = startY;
    this.scaleFactor = s;
    this.wheelAngle = 30;
    this.wheelSpeed = 2;
    this.speed = random(-10,10);
  }
  update(){
    this.wheelAngle += this.wheelSpeed
    this.x += this.speed;
    if(this.x > width + 200){
      this.x = -200;
    }else if(this.x < -200){
      this.x = width +200;
    }
  }
  
  display(){
    push();
      translate(this.x, this.y)
      noStroke();
      fill(240, 220, 60);
      rect(-50, -50, 100, 30);
      rect(-25, -70, 50, 20);

      this.drawWheel(30, -15);
      this.drawWheel(-30, -15);
    pop();
  }
  
  drawWheel(x, y){
    push();
    translate(x, y);
    if(this.speed > 0){
    rotate(radians(this.wheelAngle));
      noStroke();
      fill(0);
      circle(0, 0, 30);
      fill("white");
      rect(-2 , -15, 3, 30);
      push();  
        rotate(1.57);
        rect(-2 , -15, 3, 30);
        pop();
        push();  
        rotate(1.57/2);
        rect(-2 , -15, 3, 30);
        pop();
        push();  
        rotate(1.57 *1.5);
        rect(-2 , -15, 3, 30);
      pop();
    }
    if(this.speed < 0){
    rotate(-radians(this.wheelAngle));
      noStroke();
      fill(0);
      circle(0, 0, 30);
      fill("white");
      rect(-2 , -15, 3, 30);
      push();  
        rotate(1.57);
        rect(-2 , -15, 3, 30);
        pop();
        push();  
        rotate(1.57/2);
        rect(-2 , -15, 3, 30);
        pop();
        push();  
        rotate(1.57 *1.5);
        rect(-2 , -15, 3, 30);
      pop();
    }
    
    pop();
  
  }
  
}