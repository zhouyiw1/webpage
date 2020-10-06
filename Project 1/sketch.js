//When the code is run, nothing happens until a button is pressed

//left mouse key gives random lines

//right mouse key gives a big square

//any keyboard key gives a big circle



function setup() {

  createCanvas(windowWidth, windowHeight);

  background(255,179,168);

}



function draw() {

  background(255,200,168);



  let i = random(0, width);
  let j = random(0, height);
  let k = random(0, width);
  let l = random(0, height);



  let rcol = random (150, 0);
  let gcol = random (40, 20);
  let bcol = random (100, 85);



  //Assigning right and left mouse commands

  if(mouseIsPressed){

    if (mouseButton === LEFT){

     i = random(10, width);
     j = random(-10, height);
     k = random(10, width);
     l = random(-10, height);



    fill (rcol,gcol,bcol);

  line (i,j,k,l);

    }

    if (mouseButton === RIGHT){



      rect(250, 100, 300, 300);



      noFill();



    }

  }



  //Assigning any keyboard key the circle

  else if(keyIsPressed){

    circle(300, 200, 300);



    noFill();

  }



  }
