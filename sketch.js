function setup() {
  createCanvas(1200, 400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  // console.log("Primera condición: " + (movingRect.x - fixedRect.x) + " < " +  (fixedRect.width/2 + movingRect.width/2) );
  // console.log("Segunda condición: " + (fixedRect.x - movingRect.x) + " < " +  (fixedRect.width/2 + movingRect.width/2) );
if (isTouching1(movingRect, fixedRect)){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
} else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
bounceOff(movingRect,fixedRect);
  drawSprites();
}