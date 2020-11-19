var t;//declaration of variables
var n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 18);//drawing of boarder
  noFill();//enables visibility of the drawing
  t = 0;
  n = 0;
}

function draw() {

//drawing bazier curve using anchor points
  var x1 = width * noise(t + 5);
  var x2 = width * noise(t + 10);
  var x3 = width * noise(t + 15);
  var x4 = width * noise(t + 20);
  var y1 = height * noise(t + 25);
  var y2 = height * noise(t + 30);
  var y3 = height * noise(t + 35);
  var y4 = height * noise(t + 40);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;//frewuency of iteration

  // background is cleared or refreshed after every 500 frames
  // clearance is done using mod (%) operator
  if (frameCount % 500 == 0) {
	background(255);//clears background after a framecount of 500
  }

  beginShape();//recording vertices
  for (var x = 0; x < width; x++) {
	var nx = map(x, 0, width, 0, 7);
	var y = height * noise(nx);
	vertex(x, y);
    }
  endShape();//end recording vertices of shape

  beginShape();
  //drawing a circle and manipulating radius using noise
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, n * 0.005);
    var x = rad * cos(ang);//position of x is varied by multiplying radius of the circle to sine of angle
    var y = rad * sin(ang);//position of y is varied by multiplying radius of the circle to sine of angle
    curveVertex(x, y);
  }
  endShape(CLOSE);

  n += 1;
  // clear the background every 600 frames using mod (%) operator
  if (frameCount % 600 == 0) {
	background(255);
}
}
