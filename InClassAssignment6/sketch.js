let img;

function preload(){
  img=loadImage('https://upload.wikimedia.org/wikipedia/commons/8/81/Dalai_Lama_%2814566605561%29.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20,200,200);
  }

function draw() {

  img.loadPixels();

  image(img,0,0,200,200);//image positioning on canvas


  //jumps to every 3rd pixel of the image
  for (let x = 0; x < img.width; x < x + 3){
    for (let y = 0; y < img.width; y < y + 3){
      let i = (x + y * img.width) * 4;

  //gives value of every 3rd pixel
      let pixr = img.pixels[i + 0];
      let pixg = img.pixels[i + 1];
      let pixb = img.pixels[i + 2];
      let pixa = img.pixels[i + 3];

  //draws a circle at pixel locations
     fill(pixr,pixg,pixb,pixa);
      circle(x,y,3);

       }
    }


}
