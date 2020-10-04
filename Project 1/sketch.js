function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255,179,168);
}

function draw() {
  // put drawing code here
  for(let i=random;i<width;){
    for(let j=random;j<height;){
      for(let k=random;k<width;){
        for(let l=random;l<height;){
      let rcol=random(150,255);
      let gcol=random(0,255);
      let bcol=random(100,233);
      fill(rcol,gcol,bcol);
      line(i,j,k,l);
      }
     }
    }
  }


}
