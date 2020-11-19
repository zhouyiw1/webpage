var k;//declaration of variables
var n;
var m;

function setup() {
  createCanvas(windowWidth, windowHeight);//canvas covers entire length and width of screen
  background(100,100,50);
  k = 0;//initializing variables
  n = 0;//initializing variables
  m = 0;

  }

function draw() {
  // in this case, we fade the background and in the process give it a low capacity
  //positions and colors of the shapes change
  background(0, 5);

  var x = width * noise(n);//random value of x
  var y = height * noise(n+2);//random value of y
  //having different colors during the iteration
  var r = 255 * noise(n+30);//
  var g = 255 * noise(n+67);
  var b = 255 * noise(n+55);

  noStroke();
  fill(r, g, b);//filling the ellipse with varying color combinations
  ellipse(x, y, 70, 70);
//clowest moving shape
  n = n + 0.009;//rate of movement of the shape

  var x = width * noise(k);
  var y = height * noise(k+15);
  //having different colors during the iteration
  var r = 255 * noise(k+23);
  var g = 255 * noise(k+47);
  var b = 255 * noise(k+92);

  noStroke();
  fill(r, g, b);//filling with varying color combinations
  ellipse(x, y, 30, 100);

  k = k + 0.005;//rate of movement of the shape

  var x = width * noise(m);
  var y = height * noise(m+50);
  //having different colors during the iteration
  var r = 255 * noise(m+56);
  var g = 255 * noise(m+33);
  var b = 255 * noise(m+5);

  noStroke();
  fill(r, g, b);
  square(x, y, 30,);
//fastest moving shape
  m = m + 0.002;

}
