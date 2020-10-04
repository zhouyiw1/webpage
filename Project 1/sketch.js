function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255,179,168);
}

function draw() {
  // put drawing code here
  for(let i=random(0,width);){
    for(let j=random(0,height);){
      for(let k=random(0,width);){
        for(let l=random(0,height);){
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
