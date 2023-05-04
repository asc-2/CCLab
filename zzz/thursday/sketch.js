function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent("canvasContainer");
}

function draw(){
    background(100,200,200);

    for(let i = 0; i <9; i++){
        console.log("muybridge" + i + ".jpeg")
    }
    
}