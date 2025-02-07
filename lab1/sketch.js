

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 150, 50);
    fill('aquamarine');
    stroke('white');
    for(var i = 0; i < 10000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }
    
    fill('blue');
    stroke('black');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}