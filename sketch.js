var boy,virus,mask,boyImg,virusImg,maskImg
function preload() {
  boyImg=loadImage("boy1.png");
  virusImg=loadImage("virus.png");
  maskImg=loadImage("mask.png");
}

function setup() {
  createCanvas(1200,600);
  boy=createSprite(100,200)
  boy.addImage("boyImg",boyImg)
  boy.scale=0.15;
  mask=createSprite(650,400)
  mask.addImage("maskImg",maskImg)
  mask.scale=0.2;
}

function draw() {
  background(0);
  if(keyDown(UP_ARROW)){
    mask.x=650;
    mask.y=200;
  }  
  drawSprites();
}