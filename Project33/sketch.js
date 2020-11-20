let ypos;//declaration of variables
let ypos1;
let ypos2;
let ypos3;
let ypos4;
let ypos5;
let ypos6;
let ypos7;
let ypos8;
let offset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  frameRate(5);//speed of execution 
}

function draw() {
  background(100,30,70);
  
  fill(0,255,255);
  ypos = noise(offset)*height;//random position along height of canvas
  circle(50,ypos,40);//position and circle size
  offset = offset + 0.01;
  
  fill(255,255,255);
  ypos1 = noise(offset)*height;//random position along height of canvas
  circle(150,ypos1,40);//position and circle size
  offset = offset + 0.01;
  
  fill(255,0,0);
  ypos2 = noise(offset)*height;//random position along height of canvas
  circle(250,ypos2,40);//position and circle size
  offset = offset + 0.01;
  
  fill(0,100,0);
  ypos3 = noise(offset)*height;//random position along height of canvas
  circle(350,ypos3,40);//position and circle size
  offset = offset + 0.01;
  
  fill(120,30,0);
  ypos4 = noise(offset)*height;//random position along height of canvas
  circle(450,ypos4,40);//position and circle size
  offset = offset + 0.01;
  
  fill(5,20,40);
  ypos5 = noise(offset)*height;//random position along height of canvas
  circle(550,ypos5,40);//position and circle size
  offset = offset + 0.01;
  
  fill(70,100,20);
  ypos6 = noise(offset)*height;//random position along height of canvas
  circle(650,ypos6,40);//position and circle size
  offset = offset + 0.01;
  
  fill(10,60,70);
  ypos7 = noise(offset)*height;//random position along height of canvas
  circle(750,ypos7,40);//position and circle size
  offset = offset + 0.01;
  
  fill(30,30,0);
  ypos8 = noise(offset)*height;//random position along height of canvas
  circle(850,ypos8,40);//position and circle size
  offset = offset + 0.01;
  
}

  yballspeed = -yballspeed;
}

if (xpos>width){
  xballspeed = -xballspeed;
}

if (xpos < 0){
  xballspeed = -xballspeed;
}






}
