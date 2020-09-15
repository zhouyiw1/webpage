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
  fill(mouseX,76,108);
  circle(mouseX,mouseY,30);

}
