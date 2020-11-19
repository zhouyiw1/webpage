let hornsound;

function preload(){
  hornsound = loadSound('https://zhouyiw1.github.io/webpage/SoundStuff/Sound.mp3')
}

function setup(){
  createCanvas(500,500);
  background(120,0120);
  hornsound.playMode('restart');

}

function draw(){

  fill(120,120,0);
  circle(200,200,40);

  


}
