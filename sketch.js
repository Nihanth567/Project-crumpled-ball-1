
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,35);
	dust1 = new Box(585,675,35,85);
	dust2 = new Box(620,675,125,35);
	dust3 = new Box(750,675,35,85);
	ball = new Paper(300,675,45);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ground.display();

  dust1.display();
  dust2.display();
  dust3.display();
  
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}





