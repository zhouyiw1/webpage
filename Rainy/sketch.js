var rain = [];
var rainingNow = false;
var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(50, windowWidth), random(0, -8000));
  }
}

function draw() {
  background(bgcolor);
  ground();

  if (rainingNow == true) {
    //background(100);
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  }
}

function ground() {

  fill(170, 150, 146, 240);
  rect(0, 530, windowWidth, 530);
}

function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.length = 15;
  this.r = 0;
  this.opacity = 200;

  this.dropRain = function() {
    noStroke();
    fill(255);

    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 6
    if (this.y > 540) {
      this.length = this.length - 5;
        }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    //stroke(245, 200/frameCount);
    stroke(245, this.opacity);
    noFill();
    if (this.y > 540) {
      ellipse(this.x, 550, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}

function mousePressed() {
    rainingNow = true;
    bgcolor = (100, 100, 100);
}
