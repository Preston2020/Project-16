var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var score = 0;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  //creating monkey 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);

}

function draw() {
  background("white");

  if(ground.x < 0){
    ground.x=ground.width/2
  }

  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.9;

    
  monkey.collide(ground);

  //survivalTime
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime, 100,50);



  Food();
  Obstacle();

  drawSprites();
}
 

function Food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(500, 10, 10, 20);
    banana.addImage("banana", bananaImage);
    banana.velocityX = -5;
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.1;
    FoodGroup.add(banana);
    FoodGroup.setLifetimeEach(100);
    banana.setCollider("rectangle", 0, 0, 400, 400);
  }
}

function Obstacle(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(500, 330, 23, 32);
    obstacle.velocityX = -(5 + 2 * score / 100);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(100);
    obstacle.setCollider("circle", 0, 0, 200);
  }
}






