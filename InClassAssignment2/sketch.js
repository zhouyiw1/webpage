let xpos = 0;
let ypos = 150;
let xballspeed = 10;
let yballspeed = 7;


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here
  background(255,179,168);
  fill(180,76,108);
  circle(xpos,ypos,100);

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

if (mouseIsPressed&dist(mouseX,mouseY,xpos,ypos)<50){
  xpos = random(10,windowWidth);
  ypos = random(10,windowHeight);
}





}
