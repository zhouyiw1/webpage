let xposList = [100,200,300,400,500];
let yposList = [10,50,90,130,160];
let xspeedList = [7,10,13,16,19];
let yspeedList = [6,9,12,15,18];


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here
  background(190,231,233);
  for(let i=0; i<xposList.length; i=i+1){

  fill(180,76,108);

  circle(xposList[i],yposList[i],50);

  yposList[i] = yposList[i] + yspeedList[i];
  xposList[i] = xposList[i] + xspeedList[i];

if (yposList[i] > height){
  yspeedList[i] = -yspeedList[i];
}

if (yposList[i] < 0){
  yspeedList[i] = -yspeedList[i];
}

if (xposList[i] > width){
  xspeedList[i] = -xspeedList[i];
}

if (xposList[i] < 0){
  xspeedList[i] = -xspeedList[i];
}


}



}
