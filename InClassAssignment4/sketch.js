let xposList = [100,300,500,700,900,1100];
let yposList = [150,350,550,750,950,1150];
let xspeedList = [7,10,13,16,19,22];
let yspeedList = [6,9,12,15,18,21];


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here
  background(190,231,233);
  for(let i=0; i<xposList.length; i=i+1){

  fill(180,76,108);

  circle(xposList[i],yposList[i],88);

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
