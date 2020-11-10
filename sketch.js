var foodGroup,bananaimage
var obstacleGroup,obstcaleimage
var score 
var backgroundimage,background2
var player_running
var Monkey,Monkeyanimation
var invisibleground



function preload(){
backgroundimage=loadImage("jungle.jpg");
  
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  

bananaimage=loadImage("banana.png");
obstacleimage=loadImage("stone.png");
  
  
}


function setup() {
  createCanvas(500,400);
  
  background2=createSprite(300,200,800,400)
  background2.addImage("jungle.jpg",backgroundimage);
  background2.scale=1.2
  background2.x=background2.width /2;
  background2.velocityX=-4;
  
  Monkey=createSprite(100,335,30,30)
  Monkey.addAnimation("player_running",player_running);
  Monkey.scale=0.2;
  
  invisibleground=createSprite(20,400,400,15);
  

  
  score=0;
  
  
  
  
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
}

function draw() {
  background(220);
  drawSprites();
  spawnFood();
  spawnObstacles();
  
  invisibleground.visible=false;

  
  if(background2.x<100){
    background2.x=background2.width/2
     
  }
  
  if(invisibleground.x<100){
    invisibleground.x=invisibleground.width/2
     
  }
  
  if(foodGroup.isTouching(Monkey)) {
    foodGroup.destroyEach();
    score=score+2;
  }
  
  switch(score){
    case 10:Monkey.scale=0.2;
      break
    case 20:Monkey.scale=0.3;
      break
    case 30:Monkey.scale=0.4;
      break
    case 40:Monkey.scale=0.5;
       break
    case 50:Monkey.scale=0.5;
      default: break;      
      
  }      
      
  if(obstacleGroup.isTouching(Monkey)){
    Monkey.scale=0.1;
     
     
     }   
    
     
     
  


  fill("red"); 
  text("Score: "+ score, 400,30);
  
  if(keyDown("space")){
   Monkey.velocityY=-14; 
    }
  Monkey.velocityY = Monkey.velocityY + 0.7

   
  
     
   
  
  
  Monkey.collide(invisibleground);
  
  
  
  

}

function spawnFood(){
  
 if (frameCount % 80 === 0) { 
 banana=createSprite(540,100,30)
  banana.addImage("banana.png",bananaimage)
  banana.scale=0.09
  banana.velocityX=-5; 
  banana.lifetime=120; 
  Monkey.depth=banana.depth+1 
  foodGroup.add(banana); 
  

}
}

function spawnObstacles(){
  if (frameCount % 100 === 0) {  
  obstacle=createSprite(480,345,50,50)
  obstacle.addImage("stone.png",obstacleimage)
  obstacle.scale=0.3;
  obstacle.lifetime=180;
  obstacleGroup.add(obstacle); 
   obstacle.velocityX=-5;  
    
  }  
  
  
  
}