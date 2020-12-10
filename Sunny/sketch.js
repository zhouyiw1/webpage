var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgcolor);

  ground();
  fill(170, 150, 146, 240);
  rect(0, 530, windowWidth, 530);

  if (mousePressed == false) {
      for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } else {
    drawSun();
      }

      fill(60, 145, 57);
	ellipse(50, 580, 1000, 600);

  fill(69, 168, 66);
  ellipse(450, 600, 1900, 400);
}

function ground() {
  //noStroke();
  fill(170, 150, 146, 240);
  rect(0, 730, windowWidth, 730);
}

function mousePressed() {
    rainingNow = false;
  bgcolor = (160, 209, 230);
}

function drawSun() {

  fill(245, 187, 87);
    stroke(245, 187, 87);
    push();
    translate(100, 80);
    rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
    noFill();
}
