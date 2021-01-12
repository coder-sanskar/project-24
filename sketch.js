
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	//Create the Bodies Here.

  dustbin1 = new Dustbin(740,670,200,10);
	dustbin2 = new Dustbin(850,600,10,150);
	dustbin3 = new Dustbin(630,600,10,150);

  ball = new Paper(100,300,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
 dustbin2.display();
  dustbin3.display();

  ball.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-6});
  }
}


