
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shooter,shooterImg,asteroidImg;

function preload()
{
	shooterImg = loadImage("newShooter.png");
	asteroidImg = loadImage("asteroid.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	shooter = createSprite(width/2,200,10,10);
	shooter.addImage(shooterImg);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  keyPressed();
  spawnAsteroid();

  drawSprites();
 
}


function keyPressed()
{
	if (keyDown("w")) 
	{
	 shooter.y = shooter.y - 5;
	}

	if (keyDown("s")) 
	{
	 shooter.y = shooter.y +  5; 
	}

	if (keyDown("a")) 
	{
	 shooter.x = shooter.x - 5;
	}

	if (keyDown("d")) 
	{
	 shooter.x = shooter.x + 5;
	}

	if(keyDown("space"))
	{
		spawnBullet();
	}
}

function asteroids()
{
  var asteroid = createSprite(0,random(20,370),10,10);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.15;
  asteroid.velocityX = 3;  
}


function spawnAsteroid()
{
	if(frameCount % 20 === 0)
	{
		asteroids();
	}
}



function spawnBullet()
{
	var bullet = createSprite(shooter.x,shooter.y,10,20);
	fill("red");
	bullet.velocityX = -2;
	bullet.scale = 0.5;
	

}














