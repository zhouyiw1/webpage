function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255,179,168);
}

function draw() {
  // put drawing code here
  for(let i=0;i<width;i=i+50){
    for(let j=0;j<height;j=j+50){
      for(let k=0;k<width;k=k+50){
        for(let l=25;l<height;l=l+50){
      let rcol=random(150,255);
      let gcol=random(0,255);
      let bcol=random(100,233);
      fill(rcol,gcol,bcol);
      noStroke();
      rect(i,j,20);
      fill(rcol,gcol,bcol);
      noStroke();
      circle(k,l,20);
       }
      }
    }
  }

}
