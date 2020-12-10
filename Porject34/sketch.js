let ypos;
let yposa;
let yposb;
let yposc;

let offset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  frameRate(1);
}

function draw() {
  background(80,40,70);
  
  for(let i = 0;i < width; i = i + 5){
    ypos1 = noise(offset)*height;
    fill(0);
    circle(i,ypos1,5);
    offset = offset + 0.009;
  }
  
  for(let i = 0;i < width; i = i + 5){
    yposa = noise(offset)*height;
    fill(255,255,255);
    circle(i,yposa,5);
    offset = offset + 0.009;
  }
  
  for(let i = 0;i < width; i = i + 5){
    yposb = noise(offset)*height;
    fill(0,0,255);
    circle(i,yposb,5);
    offset = offset + 0.009;
  }
  
  for(let i = 0;i < width; i = i + 5){
    yposc = noise(offset)*height;
    fill(255,10,18);
    circle(i,yposc,5);
    offset = offset + 0.009;
  }
  
}
