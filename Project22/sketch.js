//Manipulation of four images to create an artistic impression

let img;
let img1;
let img2;
let img3;

//images represent bird species in their natural habitat

function preload(){
  img=loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pterocnemia_pennat_%28zoo_Zurich%29.jpg/1200px-Pterocnemia_pennat_%28zoo_Zurich%29.jpg')

  img1=loadImage('https://upload.wikimedia.org/wikipedia/commons/0/0d/Loriculus_vernalis_-Ganeshgudi%2C_Karnataka%2C_India_-male-8-1c.jpg')

  img2=loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bubo_bubo_winter_1.jpg/220px-Bubo_bubo_winter_1.jpg')

  img3=loadImage('https://upload.wikimedia.org/wikipedia/commons/9/92/%E2%99%82_Common_Kingfisher_%28Alcedo_atthis%29_Photograph_By_Shantanu_Kuveskar%2C_Mangaon%2C_Maharashtra%2C_India.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    }

function draw() {
  background(50,150,150);
  //blending of pixels in display window
  //all the images have their pixels blended on the original with an         exception of image 3

  image(img,400,200,200,200);
  blend(img,140,190,200,200,0,0,200,200,BURN);//head isolated from the       original image and darker areas applied

  image(img1,200,0,200,200);
  blend(img1,200,0,200,200,200,0,200,200,DIFFERENCE);//colors subtracted     from underlying image

  image(img2,0,200,200,200);
  blend(img2,0,200,200,200,0,200,200,200,ADD);//colors subtracted     from underlying image

  image(img3,200,200,200,200);

  //Isolating the beak from image 3
  //The isolated image is wider than the original to minimize distortion.
  blend(img3,150,210,300,100,400,0,260,100,BURN);

  }
