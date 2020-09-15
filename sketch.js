function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  background(255,128,191);
  push();
  rotate(45);
  fill(190,231,233);
  noStroke();
  rect(0,0,250,250);
  pop();
  fill(249,205,173);
  noStroke();
  circle(700,700,900);
  circle(mouseX,mouseY,30);

}
