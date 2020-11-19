let xpos = 0;
let ypos = 140;
let xballspeed = 10;
let yballspeed = 7;


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  background(255,179,168);
  push();
  rotate(45);
  fill(190,231,233);
  noStroke();
  rect(500,100,250,250);
  pop();
  fill(249,205,173);
  noStroke();
  circle(700,700,900);
  fill(180,76,108);
  circle(xpos,ypos,30);

  ypos = ypos + yballspeed;
  xpos = xpos + xballspeed;

if (ypos > height){
  yballspeed = -yballspeed;
}

if (ypos < 0){
  yballspeed = -yballspeed;
}

if (xpos>width){
  xballspeed = -xballspeed;
}

if (xpos < 0){
  xballspeed = -xballspeed;
}






}
