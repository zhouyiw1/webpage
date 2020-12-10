var star;
var yoff = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  star = { //star element to define behavior of shooting star
  starX : mouseX,
  starY : mouseY,
  size : random(2,12)
}

}

function draw() {
  fr = map (mouseY,0,windowHeight,48,6); //map the height of the canvas
  frameRate(fr) //decrease frame rate (stop motion) according to mouse
  //print (fr);
	ellipseMode(CENTER); //Draw stars in the canvas
  fill(72,255,250);
	strokeWeight(0);

  var sky = { //Sky element to define the behavior of the stars
  locationX : random(width),
  locationY : random(height),
  size : random(1,8)
}
  //Draw blinking blue stars
  ellipse(sky.locationX, sky.locationY, sky.size, sky.size); //draw random   sized stars
  background(0,0,0,20); //draw a semi-transparent background to fade stars

  //Draw shooting star
  ellipseMode(CENTER);
  fill(74,156,255);
	strokeWeight(0);
  ellipse(star.starX, star.starY, star.size, star.size);
  star.starX = star.starX+1; //Move shoouting star
  star.starY = star.starY-1;
  star.size = star.size - 0.02 //Decreases the size of shooting star

  //desert
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
  //frameRate(fr) //decrease frame rate (stop motion)
  background(255,255,255,30); //shut the star

  star = {
  starX : mouseX,
  starY : mouseY,
  size : random(1,10)
}

}
