var bg,bg2,form,system,code,security;
var score=0;
var img;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2= loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  fill ("white")
  text(mouseX + "," + mouseY, mouseX,mouseY) 
 // add code for changing the background to the treasure background
 if(score === 3) {
  clear()
  background(bg2)
  bg2 = loadImage("js/treasure.jpg",0,0);
}

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(50);
    text("TREASURE UNLOCKED",200, 200);
  }

  drawSprites()
}