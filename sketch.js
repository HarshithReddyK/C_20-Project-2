var cat , mouse;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
   garden = loadImage("garden.png"); 

   catImg1 = loadImage("cat1.png");
   catImg2 = loadAnimation("cat2.png" , "cat3.png");
   catImg3 = loadImage("cat4.png");

   mouseImg1 = loadImage("mouse1.png");
   mouseImg2 = loadAnimation("mouse2.png" , "mouse3.png");
   mouseImg3 = loadImage("mouse4.png");
}
function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    cat = createSprite(500,500,20,20);
    cat.addImage(catImg1);
    cat.scale = 0.1;
    
    mouse = createSprite(100,465,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1;  
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2){

     cat.addImage("cat_caught",catImg3); 
     cat.x = 150;  
     cat.changeImage("cat_caught");
     mouse.addImage("mouse_won",mouseImg3);
     mouse.changeImage("mouse_won");
     cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    cat.addAnimation("cat_moving" , catImg2);  
    cat.changeAnimation("cat_moving");
    cat.velocityX = -3;
    mouse.addAnimation("mouse_teasing" , mouseImg2);
    mouse.changeAnimation("mouse_teasing");
   }


}
