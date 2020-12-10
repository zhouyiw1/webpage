var star;
var yoff = 0.0;
let

function setup() {
  createCanvas(windowWidth, windowHeight);

//determining how shooting star behaves
  star = {
  starX : mouseX,
  starY : mouseY,
  size : random(2,12)
}

}

function draw() {

  //mapping canvas height
  fr = map (mouseY,0,windowHeight,47,6);

  //framerate decreases
  frameRate(fr)

  //draw stars on canvas
  ellipseMode(CENTER);
  fill(72,255,250);
	strokeWeight(0);

  //sky determines star behavior
  var sky = {
  locationX : random(width),
  locationY : random(height),
  size : random(1,8)
}

//draw stars in a random fashion
  ellipse(sky.locationX, sky.locationY, sky.size, sky.size);

//background helps fading of stars
  background(0,0,0,20);

//shooting star
  ellipseMode(CENTER);
  fill(74,156,255);
	strokeWeight(0);
  ellipse(star.starX, star.starY, star.size, star.size);

//move shooting star
  star.starX = star.starX+1;
  star.starY = star.starY-1;

//size of shooting star decreases as it moves
  star.size = star.size - 0.02 //Decreases the size of shooting star

//draw a desert on the foreground of canvas
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

}

function mousePressed() {

  //decrease frame rate and stop movement
  background(255,255,255,30); //eliminate star using background

  star = {
  starX : mouseX,
  starY : mouseY,
  size : random(1,10)
}

}
