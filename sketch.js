var hour,minute,second;
var hr,mn,sc;
var scAngle,mnAngle,hrAngle;



function setup() {
  createCanvas(800,400);
  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,60,0,360);
  
}

function draw() {
  background("black");  
  angleMode(DEGREES);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();






  drawSprites();
  
}