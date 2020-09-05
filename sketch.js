function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(600, 400, 50, 80);
  fixedrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background("black");  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  textSize(20);
  //text("distance = "+(movingrect.x-fixedrect.x),200,300);
  if((movingrect.x-fixedrect.x)<=(fixedrect.width/2+movingrect.width/2)
  && (fixedrect.x-movingrect.x<=(fixedrect.width/2+movingrect.width/2))
  && (fixedrect.y-movingrect.y<=(fixedrect.height/2+movingrect.height/2))
  && (movingrect.y-fixedrect.y<=(fixedrect.height/2+movingrect.height/2))
  ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  }
  drawSprites();
}