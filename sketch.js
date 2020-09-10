function setup() {
  // put setup code here
  createCanvas(500,500);
  background(300,0,0);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  push();
  rotate(45);
  fill(0,0,300);
  rect(20,20,460,460);
  pop();
  fill(200,200,0);
  circle(250,250,450);
}
