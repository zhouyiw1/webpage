let offset = 0.0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();//eliminates animation
}

function draw() {  
  background(110,10,110);//sets background color
  
  
  stroke(70);  
    for (let i = 0; i < width; i = i + 1){  
       
    let lineh = height - noise(offset)*200;      
    line(i,height,i,lineh);//lines with random heights selected    
    offset = offset + 0.005;
      }
  
  stroke(40);  
    for (let i = 0; i < width; i = i + 1){    
        
    let lineh = height - noise(offset)*400;      
    line(i,height,i,lineh);    
    offset = offset + 0.005;
      }
  
  stroke(20);  
    for (let i = 0; i < width; i = i + 1){    
       
    let lineh = height - noise(offset)*500;      
    line(i,height,i,lineh);    
    offset = offset + 0.004;
      }
    
}
