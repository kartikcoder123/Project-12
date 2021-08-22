var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg;
function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  olImg = loadImage("orangeLeaf.png")
  rlImg = loadImage("redImage.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.x = mouseX
  var select_sprites = Math.round(random(1,4));

  if (frameCount % 80 === 0) {
    if (select_sprites === 1) {
      createApples();
    }
     else if(select_sprites === 2){
      createLeaves();
    }
    else if(select_sprites === 3){
      createorangeLeaves();
    }
    else{
      createredLeaves();
    } 
  }
  rabbit.collide(edges);
  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.velocityY = 4;
  apple.lifetime = 200;

}

function createLeaves() {
  leaves = createSprite(random(50, 350), 40, 10, 10);
  leaves.addImage(leavesImg)
  leaves.scale = 0.09;
  leaves.velocityY = 4
  leaves.lifetime = 200;
}
function createredLeaves() {
  rleaves = createSprite(random(50, 350), 40, 10, 10);
  rleaves.addImage(rlImg)
  rleaves.scale = 0.09;
  rleaves.velocityY = 4
  rleaves.lifetime = 200;
}
function createorangeLeaves() {
  oleaf = createSprite(random(50, 350), 40, 10, 10);
  oleaf.addImage(olImg)
  oleaf.scale = 0.09;
  oleaf.velocityY = 4
  oleaf.lifetime = 200;
}

