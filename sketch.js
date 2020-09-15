function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255,128,191);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  push();
  rotate(45);
  fill(190,231,233);
  rect(0,0,250,250);
  pop();
  fill(200,200,0);
  circle(249,205,173);
}
