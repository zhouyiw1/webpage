let lemonList=[];
let orangeList=[];
let watermelonList=[];


let xposList=[];
let yposList=[];

let ypos=0;

let yspeedList=[];

function preload(){

  for(let i=0;i<30;i=i+1)
  {lemonList[i] = loadImage('https://i.imgur.com/d8PORoY.png');

    }

  for(let j=0;j<30;j=j+1)
  {orangeList[j] = loadImage('https://i.imgur.com/vnp523S.png');

    }

  for(let k=0;k<30;k=k+1)
  {watermelonList[k] = loadImage('https://i.imgur.com/BoOVoiP.png');

    }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<30;i=i+1){
    yposList[i]=0;
   xposList[i]=random(0,width);
  yspeedList[i]=(1,3);
}
  for(let j=0;j<30;j=j+1){
    yposList[j]=0;
   xposList[j]=random(0,width);
  yspeedList[j]=(1,3);
}
  for(let k=0;k<30;k=k+1){
    yposList[k]=0;
   xposList[k]=random(0,width);
  yspeedList[k]=(1,3);
    }

}

function draw() {
  background(20,200,200);
  imageMode(CENTER);

  for(let i=0;i<30;i=i+1){
  image(lemonList[i],xposList[i],yposList[i],40,40);
  yposList[i]=yposList[i]+yspeedList[i];
  }

   for(let j=0;j<30;j=j+2){
  image(orangeList[j],xposList[j],yposList[j],40,40);
   yposList[j]=yposList[j]+yspeedList[j];
   }

   for(let k=0;k<30;k=k+3){
  image(watermelonList[k],xposList[k],yposList[k],40,40);
  yposList[k]=yposList[k]+yspeedList[k];
   }



}
