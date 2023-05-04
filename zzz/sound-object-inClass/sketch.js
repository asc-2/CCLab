// sounds from:
// https://freesound.org/people/GowlerMusic/sounds/266566/
// https://freesound.org/people/cfork/sounds/8000/
// https://freesound.org/people/ccolbert70Eagles23/sounds/423526/

let creatures = [];
let numCreatures = 20;
let bodies = [];

function preload(){
    for(let i = 0; i < 3; i++){
        bodies.push( loadImage("bodies/body_"+i+".png"))
    }
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");  


    for(let i = 0; i < numCreatures; i++){
        let newCreature = new Creature(random(width), random(height));
        creatures.push(newCreature);
    }   
}

function draw(){
    background(120, 40, 240);

    for(let i = 0; i < creatures.length; i++){
        creatures[i].update();
        creatures[i].display();
    }


}


class Creature{
    constructor(x_, y_){
        this.x = x_;
        this.y = y_;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(2, 2);
        this.number = floor(random(0,3));

    }
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y < 0 || this.y > height){
            this.ySpeed *= -1;
        }
        
    }
    display(){
        push();
        translate(this.x, this.y)
            fill(this.number*120, this.number*120, this.number*120)
            circle(0,0,20);
        this.drawBodyImage();
        pop();
        
    }

    drawBodyImage(){
        push();
        scale(0.1);

        let imageWidth = bodies[0].width
        let imageHeight = bodies[0].height
        image(bodies[this.number], -imageWidth/2, -imageHeight/2);
        
        pop();

    }
}

