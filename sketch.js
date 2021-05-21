//Create variables here
var dog;
var happyDog;
var bg,bone;
var mb=20;

function preload(){
	//load images here
  bg=loadImage('bg.jpg')
  dog=loadImage('images/dogImg.png');
  happyDog=loadImage('images/dogImg1.png');
 
}

function setup() {
	createCanvas(500, 500);

  Dog=createSprite(400,350);
  Dog.addImage(dog);
  Dog.scale=0.3;
}


function draw() {  
background(bg);
//background(46, 139, 87);

if(keyWentUp(UP_ARROW)){
  mb=mb-1;
  Dog.addImage(happyDog)
}
   drawSprites();
  //add styles here
textSize(20);
stroke(3)
fill("black");
text("NOTE:Press the up arrow key to feed the dog with milk",10,30);
textFont("waltography")
textSize(22);
text("Milk Bottles Remaining : "+mb,10,70);

}
