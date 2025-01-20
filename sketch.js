var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#AA44FF') // automatic semicolon insertion
    rect(x,y,10,10);
    x = x + 1;
    x = x % 500; // modulo operator
    y = y + 2;
    y = y % 400;
}