var img;
var img1;
var a;
var yoff = 0.0;

function preload(){
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  a = -10;
  b = 255;
}

function draw(){

  noStroke();
  background(240);

  //sky code
  fill(190, 45, 90);
  rect(0, 0, windowWidth, windowHeight);

  //sun code
  fill(40, 220, 100);
  ellipse(240, 50, 80, 80);

  //ocean code
  fill(217, 74, 39);
  beginShape();
  var xoff = yoff;
  for (var x = 0; x <= width; x += 10){
    var y = map(noise(xoff, yoff), 0, 1, 275, 300);
    vertex(x,y);
    xoff += 0.05;
  }

  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  //boat




}
