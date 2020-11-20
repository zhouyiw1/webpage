let angleR;//random angle to be picked
let offsetR;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(110,130,10);
  noStroke();
  angleMode(DEGREES);
  offsetR = 0.0;//reference point
  //noLoop();//changes from static to dynamic and vice versa
  
        
}

function draw() {
  
  for(let i = 0;i < width; i = i + 120){//spacing/positioning of triangles
    for(let j = 0;j < width; j = j + 120){
      
      push();
      translate(i,j);//fill along the length and width of canvas
      
      angleR = noise(offsetR)*45;
      rotate(angleR);
      fill(0,0,50,50);
      triangle(20, 75, 60, 20, 80, 75);
      offsetR = offsetR + 0.01;
      pop();   
           
    }
  }
    for(let i = 0;i < width; i = i + 120){//position of reactangles along width of canvas
      for(let j = 0;j < width; j = j + 120){//position of rectangles along width of canvas on x-axis
      
      push();//builds and transforms current style in use. In this case we have the rectangle
      translate(i,j);
      
      angleR = noise(offsetR)*180;//rotation angle of the rectangle
      rotate(angleR);
      fill(0,0,100,150);
      rect(0, 0, 40, 40);
      offsetR = offsetR + 0.01;
      pop();    
            
    }
  }
  
  
}
