var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitsGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  
}

function setup()
 {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  form = new Form();
  
  game.getState();
  game.start();
  fruitsGroup=new Group();
}

function draw() 
{
  background(back_img);
  form.display();
  fruit();
  
   if (playerCount === 2) 
   {
     game.update(1);
   }
   if (gameState === 1) 
   {
     clear(); 
     game.play();
   }
   if (gameState === 2) 
   {
    
     game.end();
   }
}

   function fruit()
   {
    if(frameCount%60==0)
    {
  var fruits=createSprite(1000,475,30,40);
  fruits.velocityY=-5;
  fruits.lifetime=-95;
  fruitsGroup.add(fruits);
    }
  
   switch(fruits)
  {
    case 1:fruits.addImage("fruit1_img",fruit1_img);
  break;
  case 2:fruits.addImage("fruit2_img",fruit2_img);
      break;
   case 3:fruits.addImage("fruit3_img",fruit3_img);  
      break;
       case 4:fruits.addImage("fruit4_img",fruit4_img);
      break;
       case 5:fruits.addImage("fruit5_img",fruit5_img);
    break;
     case 6:fruits.addImage("fruit6_img",fruit6_img);
    default:break;
    
  }
  
}
