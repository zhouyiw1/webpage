var yoff = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  noStroke();
  background(240);

  //sky
  skyHue = map(mouseY, 0, height, 180, 210);
  skyBrightness = map(mouseY, 0, height, 190, 0);
  fill(skyHue, 21, skyBrightness);
  rect(0, 0, windowWidth, windowHeight);

  //sun
  sunHue = map(mouseY, 0, height, 60, 20);
  fill(sunHue, 100, 100)
  ellipse(200, mouseY = mouseY + 1, 100, 100);
  if (mouseY > 500) {
    fill(40, 220, 100);
    ellipse(940, 50, 80, 80);
  }

  //ocean
  fill(217, 74, 39);
  beginShape();
  var xoff = yoff;
  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, 275, 330);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  //fill(217, 74, 39)
  //rect(0, 310, 400, 100);

  //stars
  stroke(57, 93, 100)
  strokeWeight(2)
  point(30, 80);
  point(1000, 81);
  point(1200, 100);
  point(290, 40);
  point(116, 50);
  point(49, 30);
  point(180, 50);
  point(229, 30);
  point(368, 40);
  point(900, 73);
  point(640, 50);
  point(870, 30);
  point(555, 50);
  point(229, 30);
  point(867, 40);
  point(777, 73);
  noStroke();

}
