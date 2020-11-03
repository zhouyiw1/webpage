let img;
let img1;
let img2;
let img3;

//images used above are a combination of png and jpeg for prominent personalities

function preload(){
  img=loadImage('https://upload.wikimedia.org/wikipedia/commons/8/81/Dalai_Lama_%2814566605561%29.jpg')

  img1=loadImage('https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg')

  img2=loadImage('https://upload.wikimedia.org/wikipedia/commons/0/00/Bill_Clinton_1999_Presidential_Medal_of_Freedom_%281%29.jpg')

img3=loadImage('https://live.staticflickr.com/65535/49245065008_a7082b2a41_b.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40,200,200);//background that is distinct in color from the images
  }

function draw() {

  //calling function before reading/writing to pixels
  img.loadPixels();
  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();

  image(img,0,0,200,200);//image positioning on canvas
  //The image has been burnt over the original to produce a glowy effect

  blend(img,0,0,200,200,0,0,200,200,BURN);
  image(img1,200,0,200,200);//image positioning on canvas
  image(img2,0,200,200,200);//image positioning on canvas
  image(img3,200,200,200,200);//image positioning on canvas

  //Section of original image isolated to create a new image with the       eyes.
  //The isolated image is wider than the original to minimize distortion.

  blend(img3,360,230,300,100,400,0,260,100,BURN);


  //jumps to every 3rd pixel of the image
  for (let x = 0; x < img1.width; x < x + 3){
    for (let y = 0; y < img1.width; y < y + 3){
      let i = (x + y * img1.width) * 4;

  //gives value of every 3rd pixel
      let pixr = img1.pixels[i + 0];
      let pixg = img1.pixels[i + 1];
      let pixb = img1.pixels[i + 2];
      let pixa = img1.pixels[i + 3];

  //draws a circle at pixel locations
     fill(pixr,pixg,pixb,pixa);
      circle(x,y,3);

       }
    }
  //jumps to every 3rd pixel of the image
  for (let x = 0; x < img2.width; x < x + 3){
    for (let y = 0; y < img2.width; y < y + 3){
      let i = (x + y * img2.width) * 4;

  //gives value of every 3rd pixel
      let pixr = img2.pixels[i + 0];
      let pixg = img2.pixels[i + 1];
      let pixb = img2.pixels[i + 2];
      let pixa = img2.pixels[i + 3];

  //draws lines at pixel locations
     stroke(pixr,pixg,pixb,pixa);
      line(x,y,x + 3,y + 3);

       }
    }

}
