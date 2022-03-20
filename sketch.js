
var trex ,trex_running;
var ground,ground_image;
var invisible_ground;
function preload(){
    trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
    ground_image=loadImage("ground2.png");
}

function setup(){
  createCanvas(800,234) 
  trex=createSprite(100,150,50,50)
  trex.addAnimation("running",trex_running)
  //create a trex sprite
  trex.scale=0.5
  ground=createSprite(400,180,800,10)
  ground.addImage(ground_image);
  invisible_ground = createSprite(400,190,800,10);
  invisible_ground.visible=false;
}

function draw(){
  background("white")
  if(keyDown("space")&&(trex.y>150)){
    trex.velocityY=-10
  }
  trex.velocityY+=0.5
  trex.collide(invisible_ground);
  ground.velocityX=-12
  if(ground.x<0){
    ground.x=400
  }
  drawSprites();
}
  